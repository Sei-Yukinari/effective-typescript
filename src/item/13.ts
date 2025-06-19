type TState = {
  name: string;
  capital: string;
};

interface IState {
  name: string;
  capital: string;
}

// const wyoming: TState = {
//   name: 'Wyoming',
//   capital: 'Cheyenne',
//   population: 578_000,
// };

type TDict = { [key: string]: string };
interface IDict {
  [key: string]: string;
}
