
/*
  Insertion sort

  e.g. : [1, 4, 2, 3]
      -> [1, 4, 2, 3]
      -> [1, 2, 4, 3]
      -> [1, 2, 3, 4]
 */
module.exports = function (input) {
  var n = input.length;

  // Start at 1 since we cannot swap the first element with nothing
  for(var i = 1; i < n; i++ ) {
    var j = i;
    while  ((j > 0) && (input[j] < input[j-1])) {
      var temp = input[j];
      input[j] = input[j-1];
      input[j-1] = temp;

      j = j - 1;
    };
  }

  return input;
};
