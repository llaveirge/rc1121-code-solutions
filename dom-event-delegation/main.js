var $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', function (event) {
  console.log('event target:', event.target, 'target tag name:', event.target.tagName);

  if (event.target && event.target.tagName === 'BUTTON') {
    var $listItem = event.target.closest('.task-list-item');
    console.log($listItem);
    $listItem.remove();
  }
});
