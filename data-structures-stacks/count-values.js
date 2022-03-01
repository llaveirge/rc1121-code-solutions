/* exported countValues */

function countValues(stack) {
  if (stack.peek() !== undefined) {
    const array = stack.print().split('<-');
    return array.length;
  } else {
    return 0;
  }
}
