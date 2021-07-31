// 5 Выведите все элементы массива используя рекурсию.

let arr = ['Solnce', 'vishlo', 'iz', 'za', 'tuchi'];


function recurseLog(array) {
    if (array.length) {
        console.log(array.shift());
        recurseLog(array);
      }
  }

recurseLog(arr);


  


