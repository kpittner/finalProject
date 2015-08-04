(function() {
  'use strict';
  angular
    .module('myMap')
    .factory('MyMapService', function($http, $rootScope) {
      var favoritesUrl = 'http://tiy-fee-rest.herokuapp.com/collections/mymapfavorites';
      var url = 'http://tiy-fee-rest.herokuapp.com/collections/destinations'
      // var detailUrl = 'https://maps.googleapis.com/maps/api/place/details/json?reference=';


      var addLocation = function(location) {
        $http.jsonp(url, location).success(function() {
          $rootScope.$broadcast('location:added');
        });
      }
      function deleteLocation(id) {
        return $http.delete(url + '/' + id).success(function() {
          $rootScope.$broadcast('location:deleted');
        });
      }
      function addMarkerGreen(lat, long) {
        $http.post(url, lat, long).then(function() {
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
