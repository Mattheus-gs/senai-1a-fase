
// function whil(){

// let contador = 0 

// while(contador < 10){
    
//     contador++
//     console.log(contador)
    
    
// }
// }


// function fo(){
// for(let i = 1; i<=10; i++){
    
//     console.log("5 x "+i+ "=" + (5*i))
// }
// }


// function dow(){
//     let nome = "joao"
//     let entrada

//     do {
//         entrada = prompt("digite seu nome")
        
//     } while (entrada !== nome);

//     alert("boa, voce nao é burro")


// }

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