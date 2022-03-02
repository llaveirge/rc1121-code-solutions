/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  for (let i = 0; i < index; i++) {
    const value = queue.dequeue();
    queue.enqueue(value);
  }
  return queue.dequeue();
}
