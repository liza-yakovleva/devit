// 10. Сделать функцию которая возвращает уникальные элементы массива.

// Синтаксис: array_unique(arr: array): any[]
// Пример:
// let result = array_unique(testData.concat(testData2)) // [1, 2, 1990, 85, 24, 5, 7, 8.1, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]

let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];



// Solution 1
const array_unique = arr => [...new Set(arr)].sort()



// Solution 2
// function array_unique(array) {
//   let result = [];
//   for (let item of array) {
//     if (!result.includes(item)) {
//       result.push(item);
//     }
//   }
//   return result.sort();
// }


let result = array_unique(testData.concat(testData2))
console.log(array_unique(result) ); 