// //1. Type conversation

// const inputNumber = "7890";
// console.log(inputNumber + 20);

// console.log(inputNumber);
// console.log(Number(inputNumber), inputNumber);
// typeof Number(inputNumber);
// console.log(typeof Number(inputNumber));
// console.log(typeof inputNumber);

// const birthYear = 1988;
// console.log(String(birthYear));
// console.log(typeof String(birthYear));
// const firstName = "Adri";
// console.log(Number(firstName)); // not a number
// console.log(typeof Number(firstName));

// const inputNumber = "7890";
// const firstName = "Adri";
// console.log(Boolean(inputNumber));
// console.log(Boolean(firstName));

// //2.Type Coercion

// let bookNumber = "9";
// console.log("I have " + bookNumber + " story book");

// let bookNumber = 9;
// console.log("I have " + bookNumber + " story book");

// let bookNumber = "5";
// console.log("I have " + bookNumber + " story book");
// console.log(16 - bookNumber);
// console.log(16 + bookNumber);
// console.log(16 * bookNumber);
// console.log(16 / bookNumber);

// console.log(16 + 7 + 9 + "8");
// console.log(16 + 7 + 9 - "8");
// console.log(16 + 7 + 9 * "8");
// console.log(16 + 7 + 9 / "8");
// console.log("16" + "7" + "9" + "8");
// console.log("16" - "7" - "9" + "8");

//3. Truthy and falsy value

// falsy value 5 types

// 0
// ""
// null
// undefined
// NaN
// console.log(0);
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));

// console.log(Boolean(1));

// const job = 0;
// if (job) {
//   console.log("I have a Good job!");
// } else {
//   console.log("Looking for a Good Job!");
// }

// const job = 1;
// if (job) {
//   console.log("I have a Good job!");
// } else {
//   console.log("Looking for a Good Job!");
// }

// const job = 1;
// if (true) {
//   console.log("I have a Good job!");
// } else {
//   console.log("Looking for a Good Job!");
// }
// if (false) {
//   console.log("I have a Good job!");
// } else {
//   console.log("Looking for a Good Job!");
// }

// let salary;
// if (salary) {
//   console.log("My salary is set!");
// } else {
//   console.log("My salery isn't set!");
// }

//4. Conditional Statements

// let earning = 50000;
// if (earning > 35000) {
//   console.log("His earning is good amount!");
// } else {
//   console.log("His earning is'n good amount!");
// }

// let earning = 30000;
// if (earning > 35000) {
//   console.log("His earning is good amount!");
// } else {
//   console.log("His earning is'n good amount!");
// }

// let earning = 30000;
// if (earning > 35000) {
//   console.log("His earning is good amount!");
// } else if ("earning>20000") {
//   console.log("His earning is't bad!");
// } else if ("earning>10000") {
//   console.log("His earning is't bad!");
// } else {
//   console.log("His earning is't good enough!");
// }

// let today = "Saterday";
// if (today === "Saterday") {
//   console.log("Today 9pm we have a main live class!");
// } else if ("today===Sunday") {
//   console.log("Today 9pm we have a support class!");
// } else if ("today===Monday") {
//   console.log("Today 9pm we have a main live class!");
// } else if ("today===Tuesday") {
//   console.log("Today 9pm we have a support class!");
// } else if ("today === Wednesday") {
//   console.log("Today 9pm we have a main live class!");
// } else if ("today===Thursday") {
//   console.log("Today 9pm we have a support class!");
// } else {
//   console.log("Today is our holiday!");
// }

// const season = "Winter";
// if (season === "Summer") {
//   console.log("when days are hot and dry!");
// } else if ("season===The rainy season") {
//   console.log("Plants receive a new life under cool rains!");
// } else if ("season === Autumn") {
//   console.log(
//     " A major Hindu festival durga puja is celebrated during this season!"
//   );
// } else if ("season === Late autumn") {
//   console.log("Celebrate navanna with the new rice crop.");
// } else if ("season === Winter") {
//   console.log("The winter season is very dry!");
// } else {
//   console.log("Spring is called the king of seasons.");
// }

//5. Nested Conditional Statements

// const x = 10;
// if (x >= 10) {
//   if (x == 10) {
//     console.log("X is equal to 10!");
//   } else {
//     console.log("X is greater than 10! ");
//   }
// } else {
//   console.log("X is lower than 10!");
// }

// const x = 5;
// if (x >= 10) {
//   if (x == 10) {
//     console.log("X is equal to 10!");
//   }
//   if (x <= 10) {
//     console.log("X is equal to 10!");
//   } else {
//     console.log("X is greater than 10! ");
//   }
// } else {
//   console.log("X is lower than 10!");
// }

// //6. Swich Statement

// let day = "Saturday";

// switch (day) {
//   case "Saturday":
//     console.log(" Today is wonderfull day!");
//     break;
//   case "Sunday":
//     console.log("Today is hot day!");
//     break;
//   case "Monday":
//     console.log("Today is cool day!");
//     break;
//   case "Tuesday":
//     console.log("Today is beautiful day!");
//     break;
//   case "Wednesday":
//     console.log("Today is good day!");
//     break;
//   case "Thursday":
//     console.log("Today is big day!");
//   default:
//     console.log("Today is holiday!");
// }
