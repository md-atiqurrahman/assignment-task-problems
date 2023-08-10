function cubeNumber(number) {
    if (typeof number !== 'number') {
      return "Please input a number type data";
    }
    
    const result = number * number * number;
    
    return result;
  }


 cubeNumber(4)