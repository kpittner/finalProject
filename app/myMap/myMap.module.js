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
      uiGmapGoogleMapApiProvider.configure({
        key: 'YwjpJpq505y30pj_dJVKrCq0',
        v: '3.17',
        libraries: 'weather,geometry,visualization,myMap'
      });
    });


  })();
