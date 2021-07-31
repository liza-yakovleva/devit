// 4. Расширить прототип Array, добавив к нему метод добавления элемента в начало без использование unshift.

let array = [1, 2, 3, 4, 5, 6, 7];

Array.prototype.addElem = (...args) => [...args, ...array]


array=array.addElem(0);
console.log(array);





  


