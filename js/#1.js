const arr1 = [2200, 34000, 1200];
const arr2 = [120000, 34000, 7000];
const arr3 = [1100, 56000, 2700];

const allManagers = arr1.concat(arr2, arr3);

const minNumber = Math.min(...allManagers);

console.log(minNumber);
