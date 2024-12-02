"use strict";
/* console.log("Hello world!");console.log("Opeyemi");console.log(45);
console.log("Hi"); // String
console.log("67"); // Number
console.log(null); // null
console.log(undefined); // Undefined
console.log(true, false); // Boolean 
console.log(Symbol("unique")); // Symbol
console.log(BigInt (12345678768786765657474)); // BigInt
console.log(12345678768786765657474);

let firstName = "Hakeem";
const lastName = "Juwon";
console.log(middleName);
var middleName = "Tajudeen";

firstName = "Michael";
//lastName = "Egberongbe";
console.log(firstName);

const first_job = "Teacher";

// firstName = Camel Case
// First Name = Title Case
// first_name = snake case
// CAPITALS = pascal case

//ASSIGNMENT: Research JavaScript Reserved Keywords (like: function)
const $function = 3456;

console.log(typeof firstName);
console.log(typeof -90.676);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof x);

x = 432536;
console.log(typeof x);
*/

/*
// let firstName = "Michael";
// console.log(firstName);
// // var firstName = "Michael";

// Maths Operators
console.log(2 + 3 + 8);
console.log(24 - 8);
console.log(3 * 6);
console.log(90 / 30);
console.log(5 ** 2);
console.log(11 % 2);

//Assignment Operators
let age = 45;
console.log(age);

// age = age + 1;
age += 1;
// age = age - 1;
age -= 1;
age++;
age--;
age *= 2;
age /= 2;
console.log(age);
console.log(2 + 4 - 3 * 5);

//Comparison Operators
const ageMichael = 70;
const ageSegun = 90;

console.log(ageMichael > ageSegun);
console.log(ageMichael < ageSegun);
console.log(ageMichael >= ageSegun);

// Control Statements (if/else statements)
if (ageSegun > ageMichael) {
  console.log("Segun is older than Michael");
} else {
  console.log("Michael is older than Segun");
}

const gradeLizzy = 30;

if (gradeLizzy >= 90) {
  console.log("Lizzy got an A");
} else if (gradeLizzy >= 80) {
  console.log("Lizzy got a B");
} else if (gradeLizzy >= 70) {
  console.log("Lizzy got a C");
} else if (gradeLizzy >= 60) {
  console.log("Lizzy got a D");
} else {
  console.log("Lizzy got a F");
}

// Class Work
let country = "Argentina";
let continent = "South America";
let population = "120millions";

console.log(country);
console.log(continent);
console.log(population);
*/

// ONLINE CLASS
// Equality Operator (strict ===) // (Loose ==)
const jobTitle = "Programmer";
let javascriptIsFun = true;
console.log(javascriptIsFun);

javascriptIsFun = "Yes";
console.log(typeof javascriptIsFun);

/*
// ASSIGNMENT
// Challenge 1
// Test Data 1
let massYinka1 = 78;
let heightYinka1 = 1.69;
let massMoyo1 = 92;
let heightMoyo1 = 1.95;

// Test Data 2
let massYinka2 = 95;
let heightYinka2 = 1.88;
let massMoyo2 = 85;
let heightMoyo2 = 1.76;

// Calculate BMIs using both versions of the formula
let bmiYinka1 = massYinka1 / (heightYinka1 * heightYinka1);
let bmiMoyo1 = massMoyo1 / (heightMoyo1 * heightMoyo1);
let bmiYinka2 = massYinka2 / (heightYinka2 * heightYinka2);
let bmiMoyo2 = massMoyo2 / (heightMoyo2 * heightMoyo2);

// Boolean variable to check if Yinka has a higher BMI than Moyo
let yinkaHigherBMI1 = bmiYinka1 > bmiMoyo1;
let yinkaHigherBMI2 = bmiYinka2 > bmiMoyo2;

// Output the results
console.log(
  `Test Data 1 - Yinka's BMI: ${bmiYinka1.toFixed(
    2
  )}, Moyo's BMI: ${bmiMoyo1.toFixed(
    2
  )}, Yinka has a higher BMI: ${yinkaHigherBMI1}`
);
console.log(
  `Test Data 2 - Yinka's BMI: ${bmiYinka2.toFixed(
    2
  )}, Moyo's BMI: ${bmiMoyo2.toFixed(
    2
  )}, Yinka has a higher BMI: ${yinkaHigherBMI2}`
);

// Challenge 2
// Output the results with template literals
console.log(
  `Test Data 1 - Yinka's BMI: ${bmiYinka1.toFixed(
    1
  )}, Moyo's BMI: ${bmiMoyo1.toFixed(
    1
  )}, Yinka has a higher BMI: ${yinkaHigherBMI1}`
);
if (yinkaHigherBMI1) {
  console.log(
    `Yinka's BMI (${bmiYinka1.toFixed(
      1
    )}) is higher than Moyo's (${bmiMoyo1.toFixed(1)})!`
  );
} else {
  console.log(
    `Moyo's BMI (${bmiMoyo1.toFixed(
      1
    )}) is higher than Yinka's (${bmiYinka1.toFixed(1)})!`
  );
}

console.log(
  `Test Data 2 - Yinka's BMI: ${bmiYinka2.toFixed(
    1
  )}, Moyo's BMI: ${bmiMoyo2.toFixed(
    1
  )}, Yinka has a higher BMI: ${yinkaHigherBMI2}`
);
if (yinkaHigherBMI2) {
  console.log(
    `Yinka's BMI (${bmiYinka2.toFixed(
      1
    )}) is higher than Moyo's (${bmiMoyo2.toFixed(1)})!`
  );
} else {
  console.log(
    `Moyo's BMI (${bmiMoyo2.toFixed(
      1
    )}) is higher than Yinka's (${bmiYinka2.toFixed(1)})!`
  );
}

// Challenge 3
// Function to calculate the average score
function calculateAverage(scores) {
  const total = scores.reduce((acc, score) => acc + score, 0);
  return total / scores.length;
}

// Function to determine the winner
function determineWinner(team1, team2, team1Scores, team2Scores) {
  const avgTeam1 = calculateAverage(team1Scores);
  const avgTeam2 = calculateAverage(team2Scores);

  if (avgTeam1 > avgTeam2 && avgTeam1 >= 100) {
    return `${team1} wins with an average score of ${avgTeam1.toFixed(2)}`;
  } else if (avgTeam2 > avgTeam1 && avgTeam2 >= 100) {
    return `${team2} wins with an average score of ${avgTeam2.toFixed(2)}`;
  } else if (avgTeam1 === avgTeam2 && avgTeam1 >= 100 && avgTeam2 >= 100) {
    return `It's a draw with both teams having an average score of ${avgTeam1.toFixed(
      2
    )}`;
  } else {
    return "No team wins due to minimum score requirement.";
  }
}

// Test Data 1
const hideeScores1 = [96, 108, 89];
const silasScores1 = [88, 91, 110];
console.log(determineWinner("Hidee", "Silas", hideeScores1, silasScores1));

// Bonus Test Data 1
const hideeScores2 = [97, 112, 101];
const silasScores2 = [109, 95, 123];
console.log(determineWinner("Hidee", "Silas", hideeScores2, silasScores2));

// Bonus Test Data 2
const hideeScores3 = [97, 112, 101];
const silasScores3 = [109, 95, 106];
console.log(determineWinner("Hidee", "Silas", hideeScores3, silasScores3));

//Challenge 4
// Function to calculate the tip and print the result
function calculateTipAndPrint(bill) {
  // Use a ternary operator to calculate the tip
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  // Calculate the total value
  const total = bill + tip;
  // Print the result using template literals
  console.log(
    `The bill was ${bill}, the tip was ${tip.toFixed(
      2
    )}, and the total value was ${total.toFixed(2)}`
  );
}

// Test Data
const bills = [275, 40, 430];

// Loop through the bills array and calculate tip for each bill
bills.forEach(calculateTipAndPrint);
*/

/*
// Challenge #1
const yinkaHeight = 1.69;
const yinkaMass = 78;

const moyoHeight = 1.95;
const moyoMass = 92;

const yinkaBMI = yinkaMass / yinkaHeight ** 2;
const moyoBMI = moyoMass / moyoHeight ** 2;

const yinkaHigherBMI = yinkaBMI > moyoBMI;

// Challenge #2
if (yinkaBMI > moyoBMI) {
  console.log(
    `Yinka's BMI (${yinkaBMI}) is higher than Moyo's BMI (${moyoBMI})`
  );
} else {
  console.log(
    `Moyo's BMI (${moyoBMI}) is higher than Yinka's BMI (${yinkaBMI})`
  );
}

// challenge #3

const hideeScore = (96 + 100 + 89) / 3;
const silasScore = (88 + 91 + 110) / 3;

if (hideeScore > silasScore) {
  console.log("Hidee wins");
} else if (silasScore > hideeScore) {
  console.log("Silas wins");
} else {
  console.log("It's a draw");
}

// Challenge #3 Bonus
if (hideeScore > silasScore && hideeScore > 100) {
  console.log("Hidee wins the trophy 🏆");
} else if (silasScore > hideeScore && silasScore > 100) {
  console.log("Silas wins the trophy 🏆");
} else if (hideeScore === silasScore && hideeScore > 100 && silasScore > 100) {
  console.log("BOth win the trophy 🏆🏆");
} else {
  console.log("No one wins the trophy 😔");
}

// Challenge #4
const bill = 275;
const tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;

const total = bill + tip;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value was ${total}`
);

// const interface = "string";
// console.log(interface);

const lastName = "Segun";
console.log(lastName);

// const lastName = "Segun";
// console.log(lastName);

// FUNCTION
function add() {
  return 5 + 10;
}
console.log(add());
console.log(add());
console.log(add());
console.log(add());

// Function with parameters and arguments
function multiply(num1, num2) {
  const result = num1 * num2;

  return result;
}

console.log(multiply(5, 10));
console.log(multiply(20, 100));
*/

/*
function calAge(year) {
  // return 2035 - year;
  const currentYear = 2024;
  const age = currentYear - year;

  // return age;
  return `In year ${currentYear}, you will be ${age} years old`;
}
// console.log(calAge(2000));
// console.log(calAge(1986));
// console.log(calAge(2012));
// console.log(calAge(1960));
// console.log(calAge(1992));
console.log(calAge(prompt("Enter your birth year")));
*/

/*
// ===================
// PRACTICE = CONVERTER
// Convert from Feet to Inches
// ===================
function conv1(numFeet) {
  const result = numFeet * 12;

  return `${numFeet} feet is equivalent to ${result} Inches`;
}
console.log(conv1(prompt("Enter number in Feet to convert to Inches")));

// ===================
// Convert from Inches to Feet
// ===================
function conv2(numInches) {
  const result = numInches / 12;

  return `${numInches} inches is equivalent to ${result} feet`;
}
console.log(conv2(prompt("Enter number in inches to convert to feet")));
*/

/*
// ===================
// ONLINE CLASS
// FUNCTION EXPRESSION
// ===================
const calAge2 = function (year) {
  return 2035 - year;
};
console.log(calAge2(2007));

console.log(calcAge3(2007));

function calcAge3(birthyear) {
  return 2035 - birthyear;
}

// ARROW FUNCTION
const calAge4 = (birthYear) => 2035 - birthYear;

console.log(calAge4(1987));

const cutFruitPieces = (fruit) => fruit * 4;

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;

  return juice;
}

console.log(fruitProcessor(20, 10));

const fruits = ["Apple", "Orange", "Banana", "Mango"];

for (let i = 1; i <= 50; i++) {
  console.log("Exercise day: " + i);
}

// For Loop with Array
const nums = [10, 20, 30, 40, 50, 60];
let numsMultiple = [];

for (let i = 0; i < nums.lenght; i++) {
  numsMultiple.push(nums[i] * 2);
}

console.log(nums, numsMultiple);
*/

// WEEK 9
// ASSIGNMENT

// Challenge #1: Gymnastics Teams
// #1 Task 1: Arrow Function for Averages
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// #1 Task 2: Calculate Averages for both Teams
const avgHidee1 = calcAverage(44, 23, 71);
const avgSilas1 = calcAverage(65, 54, 49);

const avgHidee2 = calcAverage(85, 54, 41);
const avgSilas2 = calcAverage(23, 34, 27);

// #1 Task 3: Determine the Winner
const checkWinner = (avgHidee, avgSilas) => {
  if (avgHidee >= 2 * avgSilas) {
    console.log(`Hidee wins (${avgHidee} vs. ${avgSilas})!`);
  } else if (avgSilas >= 2 * avgHidee) {
    console.log(`Silas wins (${avgSilas} vs. ${avgHidee})!`);
  } else {
    console.log("No team wins");
  }
};

// #1 Task 4: Test the Dataq
checkWinner(avgHidee1, avgSilas1); // data 1
checkWinner(avgHidee2, avgSilas2); // data 2

/* 
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/michaelmas01/week-9-challenge.git
git push -u origin main
*/
