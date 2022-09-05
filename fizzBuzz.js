// Write a program that prints one line for each number from 1 to 100
// For multiples of three print Fizz instead of the number
// For the multiples of five print Buzz instead of the number
// For numbers which are multiples of both three and five print FizzBuzz instead of the number

function fizzBuzz(number) {
  if (number % 5 == 0 && number % 3 == 0) {
    return "FizzBuzz";
  }
  if (number % 3 == 0) {
    return "Fizz";
  }
  if (number % 5 == 0) {
    return "Buzz";
  }

  return number;
}

module.exports = fizzBuzz;
