let num = 10;

// function add(a: number, b: number): number {
//   return a + b;
// }

function logMessage(message: string | null): void {
  if (message) {
    console.log(message);
  }
}

const foo = {
  x: [1, 2],
  bar: {
    name: 'Fred',
  },
};

let i = 0;
for (let x = 0; x < 10; x++) {
  console.log(x);
  {
    let i = 12;
    console.log(i);
  }
}
console.log(i);

const response = fetch('https://jsonplaceholder.typicode.com/posts/1');
