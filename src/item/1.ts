let city = 'New York';
console.log('city: ', city.toUpperCase());

const states = [
  { name: 'Alabama', capital: 'Montgomery' },
  { name: 'Alaska', capital: 'Juneau' },
  { name: 'Arizona', capital: 'Phoenix' },
];

for (const state of states) {
  console.log(state.capital);
}

// const x = 2 + '3';
// console.log('x: ', x); // '23' 文字列として結合される
// const y = '2' + 3;
// console.log('y: ', y); // '23' 文字列として結合される
//
// const a = null + 7;
// const b = [] + 12;
// alert('Hello', 'TypeScript!'); // 警告が表示される

// const names = ['Alice', 'Bob'];
// console.log(names[2].toUpperCase());
