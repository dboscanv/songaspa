(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.dashboard')
        .controller('dashboardCtrl', dashboardCtrl);

    dashboardCtrl.$inject = ['$scope', 'calendarConfig', 'dashboardFactory', 'loginFactory', 'tratamientosFactory', '$state'];

    /* @ngInject */
    function dashboardCtrl($scope, calendarConfig, dashboardFactory, loginFactory, tratamientosFactory, $state) {

        $scope.calendarView = "month"; //Variable que dice que va a mostrar el calendario
        $scope.viewDate = new Date(); //Variable que dira donde empezara a mostrar
        $scope.cellIsOpen = true;
        var token = loginFactory.decodificarToken();
        $scope.cargoCodigo = token.cargoCodigo;
        $scope.empleadoSelec = {};
        //
        // //Va a cambiar la agenda por cada cambio de empleado
        // $scope.cambiarAgenda = function () {
        //     //Traerme los eventos
        //     dashboardFactory.obtenerCalendario($scope.empleadoSelec.CI).get().$promise.then(function (data) {
        //         if (data.status == 1) {
        //             $scope.events = data.salida;
        //             for (var x = 0; x < $scope.events.length; x++) {
        //                 $scope.events[x].startsAt = new Date($scope.events[x].startsAt);
        //             }
        //         } else if (data.status == 5) {
        //             swal("ATENCIÓN", "No hay trabajos pautados para este empleado", "info");
        //         } else {
        //             swal("ATENCIÓN", "Ha ocurrido un error", "error");
        //         }
        //     }).catch(function (data) {
        //         swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
        //         console.log(data.salida);
        //     });
        // };
        //
        // //Obtener empleados
        // tratamientosFactory.obtenerEmpleados().get().$promise.then(function (data) {
        //     if (data.status == 1) {
        //         $scope.empleados = data.salida;
        //     } else if (data.status == 2) {
        //         swal("ATENCIÓN", "Ha ocurrido un error", "error");
        //     } else {
        //         swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
        //         console.log(data.salida);
        //     }
        // }).catch(function (data) {
        //     swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
        //     console.log(data.salida);
        // });


        if (token.cargoCodigo == 1) {
            //Traerme los eventos
            dashboardFactory.obtenerTodo().get().$promise.then(function (data) {
                if (data.status == 1) {
                    $scope.events = data.salida;
                    for (var x = 0; x < $scope.events.length; x++) {
                        $scope.events[x].startsAt = new Date($scope.events[x].startsAt);
                    }
                } else if (data.status == 2) {
                    swal("ATENCIÓN", "Ha ocurrido un error", "error");
                } else if (data.status == 5) {
                    // swal("ATENCIÓN", "No hay trabajos pautados", "info");
                }
            }).catch(function (data) {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data.salida);
            });
        } else {
            //Traerme los eventos
            dashboardFactory.obtenerCalendario(token.sub).get().$promise.then(function (data) {
                if (data.status == 1) {
                    $scope.events = data.salida;
                    for (var x = 0; x < $scope.events.length; x++) {
                        $scope.events[x].startsAt = new Date($scope.events[x].startsAt);
                        console.log(new Date($scope.events[x].startsAt));
                    }
                } else if (data.status == 5) {
                    $scope.events = [];
                } else {
                    swal("ATENCIÓN", "Ha ocurrido un error", "error");
                }
            }).catch(function (data) {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data.salida);
            });
        }

        //Traerme eventos secretaria
        dashboardFactory.obtenerCitasSecre().get().$promise.then(function (data) {
            if (data.status == 1) {
                $scope.eventsSecre = data.salida;
                for (var x = 0; x < $scope.eventsSecre.length; x++) {
                    $scope.eventsSecre[x].startsAt = new Date($scope.eventsSecre[x].startsAt);
                }
            } else if (data.status == 5) {
                // swal("ATENCIÓN", "No hay trabajos pautados para este empleado", "info");
            } else {
                swal("ATENCIÓN", "Ha ocurrido un error", "error");
            }
        }).catch(function (data) {
            swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
            console.log(data.salida);
        });

    }

})();


