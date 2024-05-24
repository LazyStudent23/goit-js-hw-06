const liItem = document.querySelectorAll(".item");

const categoriesEl = document.getElementById("categories").children.length;
console.log(`Number of categories: ${categoriesEl}`);
liItem.forEach((title) => {
     console.log(`Category: ${title.firstElementChild.textContent}`);
    console.log(`Elements: ${title.lastElementChild.children.length}`);
   })
