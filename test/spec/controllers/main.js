'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('proyectoyoeomanApp'));
 
  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('no debe tener items al empezar', function () {
    expect(scope.proyectoyeoman.length).toBe(0);
  });
it('debe agregar items a la lista', function(){
    expect.tarea = 'Test 1 ';
    scope.addTarea();
    expect(scope.proyectoyeoman.length).toBe(1);
});
it('debe agregar y luego eliminar un item de la lista', function(){
    scope.tarea = 'Test 1 ';
    scope.addTarea();
    scope.eliminarTarea(0);
    expect(scope.proyectoyeoman.length).toBe(0);
})

});
