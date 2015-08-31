var lat;
var long;

(function() {
  // 'use strict';

  angular
  .module('myMap')
  .controller('MyMapController', function($scope, $auth, $alert, uiGmapGoogleMapApi, $sce, $routeParams, Account, $rootScope, MyMapService) {

    // $scope.alert = [
    //   { type: 'success', msg: 'Successfully added to your favorites!' }
    // ];


    $scope.namePlace = [];

    MyMapService.getLocations().then(function(data) {
      data.data.forEach(function(el) {
        $scope.namePlace.push(el);
        console.log('adding location obj', el.icon);
      })
    })

    $scope.addToFavorites = function(place) {
      MyMapService.addToFavorites(place);
    }
    $scope.update = function(location) {
      console.log('scope update');
      MyMapService.update(location);
    }
    $scope.deleteFromMyMap = function(_id) {
      MyMapService.deleteFromMyMap(_id);
    }
    $scope.getLocations = function(locations) {
      MyMapService.getLocations(locations);
    }
    $scope.addLocation = function(location) {
      MyMapService.addLocation(location);
    }




    $scope.map = {
      center: {
        latitude: 50,
        longitude: -20
      },
      zoom: 3,
      markers: []
    };

    $scope.marker = {
          id: 0,
          coords: {
              latitude: 32.792447,
              longitude: -79.936134
          },
          title: 0,
          options: { draggable: false },
          icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
          events: {
              dragend: function (marker, eventName, args) {

                  $scope.marker.options = {
                      labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
                      labelAnchor: "100 0",
                      labelClass: "marker-labels"
                  };
              }
          }
      };


    // $scope.createMarker = function(location) {
    //   console.log('createMarker');
    //   var marker = {
    //       id: 0,
    //         coords: {
    //           latitude: location.coord.latitude,
    //           longitude: location.coord.longitude
    //       },
    //       icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
    //   };
    //
    //   map.markers.push(marker)
    // };
    //
    // $scope.addMarker = function (location) {
    //   console.log('addMarker');
    //   var marker = new google.maps.Marker({
    //     map: scope.map,
    //     position: new google.maps.LatLng(location),
    //     icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
    //   });
    //
    //   $scope.markers.push(marker);
    // };




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
              title: 0,
              coords: {
                latitude: place[0].geometry.location.lat(),
                longitude: place[0].geometry.location.lng()
              },
              id: place[0].place_id,
              icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
            };

            $scope.namePlace.push(newPlace);
            console.log('scope nameplace', $scope.namePlace);
            console.log('title', newPlace.title);


            // $scope.map = {
            //     "center": {
            //         "latitude": place[0].geometry.location.lat(),
            //         "longitude": place[0].geometry.location.lng()
            //     },
            //     "zoom": 12
            // };
            // $scope.marker = {
            //     id: 0,
            //     coords: {
            //         latitude: place[0].geometry.location.lat(),
            //         longitude: place[0].geometry.location.lng()
            //     },
            //     icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
            // };
            // $scope.createMarker = function(location) {
            //   console.log("location: ", location);
            //   var marker = {
            //       id: 0,
            //         coords: {
            //           latitude: location.coord.latitude,
            //           longitude: location.coord.longitude
            //       },
            //       icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
            //   };
            //   map.markers.push(marker);
            // };



        }
    };

    $scope.searchbox = { template: 'searchbox.tpl.html', events: events };

    var watchCallback = function (namePlace) {
        MyMapService.getLocations().success(function (placeObject) {
          $scope.namePlace = placeObject;
        });
      }

      $scope.$on("location:added", watchCallback);
      $scope.$on("favorite:added", watchCallback);
      $scope.$on("location:deleted", watchCallback);
      $scope.$on("marker:added", watchCallback);
      $scope.$on("location:updated", watchCallback);

});

})();
