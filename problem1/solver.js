function solver(bound){
  var sum = 0;
  for (var i = 0; i < bound; i++){
    if (!(i % 3) || !(i % 5)) {
      console.log(i);
      sum += i;
    }
  }
  return sum;
}