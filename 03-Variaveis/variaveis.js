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

let vendaT = 0
      
function registrarVenda(){
    let valor = Number(document.getElementById("ValorV").value)
    vendaT = vendaT + valor 

    document.getElementById("valorT").innerHTML = 'Total de vendas: R$ ' + vendaT.toFixed(2)
    document.getElementById("Lista").innerHTML +=  'R$' + valor.toFixed(2)+ '<br>'
    document.getElementById("ValorV").value = ''
    document.getElementById("ValorV").focus()
}

let pontoACumulados = 0
function GirarDados(){
const ND4 = Math.ceil(Math.random() * 4);
const ND6 = Math.ceil(Math.random() * 6);
const ND10 = Math.ceil(Math.random() * 10);
const ND12 = Math.ceil(Math.random() * 12);

let pontoT = ND10 + ND12 + ND4 + ND6

pontoACumulados = pontoACumulados + pontoT

document.getElementById("pontos").innerHTML = 'Seus pontos foram: '+ pontoACumulados
document.getElementById("listadados").innerHTML = "D4 = "+ ND4 + "<br>" + "D6 = "+ ND6 + "<br>" +  "D10 = "+ ND10 + "<br>" + "D12 = "+ ND12
document.getElementById("RodadasAnt").innerHTML += 'Rodada:' + pontoT + '<br>'
}