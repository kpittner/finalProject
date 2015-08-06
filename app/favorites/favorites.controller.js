(function() {
  'use strict';
  angular
  .module('favorites')
  .controller('FavoritesController', function ($scope, FavoritesService, $routeParams) {

    $scope.namePlace = [];

    FavoritesService.getFavorites().then(function(data) {
      data.data.forEach(function(el) {
        $scope.namePlace.push(el);
      })
    })

    FavoritesService.getFavorites().then(function(data) {
      $scope.favorites = data;
    });
    FavoritesService.getFavorite().then(function(data) {
      $scope.favorite = data;
    });
    $scope.getFavorite = function(data) {
      FavoritesService.getFavorite(data);
    }
    $scope.getFavorites = function(data) {
      FavoritesService.getFavorites(data);
    }
    $scope.deleteFromFavorites = function(_id) {
      FavoritesService.deleteFromFavorites(_id);
    };

    

    var watchCallback = function (data) {
        FavoritesService.getFavorites().then(function (data) {
          $scope.favorites = data;
        });
      };
    $scope.$on('location:deleted', watchCallback);
    $scope.$on('location:added', watchCallback);
    $scope.$on('favorite:added', watchCallback);
    $scope.$on('favorite:deleted', watchCallback);

  });
})();
