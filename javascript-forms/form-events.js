var $formControlUserName = document.forms[0].elements.name;

var $formControlUserEmail = document.forms[0].elements.email;

var $formControlMessage = document.forms[0].elements.message;

function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name value:', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name value:', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name:', event.target.name, 'event.target.value:', event.target.value);
}

$formControlUserName.addEventListener('focus', handleFocus);
$formControlUserName.addEventListener('blur', handleBlur);
$formControlUserName.addEventListener('input', handleInput);

$formControlUserEmail.addEventListener('focus', handleFocus);
$formControlUserEmail.addEventListener('blur', handleBlur);
$formControlUserEmail.addEventListener('input', handleInput);

$formControlMessage.addEventListener('focus', handleFocus);
$formControlMessage.addEventListener('blur', handleBlur);
$formControlMessage.addEventListener('input', handleInput);
