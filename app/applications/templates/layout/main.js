


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
    Template.main.helpers({
    'userName': function(){
        
        return Meteor.user().emails[0].address;
    }
});
}

