import { Sorter } from './Sorter';

const array: number[] = [5, 0, 10, -1];
console.log('this is the array to sort', array);

// function sort(array: number[]): number[] {
//   for (let entry of array) {
//     console.log('this is entry:', entry);
//   }
//   return [1];
// }

// sort(array);

const sorter = new Sorter(array);
console.log('This is the obj ', sorter.collection);
sorter.sort();
console.log('This is the obj sorted', sorter.collection);
