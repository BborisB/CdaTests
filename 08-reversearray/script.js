function reverseArray(arr){
    let newArr = []
    for(let i=arr.length-1;i>=0;i--){
        newArr.push(arr[i])
    }
    return newArr
}

function reverseArrayInPlace(arr){
    for(let i=0;i<arr.length/2;i++){
        [arr[i], arr[arr.length-1-i]] = [arr[arr.length-1-i], arr[i]]
    }
}

// console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);

console.log(arrayValue);