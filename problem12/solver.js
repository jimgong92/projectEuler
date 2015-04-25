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
//1: 1
//2: 1,2
//3: 1, 3
//4: 1, 2, 4
//5: 1, 5
//6: 1, 2, 3, 6
//7: 1, 7
//8: 1, 2, 4, 8
//9: 1, 3, 9
//10: 1, 2, 5, 10
//11: 1, 11
//12: 1, 2, 3, 4, 6, 12
//13: 1, 13
//14: 1, 2, 7, 14
//15: 1, 3, 5, 15
//16: 1, 2, 4, 8, 16
//17: 1, 17
//18: 1, 2, 3, 6, 9, 18
//19: 1, 19
//20: 1, 2, 4, 5, 10, 20
