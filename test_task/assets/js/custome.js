


$(document).ready(function( $ ) {
	var myArray =[];
  $(".survey_button").click(function() {
		
	var elArray = ($(this).text());
	myArray.push(elArray);
		
		
});
	$("#p_modal_button3").click(function () {
		myResult=myArray.toString();
		console.log(myResult);
	})
	
});

$("#p_modal_button3").click(() => {
	$("#img_gift").css("display","none");
});


$("#submit").click(()=>{
		var nam= "Anonumous";
		var com= ($("textarea").val());
		
		$("#comment0").prepend("<div class='name'>" + nam  +" </div>" + "<div class='comments'>" + com + "</div>");
		

	
});