
function whil(){
let contagem = ""
let contador = 11 

while(contador > 1){
    
    contador--
    
    contagem += contador + "<br>"
    
    document.getElementById("resultado").innerHTML = contagem
}
}


//=========================================================================
// PERGUNTAR NOME
//=========================================================================



function dow(){
    let nome = ""
    let entrada

    do {
        entrada = prompt("digite seu nome")
        
    } while (entrada !== nome);

    alert("boa, voce nao é burro")


}

//=======================================================
// MANO JUCA
// =====================================================

function tabuar(){
    let tabuada = ""
    let numero = Number(prompt("digite o numero que voçê quer a tabuada: "))
       
        for(let i = 1; i<=10; i++){
    
    tabuada += numero +" X " +i+ " = " + (numero*i)+"<br>"
    }
    document.getElementById("resultado").innerHTML = tabuada
}



function exercicios(){
//     let contagem = ""
// let contador = 0 

// while(contador <10){
    
//     contador++
    
//     contagem += contador * contador + "<br>"
    
//     document.getElementById("resultado").innerHTML = contagem 
// }

//============================================================================================

// let contagem = 0
// let contador = 0 
// let i = 0

// while(i <100){
    
//     i++
//     contador++
    
//     contagem = contagem + contador 
//     document.getElementById("resultado").innerHTML = contagem  
// }

//==========================================================================================

// let contagem = 0
// let contador = 0 
// let i = 0

// while(i <20){
//     let impar = 0
//     i++
//     contador++
//     impar = contador % 2
//     console.log(impar)
//     if(impar == 1){
//          contagem = contagem + contador +"<br>"

//     document.getElementById("resultado").innerHTML = contagem  
//     }
 
// }

//==============================================================================

// let contagem = ""
// let contador = 0 

// while(contador > 1){
    
//     contador--
    
//     contagem += contador + "<br>"
    
//     document.getElementById("resultado").innerHTML = contagem
// }



//===========================================================================
// let numero = Number(prompt("digite um numero para ver o fatoria dele: ")) 
// let fatorial = 1
// let fatorialt = 0
// while(1 < numero){
//     fatorial *= numero; 
//     fatorialt += fatorial;

//     numero--
//     document.getElementById("resultado").innerHTML += fatorial + "<br>"
    

// }
// document.getElementById("resultado2").innerHTML = ("fatorial total é " + fatorial)

//===========================================================================

// for(i = 1; i <= 100; i++){
//     let fator3 = 0
//     let fator5 = 0

   
//     fator3 = i % 3
//     fator5 = i % 5
//     if( fator3 == 0 && fator5 == 0 ){
//         document.getElementById("resultado").innerHTML += "fizzbuzz"+"<br>"  
//     }
//     else if (fator5 == 0){
//         document.getElementById("resultado").innerHTML += "Buzz"+"<br>" 
//     }
//     else if(fator3 == 0){
//         document.getElementById("resultado").innerHTML += "fizz" +"<br>" 
//     }else{
//         document.getElementById("resultado").innerHTML += i +"<br>" 
//     }  
// }
//=========================================================================================
// let valor = 1
// let resultado = 0
// let divisor = 1
// let i = 0
// while(i<10){
   
//     resultado += valor / divisor
//     divisor ++
//     document.getElementById("resultado").innerHTML += resultado.toFixed(3) + "<br>"
//     console.log(valor)
//     console.log(resultado)
//     console.log(divisor)
//     i++
// }
// document.getElementById("resultado2").innerHTML = ("resultado final é: " + resultado.toFixed(3))
//======================================================================================================================================
// let numero = Number(prompt("Escolha um numero aleatorio: "))
// let numerosP = 0
// let numerosI = 0
// let cont =0
// let contagem = 0
// while(cont<numero){
    
//     contagem++
//     let resultado = contagem % 2
//     if(resultado == 0){
//         numerosP++
//     }else{
//         numerosI++
//     }
//     cont++


// }

// document.getElementById("resultado2").innerHTML = ("IMPARES: " + numerosI +"<br>" + "PARES" + numerosP)

//========================================================================================
// let numero = Number(prompt("escreva o numero que voce quer saber se é primo: "))
// let cont = 0
// let resultado = 0
// let primos = 0
// while(cont<numero){
//     cont++
//     resultado = numero % cont
//     if(resultado == 0){
//         console.log("divisões inteiras")
//         primos++
//     }else{
//         console.log("divisões quebradas")
//     }
// }
// if(primos >1 && primos <=2){
//     document.getElementById("resultado2").innerHTML = "numero é primo"

//     }
//     else{
//         document.getElementById("resultado2").innerHTML = "numero NÃO é primo"
//     }

//==========================================================================================
let numero = Number(prompt("escreva o numero que voce quer saber se é primo: "))
let cont = 0
let resultado = 0
let primos = 0
while(cont<numero){
    cont++
    resultado = numero % cont
    if(resultado == 0){
        console.log("divisões inteiras")
        primos++
    }else{
        console.log("divisões quebradas")
    }
}
}