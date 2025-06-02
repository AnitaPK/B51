// roll  - 1   to 1000
// 5 lines of code execute  1000 times 


// for(initialize; consdition; increament/decreament){

//     // 5 lines 
// }


// for(roll =1; roll <=1000; roll++){
// //     // 5 lines 
// }

// 2 table 

//  2 * 1 = 2 
//  2 * 2 = 4
//  2 * 3 = 6 

for(let i = 1; i<=10; i++){
    console.log(13 * i) 
}

// iteration          i    13*i
// 1                  1     13
// 2                  2     26
// 3                  3     39
// 4                  4     52
// 5                  5     65
// 6                  6     78
// 7                  7    91
// 8                  8    104
// 9                  9    117
// 10                 10   130
// 11                 11

i = 1
while(i <=10){

    console.log(13 * i, " = 13 * ", i) 
    //     if(i==5){
    //     continue;
    // }
    i++;
}

do{
    console.log(13 * i,"In do while loop")
}while(i<=10)
