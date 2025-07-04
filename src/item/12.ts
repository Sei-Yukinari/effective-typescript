// function rollDice1(sides: number): number {
//   return Math.floor(Math.random() * sides) + 1;
// }
//
// const rollDice2 = function (sides: number): number {
//   return Math.floor(Math.random() * sides) + 1;
// };
//
// const rollDice3 = (sides: number) => {
//   return Math.floor(Math.random() * sides) + 1;
// };
//
// function add(a: number, b: number) {
//   return a + b;
// }
// function sub(a: number, b: number) {
//   return a - b;
// }
// function mul(a: number, b: number) {
//   return a * b;
// }
// function div(a: number, b: number) {
//   return a / b;
// }
//
// type BinaryFn = (a: number, b: number) => number;
// const add2: BinaryFn = (a, b) => a + b;
// const sub2: BinaryFn = (a, b) => a - b;
// const mul2: BinaryFn = (a, b) => a * b;
// const div2: BinaryFn = (a, b) => a / b;
//
// async function getQuote() {
//   const response = await fetch('/quote?by=Mark+Twain');
//   return await response.json();
// }
//
// // async function checkedFetch(input: RequestInfo, init?: RequestInit) {
// //   const response = await fetch(input, init);
// //   if (!response.ok) {
// //     // async関数で例外を投げると拒否されたPromiseになる
// //     throw new Error(`Request failed: ${response.status}`);
// //     return response;
// //   }
// // }
//
// // async function checkedFetch(
// //   input: RequestInfo,
// //   init?: RequestInit
// // ): Promise<Response> {
// //   const response = await fetch(input, init);
// //   if (!response.ok) {
// //     throw new Error(`Request failed: ${response.status}`);
// //   }
// //   return response;
// // }
