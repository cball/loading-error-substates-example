import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('artist', { path: 'artist/:artist_id' }, function() {
    this.resource('album', { path: 'albums/:album_id' }, function() { });
  });
});

export default Router;
