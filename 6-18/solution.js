function cubeOdd(arr) {
let newArray = arr.filter(i => i % 2 != 0).map(i => Math.pow(i, 3)).reduce((a, b) => a + b);
return isNaN(newArray) ? undefined : newArray;
}


//////INTO ONE LINE ALMOST UNREADABLE/////

let cubeOdd = arr => isNaN(arr.filter(i => i % 2 != 0).map(i => Math.pow(i, 3)).reduce((a, b) => a + b)) ? undefined : arr.filter(i => i % 2 != 0).map(i => Math.pow(i, 3)).reduce((a, b) => a + b);



