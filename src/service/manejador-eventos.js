export async function obtenerEventos() {
    const r = await fetch(`http://localhost:3000/eventos`)
    const rJSON = await r.json()
    return rJSON
}



export async function obtenerEventoEspecifico(id) {
    const r = await fetch(`http://localhost:3000/eventos/${id}`)
    const rJSON = await r.json()
    return rJSON
}


export function fetchModificarEvento(id, objeto) {
    fetch(`http://localhost:3000/eventos/${id}`, {
        method: "PATCH",
        body: JSON.stringify(
            objeto
        ),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }

    })
}

export function fetchEliminarEvento(id) {
    fetch(`http://localhost:3000/eventos/${id}`, {
        method: "DELETE"
    })
}

export function fetchCrearEvento(objeto) {
    fetch(`http://localhost:3000/eventos`, {
        method: "POST",
        body: JSON.stringify(
            objeto
        ),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })


}