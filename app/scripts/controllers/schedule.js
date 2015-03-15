'use strict';

/**
 * @ngdoc function
 * @name angularMaterialPracticeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularMaterialPracticeApp
 */
angular.module('angularMaterialPracticeApp')
  .controller('ScheduleCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var vm = this;

    vm.test = "Test"

    vm.schedule = [
      {
        'name': 'Period 1',
        'time': '9:00 - 9:55',
        'Aquatics': [
          {
            name: 'Rowing',
            length: 2
          },
          {
            name: 'Canoeing',
            length: 2
          },
          {
            name: 'BSA Lifeguard',
            length: 6
          },
        ]
      },
       {
         'name': 'Period 2',
         'time': '10:00 - 10:55',
        'Aquatics': [
          {
            name: 'Lifesaving',
            length: 2
          },
          {
            name: 'Swimming',
            length: 2
          },
          {
            name: 'Learn to Swim',
            length: 1
          },
        ]
      },
      {
        'name': 'Period 3',
        'time': '11:00 - 11:55',
        'Aquatics': [
          {
            name: 'Learn to Swim',
            length: 1
          },
        ]
      }
    ];

  });
