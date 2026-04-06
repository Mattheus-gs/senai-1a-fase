programa
{
	
	funcao inicio()
	{
		inteiro caminhao
		inteiro jare

		escreva("quantos caminhoes cheios sairam da fazenda?")
		leia (caminhao)


		escreva("quantos jares foram vendidos? ")
		leia(jare)

		inteiro gasto
		inteiro ganho

		gasto = (450*caminhao)
		ganho = (90*jare)

		inteiro lucro

		lucro = (ganho-gasto)

		escreva("seu lucro foi de: R$ " + lucro)
		
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 366; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */