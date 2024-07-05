let modeMeInput = document.querySelector('.input__1');
let passwordInput = document.querySelector('.input__2');
let form = document.querySelector('form');
let userBtn = document.querySelector('.btn');
let language = document.querySelector('.language__txt')
let cardBtn = document.querySelector('.card__btn')


form.addEventListener('keyup', (saida) => {
    saida.preventDefault();
    if(modeMeInput.value.length >= 0 && passwordInput.value.length >= 0) {
        userBtn.style.opacity = 1;
        userBtn.disabled = false;
    } else {
        userBtn.style.opacity = 0.6;
    }
})

form.addEventListener('submit', (said) =>{
    said.preventDefault();
    let findUser = data.find((item) => item.id === modeMeInput.value && item.password === passwordInput.value);
    userBtn.disabled = true;
    if(findUser) {
        userBtn.style.opacity = 1;
        userBtn.disabled = false;
        alert('Correct')
        window.location.href = './info.html';
    } else {
        userBtn.style.opacity = 0.6;
        alert('Eror');
    }
})