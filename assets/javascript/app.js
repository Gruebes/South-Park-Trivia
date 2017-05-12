// https://opentdb.com/api_config.php

window.onload = function() {

	var trivia = [
		{
			question: 'Who is Cartman\'s favorite stuffed animal?',
			a: 'Muscle Man Marc',
			b: 'Clyde Frog',
			c: 'Rumpertumskin',
			d: 'Eric',
			answer: 'b',
		},
		// {
		// 	question: 'What movie did Kenny and Stan see and immediately demand a refund?',
		// 	a: 'The Dark Knight',
		// 	b: 'High School Musical',
		// 	c: 'Avatar',
		// 	d: 'The Passion of the Christ',
		// 	answer: 'd',
		// },
		// {
		// 	//replace
		// 	question: 'When is global warming going to strike?',
		// 	a: 'Two Days Before the Day After Tomorrow',
		// 	b: 'The Day Before Tomorrow',
		// 	c: 'Two Days After the Day Before Tomorrow',
		// 	d: 'Two Days After the Day After Tomorrow',
		// 	answer: 'a',
		// },
		// {
		// 	question: 'Who is Stan\'s fairly steady girlfriend?',
		// 	a: 'Bebe',
		// 	b: 'Heidi',
		// 	c: 'Wendy',
		// 	d: 'Shelly',
		// 	answer: 'c',
		// },	
		// {
		// 	question: 'Who is Scuttlebutt\'s leg?',
		// 	a: 'Jay Leno',
		// 	b: 'Martha Stewart',
		// 	c: 'Patrick Duffy',
		// 	d: 'Barbara Streisand',
		// 	answer: 'c',
		// },
		// {
		// 	question: 'Who is all locked in the closet with Tom Cruze?',
		// 	a: 'Kanye West and Justin Beiber',
		// 	b: 'John Travolta and R. Kelly',
		// 	c: 'Mr Garrison and Mr Slave',
		// 	d: 'Randy Marsh and John Travolta',
		// 	answer: 'b',
		// },
		// {
		// 	question: 'What do the Canadians want when they go on strike?',
		// 	a: 'Internet Money',
		// 	b: 'Gumballs',
		// 	c: 'United States Land',
		// 	d: 'Bennigan\'s coupons',
		// 	answer: 'a',
		// },
		// {
		// 	question: 'Who is Cartman\'s Father?',
		// 	a: 'Mufesto',
		// 	b: 'The 89 Denver Broncos',
		// 	c: 'Jack Tenorman',
		// 	d: 'Cartman\'s mom',
		// 	answer: 'c',
		// },
		// {
		// 	question: 'In "Best Friends Forever," Kenny commands the armies of Heaven with "the Golden _____"',
		// 	a: 'PSP',
		// 	b: 'XBOX ONE',
		// 	c: 'PS3',
		// 	d: 'Okama Game Sphere',
		// 	answer: 'a',
		// },		
		// {
		// 	question: 'What is phase 2 in the Underpants Gnomes plan?',
		// 	a: 'Profit',
		// 	b: '?????',
		// 	c: 'Collect Underpants',
		// 	d: 'Kidnap the children',
		// 	answer: 'b',
		// },
	]

var intervalId;
var timerCount = 30;
var count = 0;
var rightAnswers = 0;
var wrongAnswers = 0;
console.log('count : ' + count)

$('.chalkboard').hide();
$('.reset').hide();
// $('.start').hide();

$(document).on("click", ".start", sign);

function sign() {
  if ( $( '.logo' ).is( ":hidden" ) ) {
    $( '.logo' ).slideDown( "slow" );
  } 
  else {
    $('.logo').slideUp("slow");
  }
};
sign();




	function newQuestion() {
			$('.timer').html('<h2>30</h2>');
			$('.question-display').html(trivia[count].question);
			$('#a').html('A). ' + trivia[count].a);
			$('#b').html('B). ' + trivia[count].b);
			$('#c').html('C). ' + trivia[count].c);
			$('#d').html('D). ' + trivia[count].d);
			setTimerInterval()
	}	

    function counter() {
      timerCount -= 1;
      $('.timer').html("<h2>" + timerCount + "</h2>");
    	if (timerCount === 0) {
	      	if(count === trivia.length) {
	      	endOfGame();
	      	} else {
	      	$('.question-display').html('<h1>Oppsie Dasies! <br> You ran ut of Time!<h1>');
	      	result();
	    	}
  		}
    }

	function setTimerInterval() {
	  intervalId = setInterval( counter, 1000);
	}

	function result(){
		clearInterval(intervalId);
		timerCount = 30;
  		count++;
  		console.log('count : ' + count)
  		setTimeout(newQuestion, 3000);
	  		if(count  === trivia.length) {
	  			endOfGame();
	  		}

	  		console.log('count: ' + count)
	  		console.log('trivia.length: ' + trivia.length)
	}

	function endOfGame() {
		clearInterval(intervalId);
			// if ()

		$('.timer').html('');
		$('.question-display').html('<h1>GAME OVER!<h1>');
		$('#a').html('Correct Answers: ' + rightAnswers);
		$('#b').html('Wrong Answers: ' + wrongAnswers);
		$('#c').html('Total Questions: ' + trivia.length);
		$('#d').html('');
		$('.reset').show();
	}

	$('.start').on("click", function() {
		newQuestion();
		$('.chalkboard').hide().delay(400).fadeIn();
		$('.theBoys').hide().delay(300).fadeIn();
		$('.start-well').hide();
	})

    $('.answerInput').on('click', function(){

    	if(this.id === trivia[count].answer) {
    		$('.question-display')
    		.html($('<h1>Correct!<h1>')
			.css({'color' : 'limeGreen'}));
    		rightAnswers++
    		result();
    	} else {
    		$('.question-display').html($('<h1>Opps! That\'s Wrong <h1>').css({'color' : 'red'}));
    		$('.correctAnswer').html()//testing
    		wrongAnswers++
    		result();
    	}
    })

    //BUG: only works when an answer has been previously selected, not an issue if reset is not shown until GAME OVER
    $('.reset').on('click', function(){
    	intervalId;
		count = 0;
		rightAnswers = 0;
		wrongAnswers = 0;
		clearInterval(intervalId)
		newQuestion();
		console.log(count)
		$('.reset').hide();

    })
}






