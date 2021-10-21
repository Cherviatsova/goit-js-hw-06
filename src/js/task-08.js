const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event,) {
    event.preventDefault();

    const formElement = event.currentTarget.elements;
    const email = formElement.email.value;
    const password = formElement.password.value;
    const formValues = { email, password };
    
    if (email === '' || password === '') {
        alert('All fields must be fiiled');
    } else {
        console.log(formValues);
    }
    form.reset();
}
