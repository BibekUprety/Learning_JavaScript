console.log("MAp||Filter||Reduce")

// for filter
console.log("[].filter")

var map =[1,2,3,4,5].map(function(n){
    return n*2;
});

console.log(map);

// for filter 
console.log("[].filter")
var filter=[1,2,3,4,5].filter(function(n){
    return n%2==0;
});

console.log(filter);

// for reduce
console.log("[].reduce")

var reduce =[1,2,3,4].reduce(function(accumulator,current){
    return accumulator+current;

});

console.log(reduce);
