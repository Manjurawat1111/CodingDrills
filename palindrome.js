const string='level';

const arraySplit=string.split("");
console.log(arraySplit);
const arrayReverse=arraySplit.reverse();
console.log(arrayReverse);

const newString=arrayReverse.join("");
console.log(newString);

if(string===newString)
console.log(`yes ${string} is a palindrome`)
else
console.log(`No ${string} is not a palindrome` )
