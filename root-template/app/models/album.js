import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  image: DS.attr('string'),

  artist: DS.belongsTo('artist', { async: true }),
  songs: DS.hasMany('songs', { async: true }),
  comments: DS.hasMany('comments', { async: true }),
  reviews: DS.hasMany('reviews', { async: true })
});
