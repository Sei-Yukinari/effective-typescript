// const elem = document.getElementById('what-time-is-it');
// // ^? const elem: HTMLElement | null
// if (elem) {
//   elem.innerHTML = 'Party Time'.blink();
//   // ^? const elem: HTMLElement
// } else {
//   elem;
//   alert('No element #what-time-is-it');
// }

// const elem = document.getElementById('what-time-is-it');
// // ^? const elem: HTMLElement | null
// if (!elem) throw new Error('Unable to find #what-time-is-it');
// elem.innerHTML = 'Party Time'.blink();

function contains(text: string, search: string | RegExp) {
  if (search instanceof RegExp) {
    return !!search.exec(text);
  }
  return text.includes(search);
}

interface Apple {
  isGoodForBaking: boolean;
}
interface Orange {
  numSlices: number;
}
function pickFruit(fruit: Apple | Orange) {
  if ('isGoodForBaking' in fruit) {
    fruit;
  } else {
    fruit;
  }
  fruit;
}

function contains2(text: string, terms: string | string[]) {
  const termList = Array.isArray(terms) ? terms : [terms];
  return termList.some(term => text.includes(term));
}

function isNumber(v: string | number) {
  // ^? function isNumber(v: string | number): v is number
  return typeof v === 'number';
}

console.log(isNumber(1000)); // true

const stringOrNumberArr = [0, '1', 2, '3'];
const stringArr = stringOrNumberArr.filter(v => typeof v === 'number');

console.log(stringArr);

const nameToNickname = new Map<string, string>();
declare let yourName: string;
// let nameToUse: string;
// if (nameToNickname.has(yourName)) {
//   nameToUse = nameToNickname.get(yourName);
// } else {
//   nameToUse = yourName;
// }

const nameToUse = nameToNickname.get(yourName) ?? yourName;
