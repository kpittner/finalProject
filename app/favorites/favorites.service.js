(function() {
  'use strict';
  angular
  .module('favorites')
  .factory('FavoritesService', function ($http) {
    var favoritesUrl = 'http://tiy-fee-rest.herokuapp.com/collections/mymapfavorites';

    var getFavorites = function () {
      return $http.get(favoritesUrl).then(function (id) {
        return id
      })
    };
    function addToFavorites(id) {
      $http.post(favoritesUrl, id).success(function() {
        $rootScope.$broadcast('favorite:added');
      });
    }

    var deleteFavorite = function (id) {
      $http.delete(favoritesUrl + '/' + id).then(function (response) {
        $rootScope.$broadcast('favorite:deleted');
      });
    };



    return {
      getFavorites: getFavorites,
      addToFavorites: addToFavorites,
      deleteFavorite: deleteFavorite
    };
  });
})();
