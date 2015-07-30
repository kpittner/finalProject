(function () {
  'use strict';
  angular
    .module('survey', [
      'ngRoute'
    ])

  .config(function($routeProvider) {
    $routeProvider
      .when('/survey', {
        templateUrl: 'survey/views/survey.html',
        controller: 'SurveyController'
      })
    });

  })();
