/*
var abst = new metal.ui.AbstractView();
var win = new metal.ui.Window({
	width: 100,
	height: 100
});
var mine = new metal.ui.MyWindow({ 
	properties: {
		title: 'OVERRIDE',
		something: true
	}
});

*/

var win = new metal.ui.Window({
		id: 'mapscr',
		title: 'Map',
		icon: 'KS_nav_ui.png',
		items: [new metal.ui.Map({
			markers: [
				new metal.ui.Marker({
					latitude:37.33168900,
					longitude:-122.03073100,
					title:"Steve Jobs",
					subtitle:'Cupertino, CA',
					pincolor:'green',
					animate:true
				})
			]
		})]
	});