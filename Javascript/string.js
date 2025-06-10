str1 = 'Wisdom'
str2 = "Sprout"
str3 = `Pune
`

str4 = str1+ " " +str2+ " " +str3 

console.log(str4);

str5 = str1.concat(' ',str2, ' ',str3);

console.log(str5);

name1 = "Payal"

console.log(`Hello ${name1}`) // template literel

console.log(str5.length);

console.log(str5[3])

console.log(str5.charAt(3))

strCapital = str5.toUpperCase()

strLowerCase = str5.toLowerCase()

console.log("CapitalCase", strCapital, "Lower case", strLowerCase)

console.log(`Capiatal case ${strCapital} ****   lower case ${strLowerCase}`)

// .indexOf(), .lastIndexOf(), .includes(), .startsWith(), .endsWith()
console.log(str5)
console.log(str5.indexOf('Pune'))

str6 = "Every day is a new chance to do something new !!!"
console.log(str6.indexOf('new'))
console.log(str6.lastIndexOf('new'))

console.log(str6.includes('new'))

console.log(str6.startsWith('Every'))
console.log(str6.endsWith('!'))

// .slice(), .substring(), .substr()

console.log(str6.slice(0,5))  // 1st is index 2nd length
console.log(str6.substring(10))


// .trim(), .trimStart(), .trimEnd()
str7 = '       HELLO '
console.log(str7.length)
console.log(str7.trim().length)
console.log(str7.trimStart().length)
console.log(str7.trimEnd().length)


// .replace() and .replaceAll()

console.log(str6.replaceAll('new', 'good'))
console.log(str6);

// .split()

arr1 = str5.split(' ')
console.log(arr1)

numberString = '12:34:56:78:90'
numArray = numberString.split(':')
console.log(numArray)

strnew = numArray.join(':')
console.log(strnew)