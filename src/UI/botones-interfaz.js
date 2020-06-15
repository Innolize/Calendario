import { modalModificarEvento, obtenerDatosModificarEvento } from "./modal/modificar-evento.js"
import { fetchEliminarEvento, obtenerEventoEspecifico, fetchModificarEvento, obtenerEventos } from "../service/manejador-eventos.js"
import { obtenerIdEvento, obtenerIdModificarSiguiente, eliminarContenidoTabla } from "../utilidades/utilidades.js"
import { mostrarRespuestaAPISemanal } from './calendario-semanal.js';

async function reinicioCalendario() {
    $("#modal").modal("hide")
    const eventos = await obtenerEventos()
    mostrarRespuestaAPISemanal(eventos)
}

export function crearBotonesTipoDeCalendario() {

    const botonSemanal = document.createElement("button")
    botonSemanal.id = "calendario-semanal"
    botonSemanal.className = "btn btn-secondary"
    botonSemanal.textContent = "Calendario Semanal"
    document.querySelector("#tipo-calendario").appendChild(botonSemanal)
}

export function creaBotonFDS() {
    const boton = document.createElement("button")
    boton.id = "boton-fds"
    boton.textContent = "Test"
    document.querySelector("body").appendChild(boton)

    $("#boton-fds").click(() => {

        const filaDomingo = document.querySelectorAll(".cuadro-Domingo")
        const filaSabado = document.querySelectorAll(".cuadro-Sabado")
        const headerDomingo = document.querySelectorAll(".th-Domingo")
        const headerSabado = document.querySelectorAll(".th-Sabado")

        ocultarMostrarFDS(headerDomingo)
        ocultarMostrarFDS(headerSabado)
        ocultarMostrarFDS(filaDomingo)
        ocultarMostrarFDS(filaSabado)

        function ocultarMostrarFDS(elemento) {
            elemento.forEach((dia) => {
                if (dia.classList.contains("invisible") === true) {
                    dia.classList.remove("invisible")
                    dia.classList.add("visible")
                    return
                } if (dia.classList.contains("invisible") === false) {
                    dia.classList.remove("visible")
                    dia.classList.add("invisible")
                    return
                } else {
                    dia.classList.add("invisible")
                }

            })
        }
    })
}

export function botonCrearEvento(callbackFunction) {
    const button = document.createElement("button")
    button.textContent = "Crear nuevo evento"
    button.id = "crear-evento"
    document.querySelector("#tipo-calendario").appendChild(button)
    $("#crear-evento").click(() => {
        callbackFunction()
    })
}

export function botonModificarEvento(evento, padre) {
    const button = document.createElement("button")
    button.type = "button"
    button.textContent = "Modificar"
    button.classList = `btn btn-info`
    button.id = "boton-modificar"
    if (evento.creator.id == 1) {
        button.dataset.eventoId = evento.id
    } else {
        button.classList.add("disabled")
    }
    padre.appendChild(button)

    $("#boton-modificar").click(async () => {
        let id = obtenerIdEvento()
        let evento = await obtenerEventoEspecifico(id)
        modalModificarEvento(evento)
    })

}

export function botonEliminarEvento(evento, padre) {
    const button = document.createElement("button")
    button.type = "button"
    button.textContent = "Eliminar"
    button.classList = `btn btn-dark`
    button.id = "boton-eliminar"
    if (evento.creator.id == 1) {
        button.dataset.eventoId = evento.id
    } else {
        button.classList.add("disabled")
    }

    padre.appendChild(button)
    $("#boton-eliminar").click((e) => {
        let id = e.target.getAttribute("data-evento-id")
        fetchEliminarEvento(id)
        setTimeout(function () {
            eliminarContenidoTabla(),
                reinicioCalendario()
        }, 1000)
    })
}

export function crearBotonCerrar(padre) {
    const button = document.createElement("button")
    button.type = "button"
    button.textContent = "Cerrar"
    button.classList = `btn btn-success`
    button.id = "boton-cerrar"
    padre.appendChild(button)
    $("#boton-cerrar").click(() => {
        $("#modal").modal("hide")
    })
}

export function botonModificarSiguiente(idEvento, padre) {

    const botonSiguiente = document.createElement("button")
    botonSiguiente.textContent = "Siguiente"
    botonSiguiente.id = "modificar-siguiente"
    botonSiguiente.dataset.idEvento = idEvento
    padre.appendChild(botonSiguiente)

    $("#modificar-siguiente").click(async () => {
        let datosModificados = obtenerDatosModificarEvento()
        let idEvento = obtenerIdModificarSiguiente()
        fetchModificarEvento(idEvento, datosModificados)
        $("#modal").modal("hide")
        setTimeout(function () {

            eliminarContenidoTabla(),
                reinicioCalendario()
        }, 1000)

    })
}


