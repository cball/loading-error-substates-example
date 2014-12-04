import Ember from 'ember';

export default Ember.Route.extend({
  afterModel: function(model) {
    return model.get('albums')
  },

  actions: {
    loading: function() {
      this._doStuff();
      return true;
    }
  },

  _doStuff: function() {
    alert('holy crap, we are loading... do stuff')
  }
});
