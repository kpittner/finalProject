(function() {
  'use strict';
  angular
    .module('myMap')
    .factory('MyMapService', function($http, $rootScope) {
      var url = '/api/collections/mydestinations/';
      var favoritesUrl = 'api/collections/favorites/';
      // var detailUrl = 'https://maps.googleapis.com/maps/api/place/details/json?reference=';


      var addLocation = function(location) {
        location.icon= 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
        console.log('icon', location.icon);
        location.title = 0;
        $http.post(url, location).success(function() {
          $rootScope.$broadcast('location:added');
        });
      }
      var update = function(location) {
        console.log('Been there');
        console.log('old title', location.title);
        location.title = 1;
        console.log('markers', $rootScope.map.length);
        console.log('new title', location.title);
        $rootScope.$broadcast('location:updated');
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

      var getLocations = function() {
        return $http.get(url);
      }


      return {
        addLocation: addLocation,
        addToFavorites: addToFavorites,
        getLocations: getLocations,
        deleteFromMyMap: deleteFromMyMap,
        update: update
      };

    });
  })();
