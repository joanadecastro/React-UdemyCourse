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