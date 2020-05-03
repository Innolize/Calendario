
export function mostrarRespuestaAPISemanal(fakeData) {
    let data = fakeData[1]
    console.log(data)
    obtenerAñoMesDia(data)
    function obtenerAñoMesDia(data) {
        const anio = data.start.split("T")[0].split("-")[0]
        const mes = data.start.split("T")[0].split("-")[1]
        const dia = data.start.split("T")[0].split("-")[2]
        return console.log(anio, mes, dia)
    }
    obtenerHoraMinutosSegundos(data)
    function obtenerHoraMinutosSegundos(data) {
        const hora = data.start.split("T")[1].split(":")[0]
        const minutos = data.start.split("T")[1].split(":")[1]
        const segundos = data.start.split("T")[1].split(":")[2]
        return console.log(hora, minutos, segundos)
    }

}