if(Meteor.isCordova){
	
	Template.chatSettings.events({
		'click #back' : function(e){
			window.history.back();
		},
		
		'swiperight #list' : function(e){
			e.preventDefault();
			window.history.back();
		}
		
		
	})
}