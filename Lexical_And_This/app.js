const person ={
    name: "Bibek",
    cars: ["safari","sdadasd"],


toString: function() {
    // console.log(`${this.name} has ${this.cars}`)

    this.cars.forEach(element => {
        console.log(`${this.name} has ${element}`);
    });
}
};

person.toString();