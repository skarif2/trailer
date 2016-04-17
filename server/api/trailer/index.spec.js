'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var trailerCtrlStub = {
  index: 'trailerCtrl.index',
  show: 'trailerCtrl.show',
  create: 'trailerCtrl.create',
  update: 'trailerCtrl.update',
  destroy: 'trailerCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var trailerIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './trailer.controller': trailerCtrlStub
});

describe('Trailer API Router:', function() {

  it('should return an express router instance', function() {
    expect(trailerIndex).to.equal(routerStub);
  });

  describe('GET /api/trailers', function() {

    it('should route to trailer.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'trailerCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/trailers/:id', function() {

    it('should route to trailer.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'trailerCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/trailers', function() {

    it('should route to trailer.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'trailerCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/trailers/:id', function() {

    it('should route to trailer.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'trailerCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/trailers/:id', function() {

    it('should route to trailer.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'trailerCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/trailers/:id', function() {

    it('should route to trailer.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'trailerCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
