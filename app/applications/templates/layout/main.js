


if (Meteor.isClient) {
    Template.main.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('login');
    }
});

    Template.main.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});
}
