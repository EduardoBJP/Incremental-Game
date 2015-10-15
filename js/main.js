$(document).ready(function(){
	
/* Building Class
Encapsulates Building attributes
see buildingArray for jQuery DOM manipulation on this class
 */

function Building(name) {
	var scope = this;
	this.name = name;
	this.numBuildings = 0;
	this.bldSpeedValue = Math.floor((Math.random() * 101) -50);
	this.progressValue = 0;
	
	var bldActive = false;
	var bldActiveBonus = 10;
	
	
	var bldSpeedValueParts = function(value) {
		var val = value;
		var bldSpeedArray  = [];
		
		if (bldActive) {val += bldActiveBonus;}
		
		if (val <= -50) {
			bldSpeedArray.push({value: -50, barClass: 'mltpbar-verylow'});
		} else if (val <= -30) {
			bldSpeedArray.push({value: 50 + val, barClass: 'mltpbar-neg2'});
			bldSpeedArray.push({value: -val, barClass: 'mltpbar-verylow'});
		} else if (val < 0) {
			bldSpeedArray.push({value: 20, barClass: 'mltpbar-neg2'});
			bldSpeedArray.push({value: 30 + val, barClass: 'mltpbar-neg1'});
			bldSpeedArray.push({value: -val, barClass: 'mltpbar-low'});
		} else {
			bldSpeedArray.push({value: 20, barClass: 'mltpbar-neg2'});
			bldSpeedArray.push({value: 30, barClass: 'mltpbar-neg1'});
			bldSpeedArray.push({value: val, barClass: 'mltpbar-high'});
		}
		
		return bldSpeedArray;
		
	};
	
		
	var id = '#' + this.name + ' ';
	
	
	this.labelEl = $(id + '.bld-label').text(this.name);
	
	this.multpBarEl = $(id + '.multiprogressbar').multiprogressbar({parts: bldSpeedValueParts(scope.bldSpeedValue)});
	this.multpBarEl.click(function(){
		bldActive = true;
		console.log(this);
		scope.multpBarEl.multiprogressbar({parts: bldSpeedValueParts(scope.bldSpeedValue)});
	});
	
	this.nmbrEl = $(id + '.bld-number').text(this.numBuildings);
	this.pBarEl = $(id + '.progressbar').progressbar({value: 0});
	
};



/* this object inserts all buildings on the DOM.  
we also create attributes on each building related to the jQuery elements for ease of access */
var buildingArray = {
	buildings: [],
	
	/* Initializes the buildings in the building-container div.
	uses Handlebars template */
	init: function(){
		var toAppend = "";

		$('#building-container').append(toAppend);
		
	}
	
};

buildingArray.buildings.push(new Building("Farm"), new Building("Pasture"),	new Building("Gatherer"),	new Building("Hunter"));
buildingArray.init();

});


