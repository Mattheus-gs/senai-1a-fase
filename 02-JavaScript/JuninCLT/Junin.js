let salarioM, escala, SalarioDia

salarioM = Number(prompt("Quanto reais voce ganha por mes? "))
escala =  prompt("Sua escala é 5x2 ou 6x1").trim().toLowerCase()


if (escala === "5x2") {
   SalarioDia = salarioM / 22
   alert("Seu salario diario é de: R$ " + SalarioDia.toFixed(2))
} else if (escala === "6x1") {
   SalarioDia = salarioM / 26
   alert("Seu salario diario é de: R$ " + SalarioDia.toFixed(2))
} else {
   alert("Escala inválida. Digite 5x2 ou 6x1.")
}




