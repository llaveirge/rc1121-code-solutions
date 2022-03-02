/* exported getLength */

function getLength(list) {
  let index = 0;
  let currentNode = list;

  while (currentNode !== null) {
    currentNode = currentNode.next;
    index++;
  }
  return index;
}
