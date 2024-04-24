// Напиши функцію filterArray(numbers, value), яка приймає масив чисел (numbers) та значення (value) як параметри. Функція повинна повертати новий масив лише тих чисел із масиву numbers, які більші за значення value.

// Усередині функції:

// Створи порожній масив, у який будеш додавати підходящі числа.
// Використай цикл для ітерації кожного елемента масиву numbers.
// Використовуй умовний оператор if усередині циклу для перевірки кожного елемента и додавання до свого масиву.
// Поверни свій новий масив з підходящими числами як результат.

function filterArray(numbers, value) {
  const newArr = [];
  for (const items of numbers) {
    if (items > value) {
      newArr.push(items);
    }
  }
  return newArr;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// TODO:=========task-05=================
//Напишіть функцію calculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// function calculateAverage() {
//   const argm = Array.from(arguments);
//   let totalSum = 0;
//   let count = 0;

//   for (const items of argm) {
//     if (typeof items !== "number") continue;
//     totalSum += items;
//     count += 1;
//   }
//   return totalSum / count;
// }
// console.log(calculateAverage(4, 6, 8, 9, "px"));
