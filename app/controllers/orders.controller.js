angular.module('App').controller('OrdersCtrl', function($scope, $routeParams, CustomersFactory) {
    'use strict';

  var customerId = $routeParams.customerId;
  $scope.customer = null;

  $scope.customer = CustomersFactory.getCustomer(customerId);

});
