const email = document.querySelector('#email')
const notify = document.querySelector('#notify')
const errorP = document.querySelector('#error')


notify.addEventListener('click', validarEmail)

function validarEmail() {
    let regEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if(regEx.test(email.value)==false){
        errorP.innerHTML= "Please provide a valid email address"
        errorP.classList.remove('.inactive')
        errorP.classList.remove('.inactive')
        email.style.border="1px solid red"
        email.style.marginBottom="10px"


    } else {
        location.reload()

    }
}
