let data = {
    name : document.getElementById("name"),
    hours : document.getElementById("hours"),
    price : document.getElementById("price"),
    dependents : document.getElementById("dependents"),
}
  
function check(){
    if(true){
        calculate()
    }
    else{
        alert('Fill in the fields correctly')
    }
}

function calculate(){
    var grossSalary = (data.hours.value * data.price.value)
    var INSS = ""
    valueINSS = 0

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
        valueINSS = (grossSalary + 482.93)
        INSS = '482,93'
    }

    var valueIRRF = (grossSalary - valueINSS)
    var netSalary = (grossSalary - (valueIRRF + valueINSS))
    
    let text =`INSS value ${valueINSS}, INSS percentage ${INSS} <br>`
    text += `IRRF value ${valueIRRF}, IRRF percentage <br>` 
    text += `Gross salary ${grossSalary}<br>`
    text += `Net salary ${netSalary}`
    
    document.getElementById("answer").innerHTML = text
}

document.addEventListener('keydown', event => {
    if(event.keyCode === 13) {
        check()
    }
})

//https://www.google.com/search?q=IRRF&client=ms-android-motorola&prmd=niv&source=lnms&tbm=isch&sa=X&ved=2ahUKEwil5YSmvs7jAhVyw1kKHemcAuIQ_AUoAnoECBIQAg&biw=360&bih=512#imgrc=kbZJghbLa2ekmM