// accessing element by ID

// document.getElementById('myHeading').textContent = "DOM Manipulation Example"

// document.getElementById("paragraph").textContent = "Welcome to Javascript Course with tood"

// accessing element className

// const element  = document.getElementsByClassName("myClass")

// element[0].textContent = "Omar-Tood"
// element[1].textContent = "Waraaa"
// element[2].textContent =  "Hello"


// accessing by tag

//  const element  = document.getElementsByTagName("h1")
//  const paragraph1 = document.getElementsByTagName("p")

//  element[0].textContent =  "first paragraph changed!"
//  paragraph1[1].textContent =  "second paragraph changed!"
//  element[2].textContent =  "third paragraph change


// changing background 

// select the button element

const colorButton = document.getElementById("color-button");

// function to generate a random color

function getRandomColor(){

    const letters =  "0123456789ABCDEF"

    let color = "#";
    
    for(let i =0; i < 6; i++){

        color += letters[Math.floor(Math.random() * 16)];

    }
    return color;

}

// function to change the background color

// function changeBackgroundColor(){
//     const randomColor = getRandomColor()
//     console.log(randomColor)
//     document.body.style.backgroundColor = randomColor;
// }

// // add event listener

// colorButton.addEventListener('click', changeBackgroundColor);


/// events

// const clickButton = document.getElementById("click-button")
// const clickResult = document.getElementById("click-result")

// // add click

// clickButton.addEventListener('click', function(){
//     clickResult.textContent = "Waa aniga oo ah avents wan kusalaamay"
// })

// const hoverBox = document.getElementById("hover-box")

// hoverBox.addEventListener('mouseover', function(){
//      hoverBox.style.backgroundColor = 'blue'
//      hoverBox.textContent = "Mouse is over me!!"
// //      hoverBox.style.color = 'white' })

// });

// hoverBox.addEventListener('mouseout', function(){
//     hoverBox.style.backgroundColor = 'lightblue'
//     hoverBox.textContent = "Wan so Laabtay Nio🤣🤣"
// })


// const keyUpInput = document.getElementById('keyup-input')
// const keyUpResult = document.getElementById('keyup-result')

// keyUpInput.addEventListener('keyup',function(event){
//     keyUpResult.textContent = `keyup even: You released ${event.key} key.`
// })


