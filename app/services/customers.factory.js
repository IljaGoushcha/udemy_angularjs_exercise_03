angular.module('App').factory('CustomersFactory', function() {

  var customers = [
    {id: 1, firstName: 'Ilja', lastName: 'Goushcha', age: '32', orderTotal: '10.56', orders: [{id: 1, product: 'shoes', total: '30.99'}]},
    {id: 2, firstName: 'Oleg', lastName: 'Goushcha', age: '29', orderTotal: '12.01', orders: [{id: 2, product: 'baseball', total: '9.99'}, {id: '3', product: 'bat', total: '22.95'}]},
    {id: 3, firstName: 'Maryna', lastName: 'Shknevskaya', age: '26', orderTotal: '55.32', orders: [{id: 4, product: 'headphones', total: '45.59'}, {id: 5, product: 'cd - nirvana', total: '15.42'}]},
    {id: 4, firstName: 'John', lastName: 'Smith', age: '44', orderTotal: '35.16', orders: [{id: 6, product: 'kindle', total: '215.99'}, {id: 7, product: 't-shirt', total: '18.33'}]},
    {id: 5, firstName: 'Mike', lastName: 'Leon', age: '22', orderTotal: '22.36'}
  ];

  var factory = {};

  factory.getCustomers = function() {
    return customers;
  };

  factory.getCustomer = function(customerId) {
    for (var i = 0, len = customers.length; i < len; i++) {
      if (customers[i].id === parseInt(customerId)) {
        return customers[i];
      };
    };
    return {};
  };

  return factory;
});
