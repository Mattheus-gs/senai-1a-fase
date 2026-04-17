programa
{
	
	funcao inicio()
	{
		inteiro DevClt
		inteiro DevEst
		inteiro DevPj

		escreva("Quantos desenvolvedores Clt temos na empresa? ")
		leia (DevClt)

		escreva("Quantos desenvolvedores estagiarios temos na empresa? ")
		leia(DevEst)

		escreva("Quantos desenvolvedores Pj temos na empresa? ")
		leia(DevPj)

		inteiro TotalDevs

		TotalDevs = (DevClt + DevEst + DevPj)

		escreva("Nesta empresa existem exatamente " + TotalDevs + " desenvolvedores")

		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 469; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */