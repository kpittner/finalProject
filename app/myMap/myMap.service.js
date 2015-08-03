(function() {
  'use strict';
  angular
    .module('myMap')
    .factory('MyMapService', function($http, $rootScope) {
      var favoritesUrl = 'http://tiy-fee-rest.herokuapp.com/collections/mymapfavorites';
      var url = 'http://tiy-fee-rest.herokuapp.com/collections/places'
      // var detailUrl = 'https://maps.googleapis.com/maps/api/place/details/json?reference=';

      function addToFavorites(id) {
        $http.post(favoritesUrl, id).success(function() {
          $rootScope.$broadcast('favorite:added');
        });
      }
      function addLocation(location) {
        $http.post(url, location).then(function() {
          $rootScope.$broadcast('location:added');
        });
      }
      function deleteLocation(id) {
        return $http.delete(url + '/' + id + '.json').then(function(location) {
          $rootScope.$broadcast('location:deleted');
        });
      }
      function addMarkerGreen(lat, long) {
        $http.post(url, lat, long).then(function() {
          $rootScope.$broadcast('marker:added');
        });
      }
      function getLocations() {
        return $http.get(url);
      };


      return {
        addToFavorites: addToFavorites,
        getLocations: getLocations,
        deleteLocation: deleteLocation,
        addMarkerGreen: addMarkerGreen
      };

    });
  })();
