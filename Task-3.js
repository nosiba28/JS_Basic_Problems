function mostFrequentElement(arr){
    let count = 0;
    let max = -1;
    let maxElement = 0;
    for(let i=0; i<arr.length; i++){
        count=0;
        for(let j=0; j<arr.length; j++){
            if(arr[i]===arr[j]){
               count++;
            }
        }
        if(count>max){
            max = count;
            maxElement = arr[i];
           
        }
    }
    return maxElement;
}

let a = [3, 5, 2, 5, 3, 3, 1, 4, 5] ;

let maxValue = mostFrequentElement(a);
console.log(maxValue);