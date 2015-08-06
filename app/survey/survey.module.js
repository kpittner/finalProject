(function () {
  'use strict';
  angular
    .module('survey', [
      'ngRoute',
      'ui.bootstrap.modal'
    ])

  .config(function($routeProvider) {
    $routeProvider
      .when('/survey', {
        templateUrl: 'survey/views/survey.html',
        controller: 'SurveyController'
      })
    });

  })();
