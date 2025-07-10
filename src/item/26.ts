const csvData2 = 'name,age,city\nJohn,25,Tokyo\nMary,30,Osaka\nBob,35,Kyoto';
const rawRows = csvData2.split('\n');
const headers = rawRows[0]?.split(',') || [];
const rows = rawRows.slice(1).map(rowStr =>
  rowStr.split(',').reduce(
    (row, val, j) => {
      if (headers[j]) row[headers[j]] = val;
      return row;
    },
    {} as { [key: string]: string }
  )
);
console.table(rows);

interface BasketballPlayer {
  name: string;
  team: string;
  salary: number;
}
declare const rosters: { [team: string]: BasketballPlayer[] };

let allPlayers: BasketballPlayer[] = [];
for (const players of Object.values(rosters)) {
  allPlayers = allPlayers.concat(players); // OK
}
