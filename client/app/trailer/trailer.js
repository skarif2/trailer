'use strict';

angular.module('trailersApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        template: '<trailer></trailer>'
      });
  });
