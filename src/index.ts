import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const array: number[] = [5, 0, 10, -1];
console.log('this is the array to sort', array);
const numbersCollection = new NumbersCollection([5, 0, 10, -1]);

// function sort(array: number[]): number[] {
//   for (let entry of array) {
//     console.log('this is entry:', entry);
//   }
//   return [1];
// }

// sort(array);

numbersCollection.sort();
console.log('This is the obj ', numbersCollection.data);
