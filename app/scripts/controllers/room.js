'use strict';

angular.module('chatApp')
  .controller('RoomCtrl', function ($scope, $routeParams, angularFireCollection, localStorageService) {
  	$scope.room = {name: $routeParams.name};

  	var url = 'https://notr.firebaseio.com/';
  	var roomUrl = url + "rooms/" + $scope.room.name;

  	$scope.messages = angularFireCollection(new Firebase(roomUrl).limit(50));

    $scope.username = localStorageService.get('username') || localStorageService.add('username', ('Guest' + Math.floor(Math.random()*10001)));

  	$scope.addMessage = function() {
  		$scope.messages.add({user: $scope.user || $scope.username, content: $scope.message});
  		$scope.message = "";
  	};
  });