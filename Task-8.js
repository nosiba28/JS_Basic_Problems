function secondSmallest(arr){
    let min = Number.MAX_VALUE;
    for(let i=0; i<arr.length; i++){
          if(arr[i]<min){
            min = arr[i];
          }
    }
    let secondMin = Number.MAX_VALUE;
    for(let j=0; j<arr.length; j++){
        if(arr[j]<secondMin && arr[j]>min){
            secondMin=arr[j];
        }
    }
    return secondMin;
}

let a = [22, 3, 12, -4, -2, 33];
let secondMinVal = secondSmallest(a);
console.log("Second Smallest: "+secondMinVal);