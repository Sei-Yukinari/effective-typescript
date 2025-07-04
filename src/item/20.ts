interface Vector3D {
  x: number;
  y: number;
  z: number;
}
function getComponent(vector: Vector3D, axis: 'x' | 'y' | 'z') {
  return vector[axis];
}

const axis = 'x';
// ^? const axis: "x"
const vector: Vector3D = { x: 10, y: 20, z: 30 };
getComponent(vector, axis as 'x' | 'y' | 'z');

const obj2 = {
  x: 1,
};
obj2.x = 3;
// obj.x = '3';
// obj.y = 4;
// obj.z = 5;
// obj.name = 'Pythagoras';

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3] as const;

const frozenArray = Object.freeze([1, 2, 3]);
// // ^? const frozenArray: readonly number[]
const frozenObj = Object.freeze({ x: 1, y: 2 });

// type Point = [number, number];
// const capitals1 = { ny: [-73.7562, 42.6526], ca: [-121.4944, 38.5816] };
// const capitals2 = {
//   ny: [-73.7562, 42.6526],
//   ca: [-121.4944, 38.5816],
// } satisfies Record<string, Point>;
