import {calcularDiferenciaHoras, agregarCeros } from "../utilidades/utilidades.js"

export async function obtenerEventos() {
    const r = await fetch(`http://localhost:3000/eventos`)
    const rJSON = await r.json()
    return rJSON
}

export function mostrarRespuestaAPISemanal(fakeData) {
    let data = fakeData
    data.forEach((elemento) => {
        console.log(elemento)
        marcarInicioAFinEvento(elemento)
    })




    function marcarInicioAFinEvento(classData) {
        mostrarTituloEvento(classData)
        function mostrarTituloEvento(classData) {
            let fecha = new Date(`${classData.start}`)

            let dia = agregarCeros(fecha.getDate(), 2)
            let hora = agregarCeros(fecha.getHours(), 2)
            let color = classData.color
            let titulo = classData.summary
            let id = classData.id
            const cuadroSeleccionado = document.querySelector(`[data-dia='${dia}'][data-hora='${hora}']`)

            const div = document.createElement("div")
            div.style.backgroundColor = `${color}`
            div.className = "col"
            div.style.overflow = "hidden"
            div.innerText = titulo
            div.dataset.id = id
            cuadroSeleccionado.appendChild(div)

        }

        let diferenciaHoras = calcularDiferenciaHoras(classData.start, classData.end)

        mostrarDuracionEvento(classData, diferenciaHoras)


        function mostrarDuracionEvento(classData, diferenciaHoras) {
            debugger
            let fecha = new Date(`${classData.start}`)
            for (let i = 0; i < diferenciaHoras; i++) {
                console.log(fecha)
                fecha.setHours(fecha.getHours() + 1)
                console.log(fecha)
                let dia = agregarCeros(fecha.getDate(), 2)
                let hora = agregarCeros(fecha.getHours(), 2)
                let mes = agregarCeros(fecha.getMonth() + 1, 2)
                let color = classData.color
                let id = classData.id
                const cuadroSeleccionado = document.querySelector(`[data-dia='${dia}'][data-hora='${hora}'][data-mes='${mes}']`)

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

export async function obtenerUnEvento(id) {
    const r = await fetch(`http://localhost:3000/eventos/${id}`)
    const rJSON = await r.json()
    return rJSON
}


export function fetchModificarEvento(id, objeto) {
    fetch(`http://localhost:3000/eventos/${id}`, {
        method: "PATCH",
        body: JSON.stringify(
            objeto
        ),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }

    })
}

export function fetchEliminarEvento(id) {
    fetch(`http://localhost:3000/eventos/${id}`, {
        method: "DELETE"
    })
}

export function fetchCrearEvento(objeto) {
    fetch(`http://localhost:3000/eventos`, {
        method: "POST",
        body: JSON.stringify(
            objeto
        ),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })


}