import { fetchCrearEvento, obtenerUsuarios, obtenerEventos } from "../../service/manejador-eventos.js"
import { eliminarContenidoTabla } from '../../utilidades/utilidades.js';
import { mostrarRespuestaAPISemanal } from '../calendario-semanal.js';

export function muestraModalCrearEvento(callbackFunction) {
    modalCrearHeader()
    modalCrearBody()
    modalCrearFooter(callbackFunction)
    $("#modal").modal("show")



    function modalCrearHeader() {
        const header = document.querySelector(".modal-title")
        header.textContent = `Crear evento`
    }

    function modalCrearBody() {
        const body = document.querySelector(".modal-body")
        body.innerHTML = ""

        const contenedorTitulo = document.createElement("div")
        const labelTitulo = document.createElement("label")
        labelTitulo.textContent = "Nombre del evento:"
        const inputTitulo = document.createElement("input")
        inputTitulo.id = "crear-evento-titulo"
        contenedorTitulo.appendChild(labelTitulo)
        contenedorTitulo.appendChild(inputTitulo)

        const contenedorDescripcion = document.createElement("div")
        const labelDescripcion = document.createElement("label")
        labelDescripcion.textContent = "Descripcion:"
        const inputDescripcion = document.createElement("input")
        inputDescripcion.id = "crear-evento-descripcion"
        contenedorDescripcion.appendChild(labelDescripcion)
        contenedorDescripcion.appendChild(inputDescripcion)

        const contenedorComienza = document.createElement("div")
        const labelComienzaFecha = document.createElement("label")
        const labelComienzaHora = document.createElement("label")
        labelComienzaFecha.textContent = "Comienza:"
        labelComienzaHora.textContent = "a las:"
        const inputComienzaFecha = document.createElement("input")
        const inputComienzaHora = document.createElement("input")
        inputComienzaHora.id = "crear-evento-comienza-hora"
        inputComienzaFecha.id = "crear-evento-comienza-fecha"
        inputComienzaHora.setAttribute("placeholder", "HH:MM")
        inputComienzaFecha.setAttribute("placeholder", " ej: 20/5/2020")
        contenedorComienza.appendChild(labelComienzaFecha)
        contenedorComienza.appendChild(inputComienzaFecha)
        contenedorComienza.appendChild(labelComienzaHora)
        contenedorComienza.appendChild(inputComienzaHora)

        const contenedorTermina = document.createElement("div")
        const labelTerminaFecha = document.createElement("label")
        labelTerminaFecha.textContent = "Termina:"
        const labelTerminaHora = document.createElement("label")
        labelTerminaHora.textContent = "a las"
        const inputTerminaFecha = document.createElement("input")
        inputTerminaFecha.id = "crear-evento-termina-fecha"
        const inputTerminaHora = document.createElement("input")
        inputTerminaHora.id = "crear-evento-termina-hora"
        inputTerminaFecha.setAttribute("placeholder", " ej: 20/5/2020")
        inputTerminaHora.setAttribute("placeholder", "HH:MM")
        contenedorTermina.appendChild(labelTerminaFecha)
        contenedorTermina.appendChild(inputTerminaFecha)
        contenedorTermina.appendChild(labelTerminaHora)
        contenedorTermina.appendChild(inputTerminaHora)

        const contenedorColor = document.createElement("div")
        const labelColor = document.createElement("label")
        labelColor.textContent = "Selecciona color:"
        const inputColor = document.createElement("input")
        inputColor.type = "color"
        inputColor.setAttribute("placeholder", `ej: "red"o "#00FFFF"`)
        inputColor.id = "crear-evento-color"
        contenedorColor.appendChild(labelColor)
        contenedorColor.appendChild(inputColor)

        const contenedorUsuarios = document.createElement("div")
        const UsuariosTitulo = document.createElement("h5")
        UsuariosTitulo.innerText = "Invitas usuarios?"
        contenedorUsuarios.appendChild(UsuariosTitulo)
        const contenedorListaUsuarios = document.createElement("ul")
        contenedorUsuarios.appendChild(contenedorListaUsuarios)



        mostrarUsuarios()

        async function mostrarUsuarios() {
            let test = await obtenerUsuarios()
            test.map(user => {
                let usuario = document.createElement("li")
                usuario.className = "usuario"
                usuario.innerText = user.nombre
                contenedorUsuarios.appendChild(usuario)
                let input = document.createElement("input")
                input.type = "checkbox"
                input.dataset.usuario = user.id
                usuario.appendChild(input)
            })


        }

        body.appendChild(contenedorTitulo)
        body.appendChild(contenedorDescripcion)
        body.appendChild(contenedorComienza)
        body.appendChild(contenedorTermina)
        body.appendChild(contenedorColor)
        body.appendChild(contenedorUsuarios)
    }






    function modalCrearFooter(callbackFunction) {
        const footer = document.querySelector(".modal-footer")
        footer.innerHTML = ""
        const buttonCrear = document.createElement("button")
        buttonCrear.type = "button"
        buttonCrear.textContent = "Crear"
        buttonCrear.id = "crear"
        buttonCrear.classList = `btn btn-primary`
        buttonCrear.dataset.dismiss = "modal"
        footer.appendChild(buttonCrear)

        $("#crear").click(() => {
            callbackFunction()
        })

        const buttonCancelar = document.createElement("button")
        buttonCancelar.type = "button"
        buttonCancelar.textContent = "Cancelar"
        buttonCancelar.id = "cancelar"
        buttonCancelar.classList = `btn btn-secondary`
        buttonCancelar.dataset.dismiss = "modal"
        footer.appendChild(buttonCancelar)
    }
}




export function creaEvento() {
    const evento = obtenerDatosCrearEvento()
    fetchCrearEvento(evento)
    eliminarContenidoTabla()
    reinicioCalendario()
    async function reinicioCalendario() {
        const eventos = await obtenerEventos()
        mostrarRespuestaAPISemanal(eventos)
    }
}


function obtenerParticipantes() {
    debugger
    const inputParticipantesArray = document.querySelectorAll('.usuario input')
    const array = Array.from(inputParticipantesArray)
    let asd = array.filter(input => input.checked === true)
    return asd.map((usuario) => usuario.dataset.usuario)
}

export function obtenerDatosCrearEvento() {
    const nombreDelEvento = document.querySelector("#crear-evento-titulo").value
    const descripcion = document.querySelector("#crear-evento-descripcion").value
    const colorEvento = document.querySelector("#crear-evento-color").value
    const comienzaFecha = document.querySelector("#crear-evento-comienza-fecha").value
    const comienzaHora = document.querySelector("#crear-evento-comienza-hora").value
    const terminaFecha = document.querySelector("#crear-evento-termina-fecha").value
    const terminaHora = document.querySelector("#crear-evento-termina-hora").value
    const comienza = rearmarFecha(comienzaFecha, comienzaHora)
    const termina = rearmarFecha(terminaFecha, terminaHora)
    const participantes = obtenerParticipantes()

    function rearmarFecha(comienzaFecha, comienzaHora) {
        let fechaRearmada = `${comienzaFecha.split("/")[1]}/${comienzaFecha.split("/")[0]}/${comienzaFecha.split("/")[2]}`

        let fecha = new Date(`${fechaRearmada} ${comienzaHora}`)
        return fecha
    }
    let evento = {
        created: new Date(),
        updated: new Date(),
        summary: nombreDelEvento,
        description: descripcion,
        color: colorEvento,
        start: comienza,
        end: termina,
        creator: {
            id: 1,
            email: "test@test.com",
            displayName: "Test Test",
            self: true
        },

        attendees: {
            ids: participantes
        }
    }
    debugger
    console.log(evento)



    return evento
}