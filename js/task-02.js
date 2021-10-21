const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientElements = document.querySelector('#ingredients');

const list = ingredients.forEach(
  ingredient => {
    const itemList = document.createElement('li');
    itemList.textContent = ingredient;
    itemList.classList.add('.item');
    ingredientElements.append(itemList);
  });
console.log(ingredientElements);
