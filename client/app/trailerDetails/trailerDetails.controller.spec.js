'use strict';

describe('Component: TrailerDetailsComponent', function () {

  // load the controller's module
  beforeEach(module('trailersApp'));

  var TrailerDetailsComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    TrailerDetailsComponent = $componentController('TrailerDetailsComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
