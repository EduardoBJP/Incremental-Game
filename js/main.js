$(document).ready(function(){
	
/* Building Class
Encapsulates Building attributes
see buildingArray for jQuery DOM manipulation on this class
 */

function Building(name) {
	this.name = name;
	this.numBuildings = 0;
	this.progressValue = 0;
	
	this.buttonEl = $('div').text('+1').button();
	this.labelEl = $('div').text(this.name + ' (' + this.numBuildings + ')').addClass('building-label');
	this.pBarEl = $('div').progressbar();
		
}; 



/* this object inserts all buildings on the DOM.  
we also create attributes on each building related to the jQuery elements for ease of access */
var buildingArray = {
	buildings: [],
	
	/* Initializes the buildings in the building-container div.
	uses Handlebars template */
	init: function(){
		var toAppend = "";
		for (var i = 0; i < this.buildings.length; i++) {
			var bld = this.buildings[i];
			toAppend += 
		}
		$('#building-container').append(toAppend);
		
		for (var i = 0; i < this.buildings.length; i++){
			var bld = this.buildings[i];
			this.buildings[i].buttonEl = $('#building-container #' + bld.name + ' button').button().on('click', function(bld){
				bld.numBuildings++;
			});
			this.buildings[i].pBarEl($('#building-container #' + bld.name + ' .progressbar').progressbar());
		}
		
	}
	
};

buildingArray.buildings.push(new Building("Farm"), new Building("Pasture"),	new Building("Gatherer"),	new Building("Hunter"));
buildingArray.init();

});


