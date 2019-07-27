var data = {
    name : document.getElementById("name"),
    hours : document.getElementById("hours"),
    price : document.getElementById("price"),
    dependents : document.getElementById("dependents"),
}

var INSS = ""
var valueINSS = 0

var IRRF = ""
var valueIRRF = 0

var grossSalary = 0

function start() {
    calculate()
    calculateINSS()
    calculateIRRF()
    render()
}

function calculate(){
    grossSalary = (hours.valueAsNumber * price.valueAsNumber)
}

function calculateINSS(){

    if(grossSalary <= 1317.08){
        valueINSS = (grossSalary * 8/100)
        INSS = '8%'
    }
    else if (grossSalary <= 2195.12) {
        valueINSS = (grossSalary * 9/100)
        INSS = '9%'
    }
    else if (grossSalary <= 4390.24) {
        valueINSS = (grossSalary * 11/100)
        INSS = '11%'
    }
    else if (grossSalary >= 4390.25) {
        valueINSS = 482.93
        INSS = '482.93 reais'
    }
}

function calculateIRRF() {

    if(grossSalary < 1903.98){
        valueIRRF = 0
        IRRF = '0'
    }
    else if (grossSalary < 2826.65) {
        valueIRRF = (grossSalary * 75/1000)
        IRRF = '7.5%'
    }
    else if (grossSalary < 3751.05) {
        valueIRRF = (grossSalary * 15/100)
        IRRF = '15%'
    }
    else if (grossSalary < 4664.68) {
        valueIRRF = (grossSalary * 225/1000)
        IRRF = '22.5%'
    }
    else if (grossSalary > 4664.68) {
        valueIRRF = (grossSalary * 275/1000)
        IRRF = '27.5%'
    }
}

function render() {
    netSalary = (grossSalary - (valueINSS + valueIRRF))

    let text =`INSS value ${valueINSS} reais, INSS ${INSS} <br>`
    text += `IRRF value ${valueIRRF} reais, IRRF ${IRRF} <br>` 
    text += `Gross salary is ${grossSalary} reais<br>`
    text += `Net salary ${netSalary} reais`
    
    document.getElementById("answer").innerHTML = text
}

document.addEventListener('keydown', event => {
    if(event.keyCode === 13) {
        start()
    }
})

//https://docs.google.com/spreadsheets/d/1_jrujhqHplhDH0FF8mibRTzdbTC0lBJu4XwN4HzOXNg/edit#gid=0 - Tabela INSS