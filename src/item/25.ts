function range(start: number, limit: number) {
  const nums = [];
  for (let i = start; i < limit; i++) {
    nums.push(i);
  }
  return nums;
}

const numbers = range(0, 10);
console.log(numbers);

const result = [];
result.push('a');

// const typeCheck: never = result;

result.push(1);

// const typeCheck: never = result;
