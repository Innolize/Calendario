import { obtenerAnio, obtenerMes, obtenerDia, obtenerHora, calcularDiferenciaHoras } from "../utilidades/utilidades.js"

export function mostrarRespuestaAPISemanal(fakeData) {
    let data = fakeData[0]
    let classData = new respuestaAPI(data)
    console.log(classData)
    console.log(obtenerDia(classData.start))
    console.log(obtenerHora(classData.start))
    backgroundTabla(data)
    function backgroundTabla(data) {
        let dia = obtenerDia(data.start)
        let hora = obtenerDia(data.start)
        let color = data.color
        let titulo = data.summary
        const cuadroSeleccionado = document.querySelector(`[data-dia='${dia}'][data-hora='${hora}']`)

        const div = document.createElement("p")
        div.style.backgroundColor = `${color}`
        div.className = "col"
        div.style.overflow = "hidden"
        div.innerText = titulo
        cuadroSeleccionado.appendChild(div)

        const div2 = document.createElement("p")
        div2.style.backgroundColor = `${color}`
        div2.className = "col"
        div2.style.overflow = "hidden"
        div2.innerText = titulo
        cuadroSeleccionado.appendChild(div2)

        // function marcarInicioAFinEvento(classData) {
        let start = classData.start
        let end = classData.end

        //     let dia = obtenerDia(data.start)
        //     let hora = obtenerDia(data.start)
        //     let color = data.color
        debugger
        calcularDiferenciaHoras(start, end)



        // }
        // classData.start =
        //     classData.end = 






    }

}





class respuestaAPI {
    constructor(respuesta) {
        this.attendees = respuesta.attendees
        this.color = respuesta.color
        this.created = respuesta.created
        this.creator = respuesta.creator
        this.description = respuesta.description
        this.end = respuesta.end
        this.id = respuesta.id
        this.start = respuesta.start
        this.summary = respuesta.summary
        this.updated = respuesta.updated
    }
}