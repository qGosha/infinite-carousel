$(document).ready(function(){

var run = setInterval('rotate()', 4000);

var slide = $(".slide");
var slideFrame = $(".slider-frame");
var width = $(".slide").outerWidth();
var leftShift = width * -1;

var left = $('.column-left');
var right = $('.column-right');

$(".slide:first").before($(".slide:last"));
$(".slider-frame").css({left:leftShift});

left.click(function(){
var moveSize = parseInt(slideFrame.css("left")) - leftShift;
$(".slider-frame:not(:animated)").animate({left:moveSize}, 800, function(){

$(".slide:first").before($(".slide:last"));
slideFrame.css({left:leftShift});

});

$(".lips:not(:first)").remove();
$(".lips:first").css({transform:"scale(0)"});
});

right.click(function(){
var moveSize = parseInt(slideFrame.css("left")) + leftShift;
$(".slider-frame:not(:animated)").animate({left:moveSize}, 800, function(){

$(".slide:last").after($(".slide:first"));
slideFrame.css({left:leftShift});
});
$(".lips:not(:first)").remove();
$(".lips:first").css({transform:"scale(0)"});
});


$(".container").hover(
function() {clearInterval(run)},
function() {run = setInterval('rotate()', 2000)}
	)

}) 

function rotate() {

$('.column-right').click();

}
