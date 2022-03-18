/* exported getTail */

function getTail(list) {
  let currentNode = list;

  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }
  return currentNode.data;
}
