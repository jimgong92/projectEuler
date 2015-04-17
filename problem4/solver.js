function solver(numDigits){
  var lowBound = Math.pow(10, numDigits - 1);
  var highBound = Math.pow(10, numDigits);
  var res = 0;
  for (var i = highBound - 1; i > lowBound; i--){
    for (var j = i; j > lowBound; j--){
      var product = i * j;
      if (product > res){
        var string = product.toString();
        if (isPalindrome(string)) {
          res = product;
        }
        
      }
    }
  }
  return res;
}

function isPalindrome(str){
  var end = str.length / 2;
  for (var i = 0; i < end; i++){
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}