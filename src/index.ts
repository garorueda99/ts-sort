import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const array: number[] = [5, 0, 10, -1];
console.log('this is the array to sort', array);
const numbersCollection = new NumbersCollection(array);
numbersCollection.sort();
console.log('This is the sorted collection ', numbersCollection.data);

const charactersCollection = new CharactersCollection('xAbYC');
console.log('this is the string to sort', charactersCollection.data);
charactersCollection.sort();
console.log('This is the sorted collection ', charactersCollection.data);
