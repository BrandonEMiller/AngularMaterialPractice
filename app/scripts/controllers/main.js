'use strict';

/**
 * @ngdoc function
 * @name angularMaterialPracticeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularMaterialPracticeApp
 */
angular.module('angularMaterialPracticeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
