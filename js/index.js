// objects

// const objectName = {
//     key1: "value1",
//     key2: "value2",
//     key3: "value3",
//     //... other properties
// }

// let person = {
//     name: "Omar",
//     age: 22,
//     city: "mogadishu"
// }
// person.email = "Omar@gmail.com"
// person.age = 24

// console.log(person["name"])
// console.log(person.age)
// console.log(person.city)
// console.log(person.email)

// real example

// const userProfile = {
//     name: "Omar",
//     email: "Omarjibril@gmail.com",
//     age:30,
//     hobbies: ["Reading", "coding", "gaming"],
//     address:{
//        street: "13782",
//        city: "mogadishu",
//        country: "Somalia"
//     },
//     great: function(){
//         console.log(`Hello, my name is ${this.name}`)
//     }
// }
// // console.log(userProfile.name)

// for(let key in userProfile){
//     console.log(`${key}: ${userProfile[key]}`)
// }

// const userProfile = {
//     name: 'Omar',
//     email: 'Omar@gmail.com',
//     age: 30,
//     address: {
//       street: '123 Main St',
//       city: 'New York',
//       zipCode: '10001'
//     }
//   };

  // Destructing the user profile object

//   const {name,email , age} = userProfile

//   console.log(name)
//   console.log(email)
//   console.log(age)

// Destructing defual value

// const userProfile = {
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     age: 30
//   };

//   const {name, email , age = 30} = userProfile
//   console.log(age)


  // Renaming Variables


//   const userProfile = {
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     age: 30
//   };

//   const { name: userName , email: userEmail} = userProfile

//   console.log(userName)

// json


// [{
//     "name": "Omar",
//     "age": 22,
//     "city": "mogadishu",
    
// }]


/// advanced Array methods/

// scenario: E-Commerce order Managmentent

// const orders = [
//     {id: 1, customer: 'Omar', total: 50, status: "shipped"},
//     {id: 2, customer: 'sharafdin', total: 100, status: "shipped"},
//     {id: 3, customer: 'tman', total: 50, status: "pending"},
//     {id: 4, customer: 'hamouda', total: 200, status: "delivered"},
//     {id: 5, customer: 'farax', total: 300, status: "pending"},
//     {id: 6, customer: 'ali', total: 90, status: "delivered"},
//     {id: 7, customer: 'Geedi', total: 100, status: "shipped"},
//     {id: 8, customer: 'iqra', total: 1000, status: "pending"},
//     {id: 9, customer: 'asma', total: 1000, status: "shipped"},
// ]

// const customerNames = orders.map(order => order.customer)
// console.log(customerNames)


// filter



// const pendingOrders = orders.filter(order => order.status === "pending")

// console.log(pendingOrders)

// // reduce
// const totalShippedRevenue = orders.reduce((total, order) =>{
//     if(order.status === "shipped"){
//         return total + order.total
//     }
//     return total
// },0)

// console.log(totalShippedRevenue)



// Math Object

// common methods math

//1. round Method.
// console.log(Math.round(5.6)) // nearest integer
// console.log(Math.round(10.3))

// //2.floor
// console.log(Math.floor(4.5))

// //3.pow

// console.log(Math.pow(2,4))

// //4.max
// console.log(Math.max(10,20,100))

// //5. mix
// console.log(Math.min(10,2,0))

// //6. random 

// console.log(Math.random()) // generates a random number between 0 and 1

// ranges

// random integer between 0 -9
// console.log(Math.floor(Math.random()*10))

// // Random integer between 1 and 100

// console.log(Math.floor(Math.random()*100)+1)



// date Objects

//1. current Date and Time

const now = new Date()
console.log(now)

//2. specific data and Time

// const specifiDate = new Date("2000-01-31")
// console.log(specifiDate)

// Full

// const today = new Date()
// console.log(today.getFullYear())
// console.log(today.getMonth())
// console.log(today.getDate())
// console.log(today.getDay())
// console.log(today.getHours())
  