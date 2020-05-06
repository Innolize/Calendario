import { crearCalendarioSemanal } from "./src/UI/calendario-semanal.js"
import { crearBotonesTipoDeCalendario, creaBotonFDS } from "./src/UI/botones-interfaz.js"
import { creaInterfazCalendarioMensual } from "./src/UI/calendario-mensual.js"
import { mostrarRespuestaAPISemanal, obtenerEventos } from "./src/service/manejador-eventos.js"
import { calcularDiferenciaHoras } from "./src/utilidades/utilidades.js"
import { verificarSiContieneData } from "./src/UI/modal/mostrar-info-evento.js"
import { botonCrearEvento } from "./src/UI/botones-interfaz.js"
import { modalCrearEvento } from "./src/UI/modal/crear-evento.js"

async function iniciar() {
    debugger
    // fetchPost()
    const eventos = await obtenerEventos()
    creaBotonFDS()
    crearBotonesTipoDeCalendario()
    crearCalendarioSemanal();
    botonCrearEvento()
    seleccionarCalendario(creaInterfazCalendarioMensual, crearCalendarioSemanal, modalCrearEvento)
    mostrarRespuestaAPISemanal(eventos)

}

function seleccionarCalendario(funcionMensual, funcionSemanal) {
    $("#calendario-mensual").click(() => {
        funcionMensual()
    })
    $("#calendario-semanal").click(() => {
        funcionSemanal()
        mostrarRespuestaAPISemanal(fakeData)
    })
    $("td").click((e) => {
        verificarSiContieneData(e)

    })
    $("#crear-evento").click(() => {
        console.log("asd")
        debugger
        modalCrearEvento()
    })
}
iniciar();

function fetchPost() {
    fetch("http://localhost:3000/posts/1", {
        method: "PATCH",
        body: JSON.stringify({
            "description": "Descripcion corta del evento 23"
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }

    })
}