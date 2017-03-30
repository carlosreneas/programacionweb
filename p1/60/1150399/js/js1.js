
function mostrarNoticia(identificador){
	var noticia = document.getElementById(identificador);
	var valor = noticia.style.display;
	if(valor == "none"){
		noticia.style.display = 'inline';
		noticia.style.fontSize = '15px';
		noticia.style.fontFamily = 'Open Sans';
		noticia.style.textAlign = 'center';
	}else{
		noticia.style.display = 'none';
	}
}

function validarEmail(){
	valido = document.getElementById('emailok');
    email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (email.test(document.getElementById('cedula').value)) {
      valido.innerText = "válido";
    } else {
      valido.innerText = "incorrecto";
    }
}

