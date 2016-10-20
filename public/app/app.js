angular.module('carApp', [])
  .controller('mainController', function($http) {
    var vm = this;
    vm.message = 'Pick a Car Make and Model Above';

    $http.get('/api/makes')
      .then(function(data) {
        vm.makes = data.data.makes;
      });

    $http.get('/api/models')
      .then(function(data) {
        vm.models = data.data.models;
      });

    $http.get('/api/models/5')
      .then(function(data) {
        vm.carmodel = data.data;
      });
  })

  .directive('dropdown', function() {
    return {
      restrict: 'E',
      scope: {
        models: '=',
        makes: "="
      },
      templateUrl: 'app/views/pages/dropdown.html'
    };
  })
