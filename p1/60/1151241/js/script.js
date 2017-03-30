function ocultarInfo(consecutivo){
if(consecutivo=='1'){
document.getElementById('ocultar').style.display = 'none';
}else if(consecutivo=='2'){
document.getElementById('ocultar2').style.display = 'none';
}else if(consecutivo=='3'){
document.getElementById('ocultar3').style.display = 'none';
}
mostrarVer(consecutivo);
}

function mostrarInfo(consecutivo){
  if(consecutivo=='1'){
  document.getElementById('ocultar').style.display = 'inline';
  }else if(consecutivo=='2'){
  document.getElementById('ocultar2').style.display = 'inline';
  }else if(consecutivo=='3'){
  document.getElementById('ocultar3').style.display = 'inline';
  }			

  ocultarVer(consecutivo);
}

function ocultarVer(consecutivo){
  if(consecutivo=='1'){
  document.getElementById('ver1').style.display = 'none';
  }else if(consecutivo=='2'){
  document.getElementById('ver2').style.display = 'none';
  }else if(consecutivo=='3'){
  document.getElementById('ver3').style.display = 'none';
  }

}


function mostrarVer(consecutivo){
  if(consecutivo=='1'){
  document.getElementById('ver1').style.display = 'inline';
  }else if(consecutivo=='2'){
  document.getElementById('ver2').style.display = 'inline';
  }else if(consecutivo=='3'){
  document.getElementById('ver3').style.display = 'inline';
  }

}

function ocultarTodo(){
  document.getElementById('ocultar').style.display = 'none';
  document.getElementById('ocultar2').style.display = 'none';
  document.getElementById('ocultar3').style.display = 'none';
  console.log("1");
}

function cambiarTamaño(){
	 if (document.images) {
    document.images.imgemp.width='200px';
    document.images.imgemp.height='200px';
  } else {
    logo = document.getElementById("imgemp");
    logo.width='200px';
    logo.height='200px'; 
  }
 	logo = document.getElementById('imgemp');
  	logo.width="200px";
  	logo.height="200px";
		
			
}

function validarFormulario(){
    if(document.getElementById('nombre').value.length == 0 || document.getElementById('apellido').value.length == 0 ||
      document.getElementById('cedula').value.length == 0 || document.getElementById('email').value.length == 0||
      document.getElementById('telefono').value.length == 0 || document.getElementById('asunto').value.length == 0){
      alert("Debe llenar todos los campos...");
    }else{
      if(document.getElementById('nombre').value.length > 30) {
        alert("El nombre no puede tener mas de 30 caracteres");
      }else if(document.getElementById('apellido').value.length > 30){
        alert("El apellido no puede tener mas de 30 caracteres");
      }else if(document.getElementById('cedula').value.length != 14){
        alert("La cedula debe tener 14 caracteres");
      }else if(document.getElementById('email').value.length > 50){
        alert("El e-mail no debe contener mas de 50 caracteres");
      }else if(document.getElementById("cmb").selectedIndex==0){
        alert("Seleccione una opcion en el item 'Tipo'");
      }else if(document.getElementById('asunto').value.length > 14){
        alert("El asunto debe tener 500 caracteres y contiene " +document.getElementById('asunto').value.length + " caracteres");
      }else{
      alert("Gracias por ayudarnos a mejorar...!");
      limpiar();
      }

    }

}

function limpiar(){
  document.getElementById('nombre').value="";
  document.getElementById('apellido').value="";
  document.getElementById('cedula').value=""; 
  document.getElementById('email').value="";
  document.getElementById('telefono').value="";
  document.getElementById('asunto').value="";
  document.getElementById("cmb").selectedIndex=0;
}

function ocultarNoticia(consecutivo){
  if(consecutivo=='1'){
  document.getElementById('article1').style.display = 'inline';
  document.getElementById('article2').style.display = 'none';
  document.getElementById('article3').style.display = 'none';
  document.getElementById("contenidon").style.height = "1000px";
  }else if(consecutivo=='2'){
  document.getElementById('article1').style.display = 'none';
  document.getElementById('article2').style.display = 'inline';
  document.getElementById('article3').style.display = 'none';
  document.getElementById("contenidon").style.height = "1200px";
  }else if(consecutivo=='3'){
  document.getElementById('article1').style.display = 'none';
  document.getElementById('article2').style.display = 'none';
  document.getElementById('article3').style.display = 'inline';
  document.getElementById("contenidon").style.height = "900px";

  }

}

function cambiarTamaño(numero){
          if(numero=='1'){
            document.getElementById("contenidon").style.height = "900px";
          }else if(numero=='2'){
            document.getElementById("contenidon").style.height = "1200px";
          }
          else if(numero=='3'){
            document.getElementById("contenidon").style.height = "900px";
          }
        }
