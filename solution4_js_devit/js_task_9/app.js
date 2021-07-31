//   9. Создать функцию которая нормализует данные в массиве исключая или преобразуя не подходящие.

// Доступные шаблоны: 
// 'string' => строки, 
// 'number' => числа, 
// 'int' => целые числа, 
// 'float' => числа с плавающей точкой, 
// 'bool' => true | false, 
// 'function' => функция, 
// 'array' => массив, 
// Object => объект {name: 'string'}
// Синтаксис: array_normalize(arr: array, shema: string|Object[, transform: bool = false]): any[]
// Пример: 
// let result = array_normalize(testData4, 'string') // ['Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
// let result2 = array_normalize(testData4, 'string', true) // ['1', '2', '1990', '85', '24', 'Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
// let result3 = array_normalize(testData4, {age: 'float'}) // []
// let result4 = array_normalize(testData4, {age: 'float'}, true) // [{age: 20}, {age: 34}, {age: 46}, {age: 16}, {age: 99}, {age: 11}]

let testData4 = [
  { name: "Vasya", email: "vasya@example.com", age: 20 },
  { name: "Dima", email: "dima@example.com", age: 34 },
  { name: "Colya", email: "colya@example.com", age: 46 },
  { name: "Misha", email: "misha@example.com", age: 16 },
  { name: "Ashan", email: "ashan@example.com", age: 99 },
  { name: "Rafshan", email: "rafshan@example.com", age: 11 },
  1,
  2,
  1990,
  85,
  24,
  "Vasya",
  "colya@example.com",
  "Rafshan",
  "ashan@example.com",
  true,
  false,
  [
    [
      [
        [
          1,
          2,
          1990,
          85,
          24,
          "Vasya",
          "colya@example.com",
          "Rafshan",
          "ashan@example.com",
          true,
          false,
          [{ name: "Rafshan", email: "rafshan@example.com", age: 11 }],
        ],
      ],
    ],
  ],
];



function cutArr(arr) {
  let copy = [];
  arr.forEach((item) => {
    for (let prop in item) {
      let obj = {};
      if (prop === "age") {
        obj[prop] = item[prop];
        copy.push(obj);
      }
    }
  }); 
  return copy;
}





const array_normalize = (arr, type, transform = false) => {
  return arr.filter((item) => {
    if (type === "string" && transform === true) {
      return typeof item === "number" || typeof item === "string";
    } else if (type === "string") {
      return typeof item === "string";
    } else if (type === "number") {
      return typeof item === "number";
    } else if (type === "bool") {
      return typeof item === "boolean";
    } else if (typeof type === "function") {
      return typeof item === "function";
    }
    else if (Array.isArray(type)) {
      return item
    }
    else if (type === "float" && transform === true) {
      return typeof item === "number";
    } else if (type === "int" && transform === true) {
      return typeof item === "number";
    } else if (typeof type === "object" && !Array.isArray(type)) {
      for (let key in type) {
        if (type[key] === "float" && transform === true) {
          return  typeof item[key] === "number";
        }
        else if (type[key] === "int" && transform === true) {
          return typeof item[key] === "number";
        }
        else if (type[key] === "number") {
          return typeof item[key] === "number";
        }
        else {
          return null;
        }
      }
    } else {
      return null;
    }
  });
};

let result = array_normalize(testData4,"string") // ['Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
let result2 = array_normalize(testData4, 'string', true) // ['1', '2', '1990', '85', '24', 'Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
let result3 = array_normalize(testData4, {age: 'float'}) // []
let result4 = cutArr(array_normalize(testData4, {age: 'float'}, true)) // [{age: 20}, {age: 34}, {age: 46}, {age: 16}, {age: 99}, {age: 11}]
let result5 = array_normalize(testData4, []) // весь массив объеков

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);



