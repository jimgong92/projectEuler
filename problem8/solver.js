function solver(numArr, lengthOfSeries){
  var largest = numArr.slice(0, lengthOfSeries).reduce(multiplySeries);
  var len = numArr.length;
  for (var i = 1; i < len; i++){
    var newProduct = numArr.slice(i, i + lengthOfSeries).reduce(multiplySeries);
    if(newProduct > largest){
      largest = newProduct;
    }
  }
  return largest;
}

function multiplySeries(product, curr){
  return product * curr;
}