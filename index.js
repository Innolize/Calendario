import { crearCalendarioSemanal, mostrarRespuestaAPISemanal } from "./src/UI/calendario-semanal.js"

import {
    obtenerEventos,
} from "./src/service/manejador-eventos.js"


import {
    verificarSiContieneData,
    mostrarEventoClickeado
} from "./src/UI/modal/mostrar-info-evento.js"

import { botonCrearEvento, creaBotonFDS } from "./src/UI/botones-interfaz.js"

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

$("#crear-evento").click(() => {
    manejadorCrearEvento()
})
