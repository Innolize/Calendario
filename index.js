import { crearCalendarioSemanal } from "./src/UI/calendario-semanal.js"
import { crearBotonesTipoDeCalendario, creaBotonFDS } from "./src/UI/botones-interfaz.js"
import { creaInterfazCalendarioMensual } from "./src/UI/calendario-mensual.js"
import fakeData from "../../data/fake-data1.js"
import { mostrarRespuestaAPISemanal } from "./src/service/manejador-eventos.js"
import { calcularDiferenciaHoras } from "./src/utilidades/utilidades.js"

function iniciar() {
    calcularDiferenciaHoras("2020-05-4T22:43:52.214Z", "2020-05-5T03:43:52.214Z")
    creaBotonFDS()
    crearBotonesTipoDeCalendario()
    crearCalendarioSemanal();
    seleccionarCalendario(creaInterfazCalendarioMensual, crearCalendarioSemanal)
    mostrarRespuestaAPISemanal(fakeData)
}



function seleccionarCalendario(funcionMensual, funcionSemanal) {
    $("#calendario-mensual").click(() => {
        funcionMensual()
    })
    $("#calendario-semanal").click(() => {
        funcionSemanal()
        mostrarRespuestaAPISemanal(fakeData)
    })
}



iniciar();