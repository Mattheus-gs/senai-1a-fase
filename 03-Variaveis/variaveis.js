let global = "funçao global"
let cont = 0
  
//function funcao1(){
    let local = "funcao local"
    console.log(local);
//}
//function funcao2(){
 //   console.log(global)
   // console.log(local)
//}
//funcao1()
//funcao2()

//CONTAGEM NUMEROS
function colocarContagem(){
    cont = cont+1
    document.getElementById("p-contagem").innerHTML = cont
}

function DiminuirContagem(){
    cont = cont-1
    document.getElementById("p-contagem").innerHTML = cont

}
function ZerarContagem(){
    cont = 0
    document.getElementById("p-contagem").innerHTML = cont



}
function Adicionar10(){
 cont += 10
    document.getElementById("p-contagem").innerHTML = cont

}





//HARRY PLOTTER
let vendaT = 0
let valor = 0
function registrarVenda(){
    valor = Number(document.getElementById("ValorV").value)
    vendaT = vendaT + valor 

    document.getElementById("valorT").innerHTML = 'Total de vendas: R$ ' + vendaT.toFixed(2)
    document.getElementById("Lista").innerHTML +=  'R$' + valor.toFixed(2)+ '<br>'

    document.getElementById("ValorV").value = ''
    document.getElementById("ValorV").focus()
}
function TirarVenda(){
    vendaT = vendaT - valor
    document.getElementById("valorT").innerHTML = 'Total de vendas: R$ ' + vendaT.toFixed(2)



}




//LANÇADOR DE DADOS

let GiroD4 = 0
let GiroD6 = 0
let GiroD10 = 0
let GiroD12 = 0
let pontoACumulados = 0
function GirarDados(){
const ND4 = Math.ceil(Math.random() * 4);
const ND6 = Math.ceil(Math.random() * 6);
const ND10 = Math.ceil(Math.random() * 10);
const ND12 = Math.ceil(Math.random() * 12);

GiroD4 = GiroD4 +1
GiroD6 = GiroD6 +1
GiroD10 = GiroD10 +1
GiroD12 = GiroD12 +1

document.getElementById("GiroD4").innerHTML = 'O D4 foi rodado: '+ GiroD4 +' vezes'
document.getElementById("GiroD6").innerHTML = 'O D6 foi rodado: '+ GiroD6 +' vezes'
document.getElementById("GiroD10").innerHTML = 'O D10 foi rodado: '+ GiroD10 +' vezes'
document.getElementById("GiroD12").innerHTML = 'O D12 foi rodado: '+ GiroD12 +' vezes'

let pontoT = ND10 + ND12 + ND4 + ND6

pontoACumulados = pontoACumulados + pontoT





document.getElementById("pontos").innerHTML = 'Seus pontos foram: '+ pontoACumulados
document.getElementById("listadados").innerHTML = "D4 = "+ ND4 + "<br>" + "D6 = "+ ND6 + "<br>" +  "D10 = "+ ND10 + "<br>" + "D12 = "+ ND12
document.getElementById("RodadasAnt").innerHTML += 'Rodada:' + pontoT + '<br>'
}function GirarD4(){
const ND4 = Math.ceil(Math.random() * 4);

let pontoT = ND4 

GiroD4 = GiroD4 +1
pontoACumulados = pontoACumulados + pontoT

document.getElementById("GiroD4").innerHTML = 'O D4 foi rodado: '+ GiroD4 +' vezes'
document.getElementById("pontos").innerHTML = 'Seus pontos foram: '+ pontoACumulados
document.getElementById("listadados").innerHTML = "D4 = "+ ND4
document.getElementById("RodadasAnt").innerHTML += 'Rodada:' + pontoT + '<br>'
}function GirarD6(){
const ND6 = Math.ceil(Math.random() * 6);

let pontoT = ND6 

GiroD6 = GiroD6 +1
pontoACumulados = pontoACumulados + pontoT

document.getElementById("GiroD6").innerHTML = 'O D6 foi rodado: '+ GiroD6 +' vezes'
document.getElementById("pontos").innerHTML = 'Seus pontos foram: '+ pontoACumulados
document.getElementById("listadados").innerHTML = "D6 = "+ pontoT
document.getElementById("RodadasAnt").innerHTML += 'Rodada:' + pontoT + '<br>'
}function GirarD10(){
const ND10 = Math.ceil(Math.random() * 10);

let pontoT = ND10 

GiroD10 = GiroD10 +1
pontoACumulados = pontoACumulados + pontoT

document.getElementById("GiroD10").innerHTML = 'O D10 foi rodado: '+ GiroD10 +' vezes'
document.getElementById("pontos").innerHTML = 'Seus pontos foram: '+ pontoACumulados
document.getElementById("listadados").innerHTML = "D10 = "+ ND10
document.getElementById("RodadasAnt").innerHTML += 'Rodada:' + pontoT + '<br>'
}function GirarD12(){
const ND12 = Math.ceil(Math.random() * 12);

let pontoT = ND12 

GiroD12 = GiroD12 +1
pontoACumulados = pontoACumulados + pontoT

document.getElementById("GiroD12").innerHTML = 'O D12 foi rodado: '+ GiroD12 +' vezes'
document.getElementById("pontos").innerHTML = 'Seus pontos foram: '+ pontoACumulados
document.getElementById("listadados").innerHTML = "D12 = "+ ND12
document.getElementById("RodadasAnt").innerHTML += 'Rodada:' + pontoT + '<br>'
}






// DINO

let dinoEscolhido = 0
let DinoSorteado = 0
let ValorAPTotal = 0
let ValorAP = 0
let nomeDino = ''
let maximo = 1000
function digitarSenha(){
    let senhaD = prompt("Qual a senha para acessar sua conta? ")
    let senhaO = "dino123"

    if(senhaD == senhaO){
        alert("O valor total da sua banca no momento é de: R$ " + ValorAPTotal)
        let limite = confirm("gostaria de criar um limite maximo para premiações")
        if (limite == true){
        maximo = Number(prompt("escreva o novo limite: "))
    }
    }
    else{
        alert("Voce ganhou uma rodada gratis, parabens!!!!!!!!")
    }
}
function Apostar(){
    let Aposta = Math.ceil(Math.random() * 10);
    ValorAP = Number(document.getElementById("ValorAposta").value)
    
    ValorAPTotal = ValorAPTotal + ValorAP

   
    
    if(Aposta == 1){
        document.getElementById("DinoS").innerHTML = "Dino sorteado: Espinossauro"
    }else if(Aposta == 2){
         document.getElementById("DinoS").innerHTML = "Dino sorteado: T-rex"
    }else if(Aposta == 3){
         document.getElementById("DinoS").innerHTML = "Dino sorteado: Bronquiossauro"
    }else if(Aposta == 4){
         document.getElementById("DinoS").innerHTML = "Dino sorteado: Velociraptor"
    }else if(Aposta == 5){
         document.getElementById("DinoS").innerHTML = "Dino sorteado: Estegossauro"
    }else if(Aposta == 6){
         document.getElementById("DinoS").innerHTML = "Dino sorteado: Triceratopo"
    }else if(Aposta == 7){
         document.getElementById("DinoS").innerHTML = "Dino sorteado: Aquilossauro"
    }else if(Aposta == 8){
         document.getElementById("DinoS").innerHTML = "Dino sorteado: Parassaurolofo"
    }else if(Aposta == 9){
         document.getElementById("DinoS").innerHTMLnoSorteado = "Dino sorteado: Alossauro"
    }else if(Aposta == 10){
         document.getElementById("DinoS").innerHTML = "Dino sorteado: Carnotauro"
    }



    if(dinoEscolhido == Aposta){
        let valorganho = ValorAP * 2
          console.log(valorganho)
        let valorlimite = (valorganho/ValorAPTotal) * 100
            if(valorganho > maximo){
                document.getElementById("ValorRec").innerHTML = "Valor a receber: R$ XXX ... ERRO 404, tente novamente, na proxima pode ser seu giro da sorte!!!"
            }
            else if(valorlimite <= 20){
                     document.getElementById("50x").innerHTML = '<button  onclick="Multiplicar()">Chance unica: 50x</button>'               
                ValorAPTotal = ValorAPTotal - valorganho
                document.getElementById("ValorRec").innerHTML = "Valor a receber: R$ " + valorganho.toFixed(2)
                document.getElementById("50xtexto").innerText = "Clique no botao para ter a chance de multiplicar seu premio em 50x"
                
            }
            else{document.getElementById("ValorRec").innerHTML = "Valor a receber: R$ XXX ... ERRO 404, tente novamente, na proxima pode ser seu giro da sorte!!!"
            }
            
    }else{
        ValorAPTotal = ValorAPTotal + ValorAP
        document.getElementById("ValorRec").innerHTML = 'Valor a receber: R$ 0,00'
    }
    console.log(ValorAPTotal)
    }


function DinoE(numeroDino){
        dinoEscolhido = numeroDino
        if(dinoEscolhido == 11){
            dinoEscolhido = Math.ceil(Math.random() * 10)
        }

        if(dinoEscolhido == 1){
            nomeDino = 'Seu dino: Espinossauro'
        }else if(dinoEscolhido == 2){
            nomeDino = 'Seu dino: T-rex'
        }else if(dinoEscolhido == 3){
            nomeDino = 'Seu dino: Bronquissauro'
        }else if(dinoEscolhido == 4){
            nomeDino = 'Seu dino: Velociraptor'
        }else if(dinoEscolhido == 5){
            nomeDino = 'Seu dino: Estegossauro'
        }else if(dinoEscolhido == 6){
            nomeDino = 'Seu dino: Triceratopo'
        }else if(dinoEscolhido == 7){
            nomeDino = 'Seu dino: Anquilossauro'
        }else if(dinoEscolhido == 8){
            nomeDino = 'Seu dino: Parassaurolofo'
        }else if(dinoEscolhido == 9){
            nomeDino = 'Seu dino: Alossauro'
        }else if(dinoEscolhido == 10){
            nomeDino = 'Seu dino: Carnotauro'
        }
        document.getElementById("SeuDino").innerHTML = nomeDino
    }

    


  function Multiplicar(){
            document.getElementById("ValorRec").innerHTML = "Valor a receber: R$ 0,00 - Infelizmente voce nao teve sorte, tente novamente!!!"
            document.getElementById("50xtexto").innerText = ""
                document.getElementById("50x").innerHTML = ''
    }