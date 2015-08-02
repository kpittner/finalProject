(function() {
  'use strict';
  angular
  .module('destination')
  .factory('DestinationService', function ($http) {
    var url='https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=cruise&key=AIzaSyAcHc01VVTLTOjs6FnaSvGWLKfP5EUV3SQ';
    var auto='https://maps.googleapis.com/maps/api/place/autocomplete/json?input=&key=AIzaSyAcHc01VVTLTOjs6FnaSvGWLKfP5EUV3SQ';

    function addLocation(location) {
      $http.post(url, location).then(function () {
        $rootScope.$broadcast('location:added');
      });
    }
    // function getFlights() {
    //   return $http.post(flightURL).then(function (data) {
    //     $rootScope.$broadcast('flight:received');
    //   });
    // }
    function getLocations() {
      return $http.jsonp('/api/grab_destination').then(function(locations) {
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
      // getFlights: getFlights
    };
  });
})();
