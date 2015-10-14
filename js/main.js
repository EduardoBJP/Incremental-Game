$(document).ready(function(){
	
/* Building Class
Encapsulates Building attributes
see buildingArray for jQuery DOM manipulation on this class
 */

function Building(name) {
	this.name = name;
	this.numBuildings = 0;
	this.progressValue = 0;
	
	var id = '#' + this.name + ' ';
	
	this.labelEl = $(id + '.bld-label').text(this.name);
	this.slidebarEl = $(id + '.slidebar').progressbar({value: 50});
	this.nmbrEl = $(id + '.bld-number').text(this.numBuildings);
	this.pBarEl = $(id + '.progressbar').progressbar();
	
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


