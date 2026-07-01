let precos = []
let produtos = ["Notebook", "Mouse", "Teclado", "Monitor", "Impressora", "Headset", "Webcam", "Caixa de Som", "Microfone", "HD Externo", "SSD", "Pen Drive", "Carregador", "Cabo HDMI", "Cabo USB-C", "Roteador", "Modem", "Switch de Rede", "Placa de Vídeo", "Processador", "Memória RAM", "Placa-Mãe", "Fonte de Alimentação", "Gabinete", "Cooler", "Ventoinha", "Tablet", "Smartphone", "Smartwatch", "Pulseira Inteligente", "Câmera Digital", "Drone", "Projetor", "Controle Gamer", "Console", "Joystick", "Cadeira Gamer", "Mesa Gamer", "Luminária LED", "Estabilizador", "Nobreak", "Leitor de Cartão", "Hub USB", "Adaptador Bluetooth", "Adaptador Wi-Fi", "Scanner", "Etiqueta Adesiva", "Suporte para Notebook", "Mouse Pad", "Filtro de Linha"];
function lerDatas(){
    let idades = [1,8,5,75,7,7,4,7,485858,85,4,4,74,74,47,47,55];
    
    for(i=0;i<idades.length;i++){
        console.log("idade: "+ idades[i]);
        
    }
    

}

function addpreco(){
    let n = Math.ceil(Math.random()* 100)
    precos.push(n)
    console.log(precos);
    document.getElementById("resultado").innerHTML = ''
    for(i=0;i<precos.length;i++){
        document.getElementById("resultado").innerHTML += 'R$ '+precos[i].toFixed(2).replace('.',',') + " - "
    }
    
}

function mostraprodutos(){
   
    document.getElementById("subtitulo").innerHTML = "Lista de produtos"

    for(i=0;i<produtos.length;i++){
        document.getElementById("resultado").innerHTML += `<p class="mama"> ${produtos[i]} </p>`
    }
}


let produtos2 = ["Meia", "Pá de corte", "Suco de manga", "Leite"]
let precos2 = [665.9999, 777, 12, 4]

function verProdutosComPrecos(){
    document.getElementById('resultado2').innerHTML = ''
    // console.log(produtos);
    for(let i=0; i<produtos2.length; i++){
        let j = i + 1
        document.getElementById('resultado2').innerHTML += 
        "<p>" + 
        j + "°: " + produtos2[i] + " R$ " + 
        precos2[i].toFixed(2).replace('.', ',') + 
        "</p>"
    } 
}

function retirarUltN(){
    produtos2.pop()
    precos2.pop()
}

function aumentapreco(){
    for(let i=0; i<precos2.length; i++){
        precos2[i] *= 4
    } 
}
function adcionarprod(){
    let Mproduto 
    let Mpreco = 0
   do{
    Mproduto = prompt("qual o nome do novo produto?")
    }
    while((Mproduto === "" || !isNaN(Mproduto)));
    
    do{
         Mpreco = Number(prompt("qual o valor do novo produto?"))
    }
    while(Mpreco <= 0)
    produtos2.push(Mproduto)
    precos2.push(Mpreco)
}
