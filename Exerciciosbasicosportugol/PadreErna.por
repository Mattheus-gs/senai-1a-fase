programa
{
	
	funcao inicio()
	{
		real CustoMensal
		
		real DizimoHoje
		
		escreva("Quais os custos mensais da igeja?")
		leia (CustoMensal)
		
		escreva("quanto recebemos de dizimo hoje?")
		leia(DizimoHoje)

		real restante

		restante = (CustoMensal-DizimoHoje)

		escreva("este é o valor que falta para completar os custos mensais: " + restante )
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 358; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */