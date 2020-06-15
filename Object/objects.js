

var person = {
  name: "Maria Jones",
  age: 21,
  hasDriverLicence: true,
  dateOfBirth: "01/01/2000",
  address: {
    firstLine: "123",
    postCode: "SE1",
    country: "England"
  }
};

console.log(JSON.stringify(person));

console.log(person.name);
console.log(person.age);
console.log(person.hasDriverLicence);
console.log(JSON.stringify(person.address))

console.log(Object.values(person));
