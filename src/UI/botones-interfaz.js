import { obtenerUnEvento, fetchModificarEvento } from "../service/manejador-eventos.js"
import { modalModificarEvento } from "./modal/modificar-evento.js"
import {fetchEliminarEvento} from "../service/manejador-eventos.js"
export function crearBotonesTipoDeCalendario() {

    const botonSemanal = document.createElement("button")
    botonSemanal.id = "calendario-semanal"
    botonSemanal.className = "btn btn-secondary"
    botonSemanal.textContent = "Calendario Semanal"
    document.querySelector("#tipo-calendario").appendChild(botonSemanal)

    const botonMensual = document.createElement("button")
    botonMensual.id = "calendario-mensual"
    botonMensual.className = "btn btn-secondary"
    botonMensual.textContent = "Calendario Mensual"
    document.querySelector("#tipo-calendario").appendChild(botonMensual)
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
                debugger
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

export function botonCrearEvento() {
    const button = document.createElement("button")
    button.textContent = "Crear nuevo evento"
    button.id = "crear-evento"
    document.querySelector("#tipo-calendario").appendChild(button)
}

export function crearBotonModificar(evento, padre) {
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
    $("#boton-modificar").click(() => {
        const id = document.querySelector("#boton-modificar").getAttribute("data-evento-id")
        obtenerDatosAModificar(id)
        async function obtenerDatosAModificar(id) {
            let evento = await obtenerUnEvento(id)
            modalModificarEvento(evento)

        }
    })
}
export function crearBotonEliminar(evento, padre) {
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

export function modificarSiguiente(idEvento, padre) {
    debugger
    const botonSiguiente = document.createElement("button")
    botonSiguiente.textContent = "Siguiente"
    botonSiguiente.id = "modificar-siguiente"
    padre.appendChild(botonSiguiente)

    $("#modificar-siguiente").click(() => {
        debugger
        const nombreDelEvento = document.querySelector("#crear-evento-titulo").value
        const descripcion = document.querySelector("#crear-evento-descripcion").value
        const colorEvento = document.querySelector("#crear-evento-color").value
        const comienzaFecha = document.querySelector("#crear-evento-comienza-fecha").value
        const comienzaHora = document.querySelector("#crear-evento-comienza-hora").value
        const terminaFecha = document.querySelector("#crear-evento-termina-fecha").value
        const terminaHora = document.querySelector("#crear-evento-termina-hora").value
        const comienza = obtenerFecha(comienzaFecha, comienzaHora)
        const termina = obtenerFecha(terminaFecha, terminaHora)

        function obtenerFecha(comienzaFecha, comienzaHora) {
            let fecha = new Date(`${comienzaFecha} ${comienzaHora}`)
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

        fetchModificarEvento(idEvento, eventoModificado)











    })



}

