import { obtenerEventos } from "../../service/manejador-eventos.js"

export function verificarSiContieneData(e) {
    debugger
    if ((e.target).hasAttribute("data-id") == true) {
        return mostrarEventoClickeado(e.target.dataset.id)
    } else {
        return
    }
}

async function mostrarEventoClickeado(id) {
    const evento = await buscarEvento(id)
    modalDatosDeEvento(evento[0])
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

function modalDatosDeEvento(evento) {

    const header = document.querySelector(".modal-title")
    const body = document.querySelector(".modal-body")
    const footer = document.querySelector(".modal-footer")

    borrarContenidoModal(header, body, footer)
    function borrarContenidoModal(header, body, footer) {
        debugger
        header.innerHTML = ""
        body.innerHTML = ""
        footer.innerHTML = ""
    }

    header.textContent = evento.summary

    const contenedorTitulo = document.createElement("div")
    const labelTitulo = document.createElement("label")
    labelTitulo.textContent = `Nombre del evento: ${evento.summary}`
    contenedorTitulo.appendChild(labelTitulo)

    const contenedorDescripcion = document.createElement("div")
    const labelDescripcion = document.createElement("label")
    labelDescripcion.textContent = `Descripcion: ${evento.description}`
    contenedorDescripcion.appendChild(labelDescripcion)

    const contenedorComienza = document.createElement("div")
    const labelComienza = document.createElement("label")
    labelComienza.textContent = `Comienza: ${evento.start.split("T")[0]} ${evento.start.split("T")[1].split(".")[0]}`
    contenedorComienza.appendChild(labelComienza)

    const contenedorTermina = document.createElement("div")
    const labelTermina = document.createElement("label")
    labelTermina.textContent = `Termina: ${evento.end.split("T")[0]} ${evento.end.split("T")[1].split(".")[0]}`
    contenedorTermina.appendChild(labelTermina)

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

    body.appendChild(contenedorTitulo)
    body.appendChild(contenedorDescripcion)
    body.appendChild(contenedorComienza)
    body.appendChild(contenedorTermina)
    body.appendChild(contenedorParaticipantes)

    $("#modal").modal("show")

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

