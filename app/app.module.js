angular.module('MyApp', [
  'ngMessages',
  'ngRoute',
  'ngSanitize',
  'mgcrea.ngStrap',
  'auth',
  'profile',
  'myMap',
  'favorites',
  'destination',
  'uiGmapgoogle-maps'
])

.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home/views/home.html'
    })
    .when('/survey', {
      templateUrl: 'survey/views/survey.html'
    })
    .when('/favorites', {
      templateUrl: 'favorites/views/favorites.html'
    })
    .when('/myMap', {
      templateUrl: 'myMap/views/myMap.html'
    })
    .when('/destination', {
      templateUrl:'destination/views/destination.html'
    })
    .when('/404', {
      template: '<h1>Sorry, page not found</h1>'
    })
    .otherwise({
      redirectTo: '/404'
    });
});
