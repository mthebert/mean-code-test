angular.module('carApp', [])
  .controller('mainController', function($http) {
    var vm = this;
    vm.message = 'Controller Message!';

    $http.get('/api/makes')
      .then(function(data) {
        vm.makes = data.data.makes;
      });
})
