export function modalCrearEvento() {
    debugger
    const header = document.querySelector(".modal-title")
    header.textContent = `Crear evento`

    const body = document.querySelector(".modal-body")
    body.innerHTML = ""

    const contenedorTitulo = document.createElement("div")
    const labelTitulo = document.createElement("label")
    labelTitulo.textContent = "Nombre del evento:"
    const inputTitulo = document.createElement("input")
    inputTitulo.id = "crear-evento-titulo"
    contenedorTitulo.appendChild(labelTitulo)
    contenedorTitulo.appendChild(inputTitulo)

    const contenedorDescripcion = document.createElement("div")
    const labelDescripcion = document.createElement("label")
    labelDescripcion.textContent = "Descripcion:"
    const inputDescripcion = document.createElement("input")
    inputDescripcion.id = "crear-evento-descripcion"
    contenedorDescripcion.appendChild(labelDescripcion)
    contenedorDescripcion.appendChild(inputDescripcion)

    const contenedorComienza = document.createElement("div")
    const labelComienzaFecha = document.createElement("label")
    const labelComienzaHora = document.createElement("label")
    labelComienzaFecha.textContent = "Comienza:"
    labelComienzaHora.textContent = "a las:"
    const inputComienzaFecha = document.createElement("input")
    const inputComienzaHora = document.createElement("input")
    inputComienzaHora.id = "crear-evento-comienza-hora"
    inputComienzaFecha.id = "crear-evento-comienza-fecha"
    inputComienzaFecha.type = "number"
    inputComienzaHora.type = "number"
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
    $("#modal").modal("show")
}
