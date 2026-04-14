programa
{
	
	funcao inicio()
	{
		real ValorT, Desconto10, Desconto15 
		inteiro dias, multa,ValorDiaria,ValorB 
	
		escreva("quantos dias voce vai ficar hospedado?  ")
		leia(dias)


		se(dias <= 5)
		{
			ValorDiaria = 100
			}
		senao se(dias >= 6 e dias <= 10)
		{
			ValorDiaria = 90
			}
		senao se(dias >=11)
		{
			ValorDiaria = 80
		}

			ValorB = ValorDiaria*dias
			Desconto10 = ValorB*0.1
			Desconto15 = ValorB*0.15
			multa = 150
			ValorT = ValorB - Desconto10 - Desconto15 + multa


			escreva("Valor Bruto: " + ValorB + "\n")
			escreva("Valor Desconto 10%: " + Desconto10 + "\n")
			escreva("Valor Desconto 15%: " + Desconto15 + "\n")
			escreva("Valor multa: " + multa + "\n")
			escreva("Valor total a pagar: " + ValorT + "\n")

	}
}