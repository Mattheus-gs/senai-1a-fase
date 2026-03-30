programa
{
	
	funcao inicio()
	{
		real peso
		real distancia
		real volume

		escreva("qual o peso da sua carga em Kg? ")
		leia(peso)
		escreva("qual a distancia sua carga ira percorrer em Km? ")
		leia(distancia)
		escreva("qual o volume da sua carga em m3? ")
		leia(volume)

		
		real frete = 15+(peso*2)+(0.05*distancia)+(10*volume)
		
		escreva ("O valor total do seu frete é de: R$ "+frete)

	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 404; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */