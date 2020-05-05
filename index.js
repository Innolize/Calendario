import { crearCalendarioSemanal } from "./src/UI/calendario-semanal.js"
import { crearBotonesTipoDeCalendario, creaBotonFDS } from "./src/UI/botones-interfaz.js"
import { creaInterfazCalendarioMensual } from "./src/UI/calendario-mensual.js"
import { mostrarRespuestaAPISemanal, obtenerEventos } from "./src/service/manejador-eventos.js"
import { calcularDiferenciaHoras } from "./src/utilidades/utilidades.js"
import { verificarSiContieneData } from "./src/UI/modal/mostrar-info-evento.js"


async function iniciar() {
    debugger
    fetchPost()
    const eventos = await obtenerEventos()
    creaBotonFDS()
    crearBotonesTipoDeCalendario()
    crearCalendarioSemanal();
    seleccionarCalendario(creaInterfazCalendarioMensual, crearCalendarioSemanal)
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
}
iniciar();

function fetchPost() {
    fetch("http://localhost:3000/posts", {
        method: "POST",
        body: JSON.stringify({
            userId: 1,
            title: "clean room",
            completed: false
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }

    })
}