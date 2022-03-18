/* exported removeNext */

function removeNext(list) {
  if (list.next !== null) {
    const end = list.next.next;
    list.next = end;
  }
}
