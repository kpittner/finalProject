(function() {
  'use strict';
  angular
    .module('myMap')
    .factory('MyMapService', function($http, $rootScope) {
      var url = '/api/collections/mydestinations/';
      var favoritesUrl = 'api/collections/favorites/';
      // var detailUrl = 'https://maps.googleapis.com/maps/api/place/details/json?reference=';


      var addLocation = function(location) {
        $http.post(url, location).success(function() {
          $rootScope.$broadcast('location:added');
        });
      }
      var addToFavorites = function(place) {
        console.log("ID", place);
        $http.post(favoritesUrl, place).success(function() {
          $rootScope.$broadcast('favorite:added');
        })
      }
      var deleteFromMyMap = function(_id) {
        var deleteUrl = url.concat(_id);
        $http.delete(deleteUrl).success(function() {
          $rootScope.$broadcast('location:deleted');
        });
      }
      function addMarkerGreen(coord) {
        $http.post(url, coord).then(function() {
          $rootScope.$broadcast('marker:added');
        });
      }
      function addMarkerRed(coord) {
        $http.post(url, coord).then(function() {
          $rootScope.$broadcast('marker:added');
        });
      }
      var getLocations = function() {
        return $http.get(url);
      }


      return {
        addLocation: addLocation,
        addToFavorites: addToFavorites,
        getLocations: getLocations,
        deleteFromMyMap: deleteFromMyMap,
        addMarkerGreen: addMarkerGreen
      };

    });
  })();
