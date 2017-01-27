var currentInput = 0;

var madLibs = function() {
    var shout = document.getElementById("exclamation").value;
    var noun = document.getElementById("noun").value;
    var noun2 = document.getElementById("noun2").value;
    var storyDiv = document.getElementById("story");
    var name = document.getElementById("name").value;
    var place = document.getElementById("place").value;
    var adjective = document.getElementById("adjective").value;
    var dayofweek = document.getElementById("dayofweek").value;
    storyDiv.innerHTML = shout + " The " + noun + " was " + adjective + " this " + dayofweek + " night. " + name + " was ready for some good 'ol " + noun2 + " in the " + place + ".";
}



$(document).ready(function(){
	$('.form-group').hide();
	$('#story').hide();
	$('.restart').hide();


	$('.next').click(function(){
		var numInputs = $('.wordField').length;
		var prevInputs = currentInput;
		currentInput++;

		if (currentInput < numInputs) {
			$('#' + prevInputs).hide();
			$('#' + currentInput).show();
		} else {
			$('#' + prevInputs).hide();
			$('#story').show();
			$('.next').hide();
			$('.restart').show();
			madLibs();	
		}

		if (currentInput == numInputs-1) {
			$('.next').text('Show Story');
		}

		$('.restart').click(function(){
			currentInput = 0;
			$('#story').hide();
			$('#0').show();
			$('.restart').hide();
			$('.next').text('Next').show();

		});
		


	});








});