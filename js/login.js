const input = document.querySelector('.login_input')
const button = document.querySelector('.login_button')
const form = document.querySelector('.login-form')

const validaInput = ({target}) =>{
    if(target.value.length > 3) {
        button.removeAttribute('disabled')
        return;
    } 

    button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
    event.preventDefault()

    localStorage.setItem('player', input.value)
}


input.addEventListener("input", validaInput);
form.addEventListener("submit", handleSubmit );