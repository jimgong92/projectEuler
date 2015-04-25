function solver(grid, size){
  var horizontal = greatestRowSeries(grid, size);
  var vertical = greatestColumnSeries(grid, size);
  return horizontal;
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
  var numCols = grid[0].length;
  for (var i = 0; i < numCols; i++){
    for (var j = 0; j < grid.length - size; j++){
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

}

/**
 * Top-right to bottom-left
 */
function greatestMinorDiagonalSeries(grid, size){

}