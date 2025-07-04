const rocket = {
  name: 'Falcon 9',
  variant: 'Block 5',
  thrust: '7,607 kN',
};

type Rocket = { [property: string]: string };
const rocket2: Rocket = {
  name: 'Falcon 9',
  variant: 'v1.0',
  thrust: '4,940 kN',
};

interface Rocket2 {
  name: string;
  variant: string;
  thrust_kN: number;
}
const falconHeavy: Rocket2 = {
  name: 'Falcon Heavy',
  variant: 'v1',
  thrust_kN: 15200,
};

interface ProductRow {
  productId: string;
  name: string;
  price: string;
}
declare let csvData: string;
const products = parseCSV(csvData) as unknown[] as ProductRow[];

function parseCSV(csvData: string) {
  return csvData.split('\n').map(row => row.split(','));
}

type Vec3D = Record<'x' | 'y' | 'z', number>;

const vec: Vec3D = {
  x: 1,
  y: 2,
  z: 3,
};
