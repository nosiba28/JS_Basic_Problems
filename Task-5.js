function calculator(a, b, s){
    if(s === '+'){
        return a+b;
    }
    if(s === '-'){
        return a-b;
    }
    if(s === '*'){
        return a*b;
    }
    if(s === "/"){
        return a/b;
    }
}

let add = calculator(4, 2, "+");
let sub = calculator(4, 2, "-");
let mul = calculator(4, 2, "*");
let div = calculator(4, 2, "/");
console.log("Summation: "+add);
console.log("Subtraction: "+sub);
console.log("Multiplication: "+mul);
console.log("Division: "+div);