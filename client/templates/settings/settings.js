if(Meteor.isCordova){
	Template.settings.events({
		'swiperight #listAndroid' : function(e){
			e.preventDefault();
			$('.settingsList').addClass("fadeOut");
			Router.go('/profile');	
			
		}
	})
	
	Template.settings.helpers({
		stat : function(){
			return Meteor.users.findOne({_id : Meteor.userId()}).profile.status;
		}
	})
	
}
