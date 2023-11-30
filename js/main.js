

const submitButton = document.getElementById('submitButton');
const email = document.querySelector('#email');
const error = document.querySelector('.error');

function emailValidation() {
  if (email.value == "") {
    email.style.border = '1px solid';
    email.style.borderColor = 'red';
    error.style.display = "block"
  } else {

    email.style.border = '1px solid';
    email.style.borderColor = 'green';
    error.style.display = "none"

  }
}

submitButton.addEventListener('click', e => {
  e.preventDefault();
  emailValidation();
});


email.addEventListener('keyup', e => {
   alert('masingacite');
  });
