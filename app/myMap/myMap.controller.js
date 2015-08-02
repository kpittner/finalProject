var lat;
var long;

(function() {
  // 'use strict';

  angular
  .module('myMap')
  .controller('MyMapController', function($scope, $auth, uiGmapGoogleMapApi, $sce, $routeParams, Account, $rootScope, $alert) {
    // Account.getProfile()
    //   .success(function(data) {
    //     console.log(data.displayName);
    //     $rootScope.user = data;
    //     $rootScope.username = data.displayName
    //   })
    //   .error(function(error) {
    //     $alert({
    //       content: error.message,
    //       animation: 'fadeZoomFadeDown',
    //       type: 'material',
    //       duration: 3
    //     });
    //   });



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




    // var geocoder = new google.maps.Geocoder();
    //     geocoder.geocode({address: newPlace.address}, function (result) {
    //       newPlace.coords = {
    //         latitude: result[0].geometry.location.lat(),
    //         longitude: result[0].geometry.location.lng()
    //       };
    //       console.log(newPlace);
    //       $http.post(url, newPlace).then(function(res) {
    //         $rootScope.$broadcast('place:added');
    //       });
    //     });

    $scope.searchbox = { template: 'searchbox.tpl.html', events: events };

});

})();
