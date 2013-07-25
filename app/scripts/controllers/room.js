'use strict';

angular.module('chatApp')
  .controller('RoomCtrl', function ($scope, $routeParams, angularFireCollection, localStorageService) {
  	$scope.room = {name: $routeParams.name};

  	var url = 'https://notr.firebaseio.com/';
  	var roomUrl = url + "rooms/" + $scope.room.name;
  	console.log(roomUrl);

  	$scope.messages = angularFireCollection(new Firebase(roomUrl).limit(50));

  	// var auth = new FirebaseSimpleLogin(new Firebase(roomUrl), function(error, user) {
  	// 	if (!error) {
  	// 		$scope.user = user;
  	// 		localStorageService.add('firebaseAuthToken', user['firebaseAuthToken']);
  	// 	} else {
  	// 		console.log(error);
  	// 	}
  	// });

  	// auth.login('password', {
  	// 	email: 'bgammill@gmail.com',
  	// 	password: 'test'
  	// });

	$scope.username = localStorageService.get('username') || localStorageService.add('username', ('Guest' + Math.floor(Math.random()*10001)));

  	$scope.addMessage = function() {
  		$scope.messages.add({user: $scope.user || $scope.username, content: $scope.message});
  		$scope.message = "";
  	};
  });