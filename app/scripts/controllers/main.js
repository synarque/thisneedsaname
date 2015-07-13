'use strict';

/**
 * @ngdoc function
 * @name cardsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cardsApp
 */
angular.module('cardsApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
