window.onload = function(){

	var boton = document.getElementById('oculta');
	boton.onclick = ocultarCodigo;

}

function ocultarCodigo(){

	var imagen = document.getElementById('imagen');

	imagen.style.display = 'none';