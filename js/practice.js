const stuInfo = JSON.stringify({ name: "James", roll: 3 });
const stundentsInfo = JSON.parse(stuInfo);
console.log(stundentsInfo.name);

const premikas = { name: 'keka ferdousi', cars: { brand: 'toyota' } }
const { brand } = premikas.cars;
console.log(brand);