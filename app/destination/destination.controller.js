(function() {
  'use strict';
  angular
  .module('destination')
  .controller('DestinationController', function($scope, DestinationService, $routeParams, uiGmapGoogleMapApi) {
    $scope.map = { center:
                    { latitude: 32.7833,
                      longitude: -79.931051 },
                  zoom: 8
                  };

  });
})();
