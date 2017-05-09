
var slideFrame = document.querySelector('.slider-frame');
var left = document.querySelector('.column-left');
var right = document.querySelector('.column-right');


var width = 1024;
var position = 0;
var slideIndex = 0;
var slides = document.querySelectorAll('.slider-frame .slide');
slideFrame.insertAdjacentElement("beforeEnd", slides[0].cloneNode(true));
slideFrame.insertAdjacentElement("afterBegin", slides[slides.length-1].cloneNode(true));


left.onclick = function() {
var t = parseFloat(getComputedStyle(slideFrame).marginLeft);
slideFrame.style.marginLeft = (t += width) +"px";
slideIndex --;

if(slideIndex === -1) {
slideFrame.style.marginLeft = (-width * slides.length) +"px";
slideIndex = slides.length - 1;
}	
}

right.onclick = function() {
	var t = parseFloat(getComputedStyle(slideFrame).marginLeft);
slideFrame.style.marginLeft = (t -= width) +"px";	
slideIndex ++;
if(slideIndex === slides.length) {
slideFrame.style.marginLeft = -width +"px";
slideIndex = 0;
}
}



// var currentImage = 0;
// function moveSlide(n) {
// var slides = document.querySelectorAll('.slider-frame .slide');
// if(currentImage < 0) currentImage = slides.length-1;
// if (currentImage > slides.length-1) currentImage = 0;
// slideFrame.style.marginLeft = slides[0].getBoundingClientRect().left - slides[currentImage].getBoundingClientRect().left + 'px';
// }



// slideFrame.style.marginLeft = parseFloat(getComputedStyle(slideFrame).marginLeft) + 1024 +"px";	



// var width = 1024;
// var position = 0;
// var slideIndex = 0;
// var slides = document.querySelectorAll('.slider-frame .slide');
// slideFrame.insertAdjacentElement("beforeEnd", slides[0].cloneNode(true));
// slideFrame.insertAdjacentElement("afterBegin", slides[slides.length-1].cloneNode(true));


// left.onclick = function() {
// position = Math.min(position + width, 0);
// slideFrame.style.marginLeft = position +"px";
// slideIndex --;

// if(slideIndex < 1) {
// 	slideIndex = 1;

// }	
// }

// right.onclick = function() {
// 	slideIndex+=1;
// position = Math.max(position - width, -width*(slides.length-1))	
// slideFrame.style.marginLeft = position +"px";	

// }


