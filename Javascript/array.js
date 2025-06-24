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

//  Calculate the Sum of Array Elements

marks = [35,100,78,54,39,99]
total = 0
for(i=0;i<marks.length; i++){
//  total = total + marks[i]
    total += marks[i]
}

console.log(total);

highestMarks = 0

for(i=0;i<marks.length; i++){
    if(highestMarks < marks[i]){
        highestMarks = marks[i]
    }
}

secondHighestMarks = 0;

firstLargestMarks = 0;
// for(x of numArray){
//     if(highestMarks > marks[i] && secondHighestMarks < marks[i]){
//         secondHighestMarks = marks[i]
//     }
// }

console.log(highestMarks);

// MERN 
// forEach, map, filter, find, some, findIndex, reduce 

student = [23574, 'Shrihari', 20, 'BCS', 9.9]

student.forEach((element, index)=>{
    console.log("Info " ,element)
})

fruits.forEach((e)=>{
    console.log(e, "  :  I like this fruit")
})

console.log(marks)
marks.forEach((x)=>{
    console.log(x+5)
})
newMarks = marks.map((x)=>{
    return x+5
})

console.log(newMarks)

numArray = [1,2,3,4,5,6,7,8,9,10]
sqNumber = numArray.map((number)=>{
    return number * number
})
console.log(sqNumber)

sq1number = numArray.map((x)=>x*x)

console.log(sq1number);

evenArray = numArray.filter((z)=>{
    if(z % 2 == 0){
        return z
    }
})

console.log(evenArray)


// find index number of 78 
let index78
for(i=0; i<marks.length;i++){
    if(marks[i] == 78){
        index78 = i
    }
}
console.log("index78" , index78)
i_78 = marks.findIndex((e)=> e == 78)
console.log(i_78, "i_78")

// Create a program to reverse an array manually.

revNumArray = []
numArray

l = numArray.length


for(i = l-1; i>= 0; i--){
    revNumArray.push(numArray[i])
}
console.log(revNumArray)

strfruit = JSON.stringify(fruits);
console.log(strfruit, typeof(strfruit));

arrFruit = JSON.parse(strfruit);
console.log(arrFruit, typeof(arrFruit))