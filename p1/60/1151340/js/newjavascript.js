/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var banner = 0;
var imgbanner = Array("img/apps.jpg","img/banner1.jpg","img/banner2.jpg","img/banner3.png");
var urlbanner = Array("https://apps.co/","http://www.cccucuta.org.co/","https://ww2.ufps.edu.co/","http://www.mintic.gov.co/portal/vivedigital/612/w3-channel.html");

function cambiarImagen(id_img,id_url,address){
    direccion(address); 
    console.log(banner);
       console.log(imgbanner.length-1);
    document.getElementById(id_img).src =  imgbanner[banner];
    document.getElementById(id_url).href = urlbanner[banner];
}

function direccion(address){
    if(address === 0){
        if (banner === 0){
            banner = imgbanner.length-1;
        }else{
            banner = banner-1;
        }
    }else{
       if (banner === imgbanner.length-1){
            banner = 0;
        }else{
            banner = banner+1;
        }
    }
}

function proceso(){
  var i = 0;
  while(true){
    if(i === img.banner.length-1){
          i = 0;
      }else{
        i++;
      }
     document.getElementById(id_img).src =  imgbanner[i];
    
    document.getElementById(id_url).href = urlbanner[i];
  }
 
}
var READY_STATE_UNINITIALIZED=0; 
        var READY_STATE_LOADING=1; 
        var READY_STATE_LOADED=2;
        var READY_STATE_INTERACTIVE=3; 
        var READY_STATE_COMPLETE=4;
        var id; 

        var peticion_http;
         
        function cargaContenido(url, metodo, funcion,mi_id) {
          peticion_http = inicializa_xhr();
          id = mi_id;
          if(peticion_http) {
            peticion_http.onreadystatechange = funcion;
            peticion_http.open(metodo, url, true);
            peticion_http.send(null);
          }
        }
         
        function inicializa_xhr() {
          if(window.XMLHttpRequest) {
            return new XMLHttpRequest();
          }
          else if(window.ActiveXObject) {
            return new ActiveXObject("Microsoft.XMLHTTP");
          }
        }
         
        function muestraContenido() {
          if(peticion_http.readyState == READY_STATE_COMPLETE) {
            if(peticion_http.status == 200) {
              document.getElementById(id).innerHTML=peticion_http.responseText;
            }else {
              document.getElementById(id).innerHTML="UPSSSS NO PUEDES CORRER ESTO SI NO ESTAS EN LOCALHOST O DENTRO DE UN SERVIDOR";
            }
          }
        }