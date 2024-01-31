import { Dog } from "./08-inheritace";


// function getVAlue(value: unknown) {
//   return value;
// }

// function getVAlue(value: string | number) {
//   return value;
// }

function getVAlue<T>(value: T) {
  const array: T[] = [value];
  return value;
}

getVAlue<number>(12).toFixed()
getVAlue<string>('12')
getVAlue<number[]>([])
const fifi = new Dog('fifi','lauti')
getVAlue<Dog>(fifi).greeting()
// Promise<boolean>
// axios.get<string>

