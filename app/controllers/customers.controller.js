angular.module('App', []);

angular.module('App').controller('CustomersCtrl', function($scope) {
    'use strict';

  $scope.sortBy = "firstName";
  $scope.reverse = false;

  $scope.customers = [
    {firstName: 'Ilja', lastName: 'Goushcha', age: '32', orderTotal: '10.56'},
    {firstName: 'Oleg', lastName: 'Goushcha', age: '29', orderTotal: '12.01'},
    {firstName: 'Maryna', lastName: 'Shknevskaya', age: '26', orderTotal: '55.32'},
    {firstName: 'John', lastName: 'Smith', age: '44', orderTotal: '35.16'},
    {firstName: 'Mike', lastName: 'Leon', age: '22', orderTotal: '22.36'}
  ];

  $scope.doSort = function(propName) {
    $scope.sortBy = propName;
    $scope.reverse = !$scope.reverse;
  };

});
