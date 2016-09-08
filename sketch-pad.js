$(document).ready(function() {
	
	for (var i = 0; i < 16; i++) {
		$('table').append('<tr></tr>')
	}

	for (var k = 0; k < 16; k++) {
			$('tr').append('<td><div class="pix"></div></td>');
		}

	$('.pix').mouseenter(function() {
		$(this).addClass('blue');
	});	

	var clear = function() {
		var amount = prompt("Enter the size of grid");
	}

});