const numButtons = document.querySelectorAll('button[class^="num-"]')
const operatorButtons = document.querySelectorAll('button[id^="operator-"]')
const outputDisplay = document.querySelector('.output-display');
const equalButton = document.querySelector('#equal');
const clearButton = document.querySelector(".clear");
const posNegButton = document.querySelector(".pos-neg");
const allButtons = document.querySelectorAll("button")

let numOne = null;
let numTwo = null;
let operand = null;

//Display numbers onto the screen//
numButtons.forEach(button => {
    button.addEventListener('click', ()=>{

        if (outputDisplay.textContent == "+" ||
            outputDisplay.textContent == "-" ||
            outputDisplay.textContent == "/" ||
            outputDisplay.textContent == "*")  {
            outputDisplay.textContent = "";
            }
        
        outputDisplay.textContent += button.textContent;
    
    })
})


operatorButtons.forEach(button => {
    button.addEventListener('click', ()=> {
        numOne = parseFloat(outputDisplay.textContent);
        if (outputDisplay.textContent !== ""){    
            outputDisplay.textContent = "";            
        }
        outputDisplay.textContent = button.textContent;
        operand = button.textContent;

        console.log(`1st num is ${numOne}`)
    })
})

equalButton.addEventListener('click' , ()=>{
    numTwo = parseFloat(outputDisplay.textContent);
    console.log(`2nd num is ${numTwo}`)

    let result = operate(numOne, numTwo, operand);
    outputDisplay.textContent = result;

    }
)

clearButton.addEventListener('click', ()=>{

    outputDisplay.textContent = "";
    numOne = null;
    numTwo = null;
})

posNegButton.addEventListener("click", ()=>{

    if (outputDisplay.textContent[0] != "-"){
        outputDisplay.textContent = "-" +  outputDisplay.textContent;

    } else if (outputDisplay.textContent[0] == "-"){
        outputDisplay.textContent = outputDisplay.textContent.replace("-", "");
    }
    
})

allButtons.forEach(button =>{

    button.addEventListener("mouseover", (event)=>{
        event.target.style.borderColor= "white";
        event.target.style.Width= "200px";

    })


    button.addEventListener("mouseout", (event)=>{
        event.target.style.borderColor= "black";
        event.target.style.Width= "0px";

    })

})
    
//Calculator Functions//

function addNum(numOne, numTwo){

    return (numOne + numTwo).toFixed(3);
    
}

function subNum(numOne, numTwo){
    return (numOne - numTwo).toFixed(3);

}

function divNum(numOne, numTwo){
        return (numOne / numTwo).toFixed(3);
}

function mulNum(numOne, numTwo){
        return (numOne*numTwo).toFixed(3);
    
}

function operate(numOne, numTwo, operator){
    if(operator === "+"){
        return addNum(numOne, numTwo);
    } else if(operator === "-"){
        return subNum(numOne, numTwo)
    } else if(operator === "/"){
        return divNum(numOne, numTwo);
    } else if (operator === "*"){
        return mulNum (numOne, numTwo);
    }

}






