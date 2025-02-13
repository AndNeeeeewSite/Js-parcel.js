nameInput = document.querySelector('.name-input');
mailInput = document.querySelector('.mail-input');
messInput = document.querySelector('.mess-input');
document.querySelector('.feedback').addEventListener('submit', function() {
    name = nameInput.value;
    mail = mailInput.value;
    mess = messInput.value;
    console.log(`Name: ${name} Mail: ${mail} Message: ${mess}`);
    message = {
        name: name,
        mail: mail,
        message: mess
    };
});

//# sourceMappingURL=index.672d4772.js.map
