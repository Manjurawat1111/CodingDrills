const string='racecar';
// const newString=string.split("").reverse().join("");
// console.log(newString);
function stringReversed(string){
    let newString="";
    for(let i=string.length-1;i>=0;i--){
        newString+=string[i];
    }
    return newString;
}
const result=stringReversed(string);
if(string===result)
console.log(`yes ${string} is a palindrome`)
else
console.log(`No ${string} is not a palindrome` )

