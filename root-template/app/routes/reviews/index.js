import Ember from 'ember';

export default Ember.Route.extend({
  afterModel: function(model) {
    // return model.get('reviews')
    return new Ember.RSVP.Promise(function(resolve, reject) {
      resolve(this.a.asdf);
    });
  }
});
