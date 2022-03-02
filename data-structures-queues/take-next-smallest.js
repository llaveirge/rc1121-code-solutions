/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }

  let front = queue.dequeue();
  if (queue.peek() === undefined || front <= queue.peek()) {
    return front;
  }

  while (front > queue.peek()) {
    queue.enqueue(front);
    front = queue.dequeue();
  }
  return front;
}
