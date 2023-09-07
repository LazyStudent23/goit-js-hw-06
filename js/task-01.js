const liItem = document.querySelectorAll(".item");

const categoriesEl = document.getElementById("categories").children.length;

liItem.forEach((title) => {
     console.log(`Number of categories: ${categoriesEl}`);
    console.log(`Category: ${title.firstElementChild.textContent}`);
    console.log(`Elements: ${title.lastElementChild.children.length}`);
   })
