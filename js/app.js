var Cat = function(){
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.nickNames = ko.observableArray(['Tabbitha', 'Tabs', 'Tabbarina']);
	this.catLevel = ko.computed(function(){
		var catLevel;
		var clicks = this.clickCount();

		if (clicks < 10) {
			catLevel = 'Baby';
		}else if (clicks < 20) {
			catLevel = 'Child';
		}else if (clicks < 30){
			catLevel = 'Adult';
		}else {
			catLevel = 'Senior';
		}
		return catLevel;
	}, this);
}

var ViewModel = function() {
	//store our cat a new current cat variable
	this.currentCat = ko.observable( new Cat() );
	//clicking on cat increments the clickCounter
	this.incrementCounter = function(){
		this.currentCat().clickCount(this.currentCat().clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());
