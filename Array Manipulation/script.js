// Task 1
let fruits = ['apple', 'banana', 'orange'];

function addFruit(arr, fruit) {
    arr.push(fruit);
    return arr;
}
console.log(addFruit(fruits, 'kiwi'))

function removeLastfruit(arr) {
    arr.pop();
    return arr;
}
console.log(removeLastfruit(fruits))

// Task2

let numbers = [3, 1, 5, 2, 4];

function sort(arr) {
    arr.sort();
    return arr
}
console.log(sort(numbers))

// Task 3

function doubleNumbers(arr) {
   return arr.map(num => num * 2)
}
console.log(doubleNumbers(numbers))

function filterNumbers(arr) {
    return arr.filter(num => num % 2 == 0)
} 
console.log(filterNumbers(numbers))

function calculateSum(arr) {
    return arr.reduce((acc, curr) => acc + curr)
}
console.log(calculateSum(numbers))