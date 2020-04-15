'use strict'


class post {
	constructor(author, text, date){
		this.author = author,
		this.text = text,
		this.date = date
	}

	edit(text){
		this.text = text;
	}
}

const post1 = new post('В.В.П', 'Победили Половцев и Печенегов', 'april 08, 2020 17:50:00');
console.log(post1);
post1.edit('И эту заразу победим');
console.log(post1);

class  AttachedPost extends post {
	constructor(author, text, date){
		super(author, text, date);
		this.highlighted = false;
	}

	makeTextHighlighted(){
		this.highlighted = true;
	}

}	

const post2 = new AttachedPost('C.C.C', 'Бюджеты треснут', 'april 03, 2020 18:00:00');
console.log(post2);
post2.makeTextHighlighted();
post2.edit('Москва закупила гранитных бордюровна 16 млиардов рублей');
console.log(post2);