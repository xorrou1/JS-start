"use strict";

let heading = document.querySelector("h1"); //возвращает первый элемент соответсвующий css-селектору
let clous= document.querySelector("span");
//heading.insertAdjacentHTML("afterbegin", "&#9776;    "); //разбивает полученый элемент и вставляет полученые узлы
let paragraph = document.createElement("p"); //создает элемент с указанным тегом

heading.addEventListener("click", function (event) {
  document.body.appendChild(paragraph);
  paragraph.innerText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quisquam assumenda dolor ipsam cupiditate, ipsa eveniet ducimus vitae soluta repellendus nobis fugit iusto dolore itaque a laborum cumque iste porro praesentium aliquid vel quas necessitatibus consequatur? Optio architecto quasi sunt quisquam eveniet quas incidunt voluptatem blanditiis. Illum praesentium laborum voluptates?";
});


