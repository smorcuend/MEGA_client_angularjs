'use strict';

/**
 * @ngdoc function
 * @name megaAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the megaAngularApp
 */
angular.module('megaAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
