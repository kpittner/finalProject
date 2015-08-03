(function() {
  'use strict';
  angular
  .module('favorites')
  .factory('FavoritesService', function ($http) {
    var favoritesUrl = 'http://tiy-fee-rest.herokuapp.com/collections/mymapfavorites';

    var addFavorite = function (place) {
      $http.post(url, place).success(function (resp) {
        $rootScope.$broadcast('favortie:added')
      }).error(function (err) {
        console.log(err);
      });
    };
    var getFavorites = function () {
      return $http.get(url).then(function (data) {
        return data.data
      })
    };

    var getFavorite = function (id) {
      return $http.get(url + '/' + id);
    };

    var deleteFavorite = function (id) {
      $http.delete(url + '/' + id).then(function (response) {
        $rootScope.$broadcast('favorite:deleted');
      });
    };



    return {
      getFavorites: getFavorites,
      getFavorite: getFavorite,
      addFavorite: addFavorite,
      deleteFavorite: deleteFavorite
    };
  });
})();
