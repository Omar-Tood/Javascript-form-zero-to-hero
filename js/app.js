// if statement
// if(conditions){
//     // code to be executed if the condition is true
// }

// let age = 18

// if(age >=18){
//   console.log("You are eligible to vote.")
// }

// if-else

// if(condition){
//     // code to be execution if the condition is true
// }else{
//     // code to be execution if the is false
// }

// let age  = 10;

// if(age >=18){
//    console.log("Your are eligible to vote")
// }else{
//     console.log("You are not eligible to vote.")
// }


// if-else if-else

// if(condition1){
//       // code to be execution if the condition1 is true
// } else if(condition2){
//      // code to be execution if the condition2 is true
// }else{
//    // code to be execution if the condition2 is true
// }


// let score = 78;

// if(score >=90){
//     console.log("Grade A:")
// }else if(score >=80){
//   console.log("Grade B")
// }else if(score >=70){
//     console.log("Grade C")
// }else if(score >=60){
//     console.log("Grade D")
// }else{
//     console.log("F")
// }


//nested if

// if(condition1){
//   // code to be execution if the condition1 is true
     
//  if(condition2){
//      // code to be execution if the condition2 is true
//  }else{
//     // code to be execution if the condition2 is false
//  }
// } else{
//     // code to be execution if the condition1 is false
// }  


// let age = 2
// let isMember = false

// if(age >=18){
//   if(isMember){
//     console.log("Welcome, member! you are eligible to vote.")
//   } else{
//     console.log("You are eligible to vote but are not a member.")
//   }
// }else{
//     console.log("you are not eligible to vote.")
// }


//switch statement//

// switch(expression){
//     case value1:
//         // code to be executed if expression equals value1
//         break;
//     case value2:
//         // code to be executed if expression equals values

// }


// let day = 1
// let dayName;

// switch(day){
//     case 1:
//         dayName = "Sabti"
//         break;
//     case 2:
//         dayName = "Axad"
//         break;
//     case 3:
//         dayName = "isliin"
//         break
//     case 4:
//         dayName = "Taalaado"
//         break;
//     case 5:
//         dayName = "Arbaco";
//         break;
//     case 6:
//         dayName = "Qamiis";
//         break;
//     case 7:
//         dayName = "Jimco"
//         break;
//     default: 
//         dayName = "invalid day"
// }
// console.log(dayName)


//Ternary Operator;

// condition ? exriftrue : expifFale

// let age = 20
// let eligible = (age >=18) ? "You are eligible to vote." : "you not eligible"
// console.log(eligible)


// Loops

// for(initialization; conditions; increment/decrement)

// for(let i=1; i<=5; i++){
//     console.log(i)
// }

// let sum = 0

// for(let i=1; i <=100; i++){
//     sum+=i;
// }

// console.log("The sum of numbers from 1 to 100 is:", sum)

// while 

// while(condition){
//     // code to be executed
// }

// let i = 1

// while(i<=5){
//     console.log(i)
//     i++
// }

//User Login Attempts

// let correctPassword =  "abc1234"
// let attempts = 0
// let isLoggedIn = false

// while(attempts < 3 && !isLoggedIn){
//     let userPassword = prompt("Enter your password")
//     if(userPassword == correctPassword){
//         console.log("Login successfully")
//         isLoggedIn = true
//     }else{
//         attempts++;
//         console.log("Incorrect password. You have", 3 - attempts, "attempts left")
//     }

// }

// if(!isLoggedIn){
//     console.error("Too many failed attems. Please try again later")
// }



// do while

// do {
//     // code to be executed
// }


//  let number;

//  do {
//     number = prompt("Enter a number")
//  }while(isNaN(number))

// console.log("You entered the number:", number)


// for(let i =1; i<=10; i++){
//     if(i === 5){
//         break;
//     }

//     console.log(i)
// }


// 


// functions

// function functionName(_paramer){

//     // code to be executed
// }


// function d

// function greet(name){
//     return "Hello," + name + "!"
// }

// // let message = great("Omar")
// console.log(greet("Omar"))

// function functionName(paramer){
//     // code to executed
// }

// function greeting(name){
//     return "Hello," + name + "!"
// }

// // let message  = greeting("Omar-Tood") // function calling or function invoke running
// // console.log(message)

// function expression

// const add = function(a,b){
//     return a*b
// }

// let sum = add(10,10)
// console.log(sum)


// Calculate BMI and determine weight Category

// function to calculate

function calculateBIM(weight , height){
    let bmi = weight / (height * height)
    return bmi.toFixed(2) 
}

// function getBIMCategory(bim){
//     if(bim < 18.5){
//         return "UnderWeight"

//     }else if(bim >= 18.5 && bim < 24.9){
//         return "Normal weight"
//     }else if(bim >= 25 && bim < 29.9){
//         return "OverWeight"
//     }else{
//         return "Obesity"
//     }
// }

// let weight = 83
// let height = 1.80

// let bim = calculateBIM(weight,height)
// let category = getBIMCategory(bim)
// console.log("Your BIM is: " + bim)
// console.log("You are classified  as: " + category)


// let x = (5+4) *3
// console.log(x)


// local scope
// function getName(){
//     let name = "Omar"
//     console.log(name)

// }
// console.log(nam)
// getName()

// Global scope
//  let name = "Omar"
// function getName(){
//    
//     console.log(name)
// }
// console.log(nam)
// getName()

// block socope
// if(true){
//     let blockScope = "I'm block Scope"
//     console.log(blockScope)
// }

// console.log(blockScope)

// function Scope

// function testFunction(){
//     var functionVar = "I'm function scope"
//     // console.log(functionVar)
// }

// testFunction()
// console.log(functionVar)


// lexical scope


// function outerFunction(){
//     let outerVar = "I am outside!"

//     function innerFunction(){
//         console.log(outerVar)
//     }

//     innerFunction()
// }

// outerFunction()


// Arrays

// let arrayName = [item1,item2, item3] 

// let shoppingList = ["Milk", "Bread", "Butter", "Eggs"]
//Accessing Array Elements use index star 0 always
// console.log(shoppingList[3]) // milk
// shoppingList[2] = "cheese"
// console.log(shoppingList)

// let fruits = ["apple ", "Banana" , "Orange"]
// //adding new element at the end of arrays
// fruits.push("cheese")
// fruits.pop() // removing the last element of your array
// fruits.shift()
// // console.log(fruits)
//  fruits[1] = "Lemon"
//  console.log(fruits)


// let names = ["Omar" , "hamzi", "Nasra"] //
// // console.log(names)
// // wax kabadali araay
// names[1] = "Shakri"
// names.push("Sadak")
// names.pop()
// names.shift()
// names.unshift("Ahmed")
// console.log(names)


// Iterating Over Arrays

// let numbers = [10,20,30,40,50,60,70,80,90,100]
// console.log(numbers)

// for(let i = 0; i < numbers.length; i++ ){
//     console.log(numbers[i])
// }


//  let numbers = [10,20,30,40,50,60,70,80,90,100]

//  for(let number of numbers){
//     console.log(number)
//  }

// let names = ["Omar-Tood", "Mr Sharafdin", "Abdinasir Tman"]
// names.push("Mc Hamouda")
// names.push("Mohamed")

// names.forEach(function(name){
//     console.log(name)
// })

