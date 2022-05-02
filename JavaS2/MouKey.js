{
	let generateMessages;

	function init() {
		message = document.getElementById('info');
		document.addEventListener('mousemove', generateMessages);
		document.addEventListener('keypress', generateMessages);
		document.addEventListener('click', generateMessages);
	}

	generateMessages = function(ev) {
		let xRelative, yRelative, xAbsolut, yAbsolut;
		xAbsolut = ev.pageX;
		yAbsolut = ev.pageY;
		xRelative = ev.clientX;
		yRelative = ev.clientY;

		switch (ev.type) {
			case 'mousemove':
				message.style.backgroundColor = '#FFFFFF';
				showInformation([
					'Moviendo el ratón',
					'Posición en navegador: [' + xRelative + ', ' + yRelative + ']',
					'Posición en página: [' + xAbsolut + ', ' + yAbsolut + ']'
				]);
				break;
			case 'keypress':
				message.style.backgroundColor = '#CCE6FF';
				let character = ev.charCode || ev.keyCode;
				let sign = String.fromCharCode(character);
				let code = sign.charCodeAt(0);
				showInformation([
					'Pulsando el teclado:',
					'Carácter de la tecla pulsada: [' + sign + ']',
					'Código del carácter: [' + code + ']'
				]);
				break;
			case 'click':
				message.style.backgroundColor = '#FFFFCC';
				showInformation([
					'Con ratón clicado:',
					'Posición en navegador: [' + xRelative + ', ' + yRelative + ']',
					'Posición en página: [' + xAbsolut + ', ' + yAbsolut + ']'
				]);
				break;
		}
	};

	let showInformation = function(info) {
		message.innerHTML = '<h2>' + info[0] + '</h2>';
		for (let i = 1; i < info.length; i++) {
			message.innerHTML += '<p>' + info[i] + '</p>';
		}
	};

	document.addEventListener('DOMContentLoaded', init);
}