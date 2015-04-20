function solver(bound){
  var arr = [false, false];
  for (var i = 2; i < bound; i++){
    var val = arr[i];
    if (val !== false){
      if (isPrime(val)){
        arr[i] = i;
      }
      for (var j = i + i; j < bound; j += i){
        arr[j] = false;
      }
    }
  }
  return arr.reduce(function(sum, currentVal){
    if(currentVal) return sum + currentVal;
    return sum;
  }, 0);
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