'use strict';

/**
 * @ngdoc function
 * @name angularMaterialPracticeApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the angularMaterialPracticeApp
 */
angular.module('angularMaterialPracticeApp')
  .controller('MapCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var mapVM = this;

    console.log("Maping")

    var map = L.map('map').setView([35.128298, -82.380166], 15)

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var scoutCraft = new L.marker([35.129420, -82.380560]);
    var firstAid = new L.marker([35.130016, -82.380427]);
    var firstYear = new L.marker([35.130135, -82.380753]);
    var civDev = new L.marker([35.130268, -82.380157]);
    var range = new L.marker([35.131160, -82.381065]);
    var flagPole = new L.marker([35.129494, -82.379192]);
    var diningHall = new L.marker([35.129690, -82.378761]);

    scoutCraft.addTo(map);
    firstAid.addTo(map);
    firstYear.addTo(map);
    civDev.addTo(map);
    range.addTo(map);
    flagPole.addTo(map);
    diningHall.addTo(map);

  });
