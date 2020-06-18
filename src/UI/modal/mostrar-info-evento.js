import { obtenerEventos, obtenerUsuarioEspecifico, fetchModificarEvento } from "../../service/manejador-eventos.js"
import { crearBotonCerrar, botonModificarEvento, botonEliminarEvento } from "../botones-interfaz.js"
import { agregarCeros, convertirStringABoolean } from '../../utilidades/utilidades.js';

export function verificarSiContieneData(e, callbackFunction) {
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

const usuarioCalendarioID = "1"

function modalDatosDeEvento(evento, botonUno, botonDos) {

    const header = document.querySelector(".modal-title")
    const body = document.querySelector(".modal-body")
    const footer = document.querySelector(".modal-footer")

    borrarContenidoModal(header, body, footer)

    modalDatosHeader(evento)
    modalDatosBody(evento)
    modalDatosFooter(evento, footer)

    function borrarContenidoModal(header, body, footer) {
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
            conseguirUsuarios(evento.attendees)

            async function conseguirUsuarios(data) {
                let usuarios = await Promise.all(
                    data.map(async usuario => {
                        console.log(usuario)
                        let r = await obtenerUsuarioEspecifico(usuario.id)
                        const liParticipante = document.createElement("li")
                        liParticipante.classList = "list-group-item"
                        liParticipante.innerText = r.nombre
                        liParticipante.dataset.idUsuario = usuario.id
                        ul.appendChild(liParticipante)
                        if (evento.creator.id !== usuarioCalendarioID && usuario.id == usuarioCalendarioID) {
                            const contenedor = document.createElement("div")

                            const radioSi = document.createElement("input")
                            radioSi.type = "radio"
                            radioSi.value = true
                            radioSi.id = "radioSi"
                            radioSi.style.paddingRight = "5px"
                            radioSi.name = "asistencia"

                            const labelSi = document.createElement("label")
                            labelSi.innerText = "si"

                            const radioNo = document.createElement("input")
                            radioNo.type = "radio"
                            radioNo.value = false
                            radioNo.id = "radioNo"
                            radioNo.style.paddingRight = "5px"
                            radioNo.name = "asistencia"

                            const labelNo = document.createElement("label")
                            labelNo.innerText = "no"

                            const buttonEnviar = document.createElement("button")
                            buttonEnviar.addEventListener("click", () => {
                                debugger
                                const valorRespuesta = document.querySelector("input[type=radio]:checked")
                                if (valorRespuesta === null) {
                                    return
                                } else {
                                    let respuestaBooleano = convertirStringABoolean(valorRespuesta.value)
                                    let respuesta = { attendees: [...evento.attendees.filter(x => x.id !== usuarioCalendarioID), { id: "1", organizer: false, responseStatus: respuestaBooleano }] }
                                    debugger
                                    fetchModificarEvento(evento.id, respuesta)
                                }
                                debugger


                            })

                            buttonEnviar.innerText = "enviar"
                            liParticipante.appendChild(contenedor)
                            contenedor.append(labelSi)
                            contenedor.append(radioSi)
                            contenedor.append(labelNo)
                            contenedor.append(radioNo)
                            contenedor.append(buttonEnviar)
                        }
                        else {
                            const respuestaParticipante = document.createElement("i")
                            respuestaParticipante.classList = obtenerImagenParticipante(usuario.responseStatus)
                            liParticipante.appendChild(respuestaParticipante)
                        }
                    })
                )

            }
            contenedorParaticipantes.appendChild(ul)
            test()
            function test() {
                const usuarioInvitadoExiste = document.querySelector(`[data-id-usuario='${usuarioCalendarioID}']`)
                if (evento.creator.id !== usuarioCalendarioID && usuarioInvitadoExiste) {
                    console.log("test")
                }
            }
        }
        body.appendChild(contenedorDescripcion)
        body.appendChild(contenedorComienza)
        body.appendChild(contenedorTermina)
        body.appendChild(contenedorTitulo)
        body.appendChild(contenedorParaticipantes)
    }

    debugger


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

