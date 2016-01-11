'use strict';

/**
 * @ngdoc function
 * @name megaAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the megaAngularApp
 */
angular.module('megaAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
