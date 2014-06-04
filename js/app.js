$(document).ready(function(){
	
	function Person(pictureID, name, quote, info) {
		this.name=name;
		this.quote=quote;
		this.info=info;
		this.pictureID=pictureID;

	}
	var people = [];

	people.push(new Person("juana","Juana Ines DeLa Cruz","\"I don't study to know more, but to ignore less.\"", "<iframe src=\"http://en.wikipedia.org/wiki/Juana_In%C3%A9s_de_la_Cruz\"></iframe>"));
	people.push(new Person("grace","Grace Hopper","\"Humans are allergic to change. They love to say, \"We've always done it this way.\" I try to fight that. That's why I have a clock on my wall that runs counter-clockwise.\"", "<iframe src=\"http://en.wikipedia.org/wiki/Grace_Hopper\"></iframe>"));
	people.push(new Person("zora","Zora Neale Hurston","\"There are years that ask questions and years that answer.\"", "<iframe src=\"http://en.wikipedia.org/wiki/Zora_Neale_Hurston\"></iframe>"));
	people.push(new Person("emma","Emma Goldman", "\"If voting changed anything, they'd make it illegal.\"", "<iframe src=\"http://en.wikipedia.org/wiki/Emma_Goldman\"></iframe>"));
	people.push(new Person("ida", "Ida B. Wells","\"The people must know before they can act, and there is no educator to compare with the press.\"", "<iframe src=\"http://en.wikipedia.org/wiki/Ida_B._Wells\"></iframe>"));
	people.push(new Person("qiu","Qiu Jin","\"Women must get educated and strive for their own independence; they can't just go on asking the men for everything. The young intellectuals are all chanting, \"Revolution, Revolution,\" but I say the revolution will have to start in our homes, by achieving equal rights for women.\"", "<iframe src=\"http://en.wikipedia.org/wiki/Qiu_Jin\"></iframe>"));
	people.push(new Person("helen", "Helen Keller","\"One can never consent to creep when one feels an impulse to soar.\”","<iframe src=\"http://en.wikipedia.org/wiki/Helen_keller\"></iframe>"));
	people.push(new Person("harriet", "Harriet Tubman","\"I freed a thousand slaves I could have freed a thousand more if only they knew they were slaves.\"", "<iframe src=\"http://en.wikipedia.org/wiki/Harriet_Tubman\"></iframe>"));
	people.push(new Person("amelia","Amelia Earhart", "\"Women, like men, should try to do the impossible. And when they fail, their failure should be a challenge to others.\"", "<iframe src=\"http://en.wikipedia.org/wiki/Amelia_Earhart\"></iframe>"));
	people.push(new Person("rachel", "Rachel Carson", "\"The more clearly we can focus our attention on the wonders and realities of the universe about us, the less taste we shall have for destruction.\"","<iframe src=\"http://en.wikipedia.org/wiki/Rachel_carson\"></iframe>"));
	
	//randomly selects a person
	var random;
	var randomize = function(){
		index=Math.floor(Math.random()*people.length);
		random= people[index];
		people.splice(index, 1);
	};



	$("#play").click(function(){
		randomize();
		$("#play").hide();
		$("#instructions").hide();
		$("#ladiesContainer").show();
		$("#quote").empty().append(random.quote);
		$("#quote").show();
		isPicture();
	
	});

	var clickCount=0;

	$(".ladies").click(function(){
		$(this).hide();
		$(this).after("<img class=\"ladies wrong\" src=\"images/wrong.jpg\" height=\"175\" max-width=\"175\">");
		clickCount++;
	});
	
	var isPicture =function(){
		
		$("#"+random.pictureID).click(function(){
			$(".ladies").hide();
			$("#"+random.pictureID).hide();
			$("#answer").empty().append("That is right! Why not read some more on " +random.name+" below! <br>"+random.info);
			$("#answer").show();
			$("#next").show();
		});
		
	};
	
	$("#next").click(function(){
		$("#next").hide();
		$(".wrong").remove();
		$(".ladies").show();
		$("#"+random.pictureID).remove();
		$("#answer").hide();
		randomize();
		$("#quote").empty().append(random.quote);
		$("#quote").show();
		isPicture();
		if(people.length===0){
			$(".ladies").hide();
			$("#answer").empty().append("You finished the game with "+clickCount+" guesses. A perfect score is 9! <br>"+random.info);
			$("#answer").show();
			$("#next").hide();
			
		}
	});


});
