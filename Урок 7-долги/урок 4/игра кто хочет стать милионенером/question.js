'use strict'

let question = {

	
		questionForm(question,img,quaere,answer1,answer2,answer3,answer4,checkAnswer) {
			this.question = question,
			this.img = img,
			this.quaere = quaere,
			this.answer1= answer1,
			this.answer2= answer2,
			this.answer3= answer3,
			this.answer4= answer4,
			this.checkAnswer = checkAnswer
		},
		


	questionFormList(){
		let questionFormOne = new questionForm('Вопрос № 1',"https://in04.hostcontrol.com/resources/0f90ae29d8c6b4/54758ec63b.PNG",'Сколько будет 2 + 2'," а вам это зачем?"," 4 ","5","с поправкой на ветер?"," 4 ");
		console.log(questionFormOne);
	}, 

	
};

	

