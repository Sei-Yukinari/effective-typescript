// export interface SeedAPI {
//   '/seeds': Seed[];
//   '/seed/apple': Seed;
//   '/seed/strawberry': Seed;
//   // ...
// }
//
// interface Seed {
//   id: number;
//   name: string;
//   description: string;
//   createdAt: Date;
//   updatedAt: Date;
// }
//
// const fetchAPI = <T>(path: string): Promise<T> => {
//   return fetch(`https://api.example.com${path}`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => data as T);
// };
//
// const berry = await fetchAPI<SeedAPI>('/seed/strawberry');
//
// console.log(berry);
//
// // 間違った使い方（エラーになる）
// fetchAPI<SeedAPI>('/seed/chicken').then(r => console.log(r)); // 指定されたエンドポイントが存在しない
// const seeds = await fetchAPI<Seed[]>('/seeds');
//
// seeds.forEach(s => {
//   console.log(`Seed ID: ${s.id}, Name: ${s.name}`);
// });
//
// declare class ApiFetcher<API> {
//   fetch<Path extends keyof API>(path: Path): Promise<API[Path]>;
// }
//
// const fetcher = new ApiFetcher<SeedAPI>();
// const berry2 = await fetcher.fetch('/seed/strawberry'); // OK
// fetcher.fetch('/seed/chicken');
//
// const seed2: Seed[] = await fetcher.fetch('/seeds');
// console.log(seed2);

declare function getDate(mon: string, day: number): Date;
getDate('dec', 25);

declare function getDate(mon: string): (day: number) => Date;
getDate('dec')(25);
