(function () {

'use strict';

	angular
  .module('survey')
  .controller('SurveyController', function($scope, SurveyService) {

		$scope.pickASpot = function() {
      $scope.randomSpot = SurveyService.pickASpot();

    }

  });
})();
