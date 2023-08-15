const string='level';


const newString=string.split("").reverse().join("");
console.log(newString);

if(string===newString)
console.log(`yes ${string} is a palindrome`)
else
console.log(`No ${string} is not a palindrome` )
