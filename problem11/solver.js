function solver(grid, size){
  var horizontal = greatestRowSeries(grid, size);
  var series = horizontal;
  var vertical = greatestColumnSeries(grid, size);
  series = Math.max(horizontal, vertical);
  var majDiag = greatestMajorDiagonalSeries(grid, size);
  series = Math.max(series, majDiag);
  var minDiag = greatestMinorDiagonalSeries(grid, size);
  series = Math.max(series, minDiag);
  return series;
}

function greatestRowSeries(grid, size){
  var product = 0;
  var numRows = grid.length;
  for (var i = 0; i < numRows; i++){
    var row = grid[i];
    for (var j = 0; j < row.length - size + 1; j++){
      var slice = row.slice(j, j + size);
      var sliceProduct = slice.reduce(function(product, current){
        return product * current;
      }, 1);
      if (sliceProduct > product){
        product = sliceProduct;
      }
    }
  }
  return product;
}

function greatestColumnSeries(grid, size){
  var product = 0;
  var numCols = grid[0].length, numRows = grid.length;
  for (var i = 0; i < numCols; i++){
    for (var j = 0; j < numRows - size; j++){
      var series = 1;
      for (var seriesI = j; seriesI < j + size; seriesI++){
        series *= grid[seriesI][i];
      }
      if (series > product) {
        product = series;
      }
    }
  }
  return product;
}

/**
 * Top-Left to bottom-right
 */
function greatestMajorDiagonalSeries(grid, size){
  var product = 0;
  var numCols = grid[0].length, numRows = grid.length;
  for (var col = 0; col < numCols - size; col++){
    for (var row = 0; row < numRows - size; row++){
      var series = 1;
      var currCol = col;
      for (var seriesRow = row; seriesRow < row + size; seriesRow++){
        series *= grid[seriesRow][currCol++];
      }
      if (series > product) {
        product = series;
      }
    }
  }
  return product;
}

/**
 * Top-right to bottom-left
 */
function greatestMinorDiagonalSeries(grid, size){
  var product = 0;
  var numCols = grid[0].length, numRows = grid.length;
  for (var col = size - 1; col < numCols; col++){
    for (var row = 0; row < numRows - size; row++){
      var series = 1;
      var currCol = col;
      for (var seriesRow = row; seriesRow < row + size; seriesRow++){
        series *= grid[seriesRow][currCol--];
      }
      if (series > product) {
        product = series;
      }
    }
  }
  return product;
}