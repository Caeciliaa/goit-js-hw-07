function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColor = document.querySelector('.change-color');
changeColor.addEventListener('click', handlerClick);

function handlerClick(evt) {
  console.log(evt.currentTarget);

  document.body.style.backgroundColor = getRandomHexColor();
}
