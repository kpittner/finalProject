(function () {
  'use strict';
  angular
    .module('favorites', [
      'ngRoute',
      'myMap'

    ])

  .config(function($routeProvider) {
    $routeProvider
      .when('/favorites', {
        templateUrl: 'favorites/views/favorites.html',
        controller: 'FavoritesController'
      });

    });

})();
