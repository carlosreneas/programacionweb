function quitar(){
	a1=document.getElementById('ar1');
	a2=document.getElementById('ar2');
	a3=document.getElementById('ar3');
	m1=document.getElementById('m1');
	m2=document.getElementById('m2');
	m3=document.getElementById('m3');
	if(m1){
		ar1.style.display="none";
		document.getElementById('lee1').style.display="none";
		
	}
	if(m2){
		ar2.style.display="none";
		document.getElementById('l2').style.display="none";
	}
	if(m3){
		document.getElementById('l3').style.display="none";
		ar3.style.display="none";
	}
}
function mostrarInfo(p){
	a1=document.getElementById('ar1');
	a2=document.getElementById('ar2');
	a3=document.getElementById('ar3');
	l1=document.getElementById('lee1');
	l2=document.getElementById('l2');
	l3=document.getElementById('le3');
	if(p==1){
		a1.style.display="inline";
		
	}else
	if(p==2){
	
		a2.style.display="inline";
		
	}else
	if(p==3){
		console.log("sapo")
		a3.style.display="inline";
	}
}
function validaDatos(){
	n=document.getElementById('nom');
	ap=document.getElementById('ape');
	te=document.getElementById('tele');
	email=document.getElementById('correo');
	cc=document.getElementById('cc');
	men=document.getElementById('mensaje');

	if(n.value=="" || ap.value=="" ||te.value==""|| email.value==""|| cc.value==""){
		alert("POR FAVOR DIGITE TODOS LOS CAMPOS PARA CONTINUAR");
	}
	if(cc.value.length>14){
		alert("SOLO SON PERMITIDOS 14 CARACTERES")
	}
	else{
		if(ap.value.length>30){
		alert("SOLO SON PERMITIDOS 30 CARACTERES")
	}if(te.value.length>10){
		alert("SOLO SON PERMITIDOS 30 CARACTERES")
	}if(email.value.length>50){
		alert("SOLO SON PERMITIDOS 50 CARACTERES")
	}if(men.value.length>5000){
		alert("SOLO SON PERMITIDOS 5000 CARACTERES")
	}if(n.value.length>30){
		alert("SOLO SON PERMITIDOS 30 CARACTERES")
	}
	}
	for(i=0;te.value.length;i++){
		if(isNaN(parseInt(te.value.charAt(i)))==true){
			alert("SOLO SE PERMITEN NUMEROS EN LA CASILLA TELEFONO")
		}
	}
}
