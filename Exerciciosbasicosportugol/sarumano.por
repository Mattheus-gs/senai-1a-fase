programa
{
	
	funcao inicio()
	{
		inteiro bombas
		inteiro show
		inteiro preco
		
		escreva("quantos shows sarumano tem este mes? ")
		leia (show)

		bombas = (show*7)
		
		escreva("qual o valor de cada bomba? ")
		leia(preco)

		inteiro custoT

		custoT = preco * bombas

		escreva("sarumano precisa de: " + bombas+"\n")
		escreva("precisa guardar R$ " + custoT)
		
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 365; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */