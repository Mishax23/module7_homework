//Задание 7.7.2

function calculate(a, b, operator) {
    if(operator === '+') {
        return a + b;
    }
    
};

let obj = {
    a: '',
    b: '',
    operator: '',
}
let arr = [2, 3, '+'];
console.log(calculate.apply(obj, arr));