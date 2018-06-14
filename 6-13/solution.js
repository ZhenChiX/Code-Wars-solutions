var gimme = function (inputArray) {
 return inputArray.slice().indexOf(inputArray.sort((a, b) => a - b)[1]);
};
