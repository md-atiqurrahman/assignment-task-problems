function matchFinder(string1, string2) {
  if (typeof string1 && typeof string2 !== "string") {
    return "please input a valid text";
  } else {
    let result = string1.match(string2);
    if (result) {
      return true;
    } else {
      return false;
    }
  }
}

const output = matchFinder("John Doe", "ohn");
console.log(output);
