import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		registerSubmitted: function(username, password){
			this.store.createRecord('user', {
				username: username,
				password: password
			}).save().then(function(user){
				console.log(user);
				this.transitionTo('index');
			}.bind(this));
		}
	},
	renderTemplate: function (controller, model) {
    this.render();
    this.render('headers/register',{
      into: 'application',
      outlet: 'mainHeader'
    });
  }
});
