var initalCats = [
	{
		clickCount: 0,
		name: 'Tabby',
		imgSrc: 'img/434164568_fea0ad4013_z.jpg',
		nickNames: ['Tabbitha', 'Tabs', 'Tabbarina']
	},{
		clickCount: 0,
		name: 'Bob',
		imgSrc: 'img/1413379559_412a540d29_z.jpg',
		nickNames: ['Bobbie', 'Bobs', 'BB']		
	},{
		clickCount: 0,
		name: 'Alex',
		imgSrc: 'img/22252709_010df3379e_z.jpg',
		nickNames: ['Ali', 'Al', 'Aldo']
	},{
		clickCount: 0,
		name: 'Sheela',
		imgSrc: 'img/4154543904_6e2428c421_z.jpg',
		nickNames: ['She', 'Lea', 'Sheelapoop']
	}
];

var Cat = function(data){

	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.nickNames = ko.observableArray(data.nickNames);
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
	var self = this;

	this.catList = ko.observableArray([]);

	initalCats.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
	});

	//store our cat a new current cat variable
	this.currentCat = ko.observable( this.catList()[0] );
	//clicking on cat increments the clickCounter
	this.incrementCounter = function(){
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};

	this.clickCat = function(clickedCat){
		self.currentCat(clickedCat);
	};
}

ko.applyBindings(new ViewModel());
