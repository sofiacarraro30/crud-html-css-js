// detectar que voy a necesitar y guardarlos en variables
// se puede usar el signo $ antes de un elemento  HTML para identificar que pertenece al html

const $nameInput = document.getElementById("name")
const $emailInput = document.getElementById("email")
const $form = document.querySelector("form")
const $contactsList = document.querySelector("tbody")

let contacts
let contactstoLocalStorage = JSON.parse(localStorage.getItem("contacts"))

if (contactstoLocalStorage !== null) {
    contacts = contactstoLocalStorage
} else {
    contacts = []
}



console.log(contacts, "<- lista de contactos")


//renderizar -> representar visualmente la data
const renderContacts = () => {
    $contactsList.innerHTML = ""
    for (let i = 0; i < contacts.length; i++) {
        // 1 - crear en js una fila de tabla
        const row = document.createElement("tr")
        //2-  añadirle conetnido html
        row.innerHTML = `<td> ${contacts[i].name} </td>
        <td> ${contacts[i].email} </td>
        <td>
        <button>Actualizar</button>
        <button>Borrar</button>
        </td>`
        //3 - agregar la fila a la tabla
        $contactsList.appendChild(row)
    }

}

//Evento
//TODO lo que hace el usuario en el navegador
//Decidir que es lo que sucede cuando ocurre un evento

const sendForm = (event) => {
    event.preventDefault()
    console.log(event)
    console.log("El valor de nombre es: ", $nameInput.value)
    console.log("El valor de email es: ", $emailInput.value)

    //clave, valor
    const newContact = {
        name: $nameInput.value,
        email: $emailInput.value
    }

    contacts.push(newContact)
    //pc guarda en tu memoria mi lista de contactos actualizada
    //setter -> funcion que actualiza
    const contactsToJson = JSON.stringify(contacts)
    localStorage.setItem("contacts", contactsToJson)

    console.log(contacts, "<- lista de contactos")
    $form.reset()
    renderContacts()
}

//Evento submit
// "escuchar el evento" -> cuando esto suceda, hare tal cosa
//callback -> funcion que se ejecuta despues de que pasa algo
$form.addEventListener("submit", sendForm)
renderContacts()
