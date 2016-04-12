var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');

	this.incrementCounter = function(){
		this.clickCount(this.clickCount() + 1);
	};

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

ko.applyBindings(new ViewModel());
