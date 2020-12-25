"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var array = [5, 0, 10, -1];
console.log('this is the array to sort', array);
// function sort(array: number[]): number[] {
//   for (let entry of array) {
//     console.log('this is entry:', entry);
//   }
//   return [1];
// }
// sort(array);
var sorter = new Sorter_1.Sorter(array);
console.log('This is the obj ', sorter.collection);
sorter.sort();
console.log('This is the obj sorted', sorter.collection);
