(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.tratamientos')
        .controller('iniciarTratamientoCtrl', iniciarTratamientoCtrl);

    iniciarTratamientoCtrl.$inject = ['$scope', "tratamientosFactory", "$state"];

    /* @ngInject */
    function iniciarTratamientoCtrl($scope, tratamientosFactory, $state) {
        $scope.finish = false;
        $scope.CI_CLIENTE = {};
        $scope.newTratamiento = {};
        $scope.fecha = {};
        $scope.fechainvalida = true; //Por defecto la fecha es invalida, ya que esta vacía
        $scope.popup = {};
        var fechaHoy = moment();

        $scope.HoyHora = new Date();


        //Configuracion de las fechas
        $scope.dateOptions = {
            formatYear: 'YYYY',
            maxDate: fechaHoy.add(2, 'M'),
            minDate: new Date(),
            startingDay: 1,
            showWeeks: false,
            clearText: "Reiniciar"
        };

        //Configuracion para elegir le tiempo
        $scope.timeOptions = {
            minuteStep: 30
        };

        $scope.open = function () {
            $scope.popup.opened = true;
        };

        $scope.prueba = function () {
            console.log($scope.fecha.fechita);
        };

        $scope.onSetTime = function () {
            //Validar primero que la fecha es valida
            console.log(moment());
            console.log(moment($scope.fecha.fecha_inicio));
            console.log(moment($scope.fecha.fecha_inicio).isBefore(moment(), 'hour'));
            var fecha = moment($scope.fecha.fecha_inicio);
            // if () {
            //     console.log("Entro");
            // } else {
            //     console.log("Entro también");
            // }

            if (fecha.hour() <= 19 && fecha.hour() >= 6) {
                $scope.fechainvalida = false;
                $scope.newTratamiento.fecha_inicio = moment($scope.fecha.fecha_inicio).format();
            } else {
                swal("FUERA DE HORARIO", "No se puede apartar cita fuera del horario comprendido de 06:00AM a 08:00PM", "info");
            }
        };

        //Obtener trabajos
        tratamientosFactory.obtenerTrabajos().get().$promise.then(function (data) {
            if (data.status == 1) {
                $scope.trabajos = data.salida;
            } else if (data.status == 2) {
                swal("ATENCIÓN", "Ha ocurrido un error", "error");
                $state.reload();
            } else {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data.salida);
                $state.reload();
            }
        }).catch(function (data) {
            swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
            console.log(data.salida);
            $state.reload();
        });

        //Obtener empleados
        tratamientosFactory.obtenerEmpleados().get().$promise.then(function (data) {
            if (data.status == 1) {
                $scope.empleados = data.salida;
            } else if (data.status == 2) {
                swal("ATENCIÓN", "Ha ocurrido un error", "error");
                $state.reload();
            } else {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data.salida);
                $state.reload();
            }
        }).catch(function (data) {
            swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
            console.log(data.salida);
            $state.reload();
        });

        $scope.siguiente = function () {
            $scope.step3 = true;
        };

        $scope.finalizar = function () {
            console.log($scope.newTratamiento);
            tratamientosFactory.iniciarTratamiento($scope.CI_CLIENTE.CI).save($scope.newTratamiento).$promise.then(function (data) {
                if (data.status == 1) {
                    swal("ÉXITO", "Tratamiento creado satisfactoriamente", "success");
                    $state.go("tratamientos");
                } else if (data.status == 2) {
                    swal("ATENCIÓN", "Ha ocurrido un error", "error");
                    $state.reload();
                } else if (data.status == 6) {
                    swal("SIN DISPONIBLIIDAD", "El empleado o el cliente ya tienen asignado un trabajo para esa fecha", "error");
                } else {
                    swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                    console.log(data.salida);
                }
            }).catch(function (data) {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data.salida);
                $state.reload();
            });
        };

        $scope.buscarCliente = function () {
            tratamientosFactory.obtenerCliente($scope.CI_CLIENTE.CI).get().$promise.then(function (data) {
                if (data.status == 1) {
                    $scope.cliente = data.salida;
                    $scope.step2 = true;
                } else if (data.status == 2) {
                    swal("ATENCIÓN", "Ha ocurrido un error", "error");
                    console.log(data.salida);
                } else if (data.status == 5) {
                    swal("NO EXISTE", "La cédula ingresada no existe", "error");
                    console.log(data.salida);
                } else {
                    swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                    console.log(data.salida);
                }
            }).catch(function (data) {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data.salida);
            });
        }
    }

})();

