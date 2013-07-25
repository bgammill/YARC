'use strict';

angular.module('chatApp')
  .controller('MainCtrl', function ($scope, angularFireCollection) {
  	$scope.rooms = angularFireCollection(new Firebase('https://notr.firebaseio.com/rooms'));
  });