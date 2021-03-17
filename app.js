
const btn = document.getElementsByClassName('btn');

function validation(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const error_message = document.getElementById('error-msg');
    const success_message = document.getElementById('success-msg');

    var text = "";

    if (name.length < 2) {
        error_message.style.padding = '10px';
        text = "Enter a valid name";
        error_message.innerHTML = text;
        setTimeout(() => {
            // error_message.style.transition= "all 0.6s";
            error_message.remove();
        }, 2000);
        return false;
    }

    if (subject.length < 4) {
        error_message.style.padding = '10px';
        text = "Enter a valid subject";
        error_message.innerHTML = text;

        setTimeout(() => {
            // error_message.style.transition= "all 0.6s";
            error_message.remove();
        }, 2000);

        return false;
    }

    if (isNaN(phone) || phone.length != 10) {
        error_message.style.padding = '10px';
        text = "Enter a valid phone number";
        error_message.innerHTML = text;
        setTimeout(() => {
            // error_message.style.transition= "all 0.6s";
            error_message.remove();
        }, 2000);
        return false;
    }

    if (email.length < 6 || email.indexOf('@') == -1) {
        error_message.style.padding = '10px';
        text = "Enter a valid email";
        error_message.innerHTML = text;
        setTimeout(() => {
            // error_message.style.transition= "all 0.6s";
            error_message.remove();
        }, 2000);
        return false;
    }

    if (message.length < 5) {
        error_message.style.padding = '10px';
        text = "Enter a valid message";
        error_message.innerHTML = text;
        setTimeout(() => {
            // error_message.style.transition= "all 0.6s";
            error_message.remove();
        }, 2000);
        return false;
    }

    success_message.classList.add("success-msg");
    success_message.innerHTML = "Submitted successfully ! ";
    success_message.style.marginTop = '15px';

    return true;
}

btn[0].addEventListener('click', validation);