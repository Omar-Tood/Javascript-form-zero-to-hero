// console.log("gggg")
// sync
// console.log("Start") //
// console.log("Middle")
// console.log("End")


// console.log('Start')

// setTimeout(() =>{
//    console.log("Middle")
// }, 2000)

// console.log('End')


// function taskOne(){
//     console.log('Task One is completed..')
    
// }


// function taskTwo(){
//     console.log("Task Two is Completed..")
// }

// taskOne()
// taskTwo()



// function taskOne(){
//     setTimeout(()=>{
//         console.log("Task One is Completed")
//     },3000)
// }

// function taskTwo(){
//     console.log("Task Two is Completed")
// }


// taskOne()
// taskTwo()



//Promise
//1.Pending
//2.Fulfilled // resolve
//3.Rejected

// const myPromise = new Promise((resolve, reject)=>{
//    const success = true

//    if(success){
//      resolve("The operation was success")
//    }else{
//      reject("The operation failed")
//    }
// });

// myPromise
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })




// chaining Promises

// const asyncTask1 = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("Task 1 is completed")
//     }, 2000)
// });

// const asyncTask2 = new Promise((resolve)=>{
//    setTimeout(()=>{
//     resolve("Task 2 is completed")
//    },2000)
// });

// asyncTask1
//   .then((result)=>{
//     console.log(result)
//     return asyncTask2 //
//   })

//   .catch((error)=>{
//     console.log(error)
//   })




// fetch("https://jsonplaceholder.typicode.com/posts/")
// .then((response)=> response.json())
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.error("Error fetching data",data)
// })


// async function fetchData(){

// const fetchUsers = async()=>{
//   try{
//     if(!response.oky){
//         throw new Error("Network response was not work")
//     }

//     const response = await fetch("https://randomuser.me/api/")
//     const data =  await response.json()
//     console.log("data is fetching", data.results[0])

//   }catch(error){
//     console.log("There has been a problem with your fetch operation",error)
//   }
// }

// fetchUsers()


// Local Storage

// Selecting data from local storage

// localStorage.setItem("username", "Omar-Tood")

// const username = localStorage.getItem("username")
// console.log(username)

// localStorage.removeItem("username")


// session

// sessionStorage.setItem("sessionID", "12345678")

// const sessionID = sessionStorage.getItem("sessionID")
// console.log("sessionID")




