const array: number[] = [5, 0, 10, -1];
console.log('this is the array to sort', array);

// function sort(array: number[]): number[] {
//   for (let entry of array) {
//     console.log('this is entry:', entry);
//   }
//   return [1];
// }

// sort(array);

class Sorter {
  collection: number[];

  constructor(collection: number[]) {
    this.collection = collection;
  }
  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const leftHand = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftHand;
        }
      }
    }
  }
}

const sorter = new Sorter(array);
console.log('This is the obj ', sorter.collection);
sorter.sort();
console.log('This is the obj sorted', sorter.collection);
