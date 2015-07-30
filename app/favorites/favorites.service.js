(function() {
  'use strict';
  angular
  .module('favorites')
  .factory('FavoritesService', function ($http) {
    var url = 'http://tiy-fee-rest.herokuapp.com/collections/favorites';
    var addToFavorites = function (location) {
      $http.post(url, location).success(function (resp) {
        console.log('location:', location);
      }).error(function (err) {
        console.log(err);
      });
    };
    var getFavorites = function () {
      return $http.get(url).then(function (data) {
        return data.data;
      });
    };
    var getFavorite = function (id) {
      return $http.get(url + '/' + id);
    };

    return {
      addToFavorites: addToFavorites,
      getFavorites: getFavorites,
      getFavorite: getFavorite
    };
  });
})();
