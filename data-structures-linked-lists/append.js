/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  let currentNode = list;

  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }
  currentNode.next = new LinkedList(value);
}
