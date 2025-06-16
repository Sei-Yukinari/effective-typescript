function getStringLen(foo: String) {
  return foo.length;
}
getStringLen('hello'); // OK
getStringLen(String('hello')); // OK

// function isGreeting(phrase: String) {
//   return ['hello', 'good day'].includes(phrase);
// }

function isGreeting(phrase: string) {
  return ['hello', 'good day'].includes(phrase);
}

const s: String = 'primitive';
const n: Number = 12;
const b: Boolean = true;
console.log(s);
console.log(typeof BigInt(1234));
console.log(typeof Symbol('sym'));
