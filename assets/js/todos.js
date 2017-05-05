// añade todos a la lista y borra el texto de input
$("input[type='text'").keypress(function (event){
	if(event.which == 13){
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + $(this).val() + "</li>");
		$(this).val("");
	}
});

$(".fa-plus").on("click", function(){
	$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + $("input").val() + "</li>");
		$("input").val("");
});






//Check hecho o no
$("ul").on("click", "li", function(){
	$(this).toggleClass("check");
});

//Borrar tarea
$("ul").on("click", "span", function (){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
});

