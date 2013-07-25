'use strict';

angular.module('chatApp', ['firebase', 'LocalStorageModule'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/room/:name', {
        templateUrl: 'views/room.html',
        controller: 'RoomCtrl'
      })
      .when('/logout', {
        templateUrl: 'views/logout.html',
        controller: 'LogoutCtrl'
      })
      .when('/create', {
        templateUrl: 'views/create.html',
        controller: 'CreateCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });