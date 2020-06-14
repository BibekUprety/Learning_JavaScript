
class Animal {
    constructor(name, age) {
      console.log(`${name} is an animal and was created`);
      this.name = name;
      this.age = age;
    }
    eat()
        {
            console.log(`${this.name} is eating`);
            
        }
    sleep()
        {
            console.log(`${this.name} is sleeping`);
            
        }
    wakeUp()
        {
            console.log(`${this.name} is a wakeup`);
            
        }
    logAge()
        {
            console.log(`${this.name} is ${this.age} yrs old`);
            
        }

    }

    const  boobly = new Animal("dog",4);

    console.log(boobly.eat());
    console.log(boobly.sleep());
    console.log(boobly.wakeUp());
    console.log(boobly.wakeUp());
    console.log(boobly.logAge());

    console.log("--------------------------------------------------");


    const  sadasd = new Animal("cat",4);

    console.log(sadasd.eat());
    console.log(sadasd.sleep());
    console.log(sadasd.wakeUp());
    console.log(sadasd.wakeUp());
    console.log(sadasd.logAge());
