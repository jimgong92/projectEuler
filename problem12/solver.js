function solver(bound){
  var num = 1;
  while(getNumDivisors(num) <= bound){

  }

  return num;
}
function getNumDivisors(n){
  var count = 2;
  var limit = (n >> 1) + 1;
  for (var i = 2; i < limit; i++){
    var dividend = n / i;
    if (dividend % 1 === 0) {
      count++;
    }
  }
  return count;
}