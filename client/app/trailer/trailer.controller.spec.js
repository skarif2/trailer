'use strict';

describe('Component: TrailerComponent', function () {

  // load the controller's module
  beforeEach(module('trailersApp'));


  var TrailerComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    TrailerComponent = $componentController('TrailerComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
