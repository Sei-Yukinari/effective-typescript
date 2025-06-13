interface Square {
  width: number;
}

interface Rectangle extends Square {
  height: number;
}

type Shape = Square | Rectangle;

// function calculateArea(shape: Shape): number {
//   if (shape instanceof Rectangle) {
//     return shape.width * shape.height;
//   } else {
//     return shape.width * shape.width;
//   }
// }

function calculateArea(shape: Shape) {
  if ('height' in shape) {
    return shape.width * shape.height;
    // ^? (parameter) shape: Rectangle
  } else {
    return shape.width * shape.width;
  }
}

function asNumber(val: number | string): number {
  return val as number;
}

console.log(asNumber(1000));
console.log(asNumber('1000'));
console.log(asNumber('aaaa'));

function setLightSwitch(value: boolean) {
  switch (value) {
    case true:
      // turnLightOn();
      break;
    case false:
      // turnLightOff();
      break;
    default:
      console.log(`I'm afraid I can't do that.`);
  }
}
