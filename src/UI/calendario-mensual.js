function crearCalendarioMensual() {
    const ARRAY_DIAS = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]

    crearCalendarioHeaders(ARRAY_DIAS)

    function crearCalendarioHeaders(ARRAY_DIAS) {
        ARRAY_DIAS.forEach((DIA) => {
            const $dia = document.createElement("th")
            $dia.textContent = DIA
            $dia.classList = `th-semanas th-${DIA}`
            document.querySelector("#dias-semana").appendChild($dia)
        })
    }
    crearGrillaCalendario(ARRAY_DIAS)
    function crearGrillaCalendario(ARRAY_DIAS) {
        for (let i = 0; i < 5; i++) {
            const crearFila = document.createElement("tr")
            ARRAY_DIAS.forEach((DIA) => {
                const nuevoCuadro = document.createElement("td")
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
    const obtenerCuadros = document.querySelectorAll(".cuadro")
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
        const crearButton = document.createElement("input")
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
        const diaNumero = e.target.parentElement.getAttribute("data-dia")

        modalCrearEvento(diaNumero);

        function modalCrearEvento(diaNumero) {
            const header = document.querySelector(".modal-title")
            header.textContent = `Crear evento el dia ${diaNumero}`

            const body = document.querySelector(".modal-body")
            body.innerHTML = ""

            const contenedorTitulo = document.createElement("div")
            const labelTitulo = document.createElement("label")
            labelTitulo.textContent = "Nombre del evento:"
            const inputTitulo = document.createElement("input")
            inputTitulo.id = "input-titulo"
            contenedorTitulo.appendChild(labelTitulo)
            contenedorTitulo.appendChild(inputTitulo)

            const contenedorDescripcion = document.createElement("div")
            const labelDescripcion = document.createElement("label")
            labelDescripcion.textContent = "Descripcion:"
            const inputDescripcion = document.createElement("input")
            inputDescripcion.id = "input-descripcion"
            contenedorDescripcion.appendChild(labelDescripcion)
            contenedorDescripcion.appendChild(inputDescripcion)

            const contenedorComienza = document.createElement("div")
            const labelComienza = document.createElement("label")
            labelComienza.textContent = "Comienza:"
            const inputComienza = document.createElement("input")
            inputComienza.id = "input-comienza"
            inputComienza.type = "number"
            inputComienza.setAttribute("placeholder", "HH:MM")
            contenedorComienza.appendChild(labelComienza)
            contenedorComienza.appendChild(inputComienza)

            const contenedorTermina = document.createElement("div")
            const labelTermina = document.createElement("label")
            labelTermina.textContent = "Termina:"
            const inputTermina = document.createElement("input")
            inputTermina.id = "input-termina"
            inputTermina.type = "number"
            inputTermina.setAttribute("placeholder", "HH:MM")
            contenedorTermina.appendChild(labelTermina)
            contenedorTermina.appendChild(inputTermina)



            body.appendChild(contenedorTitulo)
            body.appendChild(contenedorDescripcion)
            body.appendChild(contenedorComienza)
            body.appendChild(contenedorTermina)


            const footer = document.querySelector(".modal-footer")
            footer.innerHTML = ""
            crearBotonEvento("Cancelar", "secondary")
            crearBotonEvento("Crear", "primary")
            function crearBotonEvento(text, color) {
                const button = document.createElement("button")
                button.type = "button"
                button.textContent = text
                button.classList = `btn btn-${color}`
                button.dataset.dismiss = "modal"
                footer.appendChild(button)

            }
            function crearBotonModificar(evento) {
                const button = document.createElement("button")
                button.type = "button"
                button.textContent = "Modificar"
                button.classList = `btn btn-info`
                if (evento.creator.id == 1) {
                    button.dataset.eventoID = evento.id
                } else {
                    button.classList.add("disabled")
                }
            }
            function crearBotonEliminar(evento) {
                const button = document.createElement("button")
                button.type = "button"
                button.textContent = "Eliminar"
                button.classList = `btn btn-dark`
                if (evento.creator.id == 1) {
                    button.dataset.eventoID = evento.id
                } else {
                    button.classList.add("disabled")
                }
            }


        }

    })
}


export function creaInterfazCalendarioMensual() {
    const trDiaSemanas = document.querySelector("#dias-semana")
    const tbodyDias = document.querySelector("#dias-calendario")
    borrarContenido(trDiaSemanas)
    borrarContenido(tbodyDias)



    crearCalendarioMensual();
    numerarCalendarioMensual("Domingo", "30");
    colocarIconoCrearEevento();
    agregarEventoMensual()
}

function borrarContenido(elemento) {
    elemento.innerHTML = ""
}