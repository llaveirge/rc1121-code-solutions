var $tabContainer = document.querySelector('.tab-container');

var $tabNodeList = document.querySelectorAll('.tab');

var $viewNodeList = document.querySelectorAll('.view');

function tabSwitch(event) {
  if (event.target && event.target.matches('.tab')) {

    for (var tabNode of $tabNodeList) {
      if (tabNode === event.target) {
        event.target.classList.add('active');
      } else {
        tabNode.classList.remove('active');
      }
    }

    var $targetDataView = event.target.getAttribute('data-view');

    for (var viewNode of $viewNodeList) {
      if (viewNode.getAttribute('data-view') === $targetDataView) {
        viewNode.classList.remove('hidden');
      } else {
        viewNode.classList.add('hidden');
      }
    }
  }
}

$tabContainer.addEventListener('click', tabSwitch);
