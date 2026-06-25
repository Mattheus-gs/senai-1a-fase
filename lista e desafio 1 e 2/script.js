function exerciciosf(){
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
// document.getElementById("resultado2").innerHTML = "tem exatamente "+os+" letra(s) O na palavra: "+palavra
//============================================================================
}
function lista1(){
let dias = Number(prompt("quantos dias tem a sprint? "))
let tarefas = 0
let tarefaT = 0
let tarefasC = 0 
let tarefasI = 0
let iT = 0
let cT = 0
    for(i=1;i<=dias;i++){
        tarefas = Number(prompt("quantas tarefas foram iniciadas no dia "+i+": "))
        tarefasC = Number(prompt("quantas tarefas foram CONCLUIDAS no dia "+i+": "))
        tarefasI = Number(prompt("quantas tarefas FICARAM INCOMPLETAS no dia "+i+": "))

        tarefaT += tarefas
        iT += tarefasI
        cT += tarefasC
    document.getElementById("resultado2").innerHTML += "No dia "+i+" foram iniciadas: "+tarefas + " tarefas<br>"+
                            "Tarefas concluidas no dia "+i+": "+ tarefasC+"<br>"+
                            "Tarefas incompletas no dia "+i+": "+ tarefasI+"<br>"
    }
document.getElementById("resultado2").innerHTML += "no total foram iniciadas :" + tarefaT +" tarefas<br>"+
                            "Tarefas concluidas totais: "+ cT+"<br>"+
                            "Tarefas incompletas totais: "+ iT
}
function lista2(){
let dias = Number(prompt("quantos dias tem a sprint? "))
let bugsT = 0
let diama = 0
let diame = 0
let Mbug = 0
let Mebug = 0
let bug10 = 0
let bug0 = 0

    for(i=1;i<=dias;i++){
       let bugs = Number(prompt("quantos bugs encontrados no dia "+i+": "))
        

        bugsT += bugs
        
        document.getElementById("resultado2").innerHTML += "No dia "+i+" foram encontrados: "+bugs + " bugs<br>"
            
         if(i==1){
            diama = i
            Mbug = bugs
            diame = i
            Mebug = bugs
         }else if (bugs>Mbug){
            Mbug = bugs
            diama = i
         }else if(bugs<Mebug){
            Mebug = bugs
            diame = i
         }

         if(bugs> 10){
            bug10++
         }
         if(bugs==0){
            bug0++
         }
    }
let mediabug = bugsT/dias
document.getElementById("resultado2").innerHTML += "no total foram encontrados :" + bugsT +" bugs<br>"+
                                                    "Media de bugs: "+ mediabug.toFixed(0)+"<br>"+
                                                    "dia com mais bugs: "+diama+" dias - BUGS: "+Mbug+"<br>" +
                                                    "dia com menos bugs: "+diame+" dias - BUGS: "+Mebug+"<br>"+
                                                    "dia com mais de 10 bugs: "+bug10+" dia(s)<br>"+
                                                    "dia sem bugs: "+bug0+" dia(s)<br>"
                            
}