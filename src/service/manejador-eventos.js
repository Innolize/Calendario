import { obtenerAnio, obtenerMes, obtenerDia, obtenerHora, calcularDiferenciaHoras, agregarCeros } from "../utilidades/utilidades.js"

export function mostrarRespuestaAPISemanal(fakeData) {
    let data = fakeData[0]
    let classData = new respuestaAPI(data)

    marcarInicioAFinEvento(classData)

    let diferenciaHoras = calcularDiferenciaHoras(classData.start, classData.end)

    mostrarDuracionEvento(classData, diferenciaHoras)


    function marcarInicioAFinEvento(classData) {
        mostrarTituloEvento(classData)
        function mostrarTituloEvento(classData) {
            let fecha = new Date(`${classData.start}`)

            let dia = agregarCeros(fecha.getDate(), 2)
            let hora = agregarCeros(fecha.getHours(), 2)
            let color = classData.color
            let titulo = data.summary
            let id = classData.id
            debugger
            const cuadroSeleccionado = document.querySelector(`[data-dia='${dia}'][data-hora='${hora}']`)

            const div = document.createElement("p")
            div.style.backgroundColor = `${color}`
            div.className = "col"
            div.style.overflow = "hidden"
            div.innerText = titulo
            div.dataset.id = id
            cuadroSeleccionado.appendChild(div)

        }



        function mostrarDuracionEvento(classData, diferenciaHoras) {

            let fecha = new Date(`${classData.start}`)
            for (let i = 0; i < diferenciaHoras; i++) {
                debugger
                console.log(fecha)
                fecha.setHours(fecha.getHours() + 1)
                console.log(fecha)
                let dia = agregarCeros(fecha.getDate(), 2)
                let hora = agregarCeros(fecha.getHours(), 2)
                let color = classData.color
                let id = classData.id
                const cuadroSeleccionado = document.querySelector(`[data-dia='${dia}'][data-hora='${hora}']`)

                const div = document.createElement("div")
                div.style.backgroundColor = `${color}`
                div.className = "col"
                div.style.overflow = "hidden"
                div.innerText = "_ "
                div.dataset.id = id
                cuadroSeleccionado.appendChild(div)
            }
        }



    }
    // classData.start =
    //     classData.end = 
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