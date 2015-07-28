(function() {
  'use strict';
  angular
    .module('myMap')
    .factory('MyMapService', ['$http', '$rootScope', function($http, $rootScope) {
      var url="https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="
      // var detailUrl = 'https://maps.googleapis.com/maps/api/place/details/json?reference='
      // var photoUrl = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=';

      function addLocation(location) {
        $http.post(url, location).then(function (res) {
          $rootScope.$broadcast('location:added');
        });
      }
      function getLocations() {
        return $http.get(url).then(function(locations) {
          return locations.data;
        });
      }
      function deleteLocation(id) {
        return $http.delete(url + '/' + id + '.json').then(function(location) {
          $rootScope.$broadcast('location:deleted');
        });
      }

      return {
        addLocation: addLocation,
        getLocations: getLocations,
        deleteLocation: deleteLocation
      };

    }]);
}());
