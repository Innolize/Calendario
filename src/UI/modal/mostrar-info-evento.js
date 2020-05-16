import { obtenerEventos } from "../../service/manejador-eventos.js"
import { crearBotonCerrar, botonModificarEvento, botonEliminarEvento } from "../botones-interfaz.js"

export function verificarSiContieneData(e, callbackFunction) {
    debugger
    if ((e.target).hasAttribute("data-id") == true) {
        return callbackFunction(e.target.dataset.id)
    } else {
        return
    }
}

export async function mostrarEventoClickeado(id, botonUno, botonDos) {
    const evento = await buscarEvento(id)
    modalDatosDeEvento(evento[0], botonUno, botonDos)
}

async function buscarEvento(id) {
    let eventos = await obtenerEventos()
    let eventoCorrecto = []
    eventos.map((evento) => {
        if (evento.id == id) {
            return eventoCorrecto.push(evento)
        }
        else {
            return
        }
    })
    return eventoCorrecto
}

function modalDatosDeEvento(evento, botonUno, botonDos) {

    const header = document.querySelector(".modal-title")
    const body = document.querySelector(".modal-body")
    const footer = document.querySelector(".modal-footer")

    borrarContenidoModal(header, body, footer)

    modalDatosHeader(evento)
    modalDatosBody(evento)
    modalDatosFooter(evento, footer)

    function borrarContenidoModal(header, body, footer) {
        debugger
        header.innerHTML = ""
        body.innerHTML = ""
        footer.innerHTML = ""
    }

    function modalDatosHeader(evento) {
        header.textContent = evento.summary

    }

    function modalDatosBody(evento) {
        const contenedorTitulo = document.createElement("div")
        const labelTitulo = document.createElement("label")
        labelTitulo.textContent = `Nombre del evento: ${evento.summary}`
        contenedorTitulo.appendChild(labelTitulo)

        const contenedorDescripcion = document.createElement("div")
        const labelDescripcion = document.createElement("label")
        labelDescripcion.textContent = `Descripcion: ${evento.description}`
        contenedorDescripcion.appendChild(labelDescripcion)

        let dateComienza = new Date(evento.start)
        const contenedorComienza = document.createElement("div")
        const labelComienza = document.createElement("label")
        labelComienza.textContent = `Comienza: ${dateComienza.getDate()}/${dateComienza.getMonth() + 1}/${dateComienza.getFullYear()} ${dateComienza.getHours()}:${dateComienza.getMinutes()}`
        contenedorComienza.appendChild(labelComienza)

        let dateTermina = new Date(evento.end)
        const contenedorTermina = document.createElement("div")
        const labelTermina = document.createElement("label")
        labelTermina.textContent = `Termina: ${dateTermina.getDate()}/${dateTermina.getMonth() + 1}/${dateTermina.getFullYear()} ${dateTermina.getHours()}:${('0' + dateTermina.getMinutes()).slice(-2)}`
        contenedorTermina.appendChild(labelTermina)

        if (!evento.attendees == null) {
            const contenedorParaticipantes = document.createElement("div")
            const ul = document.createElement("ul")
            ul.classList = "list-group-flush"
            evento.attendees.forEach((participante) => {
                const liParticipante = document.createElement("li")
                const respuestaParticipante = document.createElement("i")
                respuestaParticipante.classList = obtenerImagenParticipante(participante.responseStatus)
                liParticipante.classList = "list-group-item"
                liParticipante.innerText = participante.displayName
                ul.appendChild(liParticipante)
                liParticipante.appendChild(respuestaParticipante)
            })
            contenedorParaticipantes.appendChild(ul)
            body.appendChild(contenedorParaticipantes)
        }
        body.appendChild(contenedorDescripcion)
        body.appendChild(contenedorComienza)
        body.appendChild(contenedorTermina)
        body.appendChild(contenedorTitulo)
    }
    function modalDatosFooter(evento, footer) {

        botonEliminarEvento(evento, footer)
        botonModificarEvento(evento, footer)

        crearBotonCerrar(footer)


        $("#modal").modal("show")

    }


}

function obtenerImagenParticipante(respuestaUsuario) {
    if (respuestaUsuario == true) {
        return "far fa-check-circle"
    } if (respuestaUsuario == false) {
        return "far fa-times-circle"
    } else {
        return "far fa-question-circle"
    }
}

