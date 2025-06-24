function printTriangles(n: number) {
  const nums = [];
  for (let i = 0; i < n; i++) {
    nums.push(i);
    console.log(arraySum(nums as readonly number[]));
  }
}

function arraySum(arr: readonly number[]) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}

printTriangles(5);
//
// interface PartlyMutableName {
//   readonly first: string;
//   last: string;
// }
//
// const jackie: PartlyMutableName = { first: 'Jacqueline', last: 'Kennedy' };
// jackie.last = 'Onassis';
// jackie.first = 'Jacky';
//
// interface FullyMutableName {
//   first: string;
//   last: string;
// }
// type FullyImmutableName = Readonly<FullyMutableName>;
//
// interface Outer {
//   inner: {
//     x: number;
//   };
// }
// const obj: Readonly<Outer> = { inner: { x: 0 } };
// obj.inner = { x: 1 };

// const a: number[] = [1, 2, 3];
// const b: readonly number[] = a;
// const c: number[] = b;
