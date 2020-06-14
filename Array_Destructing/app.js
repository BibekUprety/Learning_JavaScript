const names = ['Anna', 'Mariam', 'Joe', 'Mark', 'Matt'];


// const anna = names[0];
// const mariam = names[1];
// const joe = names[2];


const[anna,mariam,joe,...restOfNames] = names;

console.log(`${anna} ${mariam} ${joe}`);
console.log(restOfNames.length);
