import './index.css' //aqui n criamos uma variavel ( import batatas from './index.css' pq o css nao vai ser feito neste index js...o ficheiro index.js so quer saber onde esta o index.css)
import reactDom from "react-dom";//ou import batatas from 'react-dom' e em baixo escrevo a variavel batatas.render
import React from 'react';

const tag = <strong>Olá React!!</strong>;

reactDom.render( //batatas.render
	<div>
		{tag}
	</div>,
	document.getElementById('root')
)