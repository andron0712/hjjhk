// ===== Варіант 1 =====
const numbers = [5, 12, 8, 3, 21, 7];

const average = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const max = Math.max(...numbers);
const min = Math.min(...numbers);
const sorted = [...numbers].sort((a, b) => a - b);

console.log("Варіант 1");
console.log("Середнє:", average);
console.log("Макс:", max);
console.log("Мін:", min);
console.log("Сорт:", sorted);


// ===== Варіант 2 =====
const users = [
  { name: "Іван", age: 17 },
  { name: "Марія", age: 22 },
  { name: "Петро", age: 19 }
];

const adults = users.filter(u => u.age > 18);
const names = users.map(u => u.name);
const avgAge = users.reduce((s, u) => s + u.age, 0) / users.length;

console.log("\nВаріант 2");
console.log("Повнолітні:", adults);
console.log("Імена:", names);
console.log("Середній вік:", avgAge);


// ===== Варіант 3 =====
const products = [
  { name: "Яблуко", category: "Фрукти" },
  { name: "Банан", category: "Фрукти" },
  { name: "Морква", category: "Овочі" }
];

const grouped = products.reduce((acc, p) => {
  if (!acc[p.category]) acc[p.category] = [];
  acc[p.category].push(p.name);
  return acc;
}, {});

console.log("\nВаріант 3");
console.log(grouped);


// ===== Варіант 4 =====
const students = {
  Іван: { math: 80, physics: 75, english: 90 },
  Марія: { math: 95, physics: 85, english: 88 }
};

console.log("\nВаріант 4");
for (let s in students) {
  const grades = Object.values(students[s]);
  const avg = grades.reduce((sum, g) => sum + g, 0) / grades.length;
  console.log(`${s}: середній бал = ${avg}`);
}


// ===== Варіант 5 =====
const people = ["Іван", "Марія", "Олексій"];

const result = people.reduce((acc, name) => {
  acc[name] = name.length;
  return acc;
}, {});

console.log("\nВаріант 5");
console.log(result);
