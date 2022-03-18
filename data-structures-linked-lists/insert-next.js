/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const end = list.next;
  if (end !== null) {
    list.next = new LinkedList(value);
    list.next.next = end;
  }
}
