(function() {
  'use strict';
  angular
  .module('survey')
  .factory('SurveyService', function ($http) {

    var pickASpot = function() {
      var todaysSpot = destinations[Math.floor(Math.random() * destinations.length)];
      return todaysSpot;
      console.log(todaysSpot);
    };



    return {
      pickASpot: pickASpot
    };
  });
})();
