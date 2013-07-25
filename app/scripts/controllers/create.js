'use strict';

angular.module('chatApp')
  .controller('CreateCtrl', function ($scope, $location) {
  	$scope.createRoom = function() {
  		$location.path('/room/' + $scope.newRoomName);
  	}
  });