let x2: number = 12;
let y = 12;

const person: {
  name: string;
  born: {
    where: string;
    when: string;
  };
  died: {
    where: string;
    when: string;
  };
} = {
  name: 'Sojourner Truth',
  born: {
    where: 'Swartekill, NY',
    when: 'c.1797',
  },
  died: {
    where: 'Battle Creek, MI',
    when: 'Nov. 26, 1883',
  },
};

const person2 = {
  name: 'Sojourner Truth',
  born: {
    where: 'Swartekill, NY',
    when: 'c.1797',
  },
  died: {
    where: 'Battle Creek, MI',
    when: 'Nov. 26, 1883',
  },
};

function square(nums: number[]) {
  return nums.map(x => x * x);
}
const squares = square([1, 2, 3, 4]);

interface Product {
  id: number;
  name: string;
  price: number;
}
function logProduct(product: Product) {
  const id: number = product.id;
  const name: string = product.name;
  const price: number = product.price;
  console.log(id, name, price);
}

interface Product2 {
  id: string;
  name: string;
  price: number;
}
function logProduct2(product: Product2) {
  const { id, name, price } = product;
  console.log(id, name, price);
}

const elmo: Product2 = {
  name: 'Tickle Me Elmo',
  id: '048188 627152',
  price: 28.99,
};

const furby = {
  name: 'Furby',
  id: 630509430963,
  price: 35,
};
// logProduct2(furby);
