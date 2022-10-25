const form = document.querySelector('.container-email');
const mailInput = document.querySelector('.container-email-input');
const emailButton = document.querySelector('#arrow')
const iconError = document.querySelector('.icon-error');
const textError = document.querySelector('.error-text');
const expReg =  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

emailButton.addEventListener('click', verificarEmail)
form.addEventListener('submit', verificarEmail)


function verificarEmail () {
    if (expReg.test(mailInput)){
        
    }else {
        iconError.classList.remove('inactive');
        textError.classList.remove('inactive');
        
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    
})

























// function check (){
//     const email = document.querySelector('.container-email-input').value;
//     form.preventDefault()
//     if (email.match(expReg)){
// alert("olokei")
//     }else {
//     alert('naranjas');
// }
// }



// iconError.classList.remove('.inactive');
        // textError.classList.remove('.inactive');

    //     
        
    // }