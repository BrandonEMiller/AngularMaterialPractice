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
          }
        ],
          'CDD': [
            {
              name: 'Citizenship in the Nation',
              length: 1,
              eagle: true
            },
            {
              name: 'Communications',
              length: 1,
              eagle: true
            }
        ],
        'Ecology': [
          {
            name: 'Bird Study',
            length: 1,
            eagle: false
          },
          {
            name: 'Environmental Science',
            length: 2,
            eagle: true
          },
          {
            name: 'Soil & Water Conservation',
            length: 1,
            eagle: false
          }
      ],
      'FieldSports': [
        {
          name: 'Archery',
          length: 2,
          eagle: false
        },
        {
          name: 'Rifle Shooting',
          length: 1,
          eagle: false
        },
        {
          name: 'Shotgun Shooting',
          length: 1,
          eagle: false
        }
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
        ],
        'CDD': [
          {
            name: 'Citizenship in the World',
            length: 1,
            eagle: true
          },
          {
            name: 'Communications',
            length: 1,
            eagle: true
          },
          {
            name: 'Citizenship in the Nation',
            length: 1,
            eagle: true
          }
        ],
        'Ecology': [
          {
            name: 'Reptile & Amphibian Study',
            length: 1,
            eagle: false
          },
          {
            name: 'Weather',
            length: 1,
            eagle: false
          },
          {
            name: 'Plant Science',
            length: 1,
            eagle: false
          }
      ],
      'FieldSports': [
        {
          name: 'Shotgun Shooting',
          length: 1,
          eagle: false
        }
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
        ],
        'CDD': [
          {
            name: 'Citizenship in the World',
            length: 1,
            eagle: true
          },
          {
            name: 'Citizenship in the Nation',
            length: 1,
            eagle: true
          }
        ],
        'Ecology': [
          {
            name: 'Nuclear Science',
            length: 1,
            eagle: false
          },
          {
            name: 'Space Exploration',
            length: 1,
            eagle: false
          }
      ],
      'FieldSports': [
        {
          name: 'Archery',
          length: 2,
          eagle: false
        },
        {
          name: 'Rifle Shooting',
          length: 1,
          eagle: false
        },
        {
          name: 'Advanced Shotgun Shooting',
          length: 1,
          eagle: false
        }
    ]
      }
    ];

  });
