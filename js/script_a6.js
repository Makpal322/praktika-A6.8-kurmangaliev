function init() {

let currentValue = 0;

$('#one-percent').click(function() {
	currentValue = currentValue + 1;
	$('#my-progress-bar').attr('style' ,'width:' + currentValue +'%');	
});

$('#three-percent').click(function() {
	currentValue = currentValue + 3;
	$('#my-progress-bar').attr('style' ,'width:' + currentValue +'%');	
});

$('#five-percent').click(function() {
	currentValue = currentValue + 5;
	$('#my-progress-bar').attr('style' ,'width:' + currentValue +'%');	
});

};

$(document).ready(init);