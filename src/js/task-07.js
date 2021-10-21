const inputFontSize = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');



function changeTextSize(){
    spanText.style.fontSize = `${inputFontSize.value}px` ;
}

inputFontSize.addEventListener('input', changeTextSize);