/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const prependedList = new LinkedList(value);
  prependedList.next = list;
  return prependedList;
}
