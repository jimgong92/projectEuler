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
  var seriesCoord = [];
  var numCols = grid[0].length;
  for (var i = 0; i < numCols; i++){
    for (var j = 0; j < grid.length - size; j++){
      var series = 1;
      var coordinates = [i]
      for (var seriesI = j; seriesI < j + size; seriesI++){
        coordinates.push(seriesI);
        series *= grid[seriesI][i];
      }
      if (series > product) {
        seriesCoord = coordinates;
        product = series;
      }
    }
  }
  console.log(seriesCoord);
  return product;
}