programa
{
	
	funcao inicio()
	{
		real Gasto
		
		real FaturamentoIng

		real FaturamentoItens

		Gasto = 5000

		FaturamentoIng = 6000

		FaturamentoItens = 4000

		real FaturamentoTotal
		FaturamentoTotal = (FaturamentoIng +FaturamentoItens)

		real Lucro

		real LucroPerc

		Lucro = ( FaturamentoTotal - Gasto)

		LucroPerc = (Lucro/FaturamentoTotal) * 100

		escreva("O lucro foi de R$ " + Lucro + "\n")

		escreva("O percentual de lucro é de: " + LucroPerc + "%")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 392; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */