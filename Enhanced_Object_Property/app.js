const pricePropertyName = "price";

const calculator =(name,price) =>{
    return{
        name,
        add(n1,n2){
            return n1+n1;
        },
        [pricePropertyName.toLowerCase()]: price
    }
}

const calc = calculator('casio',12222);

console.log(calc.name);
console.log(calc.add(1,2));
console.log(calc.price);