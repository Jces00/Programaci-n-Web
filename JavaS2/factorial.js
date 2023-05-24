{
	let numero = prompt('Introduce un número para hacer su factorial');
	let factorial = 1;

	function init() {
		resultado();
	}

	function resultado() {
		info = document.getElementById('info');
		info.innerHTML =
			'<h2> Resultado:</h2>' + '<h3>El factorial de ' + numero + ' es ' + calculateFactorial() + '</h3>';
	}

	function calculateFactorial() {
		for (let i = 1; i <= numero; i++) {
			factorial = factorial * i;
		}
		return factorial;
	}

	document.addEventListener('DOMContentLoaded', init);
}
