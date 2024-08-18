const bytes = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"

function convertBytesToAscii(arr) {
  var newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let byte = arr[i];
    newArr.push(String.fromCharCode(byte));
  }
  return newArr.join("");
}

console.log(convertBytesToAscii(bytes));
