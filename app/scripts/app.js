'use strict';

angular.module('tfsaRRSP', []).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/plans.html',
        controller: 'PlansController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
