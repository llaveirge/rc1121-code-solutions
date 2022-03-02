/* exported swapFront */

function swapFront(list) {
  const first = list;
  const second = list.next;
  if (second !== null) {
    const third = list.next.next;
    list = second;
    list.next = first;
    list.next.next = third;
  }
  return list;
}
