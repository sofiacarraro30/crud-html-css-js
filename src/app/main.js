// detectar que voy a necesitar y guardarlos en variables
// se puede usar el signo $ antes de un elemento  HTML para identificar que pertenece al html

const $nameInput = document.getElementById("name")
const $emailInput = document.getElementById ("email")
const $form = document.querySelector ("form")

let contacts = []


//Evento
//TODO lo que hace el usuario en el navegador
//Decidir que es lo que sucede cuando ocurre un evento

const sendForm = (event) => {
    event.preventDefault ()
    console.log (event)
    console.log ("El valor de nombre es: ", $nameInput.value)
    console.log ("El valor de email es: ", $emailInput.value)

    const newContact = {
        name: $nameInput.value,
        email: $emailInput.value
    }
    contacts.push (newContact)
    console.log (contacts, "<- lista de contactos")
}

//Evento submit
// "escuchar el evento" -> cuando esto suceda, hare tal cosa
//callback -> funcion que se ejecuta despues de que pasa algo
$form.addEventListener ("submit", sendForm)

