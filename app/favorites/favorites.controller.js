(function() {
  'use strict';
  angular
  .module('favorites')
  .controller('FavoritesController', function ($scope, FavoritesService, $routeParams) {

    FavoritesService.getFavorites().then(function(data) {
      $scope.favorites = data;
    });
    $scope.getFavorites = function(data) {
      FavoritesService.getFavorites(data);
    }
    $scope.deleteFavorite = function(id) {
      FavoritesService.delete(id);
    };
    // $scope.addFavorites = function(id) {
    //   FavoritesService.addFavorites(id);
    // };
    var watchCallback = function (data) {
        FavoritesService.getFavorites().then(function (data) {
          $scope.favorites = data;
        });
      };
    $scope.$on('location:deleted', watchCallback);
    $scope.$on('location:added', watchCallback);
    $scope.$on('favorite:added', watchCallback);

  });
})();
