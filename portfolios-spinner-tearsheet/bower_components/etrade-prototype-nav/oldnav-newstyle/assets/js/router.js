AccountBalances.Router.map(function() {
  this.route('catchAll', { path: '*' });
  this.route('success');
  this.route('error');
  this.route('test');
});

AccountBalances.CatchAllRoute = Ember.Route.extend( {
  redirect: function() {
    this.transitionTo('index');
  }
})