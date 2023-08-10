function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Please input a number";
  }

  const result = number * number * number;

  return result;
}

const result = cubeNumber(4);
console.log(result);
