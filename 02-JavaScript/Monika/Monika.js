let NCelular, Chance, ChanceH

NCelular = Number(prompt("quantas vezes o aluno pego o celular durante a palestra? "))

Chance = (0.1/(1+500*NCelular))*100

ChanceH = (100/Chance) 


alert("a chance do aluno ser aprovado é de: " + Chance+"%\n" + "isso faz voce ter 1 chance a cada "+ChanceH +" pessoas"
) 