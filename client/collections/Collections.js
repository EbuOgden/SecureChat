//Chats = new Ground.Collection(null);

/*Friends = new Ground.Collection(null);

Contacts = new Ground.Collection(null);*/

Background = new Ground.Collection(null);

Tempo = new Meteor.Collection(null);

PhotoView = new Meteor.Collection(null);

PhotoAlbum = new Meteor.Collection(null);

var recordStore = new FS.Store.FileSystem("records", {
	path : localStorage.getItem("file")
})

Records = new FS.Collection("records", {
	stores : [recordStore]
})
