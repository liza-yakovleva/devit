// 6. Написать функцию для выполнения параллельных вычислений без использования Promise.

// var a = function(one, two) {
//   return one + two
// }
// var b = function() {
//   return false;
// }
// paralell([[a, [1, 2]], [b]], function(results) {
//     console.log(results); // [3, false]
// });

var a = function(one, two) {
  return one + two
}
var b = function() {
  return false;
}
async function paralell(f1,f2){
  let res=[];
  await res.push( f1[0][0]( (f1[0][1][0]), (f1[0][1][1])));
  await res.push((f1[1][0]()));
  return f2(res);
}
paralell([[a, [1, 2]], [b]], function(results) {
    console.log(results); 
});

