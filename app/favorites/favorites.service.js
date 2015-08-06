(function() {
  'use strict';
  angular
  .module('favorites')
  .factory('FavoritesService', function ($http, $rootScope) {
    var favoritesUrl = 'api/collections/favorites';

    var getFavorites = function () {
      return $http.get(favoritesUrl).then(function (id) {
        return id
      })
    };
    var addToFavorites = function(placeObject) {
      $http.post(favoritesUrl, placeObject).success(function() {
        console.log('ADDED', placeObject);
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
