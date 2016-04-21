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
      "_id": "57131fde465a6cfd11303de2",
      "title": "Too Late",
      "Description": "When tasked with tracking down a missing woman from his own past, Private Investigator Mel Sampson finds himself navigating the dark corners of Southern California and the menagerie of eccentric personalities and lost souls who inhabit it. Filmed in a series of stunning unbroken takes and featuring a gut-wrenching, tour-de-force performance by John Hawkes, TOO LATE is presented only in theaters and only in 35mm.",
      "director": ["Dennis Hauck"],
      "cast": ["John Hawkes", "Vail Bloom", "Joanna Cassidy", "Jeff Fahey", "Robert Forster", "Dash Mihok", "Dichen Lachman", "Crystal Reed", "Rider Strong", "Natalie Zea"],
      "writer": ["Dennis Hauck"],
      "studio": "Independent",
      "duration": "01:47:59",
      "genre": ["Drama"],
      "release": "2016-03-18",
      "views": 26,
      "posterUrl": "http://cdn.traileraddict.com/content/unknown/too-late-2015.jpg",
      "trailerUrl": "https://www.youtube.com/embed/MaVSY0VVRxY",
      "imdbUrl": "http://www.imdb.com/title/tt2394063/",
      "officialUrl": "http://www.toolatemovie.com/",
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
      "_id": "57131fde465a6cfd11303de4",
      "title": "Doctor Strange",
      "Description": "'Doctor Strange' follows the story of neurosurgeon Doctor Stephen Strange who, after a horrific car accident, discovers the hidden world of magic and alternate dimensions.",
      "director": ["Scott Derrickson"],
      "cast": ["Benedict Cumberbatch", "Chiwetel Ejiofor", "Rachel McAdams", "Michael Stuhlbarg", "Mads Mikkelsen", "Tilda Swinton"],
      "writer": ["Joshua Oppenheimer"],
      "studio": "Walt Disney Pictures",
      "duration": "01:54:59",
      "genre": ["Action"],
      "release": "2016-11-04",
      "views": 26,
      "posterUrl": "http://static.srcdn.com/slir/w1000-h1480-q90-c1000:1480/wp-content/uploads/Doctor-Strange-Poster.jpg",
      "trailerUrl": "https://www.youtube.com/embed/Lt-U_t2pUHI",
      "imdbUrl": "http://www.imdb.com/title/tt1211837/",
      "officialUrl": "http://marvel.com/movies/movie/220/doctor_strange",
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
