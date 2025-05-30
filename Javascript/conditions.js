// if(consdition){
//     stmt1;
//     stmt2;
// }else{
//     stmt1;
// }

isLogin = false;
if (isLogin) {
  console.log("You are logged in");
} else {
  console.log("Please login");
}

age = 30;
isIndian = true;
if (age >= 18 && isIndian) {
  console.log("User can vote");
} else {
  console.log(`Can't vote`);
}

//  0 - 35 fail 36 -60 pass 60-75 - firstClass 75-100 Disti

let marks = 197;
if (marks < 35) {
  console.log("Fail");
} else if (marks >= 35 && marks < 60) {
  console.log("Pass");
} else if (marks >= 60 && marks < 75) {
  console.log("Pass with first Class");
} else {
  console.log("Pass with  Disti");
}

if (marks < 100 && marks >= 75) {
  console.log("Pass with  Disti");
} else if (marks < 75 && marks >= 60) {
  console.log("Pass with first Class");
} else if (marks < 60 && marks >= 35) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// emp
// sal <1l   <5l  25l
// deg SD PM RH
// exp 0-1 1-10  10-20
exp = 5;
Deg = "PM";
if (exp < 1) {
  if (Deg == "SD") {
    console.log("Bonus1 for Software developer");
  } else if (Deg == "PM") {
    console.log("Bonus fo Manager with exp less than 1");
  }
} else if (exp < 10) {
  if (Deg == "SD") {
    console.log("Bonus2 for Software developer");
  } else if (Deg == "PM") {
    console.log("Bonus2 fo Manager with exp less than 10");
  }
}

const date = new Date();
console.log("Month", date.getMonth());

day = date.getDay();

switch (day) {
  case 1:
    console.log("Working Day Monday");
    break;
  case 2:
    console.log("Working Day Tuesday");
    break;
  case 3:
    console.log("Working Day Wednesday");
    break;
  case 4:
    console.log("Working Day Thursday");
    break;
  case 5:
    console.log("Working Day Friday");
    break;
  case 6:
    console.log("Its holiday....");
    break;

  case 0:
    console.log("Its holiday...My Reels day");
    break;
  default:
    console.log("Enter correct value");
}
