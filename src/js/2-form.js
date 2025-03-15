const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const email = form.elements.email;
const message = form.elements.message;

const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
  email: '',
  message: '',
};

email.value = formData.email;
message.value = formData.message;

form.addEventListener('input', event => {
  formData.email = email.value.trim();
  formData.message = message.value.trim();

  saveFormData(formData);
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (email.value === '' || message.value === '') {
    return alert('All form fields must be filled in');
  }

  console.log(formData);
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
});

function saveFormData(formData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
