import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('artist', { path: '/artists/:artist_id' }, function() {
  });
  this.resource('albums', { path: '/artists/:artist_id/albums' }, function() {
    this.route('popular');
  });
  this.resource('album', { path: '/albums/:album_id' }, function() {
    this.resource('comments', function() { });
    this.resource('reviews', function() { });
  });
});

export default Router;
