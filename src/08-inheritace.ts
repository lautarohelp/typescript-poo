export class Animal{
  constructor(public name: string) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`
  }
}

export class Dog extends Animal {

  constructor(
    name: string,
    public owner: string,
  ){
    super(name)
  };

  woof(times: number):void {
    for (let index = 0; index < times; index++) {
      console.log('woof!');
    }
  }
};

const leon = new Animal('Leon');
leon.move();
console.log(leon.greeting());

const cheis = new Dog('cheis', 'lauti');
cheis.move();
console.log(cheis.greeting());
cheis.woof(4);
console.log(cheis.owner);


