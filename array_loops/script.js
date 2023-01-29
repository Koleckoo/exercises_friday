const numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17]
// let counter = 0;
// numbers.forEach((number) => {
//     //counter += number;
//     if (number > 0) {
//         counter += number;
//     }
    
// })
// let avarage = counter/numbers.length
// console.log(avarage);
// console.log(counter);

// INTERMIDIATE
// 1.
// for (let i = 0; i <numbers.length; i++) {
//     if (numbers[i] > numbers[i-1]) {
//         console.log(numbers[i]);
//     }
// }

// 2.
// for (let i = 0; i <numbers.length; i++) {
//     if (numbers[i] > numbers[i-1] && numbers[i] > numbers[i+1]) {
//         console.log(numbers[i]);
//     }
// }

//3. 4. 
// let counter = 0;
// for (let i = 0; i <numbers.length; i++) {
//     counter += numbers[i];
// }
// let avarage = (counter/numbers.length)
// console.log(counter);
// console.log(avarage);;

// let sum = 0;

// for (let i = 0; i <numbers.length; i++) {
//     sum += (numbers[i] - avarage) **2
// }
// console.log(sum);
// let variance = sum/numbers.length
// console.log(variance)

//5.
//console.log(Math.max(...numbers));
//6.
// let maximum = null;
// for (let i = 0; i <numbers.length; i++) {
//     if(maximum === null || numbers[i] > maximum && numbers[i] < 16) {
//         maximum = numbers[i]
//     }
// }
// console.log(maximum);

// 7. 
// let reversed = [];
// for (let i = 0; i <numbers.length; i++) {
//     reversed.unshift(numbers[i]);
// }
// console.log(reversed);
// ADVANCED LEVEL
// 1. 
// let longest = 1;
// let current = 1;
// for (let i = 0; i <numbers.length; i++) {
//     if (numbers[i] > numbers[i -1]) {
//         current += 1;
//     } else {
//         if (current > longest) {
//             longest = current;
//         } else {
//             current = 1;
//         }
//     }
// }

//2.
// let longest = 1;
// let current = 1;
// let ascending = true;
// for(let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > numbers[i-1]) {
//         if (ascending) {
//             current += 1;
//         } else {
//             if (current > longest) {
//                 longest = current;
//             }
//         current = 1;
//         }
//     } else {
//         if (ascending) {
//             current = 1;
//             if (current > longest) {
//                 longest = current;
//             }
//         } else {
//             current += 1;
//         }
//     }
// }

// if (current > longest) {
//     longest = current;
//   }
// console.log(longest);

//3.
// let max = Math.max(...numbers);
// let smax = 0;
// for(let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < max && smax < numbers[i]) {
//         smax = numbers[i];
//     } 
// }

// console.log(max);
// console.log(smax);

// 4. 
// let peak = Infinity;
// let valley = -Infinity;
 
// for(let i = 1; i < numbers.length - 1; i++) {
//     if (numbers[i] > numbers[i-1] && numbers[i] > numbers[i+1]) {
//         if (numbers[i] < peak) {
//         peak = numbers[i];
//         }
//     } else if (numbers[i] < numbers[i-1] && numbers[i] < numbers[i+1]) {
//         if (numbers[i] > valley) {
//             valley = numbers[i];
//         }
//     }
// }

// console.log(peak);
// console.log(valley);

// WORKING WITH ARRAYS
// length of an array withou .length
// const array = [5, 4, 3, 6, 7];
// const len = (array) => {
//     let counter = 0;
//     for (let i = 0; i < array.length; i++) {
//         counter ++;
//     }
//     return counter
// }

// const arrayLength = len(array)
// console.log(arrayLength);

//last item of an array withou .length
// const array = [5, 4, 3, 6, 7];
// const len = (array) => {
//     let item = 0;
//     for (let i = 0; i < array.length; i++) {
//         item = array[i - 1];
//     }
//     return item
// }

// const lastItem = len(array)
// console.log(lastItem);