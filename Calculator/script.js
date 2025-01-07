//Variables
numsList = ["0","1","2","3","4","5","6","6","7","8","9"]
dot = "."
const screen = document.getElementsByClassName("screen");
const numbers = Array.from(document.getElementsByClassName("number"))
numbers.forEach(num => {
    num.addEventListener('click',()=> {screen.innerHTML += num.value})
})
