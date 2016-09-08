$(document).ready(function() {
	
	for (var i = 0; i < 16; i++) {
		$('table').append('<tr></tr>')
	};

	for (var k = 0; k < 16; k++) {
			$('tr').append('<td><div class="pix"></div></td>');
		};

	$('.pix').mouseenter(function() {
		$(this).addClass('blue');
	});

	document.getElementById("button").onclick = function() {myFunction()};

	function myFunction() {
  	  var amount = prompt("Enter size of grid");
  	  $('table').remove();
  	  $('.container').append('<table></table>');

  	  for (var i = 0; i < amount; i++) {
				$('table').append('<tr></tr>')
			};

			for (var k = 0; k < amount; k++) {
				$('tr').append('<td><div class="pix"></div></td>');
			};

			$('.pix').mouseenter(function() {
				$(this).addClass('blue');
			});
	}
});