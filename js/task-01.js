//#1
const categoriesCom = document.querySelector('#categories').children.length;
const allItems = document.querySelectorAll('li.item');


     console.log(`Number of categories: ${categoriesCom}`);




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
