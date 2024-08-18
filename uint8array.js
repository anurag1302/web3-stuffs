//A better way to represent an array of bytes is to use a UInt8Array in JS

//let arr = new Uint8Array([21, 23, 34]);
//console.log(arr);

let uint8Arr = new Uint8Array([0, 255, 127, 128]);
uint8Arr[1] = 299;

console.log(uint8Arr);
//here 299 is converted to binary first- 100101011, it has 9 digits.
//since uint8Array only stores 8 bits, it takes 8 digits from the right
//which is equal to 00101011
//the decimal equivalent of 00101011 is 43
//hence when we log the new array, 43 is printed
