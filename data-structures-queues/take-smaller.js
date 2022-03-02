/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }

  const front = queue.dequeue();
  const second = queue.dequeue();

  if (second === undefined) {
    return front;
  }

  if (front < second) {
    queue.enqueue(second);
    return front;
  }

  queue.enqueue(front);
  return second;
}
