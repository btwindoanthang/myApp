

Router.route('/register');

Router.route('/login');

Router.route('/todos');

Router.route('/', {
    name: 'home',
    template: 'home',
    onBeforeAction: function(){
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("login");
        }
    }
});


if (Meteor.isClient) {
  Router.configure({
    layoutTemplate: 'main'
});
  Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});
}


