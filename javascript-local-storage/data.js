/* exported todos */

var todos = [];
var previousTodosJSON = localStorage.getItem('javascript-local-storage');
todos = JSON.parse(previousTodosJSON);

function beforeunloadHandler(event) {
  var todoJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todoJSON);
}

window.addEventListener('beforeunload', beforeunloadHandler);
