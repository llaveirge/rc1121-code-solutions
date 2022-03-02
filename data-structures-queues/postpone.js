/* exported postpone */

function postpone(queue) {
  if (queue.peek() !== undefined) {
    const requeue = queue.dequeue();
    queue.enqueue(requeue);
  }
}
