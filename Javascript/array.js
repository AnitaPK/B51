// const let var 
// arr1  a1 students emp 

arr1 = []

console.log(typeof(arr1));

arr2 = [1,2,3,4]
fruits = ["Banana","Mango","Apple"]
student = ["Mr Bean", "1234567890",100, ["Pune", "India"]]

console.log(arr2[2]);

console.log(fruits[2])

fruits[3] = 'Cherry'
console.log(fruits);

fruits.push('Papaya')

console.log(fruits);

fruits.unshift('Strawberry')

console.log(fruits);


fruits.pop()

console.log(fruits);

fruits.shift()
console.log(fruits);

// slice splice 

subfruit = fruits.slice(2,3)
console.log(subfruit);

console.log(fruits,"Original fruit array");

fruits.splice(0,0,'Kiwi')
console.log(fruits,"after spilce");


// for of, for in, include, indexOf 

x = fruits.includes('Cherry')

console.log(x)

indexNum = fruits.indexOf('cherry')

console.log(indexNum)

indFruit = fruits.indexOf('Cherry')
if( indFruit !== -1){
    console.log("You can order")
    console.log(indFruit)
}else{
    console.log("Fruit not available")
}
// //////////////

for(i=0; i<fruits.length;i++){
    console.log(fruits[i])
}
    console.log('End')

for (x of fruits){
    console.log(x)
}
    console.log('End of for Of ')

for(i in fruits){
    console.log(i, fruits[i])
}
    console.log('End of for In' )

