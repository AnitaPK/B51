arr1 = [{name:"Shrug",category:"women",price:8900},
    {name:"Jacket",category:"Men",price:890 } ,
    {name:"Saree",category:"women",price:900},
    {name:"Shirt",category:"Men",price:80},
{name:"T-shirt", category:"kids",price:4400}
]

function filterByCat(cat){
return arr1.filter((x,index)=>x.category.toLowerCase() == cat.toLowerCase())
}

console.log(filterByCat("Women"))

function LowToHigh(){
    return arr1.sort((a,b)=> a.price - b.price)
}

function HighToLow(){
    return arr1.sort((a,b)=> b.price - a.price)
}

console.log(LowToHigh())
console.log(HighToLow())
