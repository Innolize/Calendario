import { crearCalendarioSemanal } from "./src/UI/calendario-semanal.js"
import { crearBotonesTipoDeCalendario, creaBotonFDS } from "./src/UI/botones-interfaz.js"
import { creaInterfazCalendarioMensual } from "./src/UI/calendario-mensual.js"

function iniciar() {
    creaBotonFDS()
    crearBotonesTipoDeCalendario()
    crearCalendarioSemanal();
    seleccionarCalendario(creaInterfazCalendarioMensual,crearCalendarioSemanal)
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