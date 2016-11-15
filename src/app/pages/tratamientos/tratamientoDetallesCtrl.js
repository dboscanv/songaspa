(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.tratamientos')
        .controller('tratamientoDetallesCtrl', tratamientoDetallesCtrl);

    tratamientoDetallesCtrl.$inject = ['$scope', 'tratamientosFactory', '$stateParams', '$uibModal', '$state', '$timeout', '$location'];

    /* @ngInject */
    function tratamientoDetallesCtrl($scope, tratamientosFactory, $stateParams, $uibModal, $state, $timeout,$location) {
        $scope.newCita = {};
        $scope.popup = {};
        $scope.fecha = {};
        var fechaHoy = moment();
        $scope.idTratamiento = $stateParams.id;
        $scope.idCliente = $stateParams.idcliente;
        $scope.cliente = {};

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

        tratamientosFactory.obtenerTrabajos().get().$promise.then(function (data) {
            if (data.status == 1) {
                $scope.trabajos = data.salida;
            } else if (data.status == 2) {
                swal("ATENCIÓN", "Ha ocurrido un error", "error");
            } else {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data.salida);
            }
        }).catch(function (data) {
            swal("ATENCIÓN", "No se establecio conexión con el servidor", "error");
            console.log(data.salida);
            $state.reload();
        });

        //Obtener los pagos
        tratamientosFactory.traerPagos($scope.idCliente).get().$promise.then(function (data) {
            if (data.status == 1) {
                $scope.pagos = data.salida[0].pagos;
            } else if (data.status == 2) {
                swal("ATENCIÓN", "Ha ocurrido un error, intentelo nuevamente", "error");
                console.log(data.salida);
            } else if (data.status == 5) {
                $scope.pagos = [];
            } else {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data.salida);
            }
        }).catch(function (data) {
            swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
            console.log(data.salida);
        });

        //Obteniendo los datos del tratamiento
        tratamientosFactory.obtenerTratamiento($stateParams.id).get().$promise.then(function (data) {
            if (data.status == 1) {
                $scope.tratamiento = data.salida.tratamientos[0];
                //Dar formato a la salida
                DarFormato($scope.tratamiento);
                $scope.cliente.nombre = data.salida.nombre;
                $scope.cliente.apellido = data.salida.apellido;
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

        //Funcion para citar un nuevo trabajo
        $scope.citarTrabajo = function () {
            $uibModal.open({
                animation: true,
                templateUrl: "app/pages/tratamientos/modal_citar.html",
                size: 'md',
                controller: "tratamientoDetallesCtrl"
            });
        };

        $scope.onSetTime = function () {
            $scope.fechainvalida = false;
            $scope.newCita.fecha = moment($scope.fecha.fecha).format();
            console.log($scope.newCita);
        };

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

        //Finalmente, citar un nuevo trabajo
        $scope.citar = function (modal) {
            tratamientosFactory.guardarTrabajo($stateParams.id, $stateParams.idcliente).save($scope.newCita).$promise.then(function (data) {
                if (data.status == 1) {
                    swal("ÉXITO", "Cita guardada satisfactoriamente", "success");
                    $timeout(function () {
                        $state.reload();
                        modal.$dismiss();
                    }, 1000);
                } else if (data.status == 2) {
                    swal("ATENCIÓN", "Ha ocurrido un error", "error");
                } else if (data.status == 6) {
                    swal("SIN DISPONIBLIIDAD", "El empleado o el cliente ya tienen asignado un trabajo para esa fecha", "error");
                } else {
                    swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                    console.log(data.salida);
                }
            }).catch(function (data) {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data.salida);
            });
        };

        $scope.pagarTratamiento = function () {

            $uibModal.open({
                animation: true,
                templateUrl: "app/pages/tratamientos/modal_pagar.html",
                size: 'sm',
                controller: "tratamientosPagosCtrl",
                scope: $scope
            });
        };

        $scope.abrirModalPagoTrabajo = function (trabajo) {
            $scope.trabajoSeleccionado = trabajo;
            console.log($scope.trabajoSeleccionado);
            $uibModal.open({
                animation: true,
                templateUrl: "app/pages/tratamientos/modal_trabajo_pagar.html",
                size: 'sm',
                controller: "tratamientosPagosTrabajosCtrl",
                scope: $scope
            });
        };

        $scope.finalizarTratamiento = function () {
            tratamientosFactory.finalizarTratamiento($scope.idTratamiento).get().$promise.then(function (data) {
                if (data.status == 1) {
                    swal("ÉXITO", "Tratamiento finalizado con éxito", "success");
                    $state.go("ver_tratamientos");
                } else if (data.status == 2) {
                    swal("ATENCIÓN", "Ha ocurrido un error", "error");
                } else if (data.status == 4) {
                    swal("TRABAJOS SIN PAGAR", "Este tratamiento tiene trabajos sin pagar, no se puede finalizar", "error");
                } else {
                    swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                    console.log(data.salida);
                }
            }).catch(function (data) {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data.salida);
            });
        };

        $scope.verificarPago = function (trabajo) {
            // tratamientosFactory.verificarPago(trabajo._id).get().$promise.then(function (data) {
            //     if (data.status == 1) {
            //         return "SI";
            //     } else if (data.status == 2) {
            //         return "NO";
            //         console.log(data);
            //     } else if (data.status == 5) {
            //         return "NO";
            //     } else {
            //         console.log(data);
            //         return "NO";
            //     }
            // }).catch(function (data) {
            //     console.log(data);
            //     return "NO";
            // });
        };

        function DarFormato(tratamiento) {
            console.log(tratamiento);
            for (var x = 0; x < tratamiento.trabajos.length; x++) {
                for (var y = 0; y < $scope.pagos.length; y++) {
                    if(tratamiento.trabajos[x]._id == $scope.pagos[y].trabajo_realizado) {
                        console.log("¡¡¡Encontro un pago!!!");
                        tratamiento.trabajos[x].pagado = true;
                    }
                }
                if (!tratamiento.trabajos[x].pagado) {
                    tratamiento.trabajos[x].pagado = false;
                }
            }
        }

    }

})();

