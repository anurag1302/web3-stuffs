const crypto = require("crypto");

const hash = "00000";

let input = 0;

function sample() {
  while (input >= 0) {
    let calculatedHash = crypto
      .createHash("sha256")
      .update(input.toString())
      .digest("hex");
    if (calculatedHash.startsWith(hash)) {
      return input;
    } else {
      input++;
    }
  }
}

console.log(sample());
