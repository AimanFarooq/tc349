$(document).ready(function(){
var disclaimer = $('#disclaimer');
disclaimer.hide();
$('.button').click(function(){
disclaimer.show(500);
});
});