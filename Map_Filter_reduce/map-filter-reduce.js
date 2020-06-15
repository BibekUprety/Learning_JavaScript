

var mapCallback = function(n) {
  return n * 2;
}

var map = [1, 2, 3, 4, 5].map(mapCallback);

console.log("[].map");
console.log(map);

console.log("[].filter");
var filter = [1, 2, 3, 4, 5, 10, 29, 100].filter(function(n) {
  return n % 2 == 0;
});

console.log(filter);

console.log("[].reduce");
var reduce = [1, 2, 3, 4, 5].reduce(function(accumulator, current) {
  return accumulator + current;
});

console.log(reduce);
