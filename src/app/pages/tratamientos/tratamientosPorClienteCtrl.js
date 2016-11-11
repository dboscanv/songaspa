(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.tratamientos')
        .controller('tratamientosPorClienteCtrl', tratamientosPorClienteCtrl);

    tratamientosPorClienteCtrl.$inject = ['$scope', 'tratamientosFactory', "$state"];

    /* @ngInject */
    function tratamientosPorClienteCtrl($scope, tratamientosFactory,$state) {
        $scope.CI = {};

        $scope.buscar = function () {
            //Obtener tratamientos por cliente
            tratamientosFactory.tratamientosPorCliente($scope.CI.CI).get().$promise.then(function (data) {
                if (data.status == 1) {
                    $scope.tratamientos = data.salida;
                } else if (data.status == 2) {
                    swal("ATENCIÓN", "Ha ocurrido un error", "error");
                    $state.reload();
                } else if (data.status == 5) {
                    swal("NO EXISTE", "El cliente no tiene tratamientos o la cédula ingresada no existe", "error");
                    console.log(data.salida);
                }  else {
                    swal("ATENCIÓN", "No se establecio conexión con el servidor", "error");
                    console.log(data.salida);
                    $state.reload();
                }
            }).catch(function (data) {
                console.log(data);
                swal("ATENCIÓN", "No se establecio conexión con el servidor", "error");
                console.log(data.salida);
                $state.reload();
            });
        };



    }

})();

