(function () {

'use strict';

    	angular
      .module('survey')
      .controller('SurveyController', ['$scope','$location','activeData',function($scope,$location,activeData) {
        $scope.title = "Personalized Destination";
        $scope.questions = [];
        $scope.questionCount = 0;

        $scope.answers = [];
        $scope.selectedAnswer = '';
        $scope.surveyID = '';

        $scope.$watch('selectedAnswer', function(value) {
          if(value !== '' && value !== undefined) {
            console.log(value);
            var currentQuestionID = $scope.questions[$scope.questionCount].questionID;
            var answerID = JSON.parse(value).answerID;
            console.log(answerID);
            console.log($scope.questions[$scope.questionCount].questionID);
            $scope.saveAnswer(currentQuestionID, answerID);
            $('#next').removeClass('disabled');
          }
        });

        $scope.saveAnswer = function(questionID, ansID) {
          var surveyID = $scope.surveyID;
          localStorage.setItem(surveyID + ':' + questionID, ansID);
        };

        

      }]);
})();
