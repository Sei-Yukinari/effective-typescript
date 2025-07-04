// const pt = {};
// pt.x = 3;
// pt.y = 4;

interface Point {
  x: number;
  y: number;
}
// const pt: Point = {};

const pt2: Point = {} as Point;
pt2.x = 3;
pt2.y = 4;

const pt3: Point = {
  x: 3,
  y: 4,
};

// const pt4 = { x: 3, y: 4 };
// const id = { name: 'Pythagoras' };
// const namedPoint = {};
// Object.assign(namedPoint, pt, id);
// namedPoint.name;
const id = { name: 'Pythagoras' };
const namedPoint = { ...pt3, ...id };
// ^? const namedPoint: { name: string; x: number; y: number; }
namedPoint.name;
