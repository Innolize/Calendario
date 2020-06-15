import { obtenerEventos, obtenerUsuarioEspecifico } from "../../service/manejador-eventos.js"
import { crearBotonCerrar, botonModificarEvento, botonEliminarEvento } from "../botones-interfaz.js"
import {agregarCeros} from '../../utilidades/utilidades.js';

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
        labelTitulo.id = "mostrar-titulo"
        labelTitulo.textContent = `Nombre del evento: ${evento.summary}`
        contenedorTitulo.appendChild(labelTitulo)

        const contenedorDescripcion = document.createElement("div")
        const labelDescripcion = document.createElement("label")
        labelDescripcion.id = "mostrar-descripcion"
        labelDescripcion.textContent = `Descripcion: ${evento.description}`
        contenedorDescripcion.appendChild(labelDescripcion)

        let dateComienza = new Date(evento.start)
        const diaComienza = agregarCeros(dateComienza.getDate(), 2)
        const mesComienza = agregarCeros(dateComienza.getMonth() + 1, 2)
        const añoComienza = (dateComienza.getFullYear())
        const horaComienza = agregarCeros(dateComienza.getHours(), 2)
        const minutosComienza = agregarCeros(dateComienza.getMinutes(), 2)

        const contenedorComienza = document.createElement("div")
        const labelComienza = document.createElement("label")
        labelComienza.id = "mostrar-comienza"        
        labelComienza.textContent = `Comienza: ${diaComienza}/${mesComienza}/${añoComienza} ${horaComienza}:${minutosComienza}`
        contenedorComienza.appendChild(labelComienza)

        let dateTermina = new Date(evento.end)
        const diaTermina = agregarCeros(dateTermina.getDate(), 2)
        const mesTermina = agregarCeros(dateTermina.getMonth() + 1, 2)
        const añoTermina = (dateTermina.getFullYear())
        const horaTermina = agregarCeros(dateTermina.getHours(), 2)
        const minutosTermina = agregarCeros(dateTermina.getMinutes(), 2)

        const contenedorTermina = document.createElement("div")
        const labelTermina = document.createElement("label")
        labelTermina.id = "mostrar-termina"
        labelTermina.textContent = `Termina: ${diaTermina}/${mesTermina}/${añoTermina} ${horaTermina}:${minutosTermina}`
        contenedorTermina.appendChild(labelTermina)

        const contenedorParaticipantes = document.createElement("div")
        if (evento.attendees) {
            const ul = document.createElement("ul")
            ul.classList = "list-group-flush"
            console.log(evento.attendees)
            test(evento.attendees)
            async function test(xd) {
                let usuarios = await Promise.all(
                    xd.map(async usuario => {
                        let r = await obtenerUsuarioEspecifico(usuario.id)
                        console.log(r)
                        const liParticipante = document.createElement("li")
                        const respuestaParticipante = document.createElement("i")
                        respuestaParticipante.classList = obtenerImagenParticipante(xd.responseStatus)
                        liParticipante.classList = "list-group-item"
                        liParticipante.innerText = r.nombre
                        liParticipante.dataset.idUsuario = usuario.id
                        ul.appendChild(liParticipante)
                        liParticipante.appendChild(respuestaParticipante)
                    })
                )
                console.log(usuarios)




            }
            contenedorParaticipantes.appendChild(ul)

        }
        body.appendChild(contenedorDescripcion)
        body.appendChild(contenedorComienza)
        body.appendChild(contenedorTermina)
        body.appendChild(contenedorTitulo)
        body.appendChild(contenedorParaticipantes)
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

