(function() {
  'use strict';
  angular
  .module('favorites')
  .controller('FavoritesController', function ($scope, FavoritesService, $routeParams) {

    // FavoritesService.getFavorites().then(function (data) {
    //   console.log(data);
    //   $scope.favorites = data;
    // });
    // FavoritesService.getFavorite($routeParams.listingId).then(function (location) {
    //   $scope.location = location;
    // });
    // $scope.addToFavorites = function (location) {
    //   FavoritesService.addFavorite(location);
    // };

  });
})();
