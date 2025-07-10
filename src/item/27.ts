// declare function fetchURL(
//   url: string,
//   callback: (response: string) => void
// ): void;
// //callback
// fetchURL(url1, function (response1) {
//   fetchURL(url2, function (response2) {
//     fetchURL(url3, function (response3) {
//       // ...
//       console.log(1);
//     });
//     console.log(2);
//   });
//   console.log(3);
// });
// console.log(4);
//
// // Promise
// const page1Promise = fetch(url1);
// page1Promise
//   .then(response1 => {
//     return fetch(url2);
//   })
//   .then(response2 => {
//     return fetch(url3);
//   })
//   .then(response3 => {
//     // ...
//   })
//   .catch(error => {
//     // ...
//   });
//
// //async/await
// async function fetchPages() {
//   try {
//     const response1 = await fetch(url1);
//     const response2 = await fetch(url2);
//     const response3 = await fetch(url3);
//     // ...
//   } catch (e) {
//     // ...
//   }
// }
