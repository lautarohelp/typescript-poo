export class Animal{
  constructor(protected name: string) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`
  }

  protected doSomething() {
    console.log('doo');

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
      console.log(`woof! ${this.name}`);
    }
    this.doSomething();
  }

  move() {
    console.log('moving as a dog');
    super.move();
  }
};

const leon = new Animal('Leon');
leon.move();
console.log(leon.greeting());

const cheis = new Dog('cheis', 'lauti');
// cheis.name = 'hola';
cheis.woof(1);
cheis.move();


