export function obtenerDomingo() {
    let fecha = new Date()
    for (let i = 0; i < 7; i++) {
        fecha.setDate(fecha.getDate() - 1)
        if (fecha.getDay() == 0) {
            return fecha
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
