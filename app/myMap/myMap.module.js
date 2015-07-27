(function () {
  'use strict';
  angular
    .module('myMap', [
      'ngRoute',
      'myMap',
      'favorites'
    ])

  .config(function($routeProvider) {
    $routeProvider
      .when('/myMap', {
        templateUrl: 'myMap/views/myMap.html',
        controller: 'MyMapController'
      });
      // .when('/places/:placeId', {
      //   templateUrl: 'places/views/detail.html',
      //   controller: 'PlacesController'
      // })

    });

  })();
