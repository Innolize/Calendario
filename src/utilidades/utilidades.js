export function agregarCeros(numero, longitud) {
    let string = "" + numero;
    while (string.length < longitud) {
        string = "0" + string;
    }
    return string
}

export function obtenerDomingo() {
    let fecha = new Date()
    for (let i = 0; i < 7; i++) {

        if (fecha.getDay() == 0) {
            return fecha
        }
        else {
            fecha.setDate(fecha.getDate() - 1)
        }
    }
}

export function calcularDiferenciaHoras(primeraFecha, segundaFecha) {
    let fechaUno = new Date(primeraFecha)
    let fechaDos = new Date(segundaFecha)
    //ej fechas = "mes/dia/año hora:"

    let diferencia = fechaDos - fechaUno
    let diferenciaEnHoras = diferencia / (1000 * 3600)
    return Math.floor(diferenciaEnHoras)
}

export function eliminarContenidoTabla() {
    document.querySelectorAll("[data-id").forEach((elemento) => {
        if (elemento.parentElement.querySelectorAll("div") < 2) {
            elemento.parentElement.classList.remove("dividido")
        }
        elemento.remove()
    })
}

export function obtenerIdEvento() {
    const id = document.querySelector("#boton-modificar").getAttribute("data-evento-id")
    return id
}

export function obtenerIdModificarSiguiente() {
    let id = document.querySelector("#modificar-siguiente").getAttribute("data-id-evento")
    return id
}

export function convertirStringABoolean(string) {
    if (string === "true") {
        return true
    }
    if (string === "false") {
        return false
    }
    else {
        return null
    }
}
