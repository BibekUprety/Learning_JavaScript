const getGenerator =function* (){
    yield 1;
    yield "Hello";
    yield {name:"Bibek"};
    yield  true
    return "I am done";
}

const numGen=getGenerator();

console.log(numGen.next().value);
console.log(numGen.next().value);
console.log(JSON.stringify(numGen.next().value));
console.log(numGen.next().value);
console.log(numGen.next().value);