angular.module('App', ['ngRoute']);

angular.module('App').config(function($routeProvider) {

  $routeProvider
    .when('/', {
      controller: 'CustomersCtrl',
      templateUrl: 'app/views/customers.html'
    })
    .when('/orders/:customerId', {
      controller: 'OrdersCtrl',
      templateUrl: 'app/views/orders.html'
    })
    .otherwise({redirectTo: '/'});

});


