//#1
const categoriesCom = document.querySelector('#categories');
const allItems = document.querySelectorAll('.item');


function allItemsSum() {
     console.log(`Number of categories: ${allItems.length}`);
};
allItemsSum(allItems);


//#2

let categories = '';
let elementsNumber = 0;

allItems.forEach(element => {
    categories = element.firstElementChild.textContent;
    elementsNumber = element.querySelectorAll('li').length;

    const category = `Category: ${categories}`;
    const elements = `Elements: ${elementsNumber}`;
    
    console.log(category);
  console.log(elements);
});
