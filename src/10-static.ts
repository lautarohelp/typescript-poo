console.log(Math.PI);
console.log(Math.max(1,2,3,4,5,6,7,8));


class MyMath {
  static readonly PI = 3.14;

  static max (...numbers: number[]) {
    return numbers.reduce((max, item) => max >= item ? max: item);
  }
}

console.log('MyMath PI',MyMath.PI);
const numbers = [ -1,-3, -4]
console.log('MyMath max',MyMath.max(...numbers));



