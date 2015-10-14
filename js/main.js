$(document).ready(function(){
	
/* Building Class
Encapsulates Building attributes
see buildingArray for jQuery DOM manipulation on this class
 */

function Building(name) {
	this.name = name;
	var number = 0;
	var pBarEl;
	var buttonEl;
	
	this.getButtonEl = function (){
		return buttonEl;
	};
	
	this.setButtonEl = function (el){
		buttonEl = el;
	};
	
	this.getPBarEl = function (){
		return pBarEl;
	};
	
	this.setPBarEl = function (el){
		pBarEl = el;
	};
	
	var increase = function (ammount) {
		var inc = 1 || ammount;
		number += inc;
	};
	
	this.handleClick = function () {
		increase();
		pBarEl.progressbar({value: number});
		
	}
} 



/* this object inserts all buildings on the DOM.  
we also create attributes on each building related to the jQuery elements for ease of access */
var buildingArray = {
	buildings: [],
	
	/* Initializes the buildings in the building-container div.
	uses Handlebars template */
	init: function(){
		var source   = $("#building-template").html();
		var bldTemplate = Handlebars.compile(source);
		var toAppend = "";
		for (var i = 0; i < this.buildings.length; i++) {
			toAppend += bldTemplate({name: this.buildings[i].name});
		}
		$('#building-container').append(toAppend);
		
		for (var i = 0; i < this.buildings.length; i++){
			this.buildings[i].setButtonEl($('#building-container #' + this.buildings[i].name + ' button').button().on('click', this.buildings[i].handleClick));
			this.buildings[i].setPBarEl($('#building-container #' + this.buildings[i].name + ' .progressbar').progressbar());
		}
		
	}
	
};

buildingArray.buildings.push(new Building("Farm"), new Building("Pasture"),	new Building("Gatherer"),	new Building("Hunter"));
buildingArray.init();

});


