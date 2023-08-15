// const favFruitArray=["orange","Apple","Banana","Guava"];
// const readLineSync=require("readline-sync");
// const userFav=readLineSync.question("Which is your fav fruit?");

// const isFruitAvailable= favFruitArray.includes(userFav);
// if(isFruitAvailable)
// console.log("yes fruit is available");
// else
// console.log("No fruit is not available");
const array=[1,2,7,5,8,6,3,4];
console.log(array);
function ascendingSort(a,b){
    return a-b

}

const sortArray=array.sort(ascendingSort);


console.log(sortArray);


// Define an array with two string values and one nested array:
const profile = ["codesweetly.com", "Male", ["Oluwatobi", "Sofela"]];

// Define a function with two destructuring arrays containing a parameter each:
function getUserBio([website, , [userName]]) {
  return `${userName} runs ${website}`;
}

// Invoke getUserBio while passing the profile array as an argument:

console.log(getUserBio(profile));

