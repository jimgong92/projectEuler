function solver(bound){
  var memo = [1, 2], index = 1;
  var sum = 0;
  while (memo[index] <= bound){
    if (memo[index] % 2 === 0) sum += memo[index];
    memo[++index] = memo[index - 2] + memo[index - 1];
  }
  return sum;
}