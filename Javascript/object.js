obj1 = {}

obj2 = {
    keyName: "value"
}
// student = [23574, 'Shrihari', 20, 'BCS', 9.9]
user1 = {
    U_ID : 23574,
    fName:"Shrihari",
    lName:"Tone",
    age:20,
    grduation: 'BCS',
    grade:9.9,
    address:{
        flatNo:789,
        city:"Pune",
        state:"MH",
        pincode:411211
    },
    fullName: ()=>{
        console.log(user1.fName+ " " + user1.lName)
    }
}

user1.fullName()


console.log(user1.fName);
console.log(user1["fName"])
console.log(user1.address.city)
console.log(user1["address"].city)
// Shrihary got 9.9 grades in "BCS" 

console.log(`
        ${user1.fName} got ${user1.grade} grades in ${user1.grduation} .
    `)
user1.age = 21

console.log(`
        ${user1.fName} (${user1.age}) got ${user1.grade} grades in ${user1.grduation} .
    `)

delete user1.age

console.log(`
        ${user1.fName} (${user1.age}) got ${user1.grade} grades in ${user1.grduation} .
    `)

    console.log(user1);

car = {
    model:"Q8",
    brand:"Audi",
    price:234562345,
    color:'black',
    startCar: function(){
        return `${this.model} starts with secret key`
    }
}
console.log("****************************")
console.log(car.startCar())
console.log("*****************************")

fruit = new Object()
fruit.name = 'Mango',
fruit.quantityInKG = 20
fruit.pricePerKG = 100

console.log(fruit);
for (key in fruit){
    console.log(key)
    console.log(fruit[key])
}

console.log(Object.keys(fruit))

console.log(Object.values(fruit))
console.log(Object.entries(fruit))

strFruit = JSON.stringify(fruit)   // fruit.json()

console.log(strFruit);
console.log(typeof(strFruit));

objFruit = JSON.parse(strFruit)
console.log(objFruit);
console.log(typeof(objFruit))

person1 = {
    name: "Sanika",
    age:20
}

person2 = {
    name:"Sanika",
    age:20
}
console.log(person1.name, typeof(person1.name))
if(person1 === person2){
    console.log("same person")
}else{
    console.log("persons are different")
}