$(document).ready(function() {
gems = ["assets/images/pink.jpg", "assets/images/blue.jpg", "assets/images/green.jpg", "assets/images/opal.jpg"];

var wins = 0;
var losses = 0;
$("#wins").text(wins);
$("#losses").text(losses);

gemGen();
game();

//generates 4 different values between 1 and 12
function gemGen () {
		var gemValues = []
			while(gemValues.length < 4){
			  var randomnumber = Math.floor(Math.random()*13)
			  var found = false;
			  for (var i = 0; i < gemValues.length; i++){
				if (gemValues[i] === randomnumber){
					found = true; break
				}
			  }
			  if(!found)gemValues[gemValues.length] = randomnumber;
			}

		//sets the source, value and, class for the gem img's
		for (i = 0; i < gemValues.length; i++) {
			var gemHolder = $("<img>");
			gemHolder.attr("data-val", gemValues[i]);
			gemHolder.attr("src", gems[i]);
			gemHolder.attr("alt", "gem");
			gemHolder.addClass("gemPic")
			$("#gems").append(gemHolder);
		}
}

function game() {
	score = 0;
	$("#score").text(score);

	var goalNum = Math.floor(Math.random()*(102) + 19);

	$("#goal").text(goalNum);
	$('#gems').on("click", '.gemPic', function(){
		score += parseInt($(this).data("val"));

		$("#score").text(score);

		if (score === goalNum) {
			$("#prompt").text("Nice work ol' sport")
			wins++;
			$("#wins").text(wins);
			$("#gems").empty();
			gemGen();
			game();
		} else if (score > goalNum) {
			$("#prompt").text("Better luck next time ;(")
			losses++;
			$("#losses").text(losses);
			$("#gems").empty();
			gemGen();
			game();
		}

	});
}


});






