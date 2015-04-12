'use strict';

/**
 * @ngdoc overview
 * @name angularMaterialPracticeApp
 * @description
 * # angularMaterialPracticeApp
 *
 * Main module of the application.
 */
angular
  .module('angularMaterialPracticeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/schedule', {
        templateUrl: 'views/schedule.html',
        controller: 'ScheduleCtrl',
        controllerAs: 'vm'
      })
      .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl',
        controllerAs: 'mapVM'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
