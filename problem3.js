function sortMaker(arr) {
     const value1 = arr[0];
     const value2 = arr[1];
     if(typeof value1 && typeof value2 === 'number' && value1 && value2 >0 && value1 !== value2){
        const numbers = [value1, value2]
        return numbers.sort((a, b) => b-a )
     }
     else if(value1 === value2){
         return "equal"
     }
     else if(value1 && value2 < 0){
         return "Invalid input";
     }
}
sortMaker([2,4])