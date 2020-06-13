import { crearCalendarioSemanal, mostrarRespuestaAPISemanal } from "./src/UI/calendario-semanal.js"


import {
    obtenerEventos,
    fetchModificarEvento,
    obtenerEventoEspecifico
} from "./src/service/manejador-eventos.js"

import {
    eliminarContenidoTabla,
    obtenerIdEvento,
    obtenerIdModificarSiguiente
} from "./src/utilidades/utilidades.js"

import {
    verificarSiContieneData,
    mostrarEventoClickeado
} from "./src/UI/modal/mostrar-info-evento.js"

import { botonCrearEvento, botonModificarEvento, botonEliminarEvento, creaBotonFDS } from "./src/UI/botones-interfaz.js"

import {
    muestraModalCrearEvento,
    creaEvento
} from "./src/UI/modal/crear-evento.js"

async function iniciar() {
    botonCrearEvento(creandoEvento)
    creaBotonFDS()
    crearCalendarioSemanal();
    const eventos = await obtenerEventos()
    mostrarRespuestaAPISemanal(eventos)

    $("td").click((e) => {
        verificarSiContieneData(e, mostrarEventoClickeado)
    })

    function creandoEvento() {
        muestraModalCrearEvento(creaEvento)
    }

}
iniciar();

function manejadorCrearEvento() {
    muestraModalCrearEvento(creaEvento)
}

// eliminarContenidoTabla()
// const eventos = await obtenerEventos()
// mostrarRespuestaAPISemanal(eventos)


$("#crear-evento").click(() => {
    manejadorCrearEvento()
})








// function crearBotonHacemeClick() {
//     const button = document.createElement("button")
//     button.textContent = "haceme click"
//     button.id = "haceme-click"
//     document.querySelector("#tipo-calendario").appendChild(button)
//     $("#haceme-click").click(async () => {
//         const eventos = await obtenerEventos()
//         mostrarRespuestaAPISemanal(eventos)
//     })
// }

// function botonEliminarContenidoTabla() {
//     const button = document.createElement("button")
//     button.id = "eliminar"
//     button.textContent = "eliminar"
//     document.querySelector("#tipo-calendario").appendChild(button)
//     $("#eliminar").click(() => {
//         eliminarContenidoTabla()
//     })
// }