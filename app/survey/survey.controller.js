(function () {

'use strict';

	angular
  .module('survey')
  .controller('SurveyController', function($scope, SurveyService) {

		$scope.pickASpot = function() {
      $scope.randomSpot = SurveyService.pickASpot();
    }

		// $scope.open = function() {
		// 	$scope.showModal = true;
		// };
		//
		// $scope.ok = function() {
		// 	$scope.showModal = false;
		// };
		//
		// $scope.cancel = function() {
		// 	$scope.showModal = false;
		// };


  });
})();
