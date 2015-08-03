(function() {
  'use strict';
  angular
  .module('favorites')
  .controller('FavoritesController', function ($scope, FavoritesService, $routeParams) {

    FavoritesService.getFavorites().then(function (data) {
      $scope.favorites = data;
    });
    // FavoritesService.getFavorite(id).then(function (location) {
    //   $scope.favorite = location.data;
    // });
    $scope.addToFavorites = function (location) {
      FavoritesService.addToFavorites(location);
    };
    $scope.deleteFavorite = function (id) {
      FavoritesService.delete(id);
    };

    var watchCallback = function (data) {
        FavoritesService.getFavorites().then(function (data) {
          $scope.favorites = data;
        });
      };
    $scope.$on('location:deleted', watchCallback);
    $scope.$on('location:added', watchCallback);

  });
})();
