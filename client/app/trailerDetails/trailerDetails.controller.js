'use strict';

(function() {

class TrailerDetailsComponent {

  constructor($http, $stateParams, $sce, $scope, socket) {
    this.$http = $http;
    this.stateParams = $stateParams;
    this.sce = $sce;
    this.socket = socket;
    this.trailerDetails = {};

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('trailerDetails');
    });
  }

  $onInit() {
    this.$http.get('/api/trailers/' + this.stateParams.id).then(response => {
      this.trailerDetails = response.data;
      this.socket.syncUpdates('trailer', this.trailerDetails);
    });
  }

  trustSrc(src) {
    return this.sce.trustAsResourceUrl(src);
  }

  moreThenOne(value) {
    console.log(value.length);
    return true;
  }
  
  deleteTrailer(trailer) {
    this.$http.delete('/api/trailers/' + trailer._id);
  }
}

angular.module('trailersApp')
  .component('trailerDetails', {
    templateUrl: 'app/trailerDetails/trailerDetails.html',
    controller: TrailerDetailsComponent
  });

})();
