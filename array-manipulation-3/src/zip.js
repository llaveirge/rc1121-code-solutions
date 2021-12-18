/* exported zip */

// Define a function named 'zip' which has 2 parameters: 'first' and 'second'.
// Create an empty array to store all the sub-arrays in called 'zippedArr'.
// Compare the length of 'first' parameter to the length of 'second' parameter,
// and store the shorter parameter in variable 'shorterArr'.
// Iterate through both parameters' items only upto the number of items in
// 'shorterArr'.
// Create an empty array called 'childArr' to store one of each parameter item.
// Add an item from both parameters in corresponding indexes to 'childArr'.
// Add 'childArr' to 'zippedArr' and empty 'childArr' for the next pair of items.
// Continue adding index pairs to 'childArr' and adding 'childArr' to 'zippedArr'
// until the end of the shorter array parameter.
// Return 'zippedArr'.

function zip(first, second) {

  var zippedArr = [];
  var shorterArr;

  if (first.length > second.length) {
    shorterArr = second;
  } else {
    shorterArr = first;
  }

  for (var i = 0; i < shorterArr.length; i++) {
    var childArr = [];
    childArr.push(first[i]);
    childArr.push(second[i]);
    zippedArr.push(childArr);
  }
  return zippedArr;
}
