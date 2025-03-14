let input_number = document.getElementById("input_number")
let btn_flw = document.getElementById("btn_flw")
let output_flw_name = document.getElementById("flower_name")
let flw_name = 0

input_number.addEventListener("input",(evento) => {
    flw_name = evento.target.value
    console.log(flw_name)
})

function flowerNames(numero) {
    if ((numero %3==0 && numero %5==0) && (numero %6==0 && numero %7==0)){
        return "violeta"
    }

    else if ((numero %3==0) && (numero %5==0)){
        return "margarita"
    }

    else if ((numero %6==0) && (numero %7==0)){
        return "rosa"
    }
    else {
        return "none"
    }

}

btn_flw.addEventListener("click", () => {
    let resultado = flowerNames(flw_name)
    let hijo = document.createElement("h4")
    hijo.innerHTML = flw_name + " "+resultado
    output_flw_name.appendChild(hijo)

})


// ejercicio 2 valores por defecto

// BOX1!
let inputBox1 = document.getElementById("inputBox1")
let btn1 = document.getElementById("btn1")
let output_DNumber1 = document.getElementById("DNumber1")
let number_1 = 0

inputBox1.addEventListener("input",(evento) => {
    number_1 = evento.target.value
    console.log(number_1)
})

function numberBox1(numero) {
    if (numero %3==0){
        return "buuu"
    }
   
}

btn1.addEventListener("click", () => {
    let resultado = numberBox1(number_1)
    let hijo = document.createElement("h4")
    hijo.innerHTML = " "+resultado
    output_DNumber1.appendChild(hijo)

})
        