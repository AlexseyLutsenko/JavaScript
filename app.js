window.onload = function app() {

//Построение треугольника в цикле
// let str = '';
//
// for (let i = 0; i < 7; i++) {
//
//     console.log(str += '#');
//
// }

//FizzBuzz
// let result;
// for (let i = 1; i <= 100; i++) {
//
//     if(i % 3 == 0 && i % 5 == 0) {
//         result = 'FizzBuzz'
//     } else if (i % 3 == 0) {
//         result = 'Fizz'
//     } else if (i % 5 == 0) {
//         result = 'Buzz'
//     } else  {
//         result = i
//     }
//
//     console.log(result);
//
// }

//Шахматная доска
// let width = 10;
// let height = 8;
// let result ='';
//
// for (let i = 0; i < height; i++) {
//     for (let a = 0; a < width; a++) {
//
//         if (i % 2 == 0) {
//             if (a % 2 == 0) {
//                 result += ' ';
//             } else {
//                 result += '#';
//             }
//         } else {
//             if (a % 2 == 0) {
//                 result += '#';
//             } else {
//                 result += ' ';
//             }
//         }
//     }
//
//     result += '\n';
// }
//
// console.log(result);

// Сумма диапазона
// let arrNumber = [];
// function range(startNumber,endNumber,step) {
//     if (startNumber > endNumber) {
//         if (step < 0) {
//             for (let i = startNumber; i >= endNumber; i += step) {
//
//                 arrNumber.push(i);
//             }
//         } else {
//             alert(Error)
//         }
//
//     } else {
//         if (step > 0) {
//             for (let i = startNumber; i <= endNumber; i += step) {
//
//                 arrNumber.push(i);
//             }
//         } else {
//             alert(Error)
//         }
//
//     }
//
//     return arrNumber
// }
//
// function sum(array) {
//     let sumArr = array.reduce((a,b) => a+b);
//     return sumArr;
// }
//
//     console.log(range(5,2,1))

// Обращаем вспять массив
// function reverse(arr) {
//     let arrayData = [];
//
//     for (let i = arr.length - 1; i >= 0; i--) {
//         arrayData.push(arr[i]);
//     }
//
//     return arrayData;
// }
// let arrayValue = [1,2,3,4,5,6];
//     console.log(reverse(arrayValue));
//
//
// function reverseArrayInPlace(array) {
//     for (let i = 0; i < Math.floor(array.length / 2); i++) {
//         let old = array[i];
//         array[i] = array[array.length - 1 - i];
//         array[array.length - 1 - i] = old;
//     }
//     return array;
// }
//     console.log(reverseArrayInPlace(arrayValue));

// Список
// function arrayToList(array) {
//     let list = null;
//     for (let i = array.length - 1; i >= 0; i--)
//         list = {value: array[i], rest: list};
//     return list;
// }
//
// function listToArray(list) {
//     let array = [];
//     for (let node = list; node; node = node.rest)
//         array.push(node.value);
//     return array;
// }
//
// function prepend(value, list) {
//     return {value: value, rest: list};
// }
//
// function nth(list, n) {
//     if (!list)
//         return undefined;
//     else if (n == 0)
//         return list.value;
//     else
//         return nth(list.rest, n - 1);
// }
//
//     console.log(arrayToList([10, 20]));
// // → {value: 10, rest: {value: 20, rest: null}}
//     console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
//     console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
//     console.log(nth(arrayToList([10, 20, 30]), 1));
// // → 20


















};


