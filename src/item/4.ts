interface Vector2D {
  x: number;
  y: number;
}

const calculateLength = (v: Vector2D): number => {
  return Math.sqrt(v.x ** 2 + v.y ** 2);
};

interface NamedVector {
  name: string;
  x: number;
  y: number;
}

const v: NamedVector = {
  name: 'MyVector',
  x: 3,
  y: 4,
};

console.log(`Length of ${v.name}:`, calculateLength(v));

interface Vector3D {
  x: number;
  y: number;
  z: number;
}

function normalize(v: Vector3D) {
  const length = calculateLength(v);
  return {
    x: v.x / length,
    y: v.y / length,
    z: v.z / length,
  };
}

console.log(normalize({ x: 3, y: 4, z: 5 }));

export interface Author {
  first: string;
  last: string;
}
// function getAuthors(database: PostgresDB): Author[] {
//   const authorRows = database.runQuery(`SELECT first, last FROM authors`);
//   return authorRows.map(row => ({ first: row[0], last: row[1] }));
// }

export interface DB {
  runQuery: (sql: string) => Author[];
}
export function getAuthors(database: DB): Author[] {
  return database.runQuery(`SELECT first, last FROM authors`);
}
