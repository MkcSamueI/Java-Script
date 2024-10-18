const arr1 = [1,2,3,4,5];
const arr2 = [5,6,7,8,9,10];
const Newarr = arr1.concat(arr2);
const arr3 = [...new Set(Newarr)]

console.log(arr3)
