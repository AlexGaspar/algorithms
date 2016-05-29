// Solve longest incresing sequences using dynamic programing
module.exports = function (input) {
  var n = input.length - 1;
  var dp = [];

  for (var i = n; i >= 0; i--) {
    var choices = [1];
    for (var j = i + 1; j <= n; j++) {
      if (input[j] > input[i]) {
        choices.push(dp[j] + 1);
      }
    }

    dp[i] = Math.max(...choices);
  }

  return dp;
};
