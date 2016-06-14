if(Meteor.isCordova){
	
	Template.notificationsSettings.events({
		'click #back' : function(e){
			e.preventDefault();
			window.history.back();
		},
		
		'touchend #notificationsToggle' : function(e){
			if(Session.get('not') == 'false'){
				Session.set('not', 'checked');	
			}
			
			else
				Session.set('not', 'false');
			
		}
	});
	
	Template.notificationsSettings.helpers({
		sa : function(){
			return Session.get('not');
		}
	})
}