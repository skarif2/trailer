'use strict';
(function(){

class TrailerComponent {
  constructor() {
    this.message = 'Hello';
  }
}


angular.module('trailersApp')
  .component('trailer', {
    templateUrl: 'app/trailer/trailer.html',
    controller: TrailerComponent
  });

})();
