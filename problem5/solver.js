function solver(lowBound, highBound){
  // var factors = {};
  // var res = [];
  // for (var i = highBound; i >= lowBound; i--){
  //   factors[i] = true;
  // }
  // for (var i = highBound; i >= lowBound; i--){
  //   var isBase = true;
  //   for (var j = i - 1; j > 1 && j >= lowBound; j--){
  //     var divisor = i / j;
  //     if (factors[divisor] && divisor !== j){
  //       isBase = false;
  //       break;
  //     }
  //   }
  //   if (isBase){
  //     res.push(i);
  //   }
  // }
  // console.log(res);
  // return res.reduce(function(product, curr){
  //   return product * curr;
  // }, 1);
  var productBound = 1;
  var factors = {};
  for (var i = lowBound; i <= highBound; i++){
    factors[i] = true;
    productBound *= i;
  }
  for (var i = lowBound; i < productBound; i++){
    var valid = true;
    for (var j = lowBound; j < highBound; j++){
      if ((i / j) % 1 !== 0) {
        valid = false;
        break;          
      }
    }
    if (valid) return i;
  }
  return null;

}