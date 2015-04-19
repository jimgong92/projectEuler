function solver(targetSum){
  var product;
  function subroutine(a, b, c){
    if (!product){
      var aSq = a * a, 
          bSq = b * b, 
          cSq = c * c;
      if (a >= b || b >= c || (a + b + c) > targetSum) return;
      if ((aSq + bSq === cSq) && ((a + b + c) === targetSum)){
        product = a * b * c;
        return;
      }
      subroutine(a + 1, b, c);
      subroutine(a, b + 1, c);
      subroutine(a, b, c + 1);
    }
  }
  subroutine(200,375,376);
  return product;
}
