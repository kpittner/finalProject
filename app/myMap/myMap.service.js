(function() {
  'use strict';
  angular
    .module('myMap')
    .factory('MyMapService', function($http, $rootScope) {
      var favoritesUrl = 'api/collection/mymapfavorites';
      var url = '/api/collections/mydestinations'
      // var detailUrl = 'https://maps.googleapis.com/maps/api/place/details/json?reference=';


      var addLocation = function(location) {
        $http.post(url, location).success(function() {
          $rootScope.$broadcast('location:added');
        });
      }
      function deleteLocation(id) {
        return $http.delete(url + '/' + id).success(function() {
          $rootScope.$broadcast('location:deleted');
        });
      }
      function addMarkerGreen(coord) {
        $http.post(url, coord).then(function() {
          $rootScope.$broadcast('marker:added');
        });
      }
      var getLocations = function() {
        return $http.get(url);
      }


      return {
        addLocation: addLocation,
        getLocations: getLocations,
        deleteLocation: deleteLocation,
        addMarkerGreen: addMarkerGreen
      };

    });
  })();
