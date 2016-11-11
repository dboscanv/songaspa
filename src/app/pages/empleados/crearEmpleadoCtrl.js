(function () {
    'use strict';

    angular.module("BlurAdmin.pages.empleados")
        .controller("crearEmpleadoCtrl", crearEmpleadoCtrl);
    /** @ngInject */
    function crearEmpleadoCtrl($scope, cargos, empleadosFactory,$state) {
        $scope.cargos = cargos;
        $scope.empleado = {};
        console.log($scope.cargos);

        $scope.crearEmpleado = function () {
            empleadosFactory.crear().save($scope.empleado).$promise.then(function (data) {
                if(data.status == 1) {
                    swal("ÉXITO", "Empleado creado satisfactoriamente", "success");
                    $state.go("empleados");
                } else if (data.status == 2) {
                    swal("ATENCIÓN", "Ha ocurrido un error", "error");
                    console.log(data.salida);
                } else {
                    swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                    console.log(data.salida);
                }
            }).catch(function (data) {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data.salida);
            });
        };
    }
})();