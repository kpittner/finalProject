var lat;
var long;

(function() {
  // 'use strict';

  angular
  .module('myMap')
  .controller('MyMapController', function($scope, $auth, $alert, uiGmapGoogleMapApi, $sce, $routeParams, Account, $rootScope, MyMapService) {

    $scope.namePlace = [];

    MyMapService.getLocations().then(function(data) {
      console.log('DATA', data)
      data.data.forEach(function(el) {
        $scope.namePlace.push(el);
      })
    })

    $scope.addMarkerGreen = function(wannago) {
      MyMapService.addMarkerGreen(wannago);
    }
    $scope.deleteLocation = function(id) {
      MyMapService.deleteLocation(id);
    }
    $scope.addLocation = function(location) {
      MyMapService.addLocation(location);
    }




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
          id: 0,
            coords: {
              latitude: location.coord.latitude,
              longitude: location.coord.longitude
          },
      };

      map.markers.push(marker)
    };

    $scope.addMarker = function (location) {
      var marker = new google.maps.Marker({
        map: scope.map,
        position: new google.maps.LatLng(location)
      });

      $scope.markers.push(marker);
    };

  var events = {
        places_changed: function (searchBox) {
            var place = searchBox.getPlaces();
            lat = place[0].geometry.location.lat();
            long = place[0].geometry.location.lng();
            if (!place || place == 'undefined' || place.length == 0) {
                return;
            }



            console.log('place', lat, long, place);
            var newPlace = {
              name: place[0].formatted_address,
              coords: {
                latitude: place[0].geometry.location.lat(),
                longitude: place[0].geometry.location.lng()
              },
              id: place[0].place_id
            };

            $scope.namePlace.push(newPlace);
            console.log($scope.namePlace);


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
            $scope.createMarker = function(location) {
              console.log("location: ", location);
              var marker = {
                  id: 0,
                    coords: {
                      latitude: location.coord.latitude,
                      longitude: location.coord.longitude
                  },
              };

              map.markers.push(marker)
            };

        }
    };

    $scope.searchbox = { template: 'searchbox.tpl.html', events: events };

    var watchCallback = function (locations) {
        MyMapService.getLocations().success(function (location) {
          $scope.locations = location;
        });
      }

      $scope.$on("location:added", watchCallback);
      $scope.$on("favorite:added", watchCallback);
      $scope.$on("location:deleted", watchCallback);
      $scope.$on("marker:added", watchCallback);

});

})();
