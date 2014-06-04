$(document).ready(function(){
	
	function Person(pictureID, name, quote, info) {
		this.name=name;
		this.quote=quote;
		this.info=info;
		this.pictureID=pictureID;

	}
	var people = [];

	people.push(new Person("juana","Juana Ines DeLa Cruz","\"I don't study to know more, but to ignore less.\"", "TSor Juana Inés de la Cruz was a self-taught scholar, poet, feminist, scientist. Sor Juana was raised in colonial Mexico where it was against the law for a woman to learn how to read and write. But that didn't stop Sor Juana, she taught herself greek, latin, the Aztec language of Nahuatl, and more. She was an avid defender of a woman's right to education and is a national hero of Mexico."));
	people.push(new Person("grace","Grace Hopper","\"Humans are allergic to change. They love to say, \"We've always done it this way.\" I try to fight that. That's why I have a clock on my wall that runs counter-clockwise.\"", "Rear Admiral Grace Hopper, a former U.S. Naval Officer, is accredited with developing the first computer compiler. She was also credited as being the first person to use the word \“bug\” to describe a problem with a computer."));
	people.push(new Person("zora","Zora Neale Hurston","\"There are years that ask questions and years that answer.\"", "Zora Neale Hurston, American folklorist, anthropologist, and author is best known for her novel, Their Eyes Were Watching God. She published over 50 short stories, plays, and essays and is considered one of the best writers of her time."));
	people.push(new Person("emma","Emma Goldman", "\"If voting changed anything, they'd make it illegal.\"", "Emma Goldman was an activist, writer, publisher, and anarchist. She spoke out about labor issues, women's rights, and more"));
	people.push(new Person("ida", "Ida B. Wells","\"The people must know before they can act, and there is no educator to compare with the press.\"", "Ida B. Wells was a journalist, suffragist, sociologist and early leader in the civil rights movement. In the Red Record, she documented the horrific lynchings of the South and sparked both controversy and progressive change."));
	people.push(new Person("qiu","Qiu Jin","\"Women must get educated and strive for their own independence; they can't just go on asking the men for everything. The young intellectuals are all chanting, \"Revolution, Revolution,\" but I say the revolution will have to start in our homes, by achieving equal rights for women.\"", "Qiu Jin was a Chinese Revolutionary, feminist, and writer. She wrote about freedom of education, freedom to marry, and the need to end foot binding"));
	people.push(new Person("helen", "Helen Keller","\"One can never consent to creep when one feels an impulse to soar.\”","Helen Keller was an author, activist and lecturer. She was also the first deafblind person to aquire a Bacherlors Degree."));
	people.push(new Person("harriet", "Harriet Tubman","\"I freed a thousand slaves I could have freed a thousand more if only they knew they were slaves.\"", "Harriet Tubman was an abolitionist, humanitarian and spy. She managed to not only escape slavery herself but to go on 13 other missions to help others escape slavery."));
	people.push(new Person("amelia","Amelia Earheart", "\"Women, like men, should try to do the impossible. And when they fail, their failure should be a challenge to others.\"", " Amelia Earheart was the first woman to fly across the Atlantic Ocean."));
	people.push(new Person("rachel", "Rachel Carson", "\"The more clearly we can focus our attention on the wonders and realities of the universe about us, the less taste we shall have for destruction.\"","Rachel Carson was a writer, scientist, and conservationalist famous for her book Silent Spring. She also was posthumously awarded the presidential medal of Freedom by Jimmy Carter"));
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
		$(this).after("<img class=\"ladies wrong\" src=\"images/wrong.jpg\" height=\"200\" max-width=\"200\">");
		clickCount++;
	});
	
	var isPicture =function(){
		
		$("#"+random.pictureID).click(function(){
			$(".ladies").hide();
			$("#"+random.pictureID).show();
			$("#answer").empty().append("That is right! <br>"+random.info);
			$("#answer").show();
			$("#next").show();
		});
		
	};
	
	$("#next").click(function(){
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
			$("#"+random.pictureID).show();
			$("#answer").empty().append("Congrats on finishing the game you made "+clickCount+" guesses. A perfect score would be 9 <br>"+random.info);
			$("#answer").show();
			$("#next").hide();
			
		}
	});


});
