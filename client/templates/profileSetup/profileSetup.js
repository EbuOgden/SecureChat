if(Meteor.isCordova){
	
	var actionsheetOptions = {
		'buttonLabels' : ['Camera', 'Gallery'],
		'androidEnableCancelButton' : true,
		'addCancelButtonWithLabel' : 'Cancel'
		
	}
	Template.profileSetup.events({
		'click #profilePic' : function(e){
			e.preventDefault();
			window.plugins.actionsheet.show(actionsheetOptions, callback);
			
		}
	})
	
	Template.profileSetup.helpers({
		stat : function(){
			return Meteor.users.findOne({_id : Meteor.userId()}).profile.status;
		}
	})
	
	
}

var callback = function(buttonIndex){
	
	if(buttonIndex == 1){
		navigator.camera.getPicture(cameraSuccess, cameraError, {
			quality : 100,
			destinationType : Camera.DestinationType.FILE_URI,
			sourceType : Camera.PictureSourceType.CAMERA,
			encodingType : Camera.EncodingType.JPG,
			allowEdit : true,
			targetWidth : 462,//cekilen resmi corp yapiyoruz
			targetHeight : 462//cekilen resmi corp yapiyoruz
			
		})
	}
	
	if(buttonIndex == 2){
		navigator.camera.getPicture(cameraSuccess, cameraError, {
			quality : 100,
			destinationType : Camera.DestinationType.FILE_URI,
			sourceType : Camera.PictureSourceType.PHOTOLIBRARY,
			//mediaType : Camera.MediaType.PICTURE,
			//targetWidth : $(window).width(),//cekilen resmi corp yapiyoruz
			targetHeight : $(window).height()//cekilen resmi corp yapiyoruz
			
		})
		
	}
}

var cameraSuccess = function(imageData){
	if(Platform.isAndroid()){
		window.resolveLocalFileSystemURI(imageData, onResolveSuccess, onResolveFail);	
	}
	
	else{
		window.resolveLocalFileSystemURI(imageData, onResolveSuccess, onResolveFail);
		navigator.camera.cleanup(cleanupSuccess, cleanupFail);//for ios clean temporary picture cache
	}
}

var cameraError = function(error){
	console.log("Camera Return Error : " + error.code);
}

var onResolveSuccess = function(fileEntry){
	fileEntry.file(function(file){
		
		//console.log("Or Name : " + file.name + " LocalURL : " + file.localURL + " Type : " + file.type + " Last Modified : " + file.lastModified);
		var img = document.getElementById('sa');
		img.src = file.localURL;	
		$('#sa').Jcrop({
			maxSize : [462, 462],
			minSize : [390, 390]
		})
		
		$('#sa').trigger('click');
		
		window.plugins.toast.showWithOptions({
			message : 'Photo Selected',
			duration : "short",
			position : "bottom",
			addPixelsY : -40
			
		});
	})
	
}

var onResolveFail = function(err){
	console.log('Resolve Error : ' + err.code);
}

var cleanupSuccess = function(){
	console.log('Camera Cleanup Success');
}
var cleanupFail = function(){
	console.log("Camera Cleanup Error");
}