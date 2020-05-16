import { obtenerDomingo, agregarCeros, calcularDiferenciaHoras } from "../utilidades/utilidades.js"

export function crearCalendarioSemanal() {
    const trDiaSemanas = document.querySelector("#dias-semana")
    const contenidoTabla = document.querySelector("#dias-calendario")

    borrarContenido(contenidoTabla)
    borrarContenido(trDiaSemanas)

    const ARRAY_HEADERS = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
    crearCalendarioHeaders(ARRAY_HEADERS, obtenerDomingo())

    function crearCalendarioHeaders(ARRAY_HEADERS, fecha) {
        let numeroDia = fecha.getDate()
        const $horario = document.createElement("th")
        $horario.textContent = "Horario"
        $horario.classList = `th-semanas th-horario`
        document.querySelector("#dias-semana").appendChild($horario)

        ARRAY_HEADERS.forEach((DIA, i) => {
            const $dia = document.createElement("th")
            $dia.textContent = `${DIA} ${numeroDia + i}`
            $dia.classList = `th-semanas th-${DIA}`
            document.querySelector("#dias-semana").appendChild($dia)
        })
    }

    crearHorariosSemanales(obtenerDomingo())
    function crearHorariosSemanales(fecha) {
        let numeroDia = fecha.getDate()
        const contenidoTabla = document.querySelector("#dias-calendario")
        const HORAS_DEL_DIA = 24
        const DIAS_DE_LA_SEMANA = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]

        for (let i = 0; i < HORAS_DEL_DIA; i++) {
            const filaTabla = document.createElement("tr")
            filaTabla.id = `fila-tabla-${i + 1}`
            contenidoTabla.appendChild(filaTabla)

            const nuevoCuadro = document.createElement("td")
            nuevoCuadro.textContent = `${agregarCeros(i, 2)}:00`
            filaTabla.appendChild(nuevoCuadro)
            DIAS_DE_LA_SEMANA.forEach((elemento, j) => {
                const nuevoCuadro = document.createElement("td")
                nuevoCuadro.classList = `cuadro-${elemento}`
                nuevoCuadro.dataset.hora = `${agregarCeros(i, 2)}`
                nuevoCuadro.dataset.dia = `${agregarCeros(numeroDia + j, 2)}`
                nuevoCuadro.dataset.mes = `${agregarCeros(5, 2)}`
                document.querySelector(`#fila-tabla-${i + 1}`).appendChild(nuevoCuadro)
            })
        }

    }
    function borrarContenido(elemento) {
        elemento.innerHTML = ""
    }
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
}