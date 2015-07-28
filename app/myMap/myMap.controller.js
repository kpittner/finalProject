var lat;
var long;

(function() {
  // 'use strict';

  angular
  .module('myMap')
  .controller('MyMapController', function($scope, $auth, $alert, Account, MyMapService, uiGmapGoogleMapApi, $routeParams, $sce) {
    uiGmapGoogleMapApi.then(function(map) {
      $scope.map = {
        'center': {
          'latitude': 32.7833,
          'longitude': -79.931051
        },
          'mapTypeId': google.maps.mapTypeId.ROADMAP,
          'zoom': 8
        };
      });
      $scope.marker = {
          id: 0,
          coords: {
              latitude: 32.7833,
              longitude: -79.931051
          },
          options: {draggable: true},
          events: {
              dragend: function (marker, eventName, args) {

                  $scope.marker.options = {
                      draggable: true,
                      labelContent: 'lat: ' + $scope.marker.coords.latitude + ' ' +
                      'lon: ' + $scope.marker.coords.longitude,
                      labelAnchor: '100 0',
                      labelClass: 'marker-labels'
                  };
              }
          }
      };

    });
})();
