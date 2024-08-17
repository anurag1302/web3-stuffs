const crypto = require("crypto");

const hash = "00000";

let input = 0;

function getInput() {
  while (input >= 0) {
    let calculatedHash = crypto
      .createHash("sha256")
      .update(
        `harkirat => Raman | Rs 100
Ram => Ankit | Rs 10` + input.toString()
      )
      .digest("hex");
    if (calculatedHash.startsWith(hash)) {
      return input;
    } else {
      input++;
    }
  }
}

console.log(getInput());
