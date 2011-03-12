metal.ns('geo.ui.EventDateAndTimeSelection');

/**
 * @class geo.ui.EventDateAndTimeSelection
 * @author Amir Lazarovich
 * @version 0.1
 */
geo.ui.EventDateAndTimeSelection = metal.extend(metal.ui.Window, {

	/**
 	* @override
 	*/
	properties: {
		id: 'eventDateAndTimeSelection',
		title: 'Select date & time',
		barColor: 'black',
		backgroundColor: 'white',
		fullscreen: true
	},

	/**
 	* @override
 	*/
	initComponents: function() {
		// Call parent
		geo.ui.EventDateAndTimeSelection.superclass.initComponents.call(this);

		this.add([

			new metal.ui.TableView({
				top: 0,
				style:Titanium.UI.iPhone.TableViewStyle.GROUPED,
				data: [
					new metal.ui.TableRow({
						layout: 'horizontal',
						height: 30,
						width: metal.width - 20,
						items: [
							new metal.ui.Label({
								text: 'Start:',
								color: 'black',
								width: 'auto',
								height: 'auto'
							}),
			
							{ type: 'spacer', padding: 5 },
			
							new metal.ui.Label({
								id: 'startDate',
								color: 'red',
								text: '2011-03-28 12:00',
								width: 'auto',
								height: 'auto'
							})
						],
						
						initEvents: function() {
							this.on('click', function() {
								flog('click');		
							});
						}
					}),
		
					new metal.ui.TableRow({
						layout: 'horizontal',
						height: 30,
						width: metal.width - 20,
						items: [
							new metal.ui.Label({
								text: 'End:',
								width: 'auto',
								height: 'auto'
							}),
			
							{ type: 'spacer', padding: 5 },
			
							new metal.ui.Label({
								id: 'endDate',
								color: 'red',
								text: '2011-03-28 22:00',
								width: 'auto',
								height: 'auto'
							})
						]
					}),
		
					new metal.ui.TableRow({
						layout: 'horizontal',
						height: 30,
						width: metal.width - 20,
						items: [
							new metal.ui.Label({
								text: 'Type:',
								width: 'auto',
								height: 'auto'
							}),
			
							{ type: 'spacer', padding: 5},
			
							new metal.ui.Label({
								id: 'eventType',
								color: 'blue',
								text: 'Party',
								width: 'auto',
								height: 'auto'
							})
						]
					})
				] // tabeView::data
			}), // tableView
			
			new metal.ui.Picker({
				id: 'picker',
				type: metal.ui.PICKER_TYPE_DATE_AND_TIME,
				bottom: 0,
				
				initEvents: function() {
					var me = this;
					
					me.on('change', function(e) {
						wlog('EventDateAndTypeSelection::on picker change', 'Change the logic here...');
						var dateAndTime = metal.formatDateAndTime(e.value, 'short');
						metal.control.get('startDate').set('text', dateAndTime);
					});
				}
			})
			
		]); // this.add
	},
	
	/**
	 * @override
	 */
	initEvents: function() {
		// Call parent
		geo.ui.EventDateAndTimeSelection.superclass.initEvents.call(this);
		var me = this;
		
		
	}
});
