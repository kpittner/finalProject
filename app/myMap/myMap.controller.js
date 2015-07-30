var lat;
var long;

(function() {
  // 'use strict';

  angular
  .module('myMap')
  .controller('MyMapController', function($scope, $auth, uiGmapGoogleMapApi, $sce, $routeParams, Account, $rootScope, $alert) {
    Account.getProfile()
      .success(function(data) {
        console.log(data.displayName);
        $rootScope.user = data;
        $rootScope.username = data.displayName
      })
      .error(function(error) {
        $alert({
          content: error.message,
          animation: 'fadeZoomFadeDown',
          type: 'material',
          duration: 3
        });
      });

    $scope.map = { center:
                    { latitude: 32.7833,
                      longitude: -79.931051 },
                  zoom: 8,
                  };

    $scope.marker = {
          id: 0,
          coords: {
              latitude: 52.47491894326404,
              longitude: -1.8684210293371217
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

      var changeLocation = function(lat, long) {

        MyMapService.getLocations(lat, long).then(function(data) {
          $scope.places = data;
        });
        $scope.map = {
            "center": {
                "latitude": lat,
                "longitude": long
            },
            "zoom": 12
        };
        $scope.marker = {
            id: 0,
            coords: {
                latitude: lat,
                longitude: long
            }
        };
      }


    var events = {
          places_changed: function (searchBox) {
              var place = searchBox.getPlaces();
              lat = place[0].geometry.location.lat();
              long = place[0].geometry.location.lng();
              if (!place || place == 'undefined' || place.length == 0) {
                  return;
                  console.log(place);
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

    $scope.searchbox = { template: 'searchbox.tpl.html', events: events };

});

})();
