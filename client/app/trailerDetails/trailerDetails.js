'use strict';

angular.module('trailersApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('trailerDetails', {
        url: '/:id',
        template: '<trailer-details></trailer-details>'
      });
  });
