import { greet, add } from "../src/index";

const assert = (condition: boolean, message: string) => {
  if (!condition) throw new Error(`FAIL: ${message}`);
  console.log(`PASS: ${message}`);
};

assert(greet("World") === "Hello, World!", "greet returns correct string");
assert(add(2, 3) === 5, "add returns correct sum");
console.log("All tests passed!");