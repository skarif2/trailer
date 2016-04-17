/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
// import Thing from '../api/thing/thing.model';
import Trailer from '../api/trailer/trailer.model';
import User from '../api/user/user.model';

Trailer.find({}).remove()
  .then(() => {
    Trailer.create({
      "_id": "57131fde465a6cfd11303de0",
      "title": "Some Title",
      "Description": "Some Description",
      "director": ["New Director"],
      "cast": ["Angelina Joli, Brad Pit"],
      "writer": ["New Writer"],
      "studio": "Marvel",
      "duration": "02:24:59",
      "genre": ["Romance, Love"],
      "release": "2016-12-08",
      "views": 26,
      "posterUrl": "http://posterurl.com",
      "trailerUrl": "http://trailerurl.com",
      "imdbUrl": "http://imdburl.com",
      "officialUrl": "http://officialurl.com",
      "likes": 15,
      "fbShare": 13,
      "twShare": 5,
      "gpShare": 2,
      "commentCount": 2,
      "comments": [{
        "csName": "Commenter 1",
        "csComment": "Commenter 1's comment is here"
      }, {
        "csName": "Commenter 2",
        "csComment": "Commenter 2's comment is here"
      }]
    }, {
      "_id": "57131fde465a6cfd11303de3",
      "title": "Another Title",
      "Description": "Another Description",
      "director": ["Old Director"],
      "cast": ["Angelina Joli, Brad Pit"],
      "writer": ["Old Writer"],
      "studio": "Dc",
      "duration": "01:54:59",
      "genre": ["Action, Horor"],
      "release": "2016-06-08",
      "views": 26,
      "posterUrl": "http://posterurl.com",
      "trailerUrl": "http://trailerurl.com",
      "imdbUrl": "http://imdburl.com",
      "officialUrl": "http://officialurl.com",
      "likes": 15,
      "fbShare": 13,
      "twShare": 5,
      "gpShare": 2,
      "commentCount": 2,
      "comments": [{
        "csName": "Commenter 1",
        "csComment": "Commenter 1's comment is here"
      }, {
        "csName": "Commenter 2",
        "csComment": "Commenter 2's comment is here"
      }]
    });
  });


// Thing.find({}).remove()
//   .then(() => {
//     Thing.create({
//       name: 'Development Tools',
//       info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
//              'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
//              'Stylus, Sass, and Less.'
//     }, {
//       name: 'Server and Client integration',
//       info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
//              'AngularJS, and Node.'
//     }, {
//       name: 'Smart Build System',
//       info: 'Build system ignores `spec` files, allowing you to keep ' +
//              'tests alongside code. Automatic injection of scripts and ' +
//              'styles into your index.html'
//     }, {
//       name: 'Modular Structure',
//       info: 'Best practice client and server structures allow for more ' +
//              'code reusability and maximum scalability'
//     }, {
//       name: 'Optimized Build',
//       info: 'Build process packs up your templates as a single JavaScript ' +
//              'payload, minifies your scripts/css/images, and rewrites asset ' +
//              'names for caching.'
//     }, {
//       name: 'Deployment Ready',
//       info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
//              'and openshift subgenerators'
//     });
//   });

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
