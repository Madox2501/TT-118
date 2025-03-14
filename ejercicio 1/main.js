let entradUsuarioPar = document.getElementById("entradaUsuarioPar")
let btnPar = document.getElementById("btnPar")
let salidapar = document.getElementById("salidaPar")
let numeroEjercicioEsPar = 0

entradUsuarioPar.addEventListener("input",(evento) => {
    numeroEjercicioEsPar = evento.target.value
    console.log(numeroEjercicioEsPar)
})
function esPar(numero) {
    if (numero % 2 == 0) {
        return "es par"
    }
    else {
        return "no es par"
    }
}

btnPar.addEventListener("click", () => {
    let resultado = esPar(numeroEjercicioEsPar)
    let hijo = document.createElement("h4")
    hijo.innerHTML = numeroEjercicioEsPar + " "+resultado
    salidapar.appendChild(hijo)

})






// btnPar.addEventListener("click", () => {
//     console.log(esPar(numeroEjercicioEsPar))
//     let hijo = document.createElement("h4")
//     hijo.innerHTML = "salida"
//     salidapar.appendChild(hijo)

// })












