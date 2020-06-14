
var name = "Alex";
var names = ["Alex", "Maria", "Sam", "Mohammado"];
console.log(names);

console.log(names[1]);
console.log(names.length);

for (var n of names) {
  console.log(n);
}

names.forEach(function(n, index) {
  console.log(index + " - " + n);
});
