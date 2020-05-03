import { crearCalendarioSemanal } from "./src/UI/calendario-semanal.js"
import { crearBotonesTipoDeCalendario, creaBotonFDS } from "./src/UI/botones-interfaz.js"
import { creaInterfazCalendarioMensual } from "./src/UI/calendario-mensual.js"
import fakeData from "../../data/fake-data1.js"
import {mostrarRespuestaAPISemanal} from "./src/service/manejador-eventos.js"

function iniciar() {
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
    })
}



iniciar();