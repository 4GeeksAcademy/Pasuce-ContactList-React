export const getContactos = async (dispatch) => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/primera-agenda/contacts", {
        method: "GET"
    })
    if (!response.ok) {
        crearAgenda()
    }
    const data = await response.json()

    dispatch({ type: 'traer_contacts', payload: data.contacts })

}

export const crearAgenda = async () => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/primera-agenda", {
        method: "POST"

    })
    // lo guardo en una variable pero no la estoy usando
    const data = await response.json()  
}

export const crearContacto = async (nuevoContacto, dispatch) => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/primera-agenda/contacts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(nuevoContacto)

    })

    if (response.ok) {
        getContactos(dispatch)
    }
}

export const editarContacto = async (id, datosActualizados, dispatch) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/primera-agenda/contacts/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datosActualizados)
    })
    if (response.ok) {
        getContactos(dispatch)
       
        

    }
}

export const eliminarContacto = async (id,dispatch) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/primera-agenda/contacts/${id}`, {
        method: "DELETE",

    })

    if (response.ok) {
        getContactos(dispatch)

    }
}

