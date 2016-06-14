if(Meteor.isCordova){
	Meteor.startup(function(){
		console.log("started");	
	});
	
	Template.home.rendered = function(){
        
		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, success, error);//program baslarken local dosya sisteminde kendimize PERSISTENT yer ayirt ediyoruz
		
    }
	
	Template.home.events({
		'click .goSign' : function(e){
			e.preventDefault();
			Router.go('/signup');
		}
	})
    
}

var success = function(fileSystem){
	var entry = fileSystem.root;//ayirt edilen yerin rootunu aktariyoruz
	entry.getDirectory("SecureChat", {create: true, exclusive: true}, onGetDirectorySuccess, onGetDirectoryFail);//root altinda program icin klasor aciyoruz. Profil resimleri, konusmalardaki medyalar vs tutulacak.
}

var error = function(err){
	console.log("Err : " + err ) ;
}

var onGetDirectorySuccess = function(dir) { 
      console.log("Created dir : " + dir.fullPath);
	  
} 

var onGetDirectoryFail = function(err){
	console.log("Error creating directory : " +err.code); 
}