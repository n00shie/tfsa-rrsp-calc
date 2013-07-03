'use strict';

angular.module('tfsaRRSP')
  .controller('PlansController', ['$scope', 'Plans', function ($scope, plan){

  	$scope.calcAfterTaxAmt = function(amount, taxRate){
  		return amount * (1-taxRate)
  	}

  	$scope.calcFutureVal = function(amount, rate, numPeriods){
  		return amount * Math.pow(1 + rate, numPeriods)
  	}
  }]);
