const liItem = document.querySelectorAll(".item");
const itemsArr = [...liItem];
console.log(`Number of categories: ${itemsArr.length}`);

const h2El = document.querySelectorAll("h2");
h2El.forEach((title) => {
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${title.nextElementSibling.children.length}`);
})
