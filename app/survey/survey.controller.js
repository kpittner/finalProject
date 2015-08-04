(function () {

'use strict';

	angular
  .module('survey')
  .controller('SurveyController', function($scope, SurveyService) {
    $scope.pickASpot = function(destinations) {
      SurveyService.pickASpot(destinations);
      console.log('data', destinations);
    }


  });
})();
