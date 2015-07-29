(function() {
  'use strict';
  angular
  .module('destination')
  .factory('DestinationService', function ($http) {
    var url='https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=';
    var flightURL='https://www.googleapis.com/qpxExpress/v1/json?city';


    function addLocation(location) {
      $http.post(url, location).then(function () {
        $rootScope.$broadcast('location:added');
      });
    }
    function getFlight() {
      return $http.get(flightURL).then(function(city) {
        return city.data;
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
  });
})();
