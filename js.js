// let h1Elem = document.querySelector(".title")
// let btnElm = document.querySelector("#btn")

// h1Elem.addEventListener('click',function(){
//     console.log("hello")
// })
// btnElm.addEventListener("click", dblClick);
// function dblClick () {
//     h1Elem.classList.toggle("red")
// }

// let redValue , greenValue , blueValue

// setInterval(function() {
//     redValue = Math.floor(Math.random() * 255)
//     greenValue = Math.floor(Math.random() * 255)
//     blueValue = Math.floor(Math.random() * 255)
//     console.log("rgb ("+ redValue + "," + greenValue + "," + blueValue + ");")

//     document.body.style.backgroundColor = `rgb(${redValue},${greenValue},${blueValue})`

// }, 1000);

let colorValue = ['red', 'green', 'blue', 'gold']

let indexLenght 

setInterval(function () {
    indexLenght = Math.floor(Math.random() * colorValue.length)
    document.body.style.backgroundColor = colorValue[indexLenght]
},3000)




