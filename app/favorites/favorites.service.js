(function() {
  'use strict';
  angular
  .module('favorites')
  .factory('FavoritesService', function ($http, $rootScope) {
    var favoritesUrl = 'api/collections/favorites';

    var getFavorites = function (data) {
      return $http.get(favoritesUrl, data).then(function(data) {
        return data;
      })
    };

    var getFavorite = function (data) {
      return $http.get(favoritesUrl, data).then(function(data) {
        return data;
      })
    }

    var deleteFromFavorites = function (_id) {
      var deleteUrl = favoritesUrl + '/' + (_id);
      console.log('url', deleteUrl);
      $http.delete(deleteUrl).then(function() {
        $rootScope.$broadcast('favorite:deleted');
      });
    };



    return {
      getFavorites: getFavorites,
      getFavorite: getFavorite,
      deleteFromFavorites: deleteFromFavorites
    };
  });
})();
