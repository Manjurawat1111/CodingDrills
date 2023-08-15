const str= "The quick brown fox jumps over the lazy dog";
const vowels=["a","e","i","o","u"];
function removeVowelsFromString(str){
    let result="";
for(let char of str){
    
    if(!vowels.includes(char))
    result+=char;
}
return result;
}
const newStr=removeVowelsFromString(str);
console.log(newStr);
