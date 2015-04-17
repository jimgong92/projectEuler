function solver(bound){
  var sumOfSquares = 0, sum = 0;
  for (var i = 1; i <= bound; i++){
    sum += i;
    sumOfSquares += Math.pow(i, 2);
  }
  return Math.pow(sum, 2) - sumOfSquares;
}