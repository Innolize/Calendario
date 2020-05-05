import { crearCalendarioSemanal } from "./src/UI/calendario-semanal.js"
import { crearBotonesTipoDeCalendario, creaBotonFDS } from "./src/UI/botones-interfaz.js"
import { creaInterfazCalendarioMensual } from "./src/UI/calendario-mensual.js"
// import fakeData from "../../data/fake-data1.js"
import { mostrarRespuestaAPISemanal, obtenerEventos } from "./src/service/manejador-eventos.js"
import { calcularDiferenciaHoras } from "./src/utilidades/utilidades.js"
import { verificarSiContieneData } from "./src/UI/modal/mostrar-info-evento.js"

async function iniciar() {
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
        // $("#modal").modal("show")
    })
}



iniciar();