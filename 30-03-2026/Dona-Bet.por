programa
{
	
	funcao inicio()
	{
		inteiro ValorBruto
		inteiro Premiacoes
		inteiro agrados
		inteiro comissoes
		inteiro ValorLiquido

		ValorBruto = 6579
		Premiacoes =  112
		agrados = 750
		comissoes = 650

		inteiro GastoTotal
		GastoTotal = (Premiacoes + agrados + comissoes)


		ValorLiquido = (ValorBruto - GastoTotal)

		escreva("O lucro que Dona Bete teve foi de " + ValorLiquido)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 396; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */