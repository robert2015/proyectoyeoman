'use strict';

/**
 * @ngdoc function
 * @name proyectoyoeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the proyectoyoeomanApp
 */
angular.module('proyectoyoeomanApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
  var tareasEnAlmacen = localStorageService.get('tarea'); 
    $scope.proyectoyeoman = tareasEnAlmacen && tareasEnAlmacen.split('\n') || [];
    $scope.$watch('tarea', function () {
       localStorageService.add('tarea', $scope.proyectoyeoman.join('\n'));
       }, true);
   $scope.addTarea = function(){
       $scope.proyectoyeoman.push($scope.tarea);
       $scope.tarea = '';
   };
    $scope.eliminarTarea = function(index){
        $scope.proyectoyeoman.splice(index,1);
    };
    
  });
