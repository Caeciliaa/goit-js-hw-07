const categories = document.querySelector('#categories');
const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach(element => {
  const categoriesName = element.querySelector('h2').textContent;
  const categoriesElementTotal = element.querySelectorAll('ul > li').length;

  console.log(`Category: ${categoriesName}`);
  console.log(`Elements: ${categoriesElementTotal}`);
});
