angular.module('App').controller('CustomersCtrl', function($scope, CustomersFactory) {
    'use strict';

  $scope.sortBy = "firstName";
  $scope.reverse = false;
  $scope.customers = CustomersFactory.getCustomers();

  $scope.doSort = function(propName) {
    $scope.sortBy = propName;
    $scope.reverse = !$scope.reverse;
  };

});


