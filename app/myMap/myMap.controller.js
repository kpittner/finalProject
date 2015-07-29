var lat;
var long;

(function() {
  // 'use strict';

  angular
  .module('myMap')
  .controller('MyMapController', function($scope, $auth, uiGmapGoogleMapApi, $sce) {

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
                  "zoom": 18
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



    $scope.searchbox = { template: 'searchbox.tpl.html', events: events, parentdiv:'searchBoxParent' };

});

})();
