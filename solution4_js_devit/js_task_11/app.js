// 11. Сделать функцию которая сможет делать срез данных с ассоциативного массива.

// Синтаксис: array_pluck(arr: array, path: string): any[]
// Пример:
// let result = array_pluck(testData3, 'name') // ["Vasya", "Dima", "Colya", "Misha", "Ashan", "Rafshan"]
// let result2 = array_pluck(testData3, 'skills.php') // [0, 5, 8, 6, 0, 0]


let testData3 = [
  {
    name: "Vasya",
    email: "vasya@example.com",
    age: 20,
    skills: { php: 0, js: -1, madness: 10, rage: 10 },
  },
  {
    name: "Dima",
    email: "dima@example.com",
    age: 34,
    skills: { php: 5, js: 7, madness: 3, rage: 2 },
  },
  {
    name: "Colya",
    email: "colya@example.com",
    age: 46,
    skills: { php: 8, js: -2, madness: 1, rage: 4 },
  },
  {
    name: "Misha",
    email: "misha@example.com",
    age: 16,
    skills: { php: 6, js: 6, madness: 5, rage: 2 },
  },
  {
    name: "Ashan",
    email: "ashan@example.com",
    age: 99,
    skills: { php: 0, js: 10, madness: 10, rage: 1 },
  },
  {
    name: "Rafshan",
    email: "rafshan@example.com",
    age: 11,
    skills: { php: 0, js: 0, madness: 0, rage: 10 },
  },
];


const arrayPluck = (asArray, objPath) => {
  const arrProps = objPath.split(".");
  let array_pluck = [];
  for (const property of asArray) {
    arrProps.length===2
    ? 
      array_pluck.push(property[arrProps[0]][arrProps[1]])
    :
      array_pluck.push(property[arrProps[0]])
    
  }
  return array_pluck;
}

let result = arrayPluck(testData3, 'skills.js')
let result1 = arrayPluck(testData3, 'name')
let result2 = arrayPluck(testData3, 'skills.rage')
let result3 = arrayPluck(testData3, 'email')

console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
