(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.honorarios')
        .controller('historicoCtrl', historicoCtrl);

    historicoCtrl.$inject = ['$scope', 'honorariosFactory', 'tratamientosFactory', 'comunFactory'];

    /* @ngInject */
    function historicoCtrl($scope, honorariosFactory, tratamientosFactory, comunFactory) {
        $scope.empleadoSelec = {};
        $scope.hArray = {};
        $scope.fechas = {};

        //Metodo para validar las fechas
        $scope.validarFecha = function (numero) {
            if (numero == 2) {
                if (typeof $scope.fechas.uno == "undefined") {
                    return null;
                }

                if (moment($scope.fechas.dos).isBefore(moment($scope.fechas.uno))) {
                    swal("ATENCIÓN", "La fecha final no puede estar antes de la fecha inicial", "info");
                    delete $scope.fechas.dos;
                }
            } else if (numero == 1) {
                if (moment($scope.fechas.uno).isAfter(moment($scope.fechas.dos))) {
                    swal("ATENCIÓN", "La fecha inicial no puede estar después de la fecha final", "info");
                    delete $scope.fechas.uno;
                } else {
                    console.log("NO ESTA DESPUES");
                }
            }
        };

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

        //Obtener el historico de pagos
        honorariosFactory.historico().get().$promise.then(function (data) {
            if (data.status == 1) {
                $scope.historico = data.salida;
            } else if (data.status == 2) {
                swal("ATENCIÓN", "Ha ocurrido un error", "error");
            } else if (data.status == 5) {
                swal("ATENCIÓN", "Este empleado no tiene honorarios", "info");
            } else {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data);
            }
        }).catch(function (data) {
            swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
            console.log(data);
        });

        $scope.generarReporte = function () {
            console.log($scope.hArray.historicoFiltrado);
            //Este reporte es por empleados OK!
            for (var x = 0; x < $scope.hArray.historicoFiltrado.length; x++) {
                $scope.hArray.historicoFiltrado[x].nombre = $scope.hArray.historicoFiltrado[x].idempleado.nombre + " " + $scope.hArray.historicoFiltrado[x].idempleado.apellido;
            }
            console.log($scope.hArray.historicoFiltrado);
            var columnas = [
                {title: "Fecha", "dataKey": "fechamodif"},
                {title: "Empleado", "dataKey": "nombre"},
                {title: "Tratamientos", "dataKey": "total_tratamientos"},
                {title: "IVA", "dataKey": "iva"},
                {title: "Estética", "dataKey": "total_porcentaje"},
                {title: "Total pagado", "dataKey": "total_pagado"}
            ];

            for (var x = 0; x < $scope.hArray.historicoFiltrado.length; x++) {
                $scope.hArray.historicoFiltrado[x].fechamodif = moment($scope.hArray.historicoFiltrado[x].fecha_pago).format("DD/MM/YYYY hh:mm A");
            }

            comunFactory.generarPDF(columnas, $scope.hArray.historicoFiltrado, "HISTORICO DE HONORARIOS");
        };

    }

})();

