'use strict';

/**
 * @ngdoc function
 * @name angularMaterialPracticeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularMaterialPracticeApp
 */
angular.module('angularMaterialPracticeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
