'use strict';

describe('Component: trailer', function () {

  // load the controller's module
  beforeEach(module('trailersApp'));
  beforeEach(module('stateMock'));
  beforeEach(module('socketMock'));

  var scope;
  var mainComponent;
  var state;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(
    _$httpBackend_,
    $http,
    $componentController,
    $rootScope,
    $state) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('/api/trailers')
        .respond({
          "_id": "57131fde465a6cfd11303de2",
          "title": "Too Late",
        });

      scope = $rootScope.$new();
      state = $state;
      mainComponent = $componentController('trailer', {
        $http: $http,
        $scope: scope,
      });
  }));


  it('should return an array of json object or objects', function () {
    mainComponent.$onInit();
    $httpBackend.flush();
    expect(mainComponent.awesomeTrailer.title).to.equal("Too Late");
  });
});
