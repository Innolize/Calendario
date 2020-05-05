import { obtenerDomingo, agregarCeros } from "../utilidades/utilidades.js"

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
                document.querySelector(`#fila-tabla-${i + 1}`).appendChild(nuevoCuadro)
            })
        }

    }
    function borrarContenido(elemento) {
        elemento.innerHTML = ""
    }
}
