
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
//     console.log(fatorial)
    

// }
// console.log("fatorial total é " + fatorialt)

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

}