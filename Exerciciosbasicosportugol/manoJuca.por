programa
{
	
	funcao inicio()
	{
		real salario
   real moradia, agua, luz, internet, gasolina, streamings, telefone, outros,total_contas, sobra

   escreva("Digite o salário do Mano Juca: ")
   leia(salario)

   escreva("Digite o valor da moradia: ")
   leia(moradia)

   escreva("Digite o valor da água: ")
   leia(agua)

   escreva("Digite o valor da luz: ")
   leia(luz)

   escreva("Digite o valor da internet: ")
   leia(internet)

   escreva("Digite o valor da gasolina: ")
   leia(gasolina)

   escreva("Digite o valor dos streamings: ")
   leia(streamings)

   escreva("Digite o valor do telefone: ")
   leia(telefone)

   escreva("Digite o valor de outros gastos: ")
   leia(outros)

   total_contas = moradia + agua + luz + internet + gasolina + streamings + telefone + outros

   sobra = salario - total_contas

   
   se (sobra > 500) {
      escreva("Mano Juca, você conseguiu economizar R$ ", sobra, " este mês! Continue assim, você é incrível! 💚") }
   senao {
      escreva("Mano Juca, esse mês ficou apertado 😢 Você ficou com R$ ", sobra)
      escreva("Mas não desanima! Vamos ajustar as contas no próximo 💪") }

	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1057; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */