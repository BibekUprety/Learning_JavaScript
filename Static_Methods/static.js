
class Animal {
    constructor(name, age) {
      console.log(`${name} is an animal and was created`);
      this.name = name;
      this.age = age;
    }
  
    static iAmAstaticMethod() {
      console.log('I am a static method inside of an Animal class');
    }
  
    eat() {
      console.log(`${this.name} is eating`);
    }
  
    sleep() {
      console.log(`${this.name} is sleeping`);
    }
  
    wakeUp() {
      console.log(`${this.name} is waking up`);
    }
  
    logAge() {
      console.log(`${this.name} is ${this.age} year old`);
    }
  }
  
  class Dog extends Animal {
    constructor(name, age, breed) {
      super(name, age)
      this.breed = breed;
    }
  
    logBreed() {
      console.log(`${this.name} is a ${this.breed}`);
    }
  
    logAgeFromDog() {
      super.console.logAge();
    }
  }
  
const mike = new Dog('Mike', 4, 'Bulldog');
mike.logBreed();
mike.logAgeFromDog();

log('----------')

const josh = new Cat('Josh', 1);
josh.logAgeFromCat();
josh.eat();
josh.sleep();
josh.wakeUp();
josh.logAge();
  


Animal.iAmAstaticMethod();

