//  Допустим, у вас есть функция primitiveMultiply, которая в 50% случаев перемножает 2 числа,
//  а в остальных случаях выбрасывает исключение типа MultiplicatorUnitFailure. Напишите функцию,
//   обёртывающую эту, и просто вызывающую её до тех пор, пока не будет получен успешный результат.

function MultiplicatorUnitFailure() {}
function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}




// Вариант первый. 
  function reliableMultiply1(a, b) {
    try {
      return primitiveMultiply(a, b);
    } catch (error) {
      if (error instanceof MultiplicatorUnitFailure) {
        return reliableMultiply(a, b);
      } else {
        throw error;
      }
    }
  }
  


// Вариант второй с  циклом for. 
  function reliableMultiply2(a, b) {
    for (;;) {
      try {
        return primitiveMultiply(a, b);
      } catch (error) {
        if (error instanceof MultiplicatorUnitFailure) {
          continue;
        } else
          throw error;
      }
    }
  }
  
  console.log(reliableMultiply1(8, 8));
  console.log(reliableMultiply2(8, 8));






  


