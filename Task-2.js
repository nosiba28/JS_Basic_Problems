function positiveSum(arr){
    let sum = 0;
    for(let i=0;i<arr.length; i++){
        if(arr[i]>0){
           sum+=arr[i];
        }
    }
    return sum;
}

let a =  [2, -5, 10, -3, 7];
let summation = positiveSum(a);
console.log(summation);