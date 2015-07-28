(function() {
  'use strict';
  angular
    .module('myMap')
    .factory('MyMapService', ['$http', '$rootScope', function($http, $rootScope) {
      var url="https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="

      var getLocation = function() {
      console.log('im in getLocation');
      return $http.post('/api/collections/placesProxy', {url: url + lat + ',' + long + '&radius=500&types=location&key=YwjpJpq505y30pj_dJVKrCq0'}).then(function (data) {
        var listArray = [];
        var listings = JSON.parse(data.data.data);
        listings.results.forEach(function(el) {
          var locationObj = {
            id: el.id,
            name: el.name,
            rating: el.rating,
            address: el.vicinity,
            photo: el.photos,
            ref: el.reference
          }

      function addDestination(destination) {
        $http.post(url, destination).then(function (res) {
          $rootScope.$broadcast('destination:added');
        });
      }
      function getDestinations() {
        return $http.get(url).then(function(destinations) {
          return locations.data;
        });
      }
      function deleteDestination(id) {
        return $http.delete(url + '/' + id + '.json').then(function(destination) {
          $rootScope.$broadcast('destination:deleted');
        });
      }

      return {
        addDestination: addDestination,
        getDestinations: getDestinations,
        deleteDestination: deleteDestination
      };

    }]);
}());
