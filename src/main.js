
creaBotonFDS();


function crearCalendarioMensual() {
    ARRAY_DIAS = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]

    crearCalendarioHeaders(ARRAY_DIAS)

    function crearCalendarioHeaders(ARRAY_DIAS) {
        ARRAY_DIAS.forEach((DIA) => {
            $dia = document.createElement("th")
            $dia.textContent = DIA
            $dia.classList = `th-semanas th-${DIA}`
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


function numerarCalendarioMensual(diaDeSemanaInicial, numeroDeDiasDelMes) {
    let NUMERO_DE_CUADROS = 35
    let acumulador = 0
    obtenerCuadros = document.querySelectorAll(".cuadro")
    for (let i = 0; i < NUMERO_DE_CUADROS; i++)
        if (obtenerCuadros[i].classList.contains(`cuadro-${diaDeSemanaInicial}`) === true) {
            let iterador = NUMERO_DE_CUADROS - acumulador
            for (let j = 0; j < iterador; j++) {
                if (j < numeroDeDiasDelMes) {
                    obtenerCuadros[i].textContent = `${j + 1}.`
                    obtenerCuadros[i].dataset.dia = `${j + 1}`
                    i++
                } else {
                    obtenerCuadros[i].classList.remove("cuadro")
                    obtenerCuadros[i].classList.add("cuadro-deshabilitado")
                    i++
                }
            } return
        } else {
            acumulador++
            obtenerCuadros[i].classList.remove("cuadro")
            obtenerCuadros[i].classList.add("cuadro-deshabilitado")
        }
}

function colocarIconoCrearEevento() {
    let dias = document.querySelectorAll(".cuadro")
    for (let i = 0; i < dias.length; i++) {
        // crearDiv = document.createElement("div")
        // crearDiv.className = "div-agregar-evento"
        crearButton = document.createElement("input")
        crearButton.type = "image"
        crearButton.src = "/img/agregar-evento-img.svg"
        crearButton.classList = "agregar-evento rounded float-right"
        crearButton.dataset.toggle = "modal"
        crearButton.dataset.target = "#modal"
        crearButton.dataset.dia = `${i + 1}`
        // crearDiv.appendChild(crearIMG)
        dias[i].appendChild(crearButton)
    }
}

//modal

function agregarEventoMensual() {
    $(".agregar-evento").click((e) => {
        diaNumero = e.target.parentElement.getAttribute("data-dia")

        modalCrearEvento(diaNumero);

        function modalCrearEvento(diaNumero) {
            header = document.querySelector(".modal-title")
            header.textContent = `Crear evento el dia ${diaNumero}`

            body = document.querySelector(".modal-body")
            body.innerHTML = ""

            contenedorTitulo = document.createElement("div")
            labelTitulo = document.createElement("label")
            labelTitulo.textContent = "Nombre del evento:"
            inputTitulo = document.createElement("input")
            inputTitulo.id = "input-titulo"
            contenedorTitulo.appendChild(labelTitulo)
            contenedorTitulo.appendChild(inputTitulo)

            contenedorDescripcion = document.createElement("div")
            labelDescripcion = document.createElement("label")
            labelDescripcion.textContent = "Descripcion:"
            inputDescripcion = document.createElement("input")
            inputDescripcion.id = "input-descripcion"
            contenedorDescripcion.appendChild(labelDescripcion)
            contenedorDescripcion.appendChild(inputDescripcion)

            contenedorComienza = document.createElement("div")
            labelComienza = document.createElement("label")
            labelComienza.textContent = "Comienza:"
            inputComienza = document.createElement("input")
            inputComienza.id = "input-comienza"
            inputComienza.type = "number"
            inputComienza.setAttribute("placeholder", "HH:MM")
            contenedorComienza.appendChild(labelComienza)
            contenedorComienza.appendChild(inputComienza)

            contenedorTermina = document.createElement("div")
            labelTermina = document.createElement("label")
            labelTermina.textContent = "Termina:"
            inputTermina = document.createElement("input")
            inputTermina.id = "input-termina"
            inputTermina.type = "number"
            inputTermina.setAttribute("placeholder", "HH:MM")
            contenedorTermina.appendChild(labelTermina)
            contenedorTermina.appendChild(inputTermina)



            body.appendChild(contenedorTitulo)
            body.appendChild(contenedorDescripcion)
            body.appendChild(contenedorComienza)
            body.appendChild(contenedorTermina)


            footer = document.querySelector(".modal-footer")
            footer.innerHTML = ""
            crearBotonEvento("Cancelar", "secondary")
            crearBotonEvento("Crear", "primary")
            function crearBotonEvento(text, color) {
                button = document.createElement("button")
                button.type = "button"
                button.textContent = text
                button.classList = `btn btn-${color}`
                button.dataset.dismiss = "modal"
                footer.appendChild(button)

            }

        }

    })
}

function creaBotonFDS() {
    boton = document.createElement("button")
    boton.id = "boton-fds"
    boton.textContent = "Test"
    document.querySelector("body").appendChild(boton)
}

function ocultarFDS() {
    $("#boton-fds").click(() => {

        const filaDomingo = document.querySelectorAll(".cuadro-Domingo")
        const filaSabado = document.querySelectorAll(".cuadro-Sabado")
        const headerDomingo = document.querySelectorAll(".th-Domingo")
        const headerSabado = document.querySelectorAll(".th-Sabado")

        ocultarMostrarFDS(headerDomingo)
        ocultarMostrarFDS(headerSabado)
        ocultarMostrarFDS(filaDomingo)
        ocultarMostrarFDS(filaSabado)

        function ocultarMostrarFDS(elemento) {
            elemento.forEach((dia) => {
                debugger
                if (dia.classList.contains("invisible") === true) {
                    dia.classList.remove("invisible")
                    dia.classList.add("visible")
                    return
                } if (dia.classList.contains("invisible") === false) {
                    dia.classList.remove("visible")
                    dia.classList.add("invisible")
                    return
                } else {
                    dia.classList.add("invisible")
                }


            })
        }
    })
}


crearBotonesTipoDeCalendario()
function crearBotonesTipoDeCalendario() {

    botonSemanal = document.createElement("button")
    botonSemanal.id = "calendario-semanal"
    botonSemanal.className = "btn btn-secondary"
    botonSemanal.textContent = "Calendario Semanal"
    document.querySelector("#tipo-calendario").appendChild(botonSemanal)

    botonMensual = document.createElement("button")
    botonMensual.id = "calendario-mensual"
    botonMensual.className = "btn btn-secondary"
    botonMensual.textContent = "Calendario Mensual"
    document.querySelector("#tipo-calendario").appendChild(botonMensual)
}

$("#calendario-mensual").click(() => {
    const trDiaSemanas = document.querySelector("#dias-semana")
    const tbodyDias = document.querySelector("#dias-calendario")
    borrarContenido(trDiaSemanas)
    borrarContenido(tbodyDias)



    crearCalendarioMensual();
    numerarCalendarioMensual("Domingo", "30");
    colocarIconoCrearEevento();
    agregarEventoMensual()
    ocultarFDS()
})

function borrarContenido(elemento) {
    elemento.innerHTML = ""
}


$("#calendario-semanal").click(() => {
    const trDiaSemanas = document.querySelector("#dias-semana")
    const contenidoTabla = document.querySelector("#dias-calendario")

    borrarContenido(contenidoTabla)
    borrarContenido(trDiaSemanas)

    ARRAY_DIAS = ["Horario", "Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
    crearCalendarioHeaders(ARRAY_DIAS)

    function crearCalendarioHeaders(ARRAY_DIAS) {
        ARRAY_DIAS.forEach((DIA) => {
            $dia = document.createElement("th")
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
            filaTabla = document.createElement("tr")
            filaTabla.id = `fila-tabla-${i + 1}`
            contenidoTabla.appendChild(filaTabla)

            nuevoCuadro = document.createElement("td")
            nuevoCuadro.textContent = `${i + 1}:00`
            filaTabla.appendChild(nuevoCuadro)

            DIAS_DE_LA_SEMANA.forEach((elemento) => {
                nuevoCuadro = document.createElement("td")
                nuevoCuadro.classList = `cuadro-${elemento}`
                nuevoCuadro.dataset.hora = `${i + 1}`
                document.querySelector(`#fila-tabla-${i + 1}`).appendChild(nuevoCuadro)
            })
        }

    }
    ocultarFDS()





})