function solver(n){
  var nSqrt = Math.sqrt(n);
  var primes = [], res = [];
  for (var i = 2; i <= nSqrt; i++){
    var iSqrt = Math.sqrt(i);
    var prime = true;
    for (var j = 2; j <= iSqrt; j++){
      if (i % j === 0){
        prime = false;
        break;
      }
    }
    if(prime) primes.push(i);
  }
  primes.forEach(function(prime){
    if (n % prime === 0){
      res.push(prime);
    }
  });
  return res[res.length - 1];
}