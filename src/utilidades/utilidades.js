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

export function obtenerAnio(data) {
    const anio = data.split("T")[0].split("-")[0]
    return anio
}
export function obtenerMes(data) {
    const mes = data.split("T")[0].split("-")[1]
    return mes
}
export function obtenerDia(data) {
    const dia = data.split("T")[0].split("-")[2]
    return dia
}

export function obtenerHora(data) {
    const hora = data.split("T")[1].split(":")[0]
    return hora
}
export function obtenerMinutos(data) {
    const minutos = data.split("T")[1].split(":")[1]
    return minutos
}

export function calcularDiferenciaHoras(primeraFecha, segundaFecha) {
    const valor1 = {
        anio: obtenerAnio(primeraFecha),
        mes: obtenerMes(primeraFecha),
        dia: obtenerDia(primeraFecha),
        hora: obtenerHora(primeraFecha)
    }
    const valor2 = {
        anio: obtenerAnio(segundaFecha),
        mes: obtenerMes(segundaFecha),
        dia: obtenerDia(segundaFecha),
        hora: obtenerHora(segundaFecha),
    }


    let primerValor = new Date(`${valor1.mes}/${valor1.dia}/${valor1.anio} ${valor1.hora}:`)
    let segundoValor = new Date(`${valor2.mes}/${valor2.dia}/${valor2.anio} ${valor2.hora}:`)

    //ej fechas = "mes/dia/año hora:"

    let diferencia = segundoValor.getTime() - primerValor.getTime()
    let diferenciaEnHoras = diferencia / (1000 * 3600)
    return Math.floor(diferenciaEnHoras)
}