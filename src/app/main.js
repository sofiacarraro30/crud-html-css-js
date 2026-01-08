// detectar que voy a necesitar y guardarlos en variables
// se puede usar el signo $ antes de un elemento  HTML para identificar que pertenece al html

const $nameInput = document.getElementById("name")
const $emailInput = document.getElementById("email")
const $form = document.querySelector("form")
const $contactsList = document.querySelector("tbody")
const $contactId = document.getElementById("contactId")
const $btnCancel = document.querySelector("#btn-cancel")

let contacts = []
let contactstoLocalStorage = JSON.parse(localStorage.getItem("contacts"))

if (contactstoLocalStorage !== null) {
    contacts = contactstoLocalStorage
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
        <button class "btn-update" onclick="updateContact(${i})">Actualizar</button>
        <button class "btn-delete" onclick="deleteContact(${i})">Borrar</button>
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

    const name = $nameInput.value
    const email = $emailInput.value

    if (name === "" || email === "") {
        alert("El contacto debe tener nombre y email")
        return
    }

    const dataContact = {
        name: name,
        email: email
    }

    if ($contactId.value === "") {
        contacts.push(dataContact)
    } else {
        contacts[$contactId.value] = dataContact
        $contactId.value = ""
    }

    localStorage.setItem("contacts", JSON.stringify(contacts))
    $form.reset()
    renderContacts()
}



const deleteContact = (index) => {
    const valid = confirm ("¿Estas seguro que quieres borrar el contacto?")
    if (valid === true) {

    contacts.splice(index, 1)
    localStorage.setItem("contacts", JSON.stringify(contacts))
    renderContacts() } 
}

const updateContact = (index) => {
    $nameInput.value = contacts[index].name
    $emailInput.value = contacts[index].email
    $contactId.value = index
    console.log("Actualizando contacto")
}

const cancelSendForm = () => {
    $form.reset ()
    $btnCancel.addEventListener("click", cancelSendForm)
}

//Evento submit
// "escuchar el evento" -> cuando esto suceda, hare tal cosa
//callback -> funcion que se ejecuta despues de que pasa algo
$form.addEventListener("submit", sendForm)
renderContacts()


