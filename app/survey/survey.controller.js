(function () {

'use strict';

	angular
  .module('survey')
  .controller('SurveyController', function($scope, SurveyService) {

		$scope.pickASpot = function() {
      $scope.randomSpot = SurveyService.pickASpot();
    }

		$(".btn").click(function(){
			$("#myModal").modal('show');
		});

		// var items = $scope.items;
		// $scope.items = ['item1', 'item2', 'item3'];
		//
	  // $scope.animationsEnabled = true;
		//
	  // $scope.open = function (size) {
		//
	  //   var modalInstance = $modal.open({
	  //     animation: $scope.animationsEnabled,
	  //     templateUrl: 'myModalContent.html',
	  //     controller: 'SurveyController',
	  //     size: large,
	  //     resolve: {
	  //       items: function () {
	  //         return $scope.items;
	  //       }
	  //     }
	  //   });
		//
	  //   modalInstance.result.then(function (selectedItem) {
	  //     $scope.selected = selectedItem;
	  //   }, function () {
	  //     $log.info('Modal dismissed at: ' + new Date());
	  //   });
	  // };
		//
	  // $scope.toggleAnimation = function () {
	  //   $scope.animationsEnabled = !$scope.animationsEnabled;
	  // };
		//
		// $scope.items = items;
	  // $scope.selected = {
	  //   item: $scope.items[0]
	  // };
		//
	  // $scope.ok = function () {
	  //   $modalInstance.close($scope.selected.item);
	  // };
		//
	  // $scope.cancel = function () {
	  //   $modalInstance.dismiss('cancel');
	  // };

  });
})();
