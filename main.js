import send from './modules/formData.js';

const nameInput = document.querySelector('.name-input');
const mailInput = document.querySelector('.mail-input');
const messInput = document.querySelector('.mess-input');

document.querySelector('.feedback').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = nameInput.value;
  const mail = mailInput.value;
  const mess = messInput.value;
  
  console.log(`Name: ${name} Mail: ${mail} Message: ${mess}`);
  
  const message = {
    name: name,
    mail: mail,
    message: mess
  };
  
  send(message);
  alert('Successfully');
});
