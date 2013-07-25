'use strict';

angular.module('chatApp')
  .controller('LoginCtrl', function ($scope, $location) {
  	var chatRef = new Firebase('https://notr.firebaseio.com/');
  	var auth = new FirebaseSimpleLogin(chatRef, function(error, user) {
  		if (error) {
  			console.log(error);
  		} else if (user) {
  			console.log("id: " + user.id + ", provider:" + user.provider);
  		} else {
  			console.log('user is logged out');
  		}
  	});

  	$scope.login = function() {
  		auth.login('facebook');
  	}

  	$scope.redirect = function() {
  		$location.path('/');
  	}
  });