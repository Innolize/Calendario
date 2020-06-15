import { obtenerUsuarios } from '../../service/manejador-eventos.js';

export async function mostrarUsuarios(elementoPadre) {
    const contenedorUsuarios = document.createElement("div")
    const UsuariosTitulo = document.createElement("h5")
    UsuariosTitulo.innerText = "Invitar usuarios?"
    contenedorUsuarios.appendChild(UsuariosTitulo)
    const contenedorListaUsuarios = document.createElement("ul")
    contenedorUsuarios.appendChild(contenedorListaUsuarios)
    elementoPadre.appendChild(contenedorUsuarios)

    let usuarios = await obtenerUsuarios()
    usuarios.map(user => {
        let usuario = document.createElement("li")
        usuario.className = "usuario"
        usuario.innerText = user.nombre
        contenedorUsuarios.appendChild(usuario)
        let input = document.createElement("input")
        input.type = "checkbox"
        input.dataset.usuario = user.id
        usuario.appendChild(input)
    })
}

export function obtenerParticipantes() {
    const inputParticipantesArray = document.querySelectorAll('.usuario input')
    const array = Array.from(inputParticipantesArray)
    let arrayFiltrado = array.filter(input => input.checked === true)
    let ids = arrayFiltrado.map((usuario) => usuario.dataset.usuario)
    return ids.map(participante => { return { id: participante, organizer: false, responseStatus: null } })
}