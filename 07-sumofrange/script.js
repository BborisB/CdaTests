function range(a,b,s=1){
    let arr = []
    if(a<b){
        for(let i=a;i<=b;i+=s){
            arr.push(i)
        }
    }
    else{
        for(let i=a;i>=b;i+=s){
            arr.push(i)
        }
    }
    return arr
}

function sum(arr){
    let c=0
    for(let i=0;i<arr.length;i++){
        c+=arr[i]
    }
    return c
}

console.log(range(1, 10));

console.log(range(5, 2, -1));

console.log(sum(range(1, 10)));