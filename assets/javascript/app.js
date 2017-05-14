// https://opentdb.com/api_config.php

$( document ).ready(function() {

	var trivia = [
		{
			question: 'What is the name of Cartman\'s favorite stuffed animal?',
			a: 'Muscle Man Marc',
			b: 'Clyde Frog',
			c: 'Rumpertumskin',
			d: 'Peter Panda',
			answer: 'b',
			correct: 'Clyde Frog',
		},
		{
			question: 'What movie did Kenny and Stan see which sent them on a mission for a refund?',
			a: 'The Dark Knight',
			b: 'High School Musical',
			c: 'Avatar',
			d: 'The Passion of the Christ',
			answer: 'd',
			correct: 'The Passion of the Christ',
		},
		{
			//replace
			question: 'Which of the characters is at one time believed to be the mormon prophet?',
			a: 'Stan',
			b: 'Kenny',
			c: 'Butters',
			d: 'Randy',
			answer: 'a',
			correct: 'Stan',
		},
		{
			question: 'What is the name of Stan\'s longtime girlfriend?',
			a: 'Bebe',
			b: 'Heidi',
			c: 'Wendy',
			d: 'Shelly',
			answer: 'c',
			correct: 'Wendy',
		},	
		{
			question: 'Who does Scuttlebutt have for a leg?',
			a: 'Jay Leno',
			b: 'Martha Stewart',
			c: 'Patrick Duffy',
			d: 'Barbara Streisand',
			answer: 'c',
			correct: 'Patrick Duffy',
		},
		{
			question: 'Who all locked themselves in the closet with Tom Cruise?',
			a: 'Kanye West and Justin Beiber',
			b: 'John Travolta and R. Kelly',
			c: 'Mr Garrison and Mr Slave',
			d: 'Randy Marsh and John Travolta',
			answer: 'b',
			correct: 'John Travolta and R. Kelly',
		},
		{
			question: 'What do the Canadians want when they go on strike?',
			a: 'Internet Money',
			b: 'Gumballs',
			c: 'United States Land',
			d: 'Bennigan\'s coupons',
			answer: 'a',
			correct: 'Internet Money',
		},
		{
			question: 'Who is Cartman\'s Father?',
			a: 'Mufesto',
			b: 'The \'89 Denver Broncos',
			c: 'Jack Tenorman',
			d: 'Cartman\'s mom',
			answer: 'c',
			correct: 'Jack Tenorman',
		},
		{
			question: 'In "Best Friends Forever," Kenny commands the armies of Heaven with "the Golden _____"',
			a: 'PSP',
			b: 'XBOX ONE',
			c: 'PS3',
			d: 'Okama Game Sphere',
			answer: 'a',
			correct: 'PSP',
		},		
		{
			question: 'What is phase 2 in the Underpants Gnomes ultimate plan?',
			a: 'Profit',
			b: '?????',
			c: 'Collect Underpants',
			d: 'Kidnap the children',
			answer: 'b',
			correct: '?????',
		},			
	]

	var intervalId;
	var timerCount = 30;
	var count = 0;
	var rightAnswers = 0;
	var wrongAnswers = 0;

	$('.chalkboard').hide();
	$('.resultRow').hide();
	$('.reset').hide();
	sign();

	function sign() {
	  if ( $( '.logo' ).is( ":hidden" ) ) {
	    $( '.logo' ).slideDown(800);
	  } else {
	    $('.logo').slideUp(1000);
	  }
	};

	$('.start').on("click", function() {
		sign();
		setTimeout(newQuestion, 2000)
		$('.chalkboard').hide().delay(1000).fadeIn(800);
		$('.theBoys').hide().delay(800).fadeIn(500);
		$('.start').hide();
	})

	function newQuestion() {
			$('.correctAnswer').empty()
			$('.timer').html('<h2>30</h2>');
			$('.question-display').html(trivia[count].question);
			$('#a').html('A). ' + trivia[count].a);
			$('#b').html('B). ' + trivia[count].b);
			$('#c').html('C). ' + trivia[count].c);
			$('#d').html('D). ' + trivia[count].d);
			setTimerInterval()
	}	

	function setTimerInterval() {
	  intervalId = setInterval( counter, 1000);
	}

    function counter() {
      timerCount -= 1;
      $('.timer').html("<h2>" + timerCount + "</h2>");
      outOfTimeCheck ()
    }

    function outOfTimeCheck () {
    	if (timerCount === 0) {
	      	if(count === trivia.length) {
	      	endOfGame();
	      	} else {
	      	$('.question-display').html('<h2>Ohh Noo! You ran oot of time<h2>');
	      	$('.correctAnswer').html('Correct Answer: ' + trivia[count].correct);
	      	result();
	    	}
  		}
    }

    $(document).on("click", ".answerInput", rightWrong);

    function rightWrong () {
    	if(this.id === trivia[count].answer) {
    		$('.question-display')
    		.html($('<h1>That\'s correct, Buddy!<h1>')
			.css({'color' : 'limeGreen'}));
    		rightAnswers++
    		result();
    	} else {
    		$('.question-display').html($('<h2>Soo-ry, Guy! Wrong Answer<h2>').css({'color' : 'yellow'}));
    		$('.correctAnswer').html('Correct Answer: ' + trivia[count].correct);
    		wrongAnswers++
    		result();
    	}
    }

	function result(){
		clearInterval(intervalId);
		timerCount = 30;
  		count++;
	  		if(count  === trivia.length) {
	  			setTimeout(endOfGame, 3000)
	  		} else {
	  			setTimeout(newQuestion, 3000);
	  		}
	}

	function terrancePhillip () {
			 if (rightAnswers >= 7) {
				$('.question-display').html('<h1>Great Job, Buddy!</h1>');
			} else if (rightAnswers < 7 && rightAnswers >= 4) {
				$('.question-display').html('<h2>Way to give it the old Canadian try, Friend!</h2>');

			} else {
				$('.question-display').html('<h2>That was just terrible, Guy!</h2>');
			};
	}

	function endOfGame() {
		clearInterval(intervalId);
		terrancePhillip ();

		$('.correctAnswer').empty()
		$('.answerRow').hide();
		$('.resultRow').show();
		$('.timer').html('');
		$('#right').html('Correct Answers: ' + rightAnswers);
		$('#wrong').html('Wrong Answers: ' + wrongAnswers);
		$('#total').html('Total Questions: ' + trivia.length);
		$('.reset').show();
	}

    $('.reset').on('click', function(){
    	intervalId;
		count = 0;
		rightAnswers = 0;
		wrongAnswers = 0;
		clearInterval(intervalId)
		newQuestion();
		$('.resultRow').hide();
		$('.answerRow').show();
		$('.reset').hide();

    })
});






