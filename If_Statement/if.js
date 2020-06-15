
var person = {
  name: "Anna",
  age: 16
}

if (person.age >= 18) {
  console.log(person.name + " is an adult");
} else if (person.age == 17) {
  console.log(person.name + " is about to be an adult");
} else {
  console.log(person.name + " is not an adult");
}
