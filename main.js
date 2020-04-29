crearCalendario();
function crearCalendario() {
    ARRAY_DIAS = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]

    crearCalendarioHeaders(ARRAY_DIAS)

    function crearCalendarioHeaders(ARRAY_DIAS) {
        ARRAY_DIAS.forEach((DIA) => {
            $dia = document.createElement("th")
            $dia.textContent = DIA
            document.querySelector("#dias-semana").appendChild($dia)
        })
    }
    crearGrillaCalendario(ARRAY_DIAS)
    function crearGrillaCalendario(ARRAY_DIAS) {
        for (let i = 0; i < 5; i++) {
            crearFila = document.createElement("tr")
            ARRAY_DIAS.forEach((DIA) => {
                nuevoCuadro = document.createElement("td")
                nuevoCuadro.classList = `cuadro cuadro-${DIA}`
                crearFila.appendChild(nuevoCuadro)
            })
            document.querySelector("#dias-calendario").appendChild(crearFila)
        }
    }
}