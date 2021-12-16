var $contactForm = document.forms[0];

var formElements = document.getElementById('contact-form').elements;
// console.log('formElements:', formElements);

$contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var formData = {
    name: formElements.name.value,
    email: formElements.email.value,
    message: formElements.message.value
  };
  console.log('form data:', formData);
  $contactForm.reset();
});
