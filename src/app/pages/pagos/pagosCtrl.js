(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.pagos')
        .controller('pagosCtrl', pagosCtrl);

    pagosCtrl.$inject = ['$scope', 'pagosFactory', 'comunFactory'];

    /* @ngInject */
    function pagosCtrl($scope, pagosFactory, comunFactory) {
        $scope.CI = {};
        $scope.nombreEmpleado = "";
        $scope.fechas = {};
        $scope.filtradoArr = {};

        $scope.verPagos = function () {
            console.log("Aja?");
            pagosFactory.obtener($scope.CI.CI).get().$promise.then(function (data) {
                if (data.status == 1) {
                    $scope.detalles = data.salida[0].pagos;
                    $scope.nombreEmpleado = data.salida[0].nombre + " " + data.salida[0].apellido;
                    console.log($scope.detalles);
                    if ($scope.detalles.length <= 0) {
                        swal("ATENCIÓN", "El cliente no ha realizado pagos", "info");
                    }
                } else if (data.status == 2) {
                    swal("ATENCIÓN", "Ha ocurrido un error", "error");
                } else if (data.status == 5) {
                    swal("ATENCIÓN", "El cliente ingresado no tiene trabajos por pagar o la cédula es incorrecta", "info");
                } else {
                    swal("ATENCIÓN", "No se establecio conexión con el servidor", "error");
                    console.log(data);
                }
            }).catch(function (data) {
                swal("ATENCIÓN", "No se establecio conexión con el servidor", "error");
                console.log(data);
            });
        };

        $scope.generarReporte = function () {
            var columnas = [
                {title: "Fecha", "dataKey": "fechamodif"},
                {title: "Concepto", "dataKey": "concepto"},
                {title: "Forma de pago", "dataKey": "forma_pago"},
                {title: "Monto", "dataKey": "monto"}
            ];

            for (var x = 0; x < $scope.detalles.length; x++) {
                $scope.detalles[x].concepto = $scope.detalles[x].id_trabajo.nombre_trabajo;
                $scope.detalles[x].fechamodif = moment($scope.detalles[x].fecha_pago).format("DD/MM/YYYY hh:mm A");
                if ($scope.detalles[x].monto <= 0 ) {
                    $scope.detalles[x].monto = $scope.detalles[x].id_trabajo.precio;
                }
            }

            comunFactory.generarPDF(columnas, $scope.filtradoArr.Arr, "Pagos del cliente: " + $scope.nombreEmpleado);

        };

        $scope.validarFecha = function (numero) {

            // if (typeof $scope.fechas.uno == "undefined" || typeof $scope.fechas.dos == "undefined") {
            //     return null;
            // }

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

    }

})();

