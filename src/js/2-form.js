const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const email = form.elements.email;
const message = form.elements.message;

const storedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
  email: '',
  message: '',
};

email.value = storedFormData.email;
message.value = storedFormData.message;

form.addEventListener('input', event => {
  const formData = {
    email: email.value.trim(),
    message: message.value.trim(),
  };

  saveFormData(formData);
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (email.value === '' || message.value === '') {
    return alert('All form fields must be filled in');
  }
  const formData = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  saveFormData(formData);
  console.log(formData);
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
});
function saveFormData(formData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
