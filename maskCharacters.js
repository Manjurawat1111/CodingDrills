const str="123456789"
const maskedChar="*".repeat(4);
const newStr=str.slice(0,str.length-4)+maskedChar;
console.log(newStr);