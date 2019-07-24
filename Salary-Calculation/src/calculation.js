let data = {
    name : document.getElementById("name"),
    hours : document.getElementById("hours"),
    price : document.getElementById("price"),
    dependents : document.getElementById("dependents"),
    INSS : document.getElementById("INSS"),
    IRRF : document.getElementById("IRRF"),
}



function calculate(){
    var grossSalary = (data.hours.value * data.price.value)
    var netSalary = 0
    var valueINSS = 0
    var valueIRRF = (grossSalary - valueINSS)

    let text = `<p>Gross salary ${grossSalary}</p>`
    text += `<p>Net salary ${netSalary} </p>`
    text +=`<p>INSS value ${valueINSS} </p>`
    text += `<p>IRRF value ${valueIRRF} </p>`
    
    document.getElementById("answer").innerHTML = text
}

calculate()

//https://www.google.com/search?q=IRRF&client=ms-android-motorola&prmd=niv&source=lnms&tbm=isch&sa=X&ved=2ahUKEwil5YSmvs7jAhVyw1kKHemcAuIQ_AUoAnoECBIQAg&biw=360&bih=512#imgrc=kbZJghbLa2ekmM