programa
{
	
	funcao inicio()
	{
		real Vmaca
    inteiro Nmaca
    real Vtotal


    
	
		escreva("Quantas maças voce quer comprar?  ")
		leia(Nmaca)

    
	

		se(Nmaca < 12 )
		{
			Vmaca = 0.3
			}
		senao se(Nmaca >= 12 )
		{
			Vmaca = 0.25
			}
		 
     Vtotal = Vmaca * Nmaca
	escreva("Valor total do seu pedido é de R$ "+ Vtotal)

	}
}