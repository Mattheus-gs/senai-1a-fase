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
let dino1 = 0
let dino2 = 0
let dino3 = 0
let dino4 = 0
let dino5 = 0
let dino6 = 0
let dino7 = 0
let dino8 = 0
let dino9 = 0
let dino10 = 0

function Apostar(){
    const Aposta = Math.ceil(Math.random() * 10);
    ValorAP = Number(document.getElementById("ValorAposta").value)
    if(dino1 == Aposta){
        alert("voce ganhou")
    }else{
        alert("voce é burro de apostar")
    }

console.log(Aposta)
}


function Espino(){
    dino1 = 1

}
