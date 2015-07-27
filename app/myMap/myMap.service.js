(function() {
  'use strict';
  angular
    .module('myMap')
    .factory('MyMapService', ['$http', '$rootScope', function($http, $rootScope) {
      var url = 'http://tiy-fee-rest.herokuapp.com/collections/myMapLocations';

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
