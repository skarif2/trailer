'use strict';

angular.module('trailersApp.auth', [
  'trailersApp.constants',
  'trailersApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
