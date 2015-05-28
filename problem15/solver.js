function solver(n){
  var matrix = [];
  for (var i = 0; i <= n; i++){
    var row = [];
    for (var j = 0; j <= n; j++){
      if (j === 0 || i === 0) row.push(1);
      else row.push(0);
    }
    matrix.push(row);
  }
  for (var i = 1; i <= n; i++){
    for (var j = 1; j <= n; j++){
      matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
    }
  }
  var count = 0;
  for (var i = 0; i <= n; i++){
    for (var j = 0; j <= n; j++){
      count += matrix[i][j];
    }
  }
  return count;
}