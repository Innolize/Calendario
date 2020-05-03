

export function crearCalendarioSemanal() {
    const trDiaSemanas = document.querySelector("#dias-semana")
    const contenidoTabla = document.querySelector("#dias-calendario")

    borrarContenido(contenidoTabla)
    borrarContenido(trDiaSemanas)

    const ARRAY_HEADERS = ["Horario", "Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
    crearCalendarioHeaders(ARRAY_HEADERS)

    function crearCalendarioHeaders(ARRAY_HEADERS) {
        ARRAY_HEADERS.forEach((DIA) => {
            const $dia = document.createElement("th")
            $dia.textContent = DIA
            $dia.classList = `th-semanas th-${DIA}`
            document.querySelector("#dias-semana").appendChild($dia)
        })
    }
    crearHorariosSemanales()
    function crearHorariosSemanales() {
        const contenidoTabla = document.querySelector("#dias-calendario")
        const HORAS_DEL_DIA = 24
        const DIAS_DE_LA_SEMANA = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
        for (let i = 0; i < HORAS_DEL_DIA; i++) {
            const filaTabla = document.createElement("tr")
            filaTabla.id = `fila-tabla-${i + 1}`
            contenidoTabla.appendChild(filaTabla)

            const nuevoCuadro = document.createElement("td")
            nuevoCuadro.textContent = `${i + 1}:00`
            filaTabla.appendChild(nuevoCuadro)

            DIAS_DE_LA_SEMANA.forEach((elemento) => {
                const nuevoCuadro = document.createElement("td")
                nuevoCuadro.classList = `cuadro-${elemento}`
                nuevoCuadro.dataset.hora = `${i + 1}`
                document.querySelector(`#fila-tabla-${i + 1}`).appendChild(nuevoCuadro)
            })
        }

    }
    function borrarContenido(elemento) {
        elemento.innerHTML = ""
    }
}
