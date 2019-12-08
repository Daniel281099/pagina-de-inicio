this.logueado = false;

$("#entrar").click(function(){
	if($("#usuario").val() == "arostegui" && $("#Contraseña").val() == "281099"){
		logueado = true;
		if(logueado == true){
			window.location = "./pages/Inicio.html"
		}
		
		}else{
			Swal.fire('Error');
	}
});
$("#galeria").click(function(){
window.location="../pages/Galeria.html"

});


$("#pdfs").click(function(){
window.location="../pages/pdfs.html"
});

$("#prueba").click(function(){
window.location="../pages/prueba.html"
});


$("#Salir").click(function(){
    window.location = "../Index.html";
});

window .addEventListener('load',function(){
	$('.container').fadeIn(100);
});