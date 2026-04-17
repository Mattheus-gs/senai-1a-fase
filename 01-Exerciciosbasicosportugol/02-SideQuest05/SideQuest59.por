programa
{
	
	funcao inicio()
	{
		real altura
    inteiro genero
    real Pesoideal


    
	
		escreva("Qaul sua altura em m?  ")
		leia(altura)

    
		escreva("Qual seu genero: 1= feminio - 2= masculino: ")
		leia(genero)

		se(genero == 1 )
		{
			Pesoideal = (62.1 * altura) - 44.7
			}
		senao se(genero == 2 )
		{
			Pesoideal = (72.7 * altura) - 58
			}
		 
	escreva("seu peso ideal é de: "+ Pesoideal +"Kg")

	}
}