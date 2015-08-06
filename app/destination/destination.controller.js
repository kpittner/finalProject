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

      var flightUrl='https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyCDapvCYK1SRbatOHBLleXBtbqstbPGyQ8';


      var sendGoogle;

      $scope.getCheapFlights = function(flightOptions) {
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
            console.log('sendGoogle', sendGoogle.toString());
            $http.post(flightUrl, sendGoogle).then(function(flights) {
              console.log('FLIGHTS:', flights);
              //flights should be fully functional
              console.log('STATUS', flights.data.trips.tripOption);

              // flights array
              var flightArr = [];

              //get the carrier
              var carrier = flights.data.trips.data.carrier[0];
              console.log('carrier', carrier);

              //get the list of trip options
              var len = flights.data.trips.tripOption.length;
              for (var i = 0; i < len; i++) {
                var flightObj = {
                  id: flights.data.trips.tripOption[i].id,
                  price: flights.data.trips.tripOption[i].saleTotal,
                  origin: flights.data.trips.tripOption[i].slice[0].segment[0].leg[0].origin,
                  destination: flights.data.trips.tripOption[i].slice[0].segment[0].leg[0].destination,
                  duration: flights.data.trips.tripOption[i].slice[0].segment[0].leg[0].duration,
                  arrivalTime: flights.data.trips.tripOption[i].slice[0].segment[0].leg[0].arrivalTime,
                  departureTime: flights.data.trips.tripOption[i].slice[0].segment[0].leg[0].departureTime,
                }
                flightArr.push(flightObj);
              }
                console.log('flight array length', flightArr.length);
                console.log('FLIGHTARR', flightArr);
                // return flightArr;
                $scope.flightArr = flightArr;

          }, function(err) {
              console.log('FLIGHT ERR', err);
          }); //end of function

      }; //end of if statement

  };

  // calendar stuff
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();

  $scope.open = function($event) {
    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 2);
  $scope.events =
    [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

  $scope.getDayClass = function(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i=0;i<$scope.events.length;i++){
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  };









    $scope.searchbox = { template: 'searchbox.tpl.html', events: events };

  });
})();
