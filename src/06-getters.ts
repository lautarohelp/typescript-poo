export class MyDate {

  constructor(
    public year: number = 1999,
    public month: number = 9,
    private _day: number = 9
    ) {}

  printFormat():string {
    const day = this.addPadding(this._day)
    const month = this.addPadding(this.month)
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number){
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  };

  get day() {
    //code
    return this._day;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }
};

const myDate = new MyDate(1999, 9, 10);
console.log(myDate.printFormat());
// console.log(myDate.getDay());
console.log(myDate.day);
console.log('1999', myDate.isLeapYear);

const myDate2 = new MyDate(2024, 9, 10);
console.log('2024', myDate2.isLeapYear);





