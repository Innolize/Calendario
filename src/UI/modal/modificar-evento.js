import { botonModificarSiguiente } from "../botones-interfaz.js"

export function modalModificarEvento(evento) {
    const header = document.querySelector(".modal-title")
    const body = document.querySelector(".modal-body")
    const footer = document.querySelector(".modal-footer")

    body.innerHTML = ""
    footer.innerHTML = ""

    modalModificarHeader()
    modalModificarBody()

    function modalModificarHeader() {
        header.textContent = `${evento.summary}`
    }



    function modalModificarBody() {
        const contenedorTitulo = document.createElement("div")
        const labelTitulo = document.createElement("label")
        labelTitulo.textContent = "Nombre del evento:"
        const inputTitulo = document.createElement("input")
        inputTitulo.value = `${evento.summary}`
        inputTitulo.id = "crear-evento-titulo"
        contenedorTitulo.appendChild(labelTitulo)
        contenedorTitulo.appendChild(inputTitulo)

        const contenedorDescripcion = document.createElement("div")
        const labelDescripcion = document.createElement("label")
        labelDescripcion.textContent = "Descripcion:"
        const inputDescripcion = document.createElement("input")
        inputDescripcion.value = `${evento.description}`
        inputDescripcion.id = "crear-evento-descripcion"
        contenedorDescripcion.appendChild(labelDescripcion)
        contenedorDescripcion.appendChild(inputDescripcion)

        const dateComienza = new Date(`${evento.start}`)
        const contenedorComienza = document.createElement("div")
        const labelComienzaFecha = document.createElement("label")
        const labelComienzaHora = document.createElement("label")
        labelComienzaFecha.textContent = "Comienza:"
        labelComienzaHora.textContent = "a las:"
        const inputComienzaFecha = document.createElement("input")
        inputComienzaFecha.value = `${dateComienza.getDate()}/${dateComienza.getMonth() + 1}/${dateComienza.getFullYear()}`
        const inputComienzaHora = document.createElement("input")
        inputComienzaHora.value = `${dateComienza.getHours()}:${dateComienza.getMinutes()}`
        inputComienzaHora.id = "crear-evento-comienza-hora"
        inputComienzaFecha.id = "crear-evento-comienza-fecha"
        inputComienzaHora.setAttribute("placeholder", "HH:MM")
        inputComienzaFecha.setAttribute("placeholder", " ej: 20/5/2020")
        contenedorComienza.appendChild(labelComienzaFecha)
        contenedorComienza.appendChild(inputComienzaFecha)
        contenedorComienza.appendChild(labelComienzaHora)
        contenedorComienza.appendChild(inputComienzaHora)


        const dateTermina = new Date(`${evento.end}`)
        const contenedorTermina = document.createElement("div")
        const labelTerminaFecha = document.createElement("label")
        labelTerminaFecha.textContent = "Termina:"
        const labelTerminaHora = document.createElement("label")
        labelTerminaHora.textContent = "a las"
        const inputTerminaFecha = document.createElement("input")
        inputTerminaFecha.id = "crear-evento-termina-fecha"
        const inputTerminaHora = document.createElement("input")
        inputTerminaHora.id = "crear-evento-termina-hora"
        inputTerminaFecha.value = `${dateTermina.getDate()}/${dateTermina.getMonth() + 1}/${dateTermina.getFullYear()}`
        inputTerminaHora.value = `${dateTermina.getHours()}:${('0' + dateTermina.getMinutes()).slice(-2)}`
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
        inputColor.value = evento.color
        inputColor.id = "crear-evento-color"
        inputColor.setAttribute("placeholder", `ej: "red"o "#00FFFF"`)
        contenedorColor.appendChild(labelColor)
        contenedorColor.appendChild(inputColor)



        body.appendChild(contenedorTitulo)
        body.appendChild(contenedorDescripcion)
        body.appendChild(contenedorComienza)
        body.appendChild(contenedorTermina)
        body.appendChild(contenedorColor)
    }


    modalModificarFooter(evento)
    function modalModificarFooter(evento) {
        const contenedorFooter = document.createElement("div")
        const labelTexto = document.createElement("label")
        labelTexto.textContent = "Presiona siguiente para modificar el evento"
        contenedorFooter.appendChild(labelTexto)
        footer.appendChild(contenedorFooter)
        botonModificarSiguiente(evento.id, contenedorFooter)
    }


}

export function obtenerDatosModificarEvento() {

    const nombreDelEvento = document.querySelector("#crear-evento-titulo").value
    const descripcion = document.querySelector("#crear-evento-descripcion").value
    const colorEvento = document.querySelector("#crear-evento-color").value
    const comienzaFecha = document.querySelector("#crear-evento-comienza-fecha").value
    const comienzaHora = document.querySelector("#crear-evento-comienza-hora").value
    const terminaFecha = document.querySelector("#crear-evento-termina-fecha").value
    const terminaHora = document.querySelector("#crear-evento-termina-hora").value
    const comienza = rearmarFecha(comienzaFecha, comienzaHora)
    const termina = rearmarFecha(terminaFecha, terminaHora)

    function rearmarFecha(comienzaFecha, comienzaHora) {
        let fechaRearmada = `${comienzaFecha.split("/")[1]}/${comienzaFecha.split("/")[0]}/${comienzaFecha.split("/")[2]}`
        let fecha = new Date(`${fechaRearmada} ${comienzaHora}`)
        return fecha
    }
    debugger

    let eventoModificado = {
        updated: new Date(),
        summary: nombreDelEvento,
        description: descripcion,
        color: colorEvento,
        start: comienza,
        end: termina,

    }
    return eventoModificado
}