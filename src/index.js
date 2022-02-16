import './index.css' //aqui n criamos uma variavel so queremos encontrar o css( import batatas from './index.css' pq o css nao vai ser feito neste index js...o ficheiro index.js so quer saber onde esta o index.css)
import reactDom from "react-dom";//ou import batatas from 'react-dom' e em baixo escrevo a variavel batatas.render
import React from 'react';

import Primeiro from './components/basicos/Primeiro' //no import Primeiro pode ser import batatas desde que <batatas></batatas>



reactDom.render( //batatas.render
	<div>
		<Primeiro></Primeiro>
	</div>,
	document.getElementById('root')
)