function solver(bound){
  var memo = [0, 0];
  var maxStepsIndex = 1;
  for (var i = 2; i < bound; i++){
    memo[i] = getStepsToOne(i);
    if (memo[i] > memo[maxStepsIndex]) maxStepsIndex = i;
  }

  function getStepsToOne(n, steps){
    var steps = 0;
    while (n > 1){
      if (memo[n]) return steps + memo[n];
      n = n % 2 ? n*3+1 : n/2;
      steps++;
    }
    return steps;
  }

  return maxStepsIndex;
}