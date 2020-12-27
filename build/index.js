"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var array = [5, 0, 10, -1];
console.log('this is the array to sort', array);
var numbersCollection = new NumbersCollection_1.NumbersCollection([5, 0, 10, -1]);
// function sort(array: number[]): number[] {
//   for (let entry of array) {
//     console.log('this is entry:', entry);
//   }
//   return [1];
// }
// sort(array);
numbersCollection.sort();
console.log('This is the obj ', numbersCollection.data);
