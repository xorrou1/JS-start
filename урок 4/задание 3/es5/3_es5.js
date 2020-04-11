'use strict';

function post(author, text, date) {
	this.author = author,
	this.text = text,
	this.date = date
}

post.prototype.edit = function(text){
	this.text = text;
}

const post1 = new post('В.В.П', 'Победили Половцев и Печенегов', 'april 08, 2020 17:50:00');
console.log(post1);
post1.edit('И эту заразу победим');
console.log(post1);

function AttachedPost (author, text, date){
	post.call(this,author, text, date),
	this.highlighted = false
}

AttachedPost.prototype = Object.create(post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function(){
	this.highlighted = true;
}

const post2 = new AttachedPost('C.C.C', 'Бюджеты треснут', 'april 03, 2020 18:00:00');
console.log(post2);
post2.makeTextHighlighted();
post2.edit('Москва закупила гранитных бордюровна 16 млиардов рублей');
console.log(post2);