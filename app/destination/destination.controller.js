(function() {
  'use strict';
  angular
  .module('destination')
  .controller('DestinationController', function($scope, DestinationService, $routeParams, uiGmapGoogleMapApi, $http) {

      $scope.map = {
        center: {
          latitude: 32.792447,
          longitude: -79.936134
        },
        zoom: 8,
        markers: []
      };

      $scope.marker = {
            id: 0,
            coords: {
                latitude: 32.792447,
                longitude: -79.936134
            },
            options: { draggable: true },
            events: {
                dragend: function (marker, eventName, args) {

                    $scope.marker.options = {
                        draggable: true,
                        labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
                        labelAnchor: "100 0",
                        labelClass: "marker-labels"
                    };
                }
            }
        };


      $scope.createMarker = function(location) {
        console.log("location: ", location);
        var marker = {
            idKey: location._id,
              coords: {
                latitude: location.coord.latitude,
                longitude: location.coord.longitude
            },
        };
        map.markers.push(marker)
      };

    var events = {
          places_changed: function (searchBox) {
            console.log('searchbox please', searchBox)
              var place = searchBox.getPlaces();
              lat = place[0].geometry.location.lat();
              long = place[0].geometry.location.lng();
              if (!place || place == 'undefined' || place.length == 0) {
                  return;
              }
              console.log('place', lat, long, name);


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

      var flightUrl='https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyBfVaCGgp063V4ECKT8lNmc7V5c1mWllqM';

      var flightOptions = {
        date: '',
        numAdults: 1,
        startAirport: '',
        endAirport: ''
      };

      console.log("fightOpotdkfhk", flightOptions);

      var sendGoogle = "because";

      console.log("Send oooooooogle", sendGoogle);

      var getCheapFlights = function(flightOptions) {

        console.log("START", flightOptions.startAirport);
        console.log("END", flightOptions.endAirport);

        sendGoogle = {
            "request": {
              "slice": [
                {
                  "origin": flightOptions.startAirport,
                  "destination": flightOptions.endAirport,
                  "date": flightOptions.date
                }
              ],
              "passengers": {
                "adultCount": flightOptions.numAdults
              },
              "solutions": 15,
              "maxPrice": "USD40000.00",
              "saleCountry": "US",
              "refundable": false
            }
          }
          if (sendGoogle == undefined) {
            console.log('sendGoogleNull', status);
            return;
          } else {
            console.log('sendGoogle', sendGoogle.toJSON);
          $http.post(flightUrl, sendGoogle).then(function(flights) {
            console.log(flights);
          }, function(err) {
            console.log('FLIGHT ERR', err);
          });
          };

        };





    $scope.searchbox = { template: 'searchbox.tpl.html', events: events };

  });
})();
