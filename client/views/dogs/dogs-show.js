'use strict';

angular.module('animalfarm')
.controller('DogsShowCtrl', function($state, $scope, Dog){
  Dog.findById($state.params.dogId)
    .then(function(response){
      $scope.dog = response.data;
    });
});
