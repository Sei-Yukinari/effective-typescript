// const x: never = 12;
//
// type A = 'A';
// type B = 'B';
// type Twelve = 12;
//
// type AB = A | B;
// type AB12 = AB | Twelve;
//
// const a: AB = 'A';
// const c: AB = 'C';
//
// const ab: AB = Math.random() < 0.5 ? 'A' : 'B';
// const ab12: AB12 = ab;
//
// declare let twelve: AB12;
// const back: AB = twelve;
//
// interface Person {
//   name: string;
// }
// interface Lifespan {
//   birth: Date;
//   death?: Date;
// }
//
// type PersonSpan = Person & Lifespan;
// const ps: PersonSpan = {
//   name: 'John Doe',
//   birth: new Date('1990-01-01'),
//   death: new Date('2070-01-01'),
// };
//
// interface Vector1D {
//   x: number;
// }
// interface Vector2D extends Vector1D {
//   y: number;
// }
// interface Vector3D extends Vector2D {
//   z: number;
// }

// const list = [1, 2];
// const tuple: [number, number] = [1, 2];
// console.log(list);
//
// const triple: [number, number, number] = [1, 2, 3];
// const double: [number, number] = triple;

// interface Lockbox {
//   code: number;
// }
//
// interface ReadonlyLockbox {
//   readonly code: number;
// }
//
// const box: Lockbox = { code: 4216 };
// const robox: ReadonlyLockbox = { code: 3625 };
// box.code = 1234; // OK
// robox.code = 1234;
