const inputUserName = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
const heading = document.querySelector('h1');

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
inputUserName.parentNode.insertBefore(wrapper, inputUserName);
wrapper.append(inputUserName, heading);

inputUserName.addEventListener('input', handlerInput);

function handlerInput(evt) {
  const inputValue = evt.currentTarget.value.trim();
  if (inputValue === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = `${inputValue}`;
  }
}
