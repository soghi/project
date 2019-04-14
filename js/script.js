$(document).ready(function(){
var hover  = $('hover');
hover.filter(':nth-child(n+1)').hide();
$('.dropdown-item').no('mouseenter' , function(){
$(this).siblings('hover').slideup(100);
$(this).next().slidedown(500);
});
});
