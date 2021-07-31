// 8. Сделать функцию которая обрезает массив до указанного значения.

// Синтаксис: array_skip_until(arr: array, value: any): any[]
// Пример: 
// let result = array_skip_until(testData, 2) // [2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]
// let result2 = array_skip_until(testData, "Rafshan") // ["Rafshan", "ashan@example.com", true, false]
// let result3 = array_skip_until(testData, "asd") // []

let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];

const array_skip_until = (arr, value) => {
  
 let resultArr=[];
if(arr.includes(value)) {
  resultArr=arr.slice(arr.indexOf(value))
};
return resultArr;
};

let result = array_skip_until(testData,2);
let result2 = array_skip_until(testData,"Rafshan") ;
let result3 = array_skip_until(testData,true); 
let result4 = array_skip_until(testData,"asd"); 

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
