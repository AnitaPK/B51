
const inputString = document.querySelector('#inputPara')
const result1 = document.querySelector("#result")

function countCharacters(){
    inputSTR = inputString.value
    console.log(inputSTR.length)
    result1.textContent = inputSTR.length;
    result1.style.fontSize = '30px';
}


function countWords(){
    inputSTR = inputString.value

    const wordsCount = inputSTR.split(' ').length

    result1.textContent = wordsCount
}
function Palindrome(){

}

function Vowels(){
    const allVowels = 'aeiouAEIOU'
    let count = 0;
    inputSTR = inputString.value

    for(let i = 0; i<inputSTR.length;i++){

        if(allVowels.includes(inputSTR[i])){ 
        count++
        }
    }
    result1.textContent = count
}




st = 'hello'
allVowels = 'aeiouAEIOU'

function ExtractFirstWord(){
    inputSTR = inputString.value
  result1.textContent = inputSTR.charAt(0)
}