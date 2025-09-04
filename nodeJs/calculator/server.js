const settings = require('./config/settings')

console.log(settings.port)

// const {addition,subtraction} = require('./math')

const  Math= require('./math')

n1 =10
n2 =20

// sum = addition(n1,n2)
sum = Math.addition(n1,n2)

console.log(`Addition of ${n1} and ${n2} is  ${sum}`)


console.log(`Subtraction : ${n1} from ${n2} ${Math.subtraction(n2,n1)}`)