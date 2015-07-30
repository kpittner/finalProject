(function() {
  'use strict';
  angular
  .module('destination')
  .controller('DestinationController', function($scope, DestinationService, $routeParams, uiGmapGoogleMapApi, $http) {
    $scope.map = { center:
                    { latitude: 32.7833,
                      longitude: -79.931051 },
                  zoom: 8
                  };

    var events = {
          places_changed: function (searchBox) {
              var place = searchBox.getPlaces();
              lat = place[0].geometry.location.lat();
              long = place[0].geometry.location.lng();
              if (!place || place == 'undefined' || place.length == 0) {
                  return;
              }

              if($routeParams.placeId) {
                PlaceService.getSingleLocation($routeParams.placeId).then(function(listing) {
                console.log(listing);
                $scope.place = listing;
                });
              }

              $scope.map = {
                  "center": {
                      "latitude": place[0].geometry.location.lat(),
                      "longitude": place[0].geometry.location.lng()
                  },
                  "zoom": 12
              };
              $scope.marker = {
                  id: 0,
                  coords: {
                      latitude: place[0].geometry.location.lat(),
                      longitude: place[0].geometry.location.lng()
                  }
              };

          }
      };

      var url='https://maps.googleapis.com/maps/api/place/nearbysearch/json?radius=500&location=lat,long&key=AIzaSyA94aRjFInj-3K0q3AftPbrKYX8EilLQ5w';

      var flightOptions = {
        goDate: '',
        returnDate: '',
        numAdults: '',
        startAirport: '',
        endAirport: ''
      };
      var sendGoogle;
      var getCheapFlights = function(flightOptions) {
        sendGoogle = {
          request: {
            passengers: flightOptions.numAdults
          },
          slice: [
            {
            origin: flightOptions.startAirport,
            destination: flightOptions.endAirport,
            date: flightOptions.goDate
            },
            {
            origin: flightOptions.endAirport,
            destination: flightOptions.startAirport,
            date: flightOptions.returnDate
            }
          ]
        }
      };
      $http.jsonp(url, sendGoogle).success(function(flights) {
        console.log(flights);
      });



    $scope.searchbox = { template: 'searchbox.tpl.html', events: events };

  });
})();
