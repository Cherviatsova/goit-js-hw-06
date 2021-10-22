const inputRef = document.querySelector('#validation-input');

const successInput = (event) => {
    if (event.currentTarget.value.length === Number(inputRef.getAttribute('data-length'))) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.replace('invalid', 'valid');
    }
    else {
        event.currentTarget.classList.add('invalid');
        event.currentTarget.classList.replace('valid', 'invalid');
    }
}
inputRef.addEventListener('blur', successInput);

