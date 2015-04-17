function solver(bound){
  var count = 0;
  var num = 1;
  while (count < bound){
    if (isPrime(++num)){
      count++;
    }
  }
  return num;
}

function isPrime(n){
  var sqrt = Math.sqrt(n);
  for (var i = 2; i <= sqrt; i++){
    if ((n / i) % 1 === 0){
      return false;
    }
  }
  return true;
}