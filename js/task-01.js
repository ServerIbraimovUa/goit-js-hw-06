// const itemEl = document.querySelectorAll(".item");
// console.log(`Number of categories: ${itemEl.length}`);

//!====================   children
const listEl = document.querySelector("#categories");

console.log(`Number of categories: ${[...listEl.children].length}`);

[...listEl.children].forEach((item) => {
  const title = item.firstElementChild;
  const items = item.lastElementChild.children;
  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${items.length}`);
});

//!=================== тут зробив через querySelectorAll

// const itemsEl = listEl.querySelectorAll(".item");
// [...itemsEl].forEach((el) => {
//   const title = el.querySelector("h2");
//   const items = el.querySelectorAll("li");
//   console.log(`Category: ${title.textContent}`);
//   console.log(`Elements: ${items.length}`);
// });
