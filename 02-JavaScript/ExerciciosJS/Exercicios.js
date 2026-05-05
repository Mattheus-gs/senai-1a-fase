// ROMERO BRICK

function calcularPreco(){
let Custo, Lucro, Total

Custo = Number(prompt("Qual o valor pago por este por este produto? "))

Lucro = Custo * 2

Total = Lucro + Custo

document.body.className = "azul"


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
document.getElementById("resultado").className = "roxo"
document.body.className = "verde"

}

//Ser maior de idade

function MaiorDeIdade(){
     
let idade,resultado = document.getElementById("resultado")

idade = Number(prompt("Qual a sua idade? "))

if ( idade >= 18 ){
    resultado.innerHTML = "Voce é maior de idade e pode ser preso"
 } else 
    resultado.innerHTML = "Voce não é maior de idade e sera liberado"


}

//Adivinhe o numero
function Advinhação(){
    const numeroSecreto = Math.ceil(Math.random() * 10);

// Pede um palpite ao usuário
let palpite = Number(prompt("Adivinhe o número entre 1 e 10:")),
resultado = document.getElementById("resultado");



// Verifica o resultado
if (palpite === numeroSecreto) {
resultado.innerHTML = (`🎉 Parabéns! Você acertou! o numero era 25`);
} else {
    resultado.innerHTML = (`❌ Errou! O número era ${numeroSecreto}`);
    }



}
//Verifica se o numero é par ou impar
function VerificarPar(){
let numero = Number(prompt("escolha um numero qualquer: "))
resultado = document.getElementById("resultado");

if (numero % 2 === 0 )
    resultado.innerHTML = "Seu numero é par"
else{
    resultado.innerHTML = "Seu numero é impar"
}
}
function ClassificarNota(){
let nota = Number(prompt("Qual sua nota de 0 a 100? "))
resultado = document.getElementById("resultado");

if (nota <= 20){
     resultado.innerHTML = "Sua nota é E, seu animal"

    }else if(nota <= 40){
        resultado.innerHTML = "Sua nota é D, Precisa estudar"
    } else if(nota <= 60){
            resultado.innerHTML = "Sua nota é C, Ta mais ou menos"
    } else if (nota <= 80){
        resultado.innerHTML = "Sua nota é B, Parabens"
    }
    else {
        resultado.innerHTML = "Sua nota é A, Precisa de vida social"
    }




}
