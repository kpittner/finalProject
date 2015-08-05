(function() {
  'use strict';
  angular
  .module('destination')
  .factory('DestinationService', function ($http) {
    var url='https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=cruise&key=AIzaSyCDapvCYK1SRbatOHBLleXBtbqstbPGyQ8';
    var auto='https://maps.googleapis.com/maps/api/place/autocomplete/json?input=&key=AIzaSyCDapvCYK1SRbatOHBLleXBtbqstbPGyQ8';

    // function getFlights() {
    //   return $http.post(flightURL).then(function (data) {
    //     $rootScope.$broadcast('flight:received');
    //   });
    // }


    // var getFlights = function (flights) {
    //
    //   console.log("In getFlights");

      //   var flightArr = [];
      //   console.log('FLIGHTS', flights);
      //   flights.results.forEach(function(data) {
      //     var flightObj = {
      //       id: data.data.trips.tripOption.id,
      //       airline: data.data.trips.data.carrier.name,
      //       price: data.data.trips.tripOption.pricing.saleTotal,
      //       origin: data.data.trips.tripOption.pricing.fare.origin,
      //       destination: data.data.trips.tripOption.slice.duration,
      //       duration: data.data.trips.tripOption.slice.duration,
      //       arrivalTime: data.data.trips.tripOption.slice.segment.leg.arrivalTime,
      //       departureTime: data.data.trips.tripOption.slice.segment.leg.departureTime,
      //       meal: data.data.trips.tripOption.slice.segment.leg.meal
      //     }
      //
      //     flightArr.push(flightObj);
      //     console.log(flightArr);
      //     return flightArr;
      //   });
      // }


    return {
      // getFlights: getFlights
    };
  });
})();
