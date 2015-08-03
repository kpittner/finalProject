(function() {
  'use strict';
  angular
  .module('favorites')
  .controller('FavoritesController', function ($scope, FavoritesService, $routeParams) {

    FavoritesService.getFavorites().then(function (data) {
      $scope.favorites = data;
    });
    FavoritesService.getFavorite($routeParams.id).then(function (place) {
      $scope.favorite = place.data;
    });
    $scope.deleteFavorite = function(id) {
      FavoritesService.delete(id);
    };
    $scope.addToFavorites = function (place) {
      FavoritesService.addToFavorites(place);
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
