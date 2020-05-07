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
    debugger
    let fechaUno = new Date(primeraFecha)
    let fechaDos = new Date(segundaFecha)
    //ej fechas = "mes/dia/año hora:"

    let diferencia = fechaDos - fechaUno
    let diferenciaEnHoras = diferencia / (1000 * 3600)
    return Math.floor(diferenciaEnHoras)
}

export function eliminarContenidoTabla() {
    document.querySelectorAll("[data-id").forEach((elemento) => { elemento.remove() })
}