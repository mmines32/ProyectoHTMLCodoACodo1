var boton=document.querySelectorAll(".icono-desplegable");
var oculto=document.querySelectorAll(".desplegable");

   boton.forEach(function (elemento,indice){
      elemento.addEventListener("click", function(){
        oculto[indice].classList.toggle("oculto");
      });
   })







