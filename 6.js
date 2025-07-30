var convert = function (s, numRows) {
  if (numRows === 1 || numRows >= s.length) return s; // Edge cases: single row or rows >= string length

  // Initialize an array of strings for each row
  let rows = new Array(numRows).fill("");
  let currentRow = 0;
  let goingDown = false; // Start by going up (or down after first character)

  // Iterate through each character in the string
  for (let i = 0; i < s.length; i++) {
    rows[currentRow] += s[i]; // Add current character to the row

    // If at the first or last row, reverse direction
    if (currentRow === 0) {
      goingDown = true;
    } else if (currentRow === numRows - 1) {
      goingDown = false;
    }

    if (goingDown) {
      currentRow = currentRow + 1; // Move down
    } else {
      currentRow = currentRow - 1; // Move up
    }
  }

  // Concatenate all rows to form the final string
  return rows.join("");
};

// Test the function
console.log(convert("PAYPALISHIRING", 4)); // Output: "PINALSIGYAHRPI"
