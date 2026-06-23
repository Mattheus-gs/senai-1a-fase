
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
}

function exerciciosf(){
//  for(let i = 1; i<=11;i++){
//     if(i==1){
//         document.getElementById("resultado2").innerHTML += "J<br>"
//     } else if(i==2){
//         document.getElementById("resultado2").innerHTML += "a<br>"
//     }
//     else if(i==3){
//         document.getElementById("resultado2").innerHTML += "v<br>"
//     }
//     else if(i==4){
//         document.getElementById("resultado2").innerHTML += "a<br>"
//     }
//     else if(i==5){
//         document.getElementById("resultado2").innerHTML += "S<br>"
//     }
//     else if(i==6){
//         document.getElementById("resultado2").innerHTML += "c<br>"
//     }
//     else if(i==7){
//         document.getElementById("resultado2").innerHTML += "r<br>"
//     }
//     else if(i==8){
//         document.getElementById("resultado2").innerHTML += "i<br>"
//     }
//     else if(i==9){
//         document.getElementById("resultado2").innerHTML += "p<br>"
//     }
//     else if(i==10){
//         document.getElementById("resultado2").innerHTML += "t<br>"
//     }

//     console.log(i)

    
//  }
//==============================================================================
// let valor = 1
// let resultado = 0
// for(i=0;i<10;i++){
//     resultado = valor * 3
//     document.getElementById("resultado2").innerHTML += "resultado: "+resultado+"<br>"
//  valor++
// }
//==============================================================================
// for(i=0;i<10;i++){
//    document.getElementById("resultado2").innerHTML += "*"
// }
//==============================================================================
// let n = 0
// let resultado = 0
// for(i=2;i<20;i+=2){
//     n = n +i
//     document.getElementById("resultado2").innerHTML += n+"<br>"
// }
//==============================================================================
// for(i=1;i<=8;i++){
//     document.getElementById("resultado2").innerHTML += i+" ola <br>"
// }
//==============================================================================
// let n = 0
// for(i=1;i<=15;i+=2){
//     n = n +i
//     document.getElementById("resultado2").innerHTML += n+"<br>"
// }
//==============================================================================
// for(i=1;i<=1;i++){
//     document.getElementById("resultado2").innerHTML += "1"+"<br>"
//     document.getElementById("resultado2").innerHTML +="12"+"<br>"
//     document.getElementById("resultado2").innerHTML += "123"+"<br>"
//     document.getElementById("resultado2").innerHTML += "1234"+"<br>"
//     document.getElementById("resultado2").innerHTML += "12345"+"<br>"
// }
//==============================================================================

// let fatorial=1

// for(i=5;i>1;i--){
//     fatorial *= i
//      document.getElementById("resultado2").innerHTML += fatorial+"<br>"
    
// }

//==============================================================================
// let palavra = prompt("digite uma palavra: ")
// let os = 0

// for(i=0;i<palavra.length;i++){
//     if(palavra[i] == "o"){
//         os += 1
//     }
// }
// document.getElementById("resultado2").innerHTML = "tem exatamente "+os+" letra(s) O"
//============================================================================

}