let marujo, comida

marujo = Number(prompt("Quantos marujos estão a bordo?"))


if(marujo >= 10){

    comida = Number(prompt("Quantos Kg de comida temos até o momento?"))
        if(comida >= marujo * 1.5)
        alert("Provisões suficientes. Rumo ao horizonte!")
           else {
            alert("Algo está errado. Posseidom não quer ninguém no mar hoje")
            }
    }
else{
    alert("Algo está errado. Posseidom não quer ninguém no mar hoje")
}






