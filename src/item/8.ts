// interface Cylinder {
//   radius: number;
//   height: number;
// }
// const Cylinder = (radius: number, height: number) => ({ radius, height });

// function calclateVolume(shape: unknown) {
//   if (shape instanceof Cylinder) {
//     shape.radius;
//   }
// }

type T1 = 'string literal';
const v1 = 'string literal';
type T2 = 123;
const v2 = 123;

interface Person {
  first: string;
  last: string;
}
const jane: Person = { first: 'Jane', last: 'Jacobs' };

class Cylinder {
  radius: number;
  height: number;
  constructor(radius: number, height: number) {
    this.radius = radius;
    this.height = height;
  }
}

function calculateVolume(shape: unknown) {
  if (shape instanceof Cylinder) {
    shape;
    shape.radius;
  } else {
    throw new Error('Unknown shape');
  }
}

// type T1 = typeof jane;
