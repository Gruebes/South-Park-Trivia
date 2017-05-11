// https://opentdb.com/api_config.php

window.onload = function() {

	var trivia = [
		{
			question: 'Cartman\'s favorite toy/stuffed animal',
			a: 'Muscle Man Marc',
			b: 'Clyde Frog',
			c: 'Rumpertumskin',
			d: 'Eric',
			answer: 'b',
		},
		{
			question: 'What movie did Kenny and Stan see and immediately demand a refund?',
			a: 'The Dark Knight',
			b: 'High School Musical',
			c: 'Avatar',
			d: 'The Passion of the Christ',
			answer: 'd',
		},
		{
			question: 'When is global warming going to strike?',
			a: 'Two Days Before the Day After Tomorrow',
			b: 'The Day Before Tomorrow',
			c: 'Two Days After the Day Before Tomorrow',
			d: 'Two Days After the Day After Tomorrow',
			answer: 'a',
		},
		{
			question: 'Who is Stan\'s fairly steady girlfriend?',
			a: 'Bebe',
			b: 'Heidi',
			c: 'Wendy',
			d: 'Shelly',
			answer: 'c',
		},	
		{
			question: 'Who is Scuttlebutt\'s leg?',
			a: 'Jay Leno',
			b: 'Martha Stewart',
			c: 'Patrick Duffy',
			d: 'Barbara Streisand',
			answer: 'c',
		},
		{
			question: 'Who is all locked in the closet with Tom Cruze?',
			a: 'Kanye West and Justin Beiber',
			b: 'John Travolta and R. Kelly',
			c: 'Mr Garrison and Mr Slave',
			d: 'Randy Marsh and John Travolta',
			answer: 'b',
		},
		{
			question: 'What do the Canadians want when they go on strike?',
			a: 'Internet Money',
			b: 'Gumballs',
			c: 'United States Land',
			d: 'Bennigan\'s coupons',
			answer: 'a',
		},
		{
			question: 'Who is Cartman\'s Father?',
			a: 'Mufesto',
			b: 'The 89 Denver Broncos',
			c: 'Jack Tenorman',
			d: 'Cartman\'s mom',
			answer: 'c',
		},
		{
			question: 'Who must Randy apologize to for saying the "N-word" on television',
			a: 'Oprah\'s Minge',
			b: 'Token\'s Family',
			c: 'Chef',
			d: 'Jesse Jackson',
			answer: 'd',
		},
		{
			question: 'In "Best Friends Forever," Kenny commands the armies of Heaven with "the Golden _____"',
			a: 'PSP',
			b: 'XBOX ONE',
			c: 'PS3',
			d: 'Okama Game Sphere',
			answer: 'a',
		},
	]

var intervalId;
var timerCount = 30;
var count = 0;
var rightAnswers = 0;
var wrongAnswers = 0;
console.log('count : ' + count)

$('.game').hide();
$('.reset').hide();


// function gameSet(){

// }
// gameSet();


	function newQuestion() {
			$('.timer').html('<h2>30</h2>');
			$('.question-display').html(trivia[count].question);
			$('#a').html(trivia[count].a);
			$('#b').html(trivia[count].b);
			$('#c').html(trivia[count].c);
			$('#d').html(trivia[count].d);
			setTimerInterval()
	}	









    function counter() {
      timerCount -= 1;
      $('.timer').html("<h2>" + timerCount + "</h2>");
    	if (timerCount === 0) {
	      	if(count === trivia.length) {
	      	endOfGame();
	      	} else {
	      	$('.question-display').html('<h1>Opps! Out of Time!<h1>');
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
	}




	function endOfGame() {
		clearInterval(intervalId);
		$('.question-display').html('<h1>GAME OVER!<h1>');
		$('#a').html('Correct Answers: ' + rightAnswers);
		$('#b').html('Wrong Answers: ' + wrongAnswers);
		$('#c').html('Total Questions: 10');
		$('#d').html('');
		$('.reset').show();
	}

	$('.start').on("click", function() {
		// endOfGame()
		newQuestion();
		$('.game').show();
		$('.start-well').hide();
	})

    $('.answerInput').on('click', function(){

    	//TRY -- Making answer equal to a string that is comparted to the input of the click 
    	// -- this could then be displayed as the showAnswer
    	//findQuestion = trivia[count]; //testing
    	//showAnswer = trivia[count].answer;// testing
    	// console.log('trivia[0]: ' + trivia[0]);
    	// console.log('showAnswer: ' + showAnswer);
    	// console.log('findQuestion: ' + findQuestion);

    	if(this.id === trivia[count].answer) {
    		$('.question-display').html('<h1>Correct!<h1>');
    		rightAnswers++
    		result();
    	} else {
    		$('.question-display').html('<h1>Opps! That\'s Wrong <h1>');
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






