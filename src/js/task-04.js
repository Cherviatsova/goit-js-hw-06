const buttonDecr = document.querySelector('[data-action="decrement"]');
const buttonIncr = document.querySelector('[data-action="increment"]');
const spanValue = document.querySelector('#value');

let counterValue = 0;

const increment = () => {
    counterValue -= 1;
     spanValue.textContent = String(counterValue)
};

const decrement = () => {
    counterValue += 1;
    spanValue.textContent = String(counterValue)
}



buttonDecr.addEventListener('click', increment);
buttonIncr.addEventListener('click', decrement);



