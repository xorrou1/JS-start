"use strict";

let buttonLeft = document.querySelector(".fa-caret-left");
let buttonRight = document.querySelector(".fa-caret-right");
let slider = document.querySelectorAll(".slider-box-img");
let i = 0;

buttonLeft.addEventListener("click", function () {
  addSliderStyleL(slider);
});

buttonRight.addEventListener("click", function () {
  addSliderStyleR(slider);
});

function showImageWithCurrentIdx(one) {
	one[i].classList.remove('slider-box-img_visibility');
};

showImageWithCurrentIdx(slider);

function addSliderStyleL(one) {
	hideVisibleImages(one);
    if (i === one.length - 1) {
      i = 0;
    } else {
      i++;
	 }
	 showImageWithCurrentIdx(one);
	 showImageWithCurrentAnimL(one);
  };

function addSliderStyleR(one) {
	hideVisibleImages(one);
    if (i === 0) {
		i = one.length - 1;
    } else {
      --i;
	 }
	 showImageWithCurrentIdx(one);
	 showImageWithCurrentAnimR(one);
  };

 function hideVisibleImages(one) {
	one.forEach(function (slide) {
		 slide.classList.add('slider-box-img_visibility');
		 slide.classList.remove('fadeInLeft');
		 slide.classList.remove('fadeInRight');
	});
};

function showImageWithCurrentAnimR(one){
	one[i].classList.add('fadeInLeft');
};

function showImageWithCurrentAnimL(one){
	one[i].classList.add('fadeInRight');
};
