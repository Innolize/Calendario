import { modificarSiguiente } from "../botones-interfaz.js"

export function modalModificarEvento(evento) {
    debugger
    const header = document.querySelector(".modal-title")
    header.textContent = `${evento.summary}`

    const body = document.querySelector(".modal-body")
    body.innerHTML = ""

    const contenedorTitulo = document.createElement("div")
    const labelTitulo = document.createElement("label")
    labelTitulo.textContent = "Nombre del evento:"
    const inputTitulo = document.createElement("input")
    inputTitulo.value = `${evento.summary}`
    inputTitulo.id = "crear-evento-titulo"
    contenedorTitulo.appendChild(labelTitulo)
    contenedorTitulo.appendChild(inputTitulo)

    const contenedorDescripcion = document.createElement("div")
    const labelDescripcion = document.createElement("label")
    labelDescripcion.textContent = "Descripcion:"
    const inputDescripcion = document.createElement("input")
    inputDescripcion.value = `${evento.description}`
    inputDescripcion.id = "crear-evento-descripcion"
    contenedorDescripcion.appendChild(labelDescripcion)
    contenedorDescripcion.appendChild(inputDescripcion)

    const contenedorComienza = document.createElement("div")
    const labelComienzaFecha = document.createElement("label")
    const labelComienzaHora = document.createElement("label")
    labelComienzaFecha.textContent = "Comienza:"
    labelComienzaHora.textContent = "a las:"
    const inputComienzaFecha = document.createElement("input")
    inputComienzaFecha.value = `${evento.start.split("T")[0]}`
    const inputComienzaHora = document.createElement("input")
    inputComienzaHora.value = `${evento.start.split("T")[1].split(".")[0]}`
    inputComienzaHora.id = "crear-evento-comienza-hora"
    inputComienzaFecha.id = "crear-evento-comienza-fecha"
    inputComienzaHora.setAttribute("placeholder", "HH:MM")
    inputComienzaFecha.setAttribute("placeholder", " ej: 20/5/2020")
    contenedorComienza.appendChild(labelComienzaFecha)
    contenedorComienza.appendChild(inputComienzaFecha)
    contenedorComienza.appendChild(labelComienzaHora)
    contenedorComienza.appendChild(inputComienzaHora)

    const contenedorTermina = document.createElement("div")
    const labelTerminaFecha = document.createElement("label")
    labelTerminaFecha.textContent = "Termina:"
    const labelTerminaHora = document.createElement("label")
    labelTerminaHora.textContent = "a las"
    const inputTerminaFecha = document.createElement("input")
    inputTerminaFecha.id = "crear-evento-termina-fecha"
    const inputTerminaHora = document.createElement("input")
    inputTerminaHora.id = "crear-evento-termina-hora"
    inputTerminaFecha.value = `${evento.end.split("T")[0]}`
    inputTerminaHora.value = `${evento.end.split("T")[1].split(".")[0]}`
    inputTerminaFecha.setAttribute("placeholder", " ej: 20/5/2020")
    inputTerminaHora.setAttribute("placeholder", "HH:MM")
    contenedorTermina.appendChild(labelTerminaFecha)
    contenedorTermina.appendChild(inputTerminaFecha)
    contenedorTermina.appendChild(labelTerminaHora)
    contenedorTermina.appendChild(inputTerminaHora)

    const contenedorColor = document.createElement("div")
    const labelColor = document.createElement("label")
    labelColor.textContent = "Selecciona color:"
    const inputColor = document.createElement("input")
    inputColor.value = evento.color
    inputColor.id = "crear-evento-color"
    inputColor.setAttribute("placeholder", `ej: "red"o "#00FFFF"`)
    contenedorColor.appendChild(labelColor)
    contenedorColor.appendChild(inputColor)



    body.appendChild(contenedorTitulo)
    body.appendChild(contenedorDescripcion)
    body.appendChild(contenedorComienza)
    body.appendChild(contenedorTermina)
    body.appendChild(contenedorColor)

    const footer = document.querySelector(".modal-footer")
    footer.innerHTML = ""

    debugger
    const contenedorFooter = document.createElement("div")
    const labelTexto = document.createElement("label")
    labelTexto.textContent = "Presiona siguiente para modificar el evento"
    contenedorFooter.appendChild(labelTexto)
    footer.appendChild(contenedorFooter)

    modificarSiguiente(evento.id, contenedorFooter)

}