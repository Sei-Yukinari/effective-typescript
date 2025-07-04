// console.log(
//   'Cylinder r=1 × h=1',
//   'Surface area:',
//   6.283185 * 1 * 1 + 6.283185 * 1 * 1,
//   'Volume:',
//   3.14159 * 1 * 1 * 1
// );
// console.log(
//   'Cylinder r=1 × h=2',
//   'Surface area:',
//   6.283185 * 1 * 1 + 6.283185 * 2 * 1,
//   'Volume:',
//   3.14159 * 1 * 2 * 1
// );
// console.log(
//   'Cylinder r=2 × h=1',
//   'Surface area:',
//   6.283185 * 2 * 1 + 6.283185 * 2 * 1,
//   'Volume:',
//   3.14159 * 2 * 2 * 1
// );

type CylinderFn = (r: number, h: number) => number;
const surfaceArea: CylinderFn = (r, h) => 2 * Math.PI * r * (r + h);
const volume: CylinderFn = (r, h) => Math.PI * r * r * h;
for (const [r, h] of [
  [1, 1],
  [1, 2],
  [2, 1],
] as [number, number][]) {
  console.log(
    `Cylinder r=${r} × h=${h}`,
    `Surface area: ${surfaceArea(r, h)}`,
    `Volume: ${volume(r, h)}`
  );
}

// interface Person {
//   firstName: string;
//   middleName?: string;
//   lastName: string;
// }
// interface PersonWithBirthDate {
//   firstName: string;
//   lastName: string;
//   birth: Date;
// }

interface Person {
  firstName: string;
  lastName: string;
}
interface PersonWithBirthDate extends Person {
  birth: Date;
}

// function distance(a: { x: number; y: number }, b: { x: number; y: number }) {
//   return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
// }

interface Point2D {
  x: number;
  y: number;
}

function distance(a: Point2D, b: Point2D) {
  return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}

// function get(url: string, opts: Options): Promise<Response> {
//   /* ... */
// }
// function post(url: string, opts: Options): Promise<Response> {
//   /* ... */
// }

// type HTTPFunction = (url: string, opts: Options) => Promise<Response>;
// const get: HTTPFunction = (url, opts) => {
//   /* ... */
// };
// const post: HTTPFunction = (url, opts) => {
//   /* ... */
// };

// interface Bird {
//   wingspanCm: number;
//   weightGrams: number;
//   color: string;
//   isNocturnal: boolean;
// }
// interface Mammal {
//   weightGrams: number;
//   color: string;
//   isNocturnal: boolean;
//   eatsGardenPlants: boolean;
// }

interface Vertebrate {
  weightGrams: number;
  color: string;
  isNocturnal: boolean;
}

interface Bird extends Vertebrate {
  wingspanCm: number;
}

interface Mammal extends Vertebrate {
  eatsGardenPlants: boolean;
}

// type PersonWithBirthDate = Person & { birth: Date };

interface State {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
  pageContents: string;
}
// interface TopNavState {
//   userId: string;
//   pageTitle: string;
//   recentFiles: string[];
//   // omits pageContents
// }

// interface TopNavState {
//   userId: State['userId'];
//   pageTitle: State['pageTitle'];
//   recentFiles: State['recentFiles'];
// }

// type TopNavState = {
//   [K in 'userId' | 'pageTitle' | 'recentFiles']: State[K];
// };

type TopNavState = Pick<State, 'userId' | 'pageTitle' | 'recentFiles'>;

interface SaveAction {
  type: 'save';
}
interface LoadAction {
  type: 'load';
}
type Action = SaveAction | LoadAction;
// type ActionType = 'save' | 'load';
type ActionType = Action['type'];
