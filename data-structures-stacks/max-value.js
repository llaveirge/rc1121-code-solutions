/* exported maxValue */

function maxValue(stack) {
  let max = -Infinity;
  if (stack.peek() !== undefined) {
    while (stack.peek() !== undefined) {
      const popped = stack.pop();
      if (popped > max) {
        max = popped;
      }
    }
  }
  return max;
}
