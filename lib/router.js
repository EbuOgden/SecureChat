Router.configure({
    progressTick : false,
    
})

Router.route('/', {
    template : 'home',
    name : 'home'
});

Router.route('/signup', {
    layoutTemplate : 'signupLayout',
    template : 'signup',
    name : 'signUp'
});

Router.route('/profileSetup', {
    layoutTemplate : 'profileLayout',
    template : 'profileSetup',
    name : 'profile.Setup'
})

Router.route('/contacts', {
    layoutTemplate : 'contactsLayout',
    template : 'contacts',
    name : 'contacts'
});

Router.route('/profile', {
    layoutTemplate : 'profileLayout',
    template : 'profile',
    name : 'profile'
});

Router.route('/settings', {
    layoutTemplate : 'contactsLayout',
    template : 'settings',
    name : 'settings'
});

/*Router.route('/profile/:friendId' ,{
    layoutTemplate : 'messageScreenLayout',
    template : 'messageScreen',
    name : 'message.Screen'
});*/

Router.route('/profile/:_id' ,{
    layoutTemplate : 'messageScreenLayout',
    template : 'messageScreen',
    name : 'message.Screen'
});

Router.route('/settings/profile',{
    layoutTemplate : 'profileSettingsLayout',
    template : 'profileSettings',
    name : 'profile.Settings'
});

Router.route('/settings/chat',{
    layoutTemplate : 'chatSettingsLayout',
    template : 'chatSettings',
    name : 'chat.Settings',
});

Router.route('/settings/chat/backgroundSettings',{
    layoutTemplate : 'chatSettingsLayout',
    template : 'backgroundSettings',
    name : 'background.Settings'
});

Router.route('/settings/chat/backgroundSettings/wallpapers',{
    layoutTemplate : 'chatSettingsLayout',
    template : 'wallpapersSettings',
    name : 'wallpapers.Settings'
});

Router.route('/wallpaperTry',{
   layoutTemplate : 'chatSettingsLayout',
   template : 'wallpaperTry',
   name : 'wallpaper.Try' 
});

Router.route('/fontSize', {
    layoutTemplate : 'chatSettingsLayout',
    template : 'fontSize',
    name : 'font.Size'
});

Router.route('/photoView', {
    layoutTemplate : 'chatSettingsLayout',
    template : 'photoView',
    name : 'photo.View'
})

Router.route('/settings/notifications',{
    layoutTemplate: 'profileSettingsLayout',
    template : 'notificationsSettings',
    name : 'notifications.Settings'
});
