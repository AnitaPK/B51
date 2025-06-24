const num1 = document.querySelector("#num1")
const num2 = document.querySelector("#num2")
const result = document.querySelector("#result")
const addition = document.querySelector("#addition")
const subtract = document.querySelector("#subtract")
const multiply = document.querySelector("#multiply")
const division = document.querySelector("#division")

const calculator ={
    // n1,
    // n2,
    addition:function(n1,n2){
        console.log(n1,n2)
        return n1+ n2
    },
    subtract:function(){
        return this.n1 - this.n2
    },
    multiply: function(){
        return this.n1 * this.n2
    },
    division: function(){
        if(this.n2==0){
            return "not divided by 0"
        }else{
        return this.n1 / this.n2
        }
    }
}

addition.addEventListener('click', ()=>{
    console.log("*******")
    n1=Number(num1.value)
    n2=Number(num2.value)
    res = calculator.addition(n1,n2)
    result.innerHTML = res
})

subtract.addEventListener('click',()=>{

    calculator.n1 = Number(num1.value);
    calculator.n2 = Number(num2.value);

    res = calculator.subtract();
    result.innerHTML = res;
})

