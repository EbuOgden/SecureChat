if(Meteor.isCordova){
	Template.wallpaperTry.helpers({
		height : function(){
			return $(window).height();
		},
		
		font : function(){
			return localStorage.getItem('font');
		}
	});
	
	Template.wallpaperTry.events({
		'click #cancel' : function(e){
			e.preventDefault();
			window.history.back();
		},
		
		'click #set' : function(e){
			e.preventDefault();
			var pic = Tempo.findOne({userId : Meteor.userId()});//user id select
			
			try{
				Background.update({userId : Meteor.userId()}, {$set : {image : pic.image}});
				}
			catch(e){
				
			}
			window.history.back();
		}
		
		
	})
}