'use strict';

let buttonNext = document.querySelector('.button-next');
const greatingElement = document.querySelectorAll('.greating');


buttonNext.addEventListener('click', function(event){
	game.init();
});

let game = {
	/* run(){

	}, */
	//Этот метод запускает игру
	init(){
		//метод удаляет блок game
		hide.hideBlock();
		//Метод создает новый блок с вопросом
		question.questionFormList();
		console.log(question.questionFormList());
	  },
	  
	
};



