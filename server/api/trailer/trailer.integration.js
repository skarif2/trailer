'use strict';

var app = require('../..');
import request from 'supertest';

var newTrailer;

describe('Trailer API:', function() {

  describe('GET /api/trailers', function() {
    var trailers;

    beforeEach(function(done) {
      request(app)
        .get('/api/trailers')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          trailers = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(trailers).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/trailers', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/trailers')
        .send({
          title: 'New Trailer',
          Description: 'This is the brand new trailer!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newTrailer = res.body;
          done();
        });
    });

    it('should respond with the newly created trailer', function() {
      expect(newTrailer.title).to.equal('New Trailer');
      expect(newTrailer.Description).to.equal('This is the brand new trailer!!!');
    });

  });

  describe('GET /api/trailers/:id', function() {
    var trailer;

    beforeEach(function(done) {
      request(app)
        .get('/api/trailers/' + newTrailer._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          trailer = res.body;
          done();
        });
    });

    afterEach(function() {
      trailer = {};
    });

    it('should respond with the requested trailer', function() {
      expect(trailer.title).to.equal('New Trailer');
      expect(trailer.Description).to.equal('This is the brand new trailer!!!');
    });

  });

  describe('PUT /api/trailers/:id', function() {
    var updatedTrailer;

    beforeEach(function(done) {
      request(app)
        .put('/api/trailers/' + newTrailer._id)
        .send({
          title: 'Updated Trailer',
          Description: 'This is the updated trailer!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedTrailer = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedTrailer = {};
    });

    it('should respond with the updated trailer', function() {
      expect(updatedTrailer.title).to.equal('Updated Trailer');
      expect(updatedTrailer.Description).to.equal('This is the updated trailer!!!');
    });

  });

  describe('DELETE /api/trailers/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/trailers/' + newTrailer._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when trailer does not exist', function(done) {
      request(app)
        .delete('/api/trailers/' + newTrailer._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
