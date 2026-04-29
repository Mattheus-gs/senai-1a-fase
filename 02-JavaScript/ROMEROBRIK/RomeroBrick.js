function calcularPreco(){
let Custo, Lucro, Total

Custo = Number(prompt("Qual o valor pago por este por este produto? "))

Lucro = Custo * 2

Total = Lucro + Custo

document.getElementById("resultado").innerHTML = "Voce devera vender este produto por R$ "+Total.toFixed(2)+" para ter 200% de lucro"

}






