// 7. Make a function of finding values in the array.

// Синтаксис: array_find(arr: array, search: string|regex): string|number[]|null
// Пример: 
// let result = array_find(testData, '/^raf.*/i') // ["Rafshan"]
// let result2 = array_find(testData, "Rafshan") // ["Rafshan"]
 

let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];

const array_find = (arr, search) => {
  if (search[0]!="/"){
    regexp = new RegExp(search,"i");
    return arr.filter(i => regexp.test(i));}
    else{
    regexp = new RegExp(search.substr(1, 2),"i");
    return arr.filter(i => regexp.test(i));} 
  }
  

console.log(array_find(testData, "raf"));
console.log (array_find(testData, "Rafshan"));
console.log (array_find(testData, `/^raf.*/i`) );