function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('body-task-6');
});

const controls = document.querySelector('#controls');
const input = controls.querySelector('input[type="number"]');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', handlerCreate);
destroyBtn.addEventListener('click', destroyBoxes);

function handlerCreate() {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100');
  }
}

function createBoxes(amount) {
  destroyBoxes();
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    box.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};`;
    fragment.appendChild(box);
  }
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}
