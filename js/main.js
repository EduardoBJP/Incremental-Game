function Building(name){
	this.name = name;
	this.number = 0;
	
	this.increase = function(ammount){
		var inc = 1 || ammount;
		this.number += inc;
	};
	
} 

var buildings = [
	new Building("Farm"),
	new Building("Pasture"),
	new Building("Gatherer"),
	new Building("Hunter")
]

$(document).ready(function(){
	$('.progressbar').progressbar();
	$('button').button().click(function(){
		console.log('test');
	});
});

