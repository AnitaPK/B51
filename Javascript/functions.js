function greet(){
    console.log("Hello Batch 51")
}

greet()

function greetName(name, age){
    console.log("Hello", name, "Your age is ", age)
}


greetName("Shrihari", 20)


// arrowFunction 
const greetArrow = ()=>{
    console.log("Hello B51")
}
greetArrow();

const greetArrowPara = (n) =>{
    console.log("Hello", n)
}
greetArrowPara("Prithviraj");

function addNum(a,b){
    return a+b
}
sum = addNum(2,4)

console.log(sum)

const addArrow = (a,b)=> a+b 

console.log(addArrow(4,5))

const addArrow2 = (a,b) =>{
    return a+b
}

console.log(addArrow2(2,3))

(()=>{})()

(function(){})()