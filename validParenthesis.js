function validParenthesis(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
    } else if (ch === ")") {
      if (stack.length === 0 || stack.pop() !== "(") return false;
    } else if (ch === "]") {
      if (stack.length === 0 || stack.pop() !== "[") return false;
    } else if (ch === "}") {
      if (stack.length === 0 || stack.pop() !== "{") return false;
    }
  }

  return stack.length === 0;
}

// Test cases
console.log(validParenthesis("(())"));
console.log(validParenthesis("(()"));
console.log(validParenthesis("{[(])}"));
console.log(validParenthesis("()[]{}"));
