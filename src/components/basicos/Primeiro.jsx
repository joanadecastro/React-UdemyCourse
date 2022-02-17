import React from "react"

export default function Primeiro() { //jsx tem de ter import (html no ficheiro js)
	const msg = 'seja bem vindo!'
	return (
		<div>
			<h2>Primeiro Componente</h2>
			<p>{msg}</p>
		</div>
	)
}

/* jsx é uma abstraçao que permite escrever uma sintaxe do tipo html no codigo js*/

/*O export é utilizado quando criamos módulos JavaScript para exportar ligações em tempo
real para suas funções, objetos ou valores primitivos de um módulo sejam utilizados por
outros programas através de declarações import. Ligações que são exportadas ainda podem
ser modificadas localmente; quando importadas, embora elas possam ser lidas somente 
pelo módulo que as importou, seu valor é atualizado sempre que ela modificada pelo módulo
que a exportou.*/