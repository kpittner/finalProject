(function () {
  'use strict';
  angular
    .module('destination', [
      'ngRoute'
    ])

  .config(function($routeProvider) {
    $routeProvider
      .when('/destination', {
        templateUrl: 'destination/views/destination.html',
        controller: 'destinationController'
      });

    });

})();
