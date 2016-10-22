angular.module('mainCtrl',[])
.controller('mainController', function($http) {
  var vm = this;
  vm.message = 'Pick a Car Make and Model Above';
  vm.selectedCar;
  $http.get('/api/makes')
    .then(function(data) {
      console.log(data)
      vm.makes = data.data;
    });
})

.directive('dropdown', function($http) {
  return {
    restrict: 'E',
    scope: {
      makes: "=",
      car: "="
    },
    templateUrl: 'app/views/pages/dropdown.html',
    link: function(scope, elm, attrs) {
      scope.selectMake = function(id) {
        scope.models = null;
        var makeModels = _.find(scope.makes, function(make){
          return id === make._id;
        });
        scope.models = makeModels.models;
      }

      scope.selectModel = function(model) {
        console.log("selected model" + model);
        scope.car=model;
      }
    }
  };
})
