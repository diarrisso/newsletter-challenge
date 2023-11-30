
const submitButton = document.getElementById('submitButton');
const email = document.querySelector('#email');
const error = document.querySelector('.error');
const sectionMessage = document.querySelector('.msg');
const sectionForm = document.querySelector('.sectionForm');
const submitMsgButton = document.querySelector('.submitMsgButton');

function emailValidation() {

  if (email.value.trim() === "") {
    email.style.border = '1px solid red';
    error.style.display = "block";
  } else {
    email.style.border = '1px solid green';
    error.style.display = "none";
  } 
}

submitButton.addEventListener('click', e => {
  e.preventDefault();
  emailValidation();
});


email.addEventListener('keyup', e => {
  emailValidation();
});

email.addEventListener('blur', function() {
  emailValidation();

});   

submitButton.addEventListener('click', function(e) {
  e.preventDefault();
  emailValidation();
  if (email.value.trim() !== "") {
    sectionMessage.style.display = "block";
    sectionForm.style.display = "none";
    error.style.display = "none";
  }

});   

submitMsgButton.addEventListener('click', function() {
  sectionMessage.style.display = "none"
  sectionForm.style.display = "block"
  email.value = "";
  email.style.border = '1px solid black';
});   