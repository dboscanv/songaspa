(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.honorarios')
        .controller('honorariosCtrl', honorariosCtrl);

    honorariosCtrl.$inject = ['$scope', 'tratamientosFactory', 'honorariosFactory','$state'];

    /* @ngInject */
    function honorariosCtrl($scope, tratamientosFactory, honorariosFactory,$state) {
        $scope.empleadoSelec = {};
        $scope.porcentaje = honorariosFactory.obtenerPorcentaje();
        $scope.porcentajeOriginal = honorariosFactory.obtenerPorcentaje();

        //Obtener empleados
        tratamientosFactory.obtenerEmpleados().get().$promise.then(function (data) {
            if (data.status == 1) {
                $scope.empleados = data.salida;
            } else if (data.status == 2) {
                swal("ATENCIÓN", "Ha ocurrido un error", "error");
            } else {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data.salida);
            }
        }).catch(function (data) {
            swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
            console.log(data.salida);
        });

        $scope.pedirTrabajos = function () {
            console.log($scope.empleadoSelec);
            honorariosFactory.trabajosXEmpleado($scope.empleadoSelec.CI).get().$promise.then(function (data) {
                if (data.status == 1) {
                    $scope.detalles = data.salida;
                    Calculos();
                } else if (data.status == 2) {
                    swal("ATENCIÓN", "Ha ocurrido un error", "error");
                } else if (data.status == 5) {
                    swal("ATENCIÓN", data.mensaje, "info");
                    $scope.detalles = null;
                } else {
                    swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                    console.log(data);
                }
            }).catch(function (data) {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data);
            });
        };

        $scope.guardarPorcentaje = function () {

            if ($scope.porcentaje <= 0) {
                swal("ATENCIÓN", "El porcentaje de la estética no puede estar vacío ni ser cero", "info");
                $scope.porcentaje = honorariosFactory.obtenerPorcentaje();
            }
            honorariosFactory.guardarPorcentaje(parseInt($scope.porcentaje));
            $scope.porcentajeOriginal = $scope.porcentaje;
            Calculos();
            swal("ÉXITO", "Porcentaje cambiado exitosamente", "info");
        };

        $scope.Pagar = function () {
            var Pago = {
                idempleado: $scope.empleadoSelec.CI,
                total_tratamientos: $scope.totalTrabajos,
                iva: $scope.IVA,
                total_porcentaje: $scope.estetica,
                total_pagado: $scope.totalPago,
                fecha_pago: new Date(),
                Trabajos: $scope.detalles
            };

            console.log(Pago);

            honorariosFactory.Pagar().save(Pago).$promise.then(function (data) {
                if (data.status == 1) {
                    swal("ÉXITO", "El honorario ha sido registrado con éxito", "success");
                    $state.reload();
                } else if (data.status == 2) {
                    swal("ATENCIÓN", "Ha ocurrido un error", "error");
                } else {
                    swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                    console.log(data);
                }
            }).catch(function (data) {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data);
            });


        };

        function Calculos() {
            var acum = 0;
            for (var x = 0; x < $scope.detalles.length; x++) {
                acum += parseInt($scope.detalles[x].trabajo_popular.precio);
            }
            //Total de los trabajos
            $scope.totalTrabajos = acum;
            $scope.IVA = acum * 0.12;
            $scope.estetica = (acum - $scope.IVA) * ($scope.porcentajeOriginal / 100);
            $scope.totalPago = acum - $scope.IVA - $scope.estetica;
        }
    }

})();

