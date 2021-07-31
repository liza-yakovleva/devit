let obj = {
 
  name: "Швейцария",
  languages: ["немецкий", "французский", "итальянский"],
  capital:{
   
      name: "Берн",
      population: 126598
  },
  cities: [
      { name: "Цюрих", population: 378884},
      { name: "Женева", population: 188634},
      { name: "Базель", population: 164937}
  ]
};

//1.Метод глубокого копирования объекта JSON
let deepCloneObj = obj => JSON.parse(JSON.stringify(obj));
let cloneObj = deepCloneObj(obj);

// 2.Метод поверхностного копирования объекта Object.assign
// let deepCloneObj = obj => Object.assign({}, obj);
// let cloneObj=deepCloneObj(obj)

// 3.Метод поверхностного копирования объекта Spread Syntax
// let deepCloneObj = obj =>({...obj})
// let cloneObj=deepCloneObj(obj)



// 4.Метод поверхностного копирования цикл for-of для перебора свойств объекта
// let cloneObj = {};
// let deepCloneObj = obj =>{
//   for (property in obj) {
//     cloneObj[property] = obj[property];
//   }
// }
// deepCloneObj(obj)

// 5.Метод  глубокого копирования  рекурсия(не полная проверка)
// let cloneObj = {};
// function deepCloneObj(obj, cloneObj) {

//   for(key in obj) {
//       if(typeof obj[key] != "object") {
//         cloneObj[key] = obj[key];
//       } else {
//         cloneObj[key] = {};
//         deepCloneObj(obj[key], cloneObj[key]);
//       }
//   }
// }
// deepCloneObj(obj, cloneObj );



// 6.Метод  глубокого копирования из библиотеки lodash
// let deepCloneObj = obj => _.cloneDeep(obj);
// let cloneObj=deepCloneObj(obj)

 

console.log(cloneObj); 
console.log(obj); 


