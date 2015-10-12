function Building(name){
	this.name = name;
	this.number = 0;
	this.increase = function(ammount){
		va inc = 1 || ammount;
		this.number += inc;
	}
} 


$(document).ready(function(){
	$('.progressbar').progressbar();
});

