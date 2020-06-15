// const { import } = require("mathjs");

const { import }  = require("mathjs");

console.log("Name import and Export");

// to import the file 
import * as Math from ".math"

console.log(Math.add(2,2));
console.log(Math.divide(2,2));
console.log(Math.multiply(2,3));
console.log(Math.subtract(3,2));

console.log(Math.pi);