(function() {
  'use strict';
  angular
  .module('destination')
  .factory('DestinationService', function ($http) {
    var url='https://maps.googleapis.com/maps/api/place/nearbysearch/json?radius=500&location=&key=AIzaSyCUNGzvu0xQwJj1yiPr_HYxhMSeBJdiaSQ';
    var auto='https://maps.googleapis.com/maps/api/place/autocomplete/json?input=&key=AIzaSyCUNGzvu0xQwJj1yiPr_HYxhMSeBJdiaSQ';
    var flightURL='https://www.googleapis.com/qpxExpress/v1/trips.data/search?key=AIzaSyCUNGzvu0xQwJj1yiPr_HYxhMSeBJdiaSQ';

    function addLocation(location) {
      $http.post(url, location).then(function () {
        $rootScope.$broadcast('location:added');
      });
    }
    function getFlights() {
      return $http.post(flightURL).then(function (data) {
        $rootScope.$broadcast('flight:received');
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
      deleteLocation: deleteLocation,
      getFlights: getFlights
    };
  });
})();
