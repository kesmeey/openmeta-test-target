import { greet, add, multiply } from "../src/index";

const assert = (condition: boolean, message: string) => {
  if (!condition) throw new Error(`FAIL: ${message}`);
  console.log(`PASS: ${message}`);
};

assert(greet("World") === "Hello, World!", "greet returns correct string");
assert(add(2, 3) === 5, "add returns correct sum");
assert(multiply(2, 3) === 6, "multiply returns correct product for positive numbers");
assert(multiply(0, 5) === 0, "multiply returns 0 when first argument is zero");
assert(multiply(-2, 3) === -6, "multiply returns correct product for negative numbers");
console.log("All tests passed!");
