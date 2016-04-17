'use strict';

(function() {

class TrailerController {

  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.awesomeTrailer = [];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('trailer');
    });
  }

  $onInit() {
    // tried to use service as it uses ngResource
    // TrailerService.query(response => {
    //   this.awesomeTrailer = response.data;
    //   this.socket.syncUpdates('trailer', this.awesomeTrailer);
    //   console.log(this.awesomeTrailer);
    // });
    this.$http.get('/api/trailers').then(response => {
      this.awesomeTrailer = response.data;
      this.socket.syncUpdates('trailer', this.awesomeTrailer);
    });
  }

  addTrailer() {
    if (this.newTrailer) {
      this.$http.post('/api/trailers', { name: this.newTrailer });
      this.newTrailer = '';
    }
  }

  deleteTrailer(trailer) {
    this.$http.delete('/api/trailers/' + trailer._id);
  }
}

angular.module('trailersApp')
  .component('trailer', {
    templateUrl: 'app/trailer/trailer.html',
    controller: TrailerController
  });

})();
