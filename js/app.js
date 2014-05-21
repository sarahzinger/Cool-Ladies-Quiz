$(document).ready(function(){
	//click play, emma's quote comes up
	$("#play").click(function(){
		$("#play").hide();
		$("#instructions").hide();
		$("#ladiesContainer").show();
		$("#quote").empty().append(emma.quote);
		$("#quote").show();
	});


	$("#lady4").click(function(){
		$(".ladies").remove();
		$("#answer").empty().append(emma.info);
		$("#answer").show();
		$("#next").show();
	});

	

	function Person(name, quote, info) {
		this.name=name;
		this.quote=quote;
		this.info=info;
	}

	var emma = new Person("Emma Goldman","If voting changed anything, they'd make it illegal", "That is right! Emma Goldman was an anarchist, feminist, writer, and activist. She spoke about a wide variety of issues including birth control, prisons, atheism, freedom of speech, militarism, capitalism, marriage, free love, homosexuality, and more.");

	
});