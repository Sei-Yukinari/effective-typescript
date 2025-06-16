interface Room {
  numDoors: number;
  ceilingHeightFt: number;
}
// const r: Room = {
//   numDoors: 1,
//   ceilingHeightFt: 10,
//   elephant: 'present',
// };

const obj = {
  numDoors: 1,
  ceilingHeightFt: 10,
  elephant: 'present',
};
const r2: Room = obj;
console.log(typeof obj);
console.log(r2);

interface Options {
  title: string;
  darkMode?: boolean;
}
function createWindow(options: Options) {
  function setDarkMode() {}

  if (options.darkMode) {
    setDarkMode();
  }
}
createWindow({
  title: 'Spider Solitaire',
  darkMode: true,
});
