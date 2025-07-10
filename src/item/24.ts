function setLanguage(language: string) {
  console.log(`Language set to: ${language}`);
}

// インライン形式
setLanguage('JavaScript');
// 参照形式
let language = 'JavaScript';
setLanguage(language);

type Language = 'JavaScript' | 'TypeScript' | 'Python';

let language2: Language = 'JavaScript';
setLanguage(language2);

function panTo(where: [number, number]) {
  console.log(`Panning to coordinates: ${where[0]}, ${where[1]}`);
}
panTo([10, 20]);
// const loc = [10, 20];
// panTo(loc);

const loc2: [number, number] = [10, 20];
panTo(loc2);
