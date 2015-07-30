(function () {
  'use strict';
  angular
    .module('destination', [
      'ngRoute',
      'uiGmapgoogle-maps',
      'ui.bootstrap'
    ])

  .config(function($routeProvider) {
    $routeProvider
      .when('/destination', {
        templateUrl: 'destination/views/destination.html',
        controller: 'DestinationController'
      });

    });

})();
