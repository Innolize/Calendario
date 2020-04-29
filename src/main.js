creaBotonFDS();
modalCrearEvento();
crearCalendario();


function crearCalendario() {
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
numerarCalendario("Martes", "31");

function numerarCalendario(diaDeSemanaInicial, numeroDeDiasDelMes) {
    NUMERO_DE_CUADROS = 35
    DIAS_DE_LA_SEMANA = 7
    obtenerCuadros = document.querySelectorAll(".cuadro")
    for (let i = 0; i < NUMERO_DE_CUADROS; i++)
        if (obtenerCuadros[i].classList.contains(`cuadro-${diaDeSemanaInicial}`) === true) {
            for (let j = 0; j < 33; j++) {
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
            obtenerCuadros[i].classList.remove("cuadro")
            obtenerCuadros[i].classList.add("cuadro-deshabilitado")
        }

}
colocarIconoCrearEevento();
function colocarIconoCrearEevento() {
    let dias = document.querySelectorAll(".cuadro")
    for (let i = 0; i < dias.length; i++) {
        // crearDiv = document.createElement("div")
        // crearDiv.className = "div-agregar-evento"
        crearButton = document.createElement("button")
        crearButton.type = "image"
        crearButton.src = "/img/agregar-evento-img.svg"
        crearButton.classList = "agregar-evento rounded float-right"
        // crearDiv.appendChild(crearIMG)
        dias[i].appendChild(crearButton)
    }
}

//modal


function modalCrearEvento() {
    header = document.querySelector(".modal-title")
    body = document.querySelector(".modal-body")
    footer = document.querySelector(".modal-footer")

    body.innerHTML = ""
    header.textContent = "Crear evento"

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
}

let tdElements = document.querySelectorAll("td")
tdElements.onclick = () => { console.log("asd") }


$(".agregar-evento").click(() => { console.log("asd") })



function creaBotonFDS() {
    boton = document.createElement("button")
    boton.id = "boton-fds"
    boton.textContent = "Test"
    document.querySelector("body").appendChild(boton)
}
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
