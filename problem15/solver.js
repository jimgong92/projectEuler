function solver(n, x, y){
  x = x || 0;
  y = y || 0;
  if (x === y && x === n) return 1;
  if (x > n || y > n) return 0;
  return solver(n, x + 1, y) + solver(n, x, y + 1);  
}