export function crearBotonesTipoDeCalendario() {

    const botonSemanal = document.createElement("button")
    botonSemanal.id = "calendario-semanal"
    botonSemanal.className = "btn btn-secondary"
    botonSemanal.textContent = "Calendario Semanal"
    document.querySelector("#tipo-calendario").appendChild(botonSemanal)

    const botonMensual = document.createElement("button")
    botonMensual.id = "calendario-mensual"
    botonMensual.className = "btn btn-secondary"
    botonMensual.textContent = "Calendario Mensual"
    document.querySelector("#tipo-calendario").appendChild(botonMensual)
}

export function creaBotonFDS() {
    const boton = document.createElement("button")
    boton.id = "boton-fds"
    boton.textContent = "Test"
    document.querySelector("body").appendChild(boton)



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

export function botonCrearEvento(){
    const button = document.createElement("button")
    button.textContent = "Crear nuevo evento"
    button.id = "crear-evento"
    document.querySelector("#tipo-calendario").appendChild(button)
}