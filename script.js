console.log('Hello!');
// 1. Write an arrow function that checks if a number is odd. Print the output.
const isOdd = (num) => num % 2 == 0;
console.log(isOdd(5));

// 2. Write an arrow function that calculates the length of a string. Print the length.
const calculateLength = (str) => str.length;
console.log(calculateLength('hey'));

// 3. Write an arrow function that capitalizes a given string. For example: If we pass "hello" as string, the output should be "HELLO". Explore the method in javaScript to convert all letters to capital letters.
const capitalizeString = (str) => str.toUpperCase();
console.log(capitalizeString('hello'));

// 4. Write an arrow function that returns the current date in MM/DD/YYYY format. Print the output.
const getCurrentDate = () => {
  const today = new Date();
  const month = today.getMonth() + 1; // Month starts from 0, so add 1
  const day = today.getDate();
  const year = today.getFullYear();
  return `${month}/${day}/${year}`;
};

console.log(getCurrentDate());

// 5. Write an arrow function that returns the current time in HH:MM:SS format. Print the output.
const getCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours(); // Gets the current hour
  const minutes = now.getMinutes(); // Gets the current minutes
  const seconds = now.getSeconds(); // Gets the current seconds
  return `${hours}:${minutes}:${seconds}`;
};

console.log(getCurrentTime());

// 6. Write an arrow function that converts Fahrenheit to Celsius. Print the output.
const convertFahrenheitToCelsius = (f) => ((f - 32) * 5) / 9;
console.log(convertFahrenheitToCelsius(100));

// 7. Write an arrow function that checks if a given string is empty.
const isEmptyString = (str) => (str.length == 0 ? `yes empty` : `not empty`);
// code for function call
console.log(isEmptyString('Hello'));
console.log(isEmptyString(''));

// 8. Write an arrow function that returns a random number between 1 and 30. Print the number.
const printRandom = () => Math.floor(Math.random() * 30);
console.log(printRandom());

// 9. Write an arrow function that returns the square root of a random number between 1 and 100. Print the square root. Explore the method in javaScript to find square root.
const findRandomNoSquare = () => Math.floor(Math.random() * 100) ** 2;
console.log(findRandomNoSquare());

// 10. Write an arrow function that changes a given string in lower case. For example: If we pass "WORLD" as string, the output should be "world". Explore the method in javaScript to convert all letters to lowercase letters.
const changesToLowerCase = (str) => str.toLowerCase();
console.log(changesToLowerCase('Hello'));
