"use strict";
var array = [5, 0, 10, -1];
console.log('this is the array to sort', array);
// function sort(array: number[]): number[] {
//   for (let entry of array) {
//     console.log('this is entry:', entry);
//   }
//   return [1];
// }
// sort(array);
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    var leftHand = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = leftHand;
                }
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter(array);
console.log('This is the obj ', sorter.collection);
sorter.sort();
console.log('This is the obj sorted', sorter.collection);
