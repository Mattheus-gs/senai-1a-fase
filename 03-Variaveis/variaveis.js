let global = "funçao global"
let cont = 0
function funcao1(){
    let local = "funcao local"
    console.log(local);
}
function funcao2(){
    console.log(global)
    console.log(local)
}
funcao1()
funcao2()


function colocarContagem(){

    cont = cont+1
    document.getElementById("p-contagem").innerHTML = cont


}