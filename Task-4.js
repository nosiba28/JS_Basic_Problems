function addSum(arr, tValue){
    let addValue = [];
    for(let i=0;i<arr.length; i++){
       
        for(let j=1;j<arr.length; j++)
        {
            if((arr[i]+arr[j])===tValue){
                //  addValue[0] = arr[i];
                //  addValue[1] = arr[j];
                addValue.push(i);
                addValue.push(j);
                 return addValue;
            }
            
        }
    }
}

let a = [1, 3, 6, 8, 11, 15];
let val = 9;

let  add = addSum(a, val)
console.log(add);