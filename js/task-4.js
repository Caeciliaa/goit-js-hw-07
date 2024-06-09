const form = document.querySelector('.login-form');

form.addEventListener('submit', handlerGetComment);

function handlerGetComment(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;

  if (!validateForm(email, password)) {
    alert('All form fields must be filled in');
  } else {
    const data = {
      email: email.value.trim(),
      password: password.value.trim(),
    };
    console.log(data);
    form.reset();
  }
}

function validateForm(email, password) {
  return email.value.trim() !== '' && password.value.trim() !== '';
}
