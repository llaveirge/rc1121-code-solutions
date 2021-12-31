var $userList = document.getElementById('user-list');

// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
// xhr.responseType = 'json';

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {

  console.log(xhr.status);
  console.log(xhr.response);

  for (var index of xhr.response) {
    var $li = document.createElement('li');
    var $liText = document.createTextNode(index.name);
    $li.appendChild($liText);
    $userList.appendChild($li);
  }
  return $li;

});

xhr.send();

// xhr.addEventListener('load', loadHandler);
