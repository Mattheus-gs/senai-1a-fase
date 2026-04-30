// ROMERO BRICK

function calcularPreco(){
let Custo, Lucro, Total

Custo = Number(prompt("Qual o valor pago por este por este produto? "))

Lucro = Custo * 2

Total = Lucro + Custo


// tela - chamar o id - nome do id - apenas texto interno - oque aparecera quando for finalizado
document.getElementById("resultado").innerHTML = "Voce devera vender este produto por R$ "+Total.toFixed(2)+" para ter 200% de lucro"


//CAPITAO GANSO
}

function Provisao(){
    let marujo, comida

marujo = Number(prompt("Quantos marujos estão a bordo?"))


if(marujo >= 10){

    comida = Number(prompt("Quantos Kg de comida temos até o momento?"))
        if(comida >= marujo * 1.5)
        document.getElementById("resultado").innerHTML = "Provisões suficientes. Rumo ao horizonte!"
           else {
        document.getElementById("resultado").innerHTML = "Algo está errado. Posseidom não quer ninguém no mar hoje"
            }
    }
else{
    document.getElementById("resultado").innerHTML = "Algo está errado. Posseidom não quer ninguém no mar hoje"
}

}

// JUNIN CLT

function Salario(){
let salarioM, escala, SalarioDia

salarioM = Number(prompt("Quanto reais voce ganha por mes? "))
escala =  prompt("Sua escala é 5x2 ou 6x1").trim().toLowerCase()


if (escala === "5x2") {
   SalarioDia = salarioM / 22
   document.getElementById("resultado").innerHTML = "Seu salario diario é de: R$ " + SalarioDia.toFixed(2)
} else if (escala === "6x1") {
   SalarioDia = salarioM / 26
   document.getElementById("resultado").innerHTML = "Seu salario diario é de: R$ " + SalarioDia.toFixed(2)
} else {
   document.getElementById("resultado").innerHTML = "Escala inválida. Digite 5x2 ou 6x1."
}
}

//MONIKA CHANCES

    function Chance(){
        let NCelular, Chance, ChanceH

NCelular = Number(prompt("quantas vezes o aluno pego o celular durante a palestra? "))

Chance = (0.1/(1+500*NCelular))*100

ChanceH = (100/Chance) 


document.getElementById("resultado").innerHTML = "a chance do aluno ser aprovado é de: " + Chance+"%\n" + "isso faz voce ter 1 chance a cada "+ChanceH +" pessoas"
    }

// PE PEQUENO

function PrecoSapato(){
let PrecoPar, Qpares, ValorT

PrecoPar = Number(prompt("Qual o preço do par? "))

Qpares = Number(prompt("Quantos pares voce ira ter que devolver? "))

ValorT = (PrecoPar*Qpares)

//console guarda na interna do site = f12 console
console.log("Voce recebera um valor de R$ "+ ValorT.toFixed(2)+ " pelos seus pares")

document.getElementById("resultado").innerHTML = "Voce recebera um valor de R$ "+ ValorT.toFixed(2)+ " pelos seus pares"

}
