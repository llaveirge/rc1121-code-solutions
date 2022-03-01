/* exported countValues */

function countValues(stack) {
  const array = [];
  if (stack.peek() !== undefined) {
    while (stack.peek() !== undefined) {
      array.push(stack.pop());
    }
    return array.length;
  }
  return 0;
}
