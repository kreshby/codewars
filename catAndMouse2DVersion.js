function catMouse(map, moves) {
console.log(map);
console.log(map.length);
console.log(map.indexOf('C'));
console.log(map.indexOf('m'));
console.log(map.indexOf('\n'));
console.log(map.lastIndexOf('\n'));
}
let map = `.C.......
.........
......m..`;
catMouse (map);
console.log(Array.from(map));
//  create matrix NxN

const matrix = (rows, cols) => new Array(cols).fill(0).map((o, i) => new Array(rows).fill(0));

console.log(matrix(10,5));

// plan 
/**
 * 1. Подсчитаем количество переходов строки '\n' это будет ровно количеству строк в матрице
 * 2. количество столбцов в матрице = индексы '\n' минус 1
  * 3. как ходить КОШКЕ?  определяем столбец МЫШИ и если он отличается идем вверх или вниз
  * затем вычисляем расстояние до Мыши и сравниваем его с MOVES
 */