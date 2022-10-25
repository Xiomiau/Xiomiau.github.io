const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#emailAdress');
const password = document.querySelector('#password');

const firstNameError = document.querySelector('#firstNameError');
const LastNameError = document.querySelector('#lastNameError');
const emailError = document.querySelector('#emailError');
const passwordError = document.querySelector('#passwordError');

const sumbit = document.querySelector('#button');

sumbit.addEventListener('click', (e)=> {
    e.preventDefault()
    validateEmpty(firstName.value, firstName,firstNameError, 'First Name canot be empty');
    validateEmpty(lastName.value, lastName, LastNameError, 'Last Name canot be empty');
    validateEmail(email.value, email, emailError);
    validateEmpty(password.value, password, passwordError,'Password');
});

function validateEmail(valueInput, divInput,divError) {
    let regEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if(regEx.test(valueInput)==true){
        hideError(divInput,divError)
    } else {
        showError(divInput,divError, 'Looks like this is not an email')

    }
}

function validateEmpty (valueInput,divInput,divError,nameInput) {
    if(valueInput.length==0) {
        showError(divInput,divError,nameInput)
    } else {
        hideError(divInput,divError)
    }
}
function showError (divInput,divError,error) {
    divInput.style.border='1px solid red';
    divError.innerHTML = `<img id="icon-error" class="error-icon" src="/intro-component-with-signup-form-master/images/icon-error.svg" alt="icon error"> <p id="nameError" class="text-error"> ${error} </p>`;
} 

function hideError(divInput,divError) {
    divInput.style.border='1px solid hsl(246, 25%, 77%)';
    divError.innerHTML='';
}


