function solver(bound){
  var res = {
    num : 0,
    steps: 0
  }
  var memo = [0, 0];
  for (var i = 2; i < bound; i++){
    var n = i, count = 0;
    while (memo[n] === undefined){
      if(n !== 1) {
        count++;
        if (n % 2) n = n * 3 + 1;
        else n = n >> 1;
      }
    }
    if (i === 13) debugger;
    memo[i] = memo[n] + count;
    if (count > res['steps']){
      res['num'] = i;
      res['steps'] = memo[i]; 
    }
  }
  return res['num'];
}
