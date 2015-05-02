'use strict';

angular.module('animalfarm')
.controller('DogsEditCtrl', function(Dog, $scope, $state){

  Dog.findById($state.params.dogId)
    .then(function(response){
      $scope.dog = response.data;
  });

  $scope.update = function(dogId, dog){
    Dog.update(dogId, dog);
  };

});
