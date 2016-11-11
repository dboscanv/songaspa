(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.tratamientos')
        .controller('tratamientosPagosCtrl', tratamientosPagosCtrl);

    tratamientosPagosCtrl.$inject = ['$scope', 'tratamientosFactory', '$stateParams','formasDePago'];

    /* @ngInject */
    function tratamientosPagosCtrl($scope, tratamientosFactory, $stateParams, formasDePago) {
        $scope.pago = {};
        $scope.formas = formasDePago;
        $scope.form = {};

        //Obtener monto
        tratamientosFactory.obtenerMontoTratamiento($scope.idTratamiento).get().$promise.then(function (data) {
            if (data.status == 1) {
                $scope.pago.monto = data.salida;
            } else if (data.status == 2) {
                swal("ATENCIÓN", "Ha ocurrido un error", "error");
            } else if (data.status == 5) {
                swal("NO EXISTE", "", "error");
            } else {
                swal("ATENCIÓN", "No se establecio conexión con el servidor", "error");
                console.log(data.salida);
            }
        }).catch(function (data) {
            swal("ATENCIÓN", "No se establecio conexión con el servidor", "error");
            console.log(data.salida);
        });

        $scope.registrarPagoCompleto = function (modal) {
            if (typeof $scope.pago.comprobante === "undefined") {
                console.log("Pago con efectivo, credito o debido");
                $scope.pago.comprobante = "";
            }
            console.log($scope.pago);
            swal({
                    title: "¿Esta seguro que desea registrar el pago de un tratamiento completo?",
                    text: "Si existen trabajos que ya han sido pagados, no serán pagados nuevamente",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonClass: "btn-success",
                    cancelButtonText: "Cancelar",
                    confirmButtonText: "Si, registrar pago completo",
                    closeOnConfirm: false
                },
                function(){
                    tratamientosFactory.pagarTodo($scope.idCliente,$scope.idTratamiento).save().$promise.then(function (data) {
                        if (data.status == 1) {
                            swal("ÉXITO", "¡Los trabajos han sido pagados!", "success");
                            modal.$dismiss();
                        } else if (data.status == 2) {
                            swal("ATENCIÓN", "Ha ocurrido un error", "error");
                        } else if (data.status == 5) {
                            swal("ATENCIÓN", "No se encontraron trabajos para ese tratamiento", "error");
                        } else {
                            swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                            console.log(data.salida);
                        }
                    }).catch(function (data) {
                        swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                        console.log(data.salida);
                    });
                });
        }
    }

})();

