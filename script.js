import { send } from './modules/formData.js';

nameInput = document.querySelector('.name-input')
mailInput = document.querySelector('.mail-input')
messInput = document.querySelector('.mess-input')
document.querySelector('.feedback').addEventListener('submit',function(event){
    event.preventDefault();
    name = nameInput.value
    mail = mailInput.value
    mess = messInput.value
    console.log(`Name: ${name} Mail: ${mail} Message: ${mess}`)
    message = {
        name:name,
        mail:mail,
        message:mess
    }
    send(message)
    alert('Nice')
})