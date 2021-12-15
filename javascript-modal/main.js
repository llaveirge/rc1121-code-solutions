var $modal = document.getElementById('modal-container');
var $openModalButton = document.querySelector('.open-button');
var $noSurveyButton = document.querySelector('.no-survey');

function hideModal(event) {
  $modal.className = 'hidden';
}

function showModal(event) {
  $modal.className = 'shaded-background';
}

$openModalButton.addEventListener('click', showModal);
$noSurveyButton.addEventListener('click', hideModal);
