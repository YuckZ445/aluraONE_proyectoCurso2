let numeroSecreto = 0
let intentos = 0
let numerosSorteados = []
let numeroMaximo = 3

function asignarTextoElemento(elemento, texto) {
	let elementoHTML = document.querySelector(elemento)
	elementoHTML.innerHTML =  texto
	return
}

function verificarIntento() {
	let numeroUsuario = parseInt(document.getElementById('valorUsuario').value)
	
	if(numeroUsuario === numeroSecreto) {
		asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`)
		document.getElementById('reiniciar').removeAttribute('disabled')
		document.getElementById('btnIntento').setAttribute('disabled', 'true')
	} else {
		//El usuario no acerto
		if(numeroUsuario > numeroSecreto) {
			asignarTextoElemento('p', 'El numero secreto es menor')
		} else {
			asignarTextoElemento('p', 'El numeroSecreto es mayor')
		}
	}
	intentos++
	limpiarCaja()
	return
}

function limpiarCaja() {
	document.querySelector('#valorUsuario').value = ''
}

function generarNumeroSecreto() {
	let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1

	console.log(numeroGenerado)
	console.log(numerosSorteados)

	//Si ya sorteamos todos los numeros
	if(numerosSorteados.length == numeroMaximo) {
		asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')
	} else {
		//Si el numero generado esta incluido en la lista


		if(numerosSorteados.includes(numeroGenerado)) {
			return generarNumeroSecreto()
		} else {
			numerosSorteados.push(numeroGenerado)
			return numeroGenerado
		}
	}
}

function condicionesIniciales() {
	asignarTextoElemento('h1', 'Juego del numero secreto!')
	asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`)
	numeroSecreto = generarNumeroSecreto()
	intentos = 1
	return
}

function reiniciarJuego() {
	//Limpiar la caja
	limpiarCaja()
	//Indicar mensaje de intervalo de numeros
	//Generar el numero aleatorio
	//Inicializar el numero de intentos
	condicionesIniciales()
	//Deshabilitar el boton de nuevo juego
	document.querySelector('#reiniciar').setAttribute('disabled', 'true')
	document.querySelector('#btnIntento').removeAttribute('disabled')


}

condicionesIniciales()