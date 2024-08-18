//A better way to represent an array of bytes is to use a UInt8Array in JS

//let arr = new Uint8Array([21, 23, 34]);
//console.log(arr);

let uint8Arr = new Uint8Array([0, 255, 127, 128]);
uint8Arr[1] = 299;

console.log(uint8Arr);
