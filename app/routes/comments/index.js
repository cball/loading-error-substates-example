import Ember from 'ember';

export default Ember.Route.extend({
  afterModel: function(model) {
    return model.get('comments');
  }
});
