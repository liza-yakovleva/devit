// Свертка. Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив, у которого есть все элементы входных массивов.
// var arrays = [[1, 2, 3], [4, 5], [6]];
 // Ваш код 
 // > [1, 2, 3, 4, 5, 6]


let arr =[[1, 2, 3], [4, 5], [6]];


// Через функцию
//  getArray=arr=>{
//   return arr.reduce((total, val) => total.concat(val), []);
// }
// console.log(getArray(arr));

// Через переменную
arr = arr.reduce((total, val) => total.concat(val));
console.log(arr);








  


