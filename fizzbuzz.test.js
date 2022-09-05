const fizzBuzz = require("./fizzBuzz");

// For numbers which are multiples of both three and five print FizzBuzz instead of the number

describe("FizzBuzz should", () => {
  test("print the number", () => {
    expect(fizzBuzz(1)).toBe(1);
    expect(fizzBuzz(13)).toBe(13);
  });

  test("print Fizz instead of the number for multiples of three", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(6)).toBe("Fizz");
  });

  test("print 'Buzz' instead of the number for multiples of five", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  test("print 'FizzBuzz' instead of the number for multiples of three and five", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
});
