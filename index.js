import { crearCalendarioSemanal } from "./src/UI/calendario-semanal.js"
import { crearBotonesTipoDeCalendario, creaBotonFDS } from "./src/UI/botones-interfaz.js"
import { creaInterfazCalendarioMensual } from "./src/UI/calendario-mensual.js"
import { mostrarRespuestaAPISemanal, obtenerEventos } from "./src/service/manejador-eventos.js"
import { eliminarContenidoTabla } from "./src/utilidades/utilidades.js"
import { verificarSiContieneData } from "./src/UI/modal/mostrar-info-evento.js"
import { botonCrearEvento } from "./src/UI/botones-interfaz.js"
import { modalCrearEvento } from "./src/UI/modal/crear-evento.js"

async function iniciar() {
    debugger
    const eventos = await obtenerEventos()
    creaBotonFDS()
    crearBotonesTipoDeCalendario()
    crearCalendarioSemanal();
    botonCrearEvento()
    seleccionarCalendario(creaInterfazCalendarioMensual, crearCalendarioSemanal, modalCrearEvento)
    mostrarRespuestaAPISemanal(eventos)
    crearBotonHacemeClick()
    botonEliminarContenidoTabla()

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
function crearBotonHacemeClick() {
    const button = document.createElement("button")
    button.textContent = "haceme click"
    button.id = "haceme-click"
    document.querySelector("#tipo-calendario").appendChild(button)
    $("#haceme-click").click(async () => {
        const eventos = await obtenerEventos()
        mostrarRespuestaAPISemanal(eventos)
    })
}

function botonEliminarContenidoTabla() {
    const button = document.createElement("button")
    button.id = "eliminar"
    button.textContent = "eliminar"
    document.querySelector("#tipo-calendario").appendChild(button)
    $("#eliminar").click(() => {
        eliminarContenidoTabla()
    })
}