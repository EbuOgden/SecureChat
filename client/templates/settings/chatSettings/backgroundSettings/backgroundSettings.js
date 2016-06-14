if(Meteor.isCordova){
	
	Template.backgroundSettings.events({
		'click #back' : function(){
			window.history.back();
		},
		
		'click #photos' : function(e){
			e.preventDefault();
			
			navigator.camera.getPicture(cameraSuccess, cameraError, {
				quality : 100,
				destinationType : Camera.DestinationType.FILE_URI,
				sourceType : Camera.PictureSourceType.PHOTOLIBRARY,
				encodingType : Camera.EncodingType.JPG,
				allowEdit : true
				
			})		
			
				
		},
		
		'swiperight #listed' : function(e){
			e.preventDefault();
			window.history.back();
		}
	})
	
	
}

var cameraSuccess = function(imageData){
	Router.go('/wallpaperTry');
}

var cameraError = function(error){
	console.log("Camera Return Error : " + error.code);
}
