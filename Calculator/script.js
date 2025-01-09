//Variables
const numbersArray = Array.from(document.querySelectorAll('.number'));
const screen = document.querySelector('.screen');
const acButton = document.getElementsByName('ac')[0];
const percentButton = document.getElementsByName('percent')[0];
const equalButton = document.getElementsByName('equal')[0];
const plusOrMinusButton = document.getElementsByName('plus-or-minus')[0];
const operationsArray = Array.from(document.querySelectorAll('.operation'));
const operationList = operationsArray.map((operation) => operation.value)
let mathCommand = "";
let  changeOperation = false;
let calculated;
let afterCalculation;

function show_mathCommand () {console.log(`Current mathCommand = ${mathCommand}`)}

acButton.addEventListener('click',()=>{
    screen.innerHTML="0";
    mathCommand = "";
    show_mathCommand()
    })

//Numbers Button
numbersArray.forEach((number) => {  
    number.addEventListener('click',()=>{
        if (afterCalculation) {
            screen.innerHTML = number.value 
            afterCalculation = false;
            return
        }
        //Prevent multiple dots
        if (screen.innerHTML.includes(".") && number.value === ".") {return}
        //change 0 -> number.value
        else if (screen.innerHTML === "0" && number.value !== ".") {
            screen.innerHTML = number.value
            return
        }
        screen.innerHTML += number.value
    })
})
//Operations Button
operationsArray.forEach((operation) => {
    operation.addEventListener('click', ()=>{
        //change it operator if its existing
            mathCommand += screen.innerHTML + operation.value; //store the equation in mathCommand
            show_mathCommand()
            screen.innerHTML = "0"
    })
})
//= Button
equalButton.addEventListener('click', () => {
    mathCommand += screen.innerHTML;
    show_mathCommand();
    try {calculated = eval(mathCommand)}
    catch (error) {calculated = "Error"}
    console.log(calculated);
    screen.innerHTML = calculated ;
    mathCommand = "";
    afterCalculation = true;
})
//+- Button
plusOrMinusButton.addEventListener('click',()=>{
    screen.innerHTML = String(-parseFloat(screen.innerHTML));
})
percentButton.addEventListener('click',()=>{
    screen.innerHTML = String(parseFloat(screen.innerHTML)/100);
})