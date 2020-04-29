crearCalendario();
function crearCalendario() {
    ARRAY_DIAS = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]

    crearCalendarioHeaders(ARRAY_DIAS)

    function crearCalendarioHeaders(ARRAY_DIAS) {
        ARRAY_DIAS.forEach((DIA) => {
            $dia = document.createElement("th")
            $dia.textContent = DIA
            $dia.classList = "th-semanas"
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
numerarCalendario("Martes", "31");
function numerarCalendario(diaDeSemanaInicial, numeroDeDiasDelMes) {
    NUMERO_DE_CUADROS = 35
    DIAS_DE_LA_SEMANA = 7
    obtenerCuadros = document.querySelectorAll(".cuadro")
    debugger
    for (let i = 0; i < NUMERO_DE_CUADROS; i++)
        if (obtenerCuadros[i].classList.contains(`cuadro-${diaDeSemanaInicial}`) === true) {
            for (let j = 0; j < 35; j++) {
                if (j < numeroDeDiasDelMes) {
                    obtenerCuadros[i].textContent = `${j + 1}`
                    obtenerCuadros[i].dataset.dia = `${j + 1}`
                    i++
                } else {
                    obtenerCuadros[i].classList.remove("cuadro")
                    obtenerCuadros[i].classList.add("cuadro-deshabilitado")
                    i++
                }
            } return
        } else {
            obtenerCuadros[i].classList.remove("cuadro")
            obtenerCuadros[i].classList.add("cuadro-deshabilitado")
        }
}