/* exported removeTail */

function removeTail(list) {

  if (list.next !== null) {
    let currentNode = list;

    while (currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
    return list;
  }

}
