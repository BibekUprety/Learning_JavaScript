const address ={
    district :"ktm",
    zone:"Bagmati",
    country :"Nepal"
};
const name ={
    firstName :"Bibek",
    lastName:"Upreti"
};

const person={...address,...name};

console.log(JSON.stringify(person,null,2));