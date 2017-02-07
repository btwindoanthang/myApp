

Router.route('/register');

Router.route('/login');

Router.route('/todos');

Router.route('/', {
    name: 'home',
    template: 'home'
});


if (Meteor.isClient) {
  Router.configure({
    layoutTemplate: 'main'
});
}


