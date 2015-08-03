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

    var getFlights = function () {
      return $http.post('https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyBfVaCGgp063V4ECKT8lNmc7V5c1mWllqM').then(function (data) {
        var flightArr = [];
        var flights = JSON.parse(data.trips.tripOption);
        console.log('FLIGHTS', flights);
        flights.results.forEach(function(el) {
          var flightObj = {
            id: el.data.trips.tripOption.id,
            airline: el.data.trips.data.carrier.name,
            price: el.data.trips.tripOption.pricing.saleTotal,
            origin: el.data.trips.tripOption.pricing.fare.origin,
            destination: el.data.trips.tripOption.slice.duration,
            duration: el.data.trips.tripOption.slice.duration,
            arrivalTime: el.data.trips.tripOption.slice.segment.leg.arrivalTime,
            departureTime: el.data.trips.tripOption.slice.segment.leg.departureTime,
            meal: el.data.trips.tripOption.slice.segment.leg.meal
          }

          flightArr.push(flightObj);
          console.log(flightArr);
          return flightArr;
        });
      })
    }


    return {
      addLocation: addLocation,
      getLocations: getLocations,
      deleteLocation: deleteLocation,
      getFlights: getFlights
    };
  });
})();
