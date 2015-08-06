(function() {
  'use strict';
  angular
  .module('favorites')
  .factory('FavoritesService', function ($http, $rootScope) {
    var favoritesUrl = 'api/collections/favorites';

    var getFavorites = function (data) {
      return $http.get(favoritesUrl, data).then(function(data) {
        console.log('ID',data);
        return data;
      })
    };

    var deleteFavorite = function (_id) {
      $http.delete(favoritesUrl, _id).then(function (response) {
        $rootScope.$broadcast('favorite:deleted');
      });
    };



    return {
      getFavorites: getFavorites,
      deleteFavorite: deleteFavorite
    };
  });
})();
