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
let DinoSorteado = 0
let ValorAPTotal = 0

function Apostar(){
    const Aposta = Math.ceil(Math.random() * 10);
    ValorAP = Number(document.getElementById("ValorAposta").value)

    ValorAPTotal = ValorAPTotal + ValorAP

   
    
    if(Aposta == 1){
        DinoSorteado = "Dino sorteado: Espinossauro"
    }else if(Aposta == 2){
         DinoSorteado = "Dino sorteado: T-rex"
    }else if(Aposta == 3){
         DinoSorteado = "Dino sorteado: Bronquiossauro"
    }else if(Aposta == 4){
         DinoSorteado = "Dino sorteado: Velociraptor"
    }else if(Aposta == 5){
         DinoSorteado = "Dino sorteado: Estegossauro"
    }else if(Aposta == 6){
         DinoSorteado = "Dino sorteado: Triceratopo"
    }else if(Aposta == 7){
         DinoSorteado = "Dino sorteado: Aquilossauro"
    }else if(Aposta == 8){
         DinoSorteado = "Dino sorteado: Parassaurolofo"
    }else if(Aposta == 9){
         DinoSorteado = "Dino sorteado: Alossauro"
    }else if(Aposta == 10){
         DinoSorteado = "Dino sorteado: Carnotauro"
    }



    if(dino1 == Aposta){ 
        document.getElementById("DinoS").innerHTML = "Dino sorteado: Espinossauro"
        ValorAP = ValorAP * 2
        if(ValorAPTotal < 500){
        document.getElementById("ValorRec").innerHTML = 'Valor a receber: R$ XXX "ERROR 404" Tente novamento, na proxima voce pode levar a sorte grande' 
            }else{document.getElementById("ValorRec").innerHTML = 'Valor a receber: R$' + ValorAP.toFixed(2)}
    }else if(dino2 == Aposta){
        document.getElementById("DinoS").innerHTML = "Dino sorteado: T-rex"
        ValorAP = ValorAP * 2
        if(ValorAPTotal < 500){
        document.getElementById("ValorRec").innerHTML = 'Valor a receber: R$ XXX "ERROR 404" Tente novamento, na proxima voce pode levar a sorte grande' 
            }else{document.getElementById("ValorRec").innerHTML = 'Valor a receber: R$' + ValorAP.toFixed(2)}
        }else if(dino3 == Aposta){
        document.getElementById("DinoS").innerHTML = "Dino sorteado: Broquiossauro"
        ValorAP = ValorAP * 2
        if(ValorAPTotal < 500){
        document.getElementById("ValorRec").innerHTML = 'Valor a receber: R$ XXX "ERROR 404" Tente novamento, na proxima voce pode levar a sorte grande' 
            }else{document.getElementById("ValorRec").innerHTML = 'Valor a receber: R$' + ValorAP.toFixed(2)}
        }else if(dino4 == Aposta){
        document.getElementById("DinoS").innerHTML = "Dino sorteado: Velociraptor"
        ValorAP = ValorAP * 2
        if(ValorAPTotal < 500){
        document.getElementById("ValorRec").innerHTML = 'Valor a receber: R$ XXX "ERROR 404" Tente novamento, na proxima voce pode levar a sorte grande' 
            }else{document.getElementById("ValorRec").innerHTML = 'Valor a receber: R$' + ValorAP.toFixed(2)}
        }else if(dino5 == Aposta){
        document.getElementById("DinoS").innerHTML = "Dino sorteado: Estegossauro"
        ValorAP = ValorAP * 2
        if(ValorAPTotal < 500){
        document.getElementById("ValorRec").innerHTML = 'Valor a receber: R$ XXX "ERROR 404" Tente novamento, na proxima voce pode levar a sorte grande' 
            }else{document.getElementById("ValorRec").innerHTML = 'Valor a receber: R$' + ValorAP.toFixed(2)}
        }else if(dino6 == Aposta){
        document.getElementById("DinoS").innerHTML = "Dino sorteado: Triceratopo"
        ValorAP = ValorAP * 2
        if(ValorAPTotal < 500){
        document.getElementById("ValorRec").innerHTML = 'Valor a receber: R$ XXX "ERROR 404" Tente novamento, na proxima voce pode levar a sorte grande' 
            }else{document.getElementById("ValorRec").innerHTML = 'Valor a receber: R$' + ValorAP.toFixed(2)}
        }else if(dino7 == Aposta){
        document.getElementById("DinoS").innerHTML = "Dino sorteado: Anquilossauro"
        ValorAP = ValorAP * 2
        if(ValorAPTotal < 500){
        document.getElementById("ValorRec").innerHTML = 'Valor a receber: R$ XXX "ERROR 404" Tente novamento, na proxima voce pode levar a sorte grande' 
            }else{document.getElementById("ValorRec").innerHTML = 'Valor a receber: R$' + ValorAP.toFixed(2)}
        }else if(dino8 == Aposta){
        document.getElementById("DinoS").innerHTML = "Dino sorteado: Parassaurolofo"
        ValorAP = ValorAP * 2
        if(ValorAPTotal < 500){
        document.getElementById("ValorRec").innerHTML = 'Valor a receber: R$ XXX "ERROR 404" Tente novamento, na proxima voce pode levar a sorte grande' 
            }else{document.getElementById("ValorRec").innerHTML = 'Valor a receber: R$' + ValorAP.toFixed(2)}
        }else if(dino9 == Aposta){
        document.getElementById("DinoS").innerHTML = "Dino sorteado: Alossauro"
        ValorAP = ValorAP * 2
        if(ValorAPTotal < 500){
        document.getElementById("ValorRec").innerHTML = 'Valor a receber: R$ XXX "ERROR 404" Tente novamento, na proxima voce pode levar a sorte grande' 
            }else{document.getElementById("ValorRec").innerHTML = 'Valor a receber: R$' + ValorAP.toFixed(2)}
        }else if(dino10 == Aposta){
        document.getElementById("DinoS").innerHTML = "Dino sorteado: Carnotauro"
        ValorAP = ValorAP * 2
        if(ValorAPTotal < 500){
        document.getElementById("ValorRec").innerHTML = 'Valor a receber: R$ XXX "ERROR 404" Tente novamento, na proxima voce pode levar a sorte grande' 
            }else{document.getElementById("ValorRec").innerHTML = 'Valor a receber: R$' + ValorAP.toFixed(2)}
    }else{
        document.getElementById("DinoS").innerHTML = DinoSorteado
        ValorAP = 0
        document.getElementById("ValorRec").innerHTML = 'Valor a receber: R$' + ValorAP.toFixed(2)
    }
    







    console.log(Aposta)
    console.log(ValorAPTotal)
}


function Espino(){
    dino1 = 1
    document.getElementById("SeuDino").innerHTML = "Seu dino: Espinossauro"

}
function Trex(){
    dino2 = 2
    document.getElementById("SeuDino").innerHTML = "Seu dino: T-rex"
}
function Broquio(){
    dino3 = 3
    document.getElementById("SeuDino").innerHTML = "Seu dino: Bronquiossauro"
}
function Veloc(){
    dino4 = 4
    document.getElementById("SeuDino").innerHTML = "Seu dino: Velociraptor"
}
function Estego(){
    dino5 = 5
    document.getElementById("SeuDino").innerHTML = "Seu dino: Estegossauro"
}
function Trice(){
    dino6 = 6
    document.getElementById("SeuDino").innerHTML = "Seu dino: Triceratopo"
}
function Anquilo(){
    dino7 = 7
    document.getElementById("SeuDino").innerHTML = "Seu dino: Anquilossauro"
}
function Parassau(){
    dino8 = 8
    document.getElementById("SeuDino").innerHTML = "Seu dino: Parassaurolofo"
}
function Alos(){
     dino9 = 9
    document.getElementById("SeuDino").innerHTML = "Seu dino: Alossauro"
}
function Carno(){
    dino10 = 10
    document.getElementById("SeuDino").innerHTML = "Seu dino: Carnotauro"
}