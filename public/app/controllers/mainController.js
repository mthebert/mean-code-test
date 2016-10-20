angular.module('mainCtrl',[])
.controller('mainController', function($http) {
  var vm = this;
  vm.message = 'Pick a Car Make and Model Above';

  $http.get('/api/makes')
    .then(function(data) {
      vm.makes = data.data.makes;
    });

  $http.get('/api/models/5')
    .then(function(data) {
      // vm.carmodel = data.data;
    });
})

.directive('dropdown', function($http) {
  return {
    restrict: 'E',
    scope: {
      makes: "="
    },
    templateUrl: 'app/views/pages/dropdown.html',
    link: function(scope) {
      scope.selectedMake = null;
      scope.selectedModel = null;
      scope.selectMake = function(id) {
        scope.selectedMake = id;
        console.log("selected " + id);
      }
      scope.selectModel = function(id) {
        scope.selectedModel = id;
        console.log("selected " + id)
      }
      $http.get('/api/models')
        .then(function(data) {
          scope.models = data.data.models;
        });
    }
  };
})
