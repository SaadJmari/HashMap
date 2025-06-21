import hashMap from './hashmap.js';

const test = hashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log(test.get('banana'));
console.log(test.has('dog'));
console.log(test.length());
test.remove('banana');
console.log(test.has('banana'));

test.set('moon', 'silver');
console.log(test.length());
console.log(test.entries());
