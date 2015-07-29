(function () {
  'use strict';
  angular
    .module('myMap', [
      'ngRoute',
      'uiGmapgoogle-maps'
    ])

  .config(function($routeProvider, uiGmapGoogleMapApiProvider) {
    $routeProvider
      .when('/myMap', {
        templateUrl: 'myMap/views/myMap.html',
        controller: 'MyMapController'
      })
    });

  })();
