'use strict';

(function() {

function TrailerResource($resource) {
  return $resource('/api/trailers/:id', {
    id: '@_id'
  });
}

angular.module('trailersApp')
  .factory('TrailerService', TrailerResource);
})();
