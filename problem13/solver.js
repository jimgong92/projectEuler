function solver(numList, amount){
  var sum = 0;
  for (var i = 0; i < numList.length; i++){
    sum += Number(numList[i]);
  }
  sum = sum.toString();
  var res = '', i = 0;
  while (res.length < amount){
    if (sum[i++] !== '.') res += sum[i - 1];
  }
  return res;
}