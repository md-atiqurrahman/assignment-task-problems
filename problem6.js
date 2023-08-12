//task: Write a JavaScript function called removeDuplicates that takes an array as input and returns a new array with all duplicate values removed, preserving the original order of elements

const removeDuplicates = (arr) =>{
    const uniqueArray = [];

    for(const number of arr){
        if(!uniqueArray.includes(number)){
            uniqueArray.push(number)
        }
    }
    return uniqueArray;
}



const originalArray = [1,2,2,3,4,4,5];
const newArray = removeDuplicates(originalArray);
console.log(newArray)