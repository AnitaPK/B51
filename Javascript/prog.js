function showList(){
    // document.querySelector('#list').textContent = "BAtch 51"

    document.querySelector('#list').innerHTML = `
                                                <li>Criminal Justice</li>
                                                <li>Khaki</li>
    `
}

n1 = prompt("Enter your name here")
console.log(n1);


function myName(){
    const MyName = document.querySelector('#name1').value;console.log(MyName)
}


// var a 
// var x 
// var lecture


// let const 


var a = 20;
console.log(typeof(a))
var a ="String"
console.log(typeof(a))

console.log(a);

function NumA(){
    a =30;
    c=10
    console.log(a);
}
NumA();
console.log(typeof(NumA),"Type of of function")
console.log(c);
console.log(a);

let b = 2011;
console.log(b);

function NumALet(){
    b =3011;
    console.log(b);
}
NumALet();

// console.log(d);


{
    let d=40;
    d= 60;
}
console.log(b);


// hoisting


arr =[1,2,3]
console.log(typeof(arr))

