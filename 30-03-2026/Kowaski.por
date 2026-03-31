programa
{
	
	funcao inicio()
	{
		real RelatorioPF
		RelatorioPF = 40
		real RelatorioPJ
		RelatorioPJ = 33
		real TempoPF
		TempoPF = 12
		real TempoPJ
		TempoPJ = 42
		real ValorPF
		ValorPF = 2350
		real ValorPJ
		ValorPJ = 8900
		
		real TotalRelatorio
		TotalRelatorio = (RelatorioPF + RelatorioPJ)

		real TotalTempo
		TotalTempo = (TempoPF + TempoPJ)

		real TotalRecebido
		TotalRecebido = ( ValorPF + ValorPJ)


		inteiro MediaValor
		MediaValor = (TotalRecebido/TotalRelatorio)

		real MediaTempo
		MediaTempo = (TotalTempo/TotalRelatorio)

		inteiro minuto
		minuto = (60*0.739)

		escreva("A quantidade total de relatorio é " + TotalRelatorio + "\n")
		escreva("A quantidade de tempo trabalhado é de " + TotalTempo + "\n")
		escreva("O valor total recebido foi de R$ " + TotalRecebido + "\n")
		escreva("A media do valor recebido por relatorio é de " + MediaValor + "\n")
		escreva("A media de tempo gasto por relatorio é de " + MediaTempo + "horas oque da aproximadamente em minutos:" + minuto)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1011; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */