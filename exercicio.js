$(function(){
	setTimeout(function(){
		$('.caixa').fadeIn(500);
 
	}, 100);

	$("#tarefa").keypress(function(e) {
		var tecla = e.which;
		console.log(e.which)
		
		if(tecla == 13){
			criarElemento($(this).val());
			$(this).val('');
		}
	
	})
	
		

	
	});
	
	function criarElemento (texto){
	var $el = $('<li>' + texto + '</li>');
	
	$el.click(function(evt){
		if (evt.which == 2){
			$(this).remove();
			}
	
			$(this).css({background: 'lightgrey'});
		
		});
	
		$('.tarefas').append($el);
		
		if ($('li').length > 5 && $('h3').length == 0){
			$('h1').after('<h3>Você possui muitas tarefas!</h3>');
		
		}
		
	};

		
