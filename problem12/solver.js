function solver(bound){
  var num = 1;
  var i = 2;
  while(getNumDivisors(num) <= bound){
    num += i++;
  }
  return num;
}
function getNumDivisors(n){
  /**
   * Pre-empt gets for numbers not divisible by the first 7 primes to optimize for speed
   */
  if ((n / 510510) % 1 !== 0) return 0;
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