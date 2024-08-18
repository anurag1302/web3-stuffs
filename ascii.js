//Bytes to Ascii
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

function convertBytesToAsciiUsingTextDecoder(arr) {
  return new TextDecoder().decode(arr);
}

console.log(convertBytesToAsciiUsingTextDecoder(bytes));

// ***********************************

//Ascii to Bytes Array
const text = "Hello";

function convertAsciiToBytes(text) {
  let arr = [];
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    arr.push(char.charCodeAt(0));
  }
  return arr;
}

console.log(convertAsciiToBytes(text));

function convertAsciiToUInt8Array(text) {
  //return new Uint8Array(Array.from(text).map((letter) => letter.charCodeAt(0)));
  const resEncodedMessage = new TextEncoder().encode(text);
  return resEncodedMessage;
}

console.log(convertAsciiToUInt8Array(text));
