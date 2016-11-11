(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.tratamientos')
        .controller('tratamientosPagosTrabajosCtrl', tratamientosPagosTrabajosCtrl);

    tratamientosPagosTrabajosCtrl.$inject = ['$scope', 'tratamientosFactory', '$stateParams','formasDePago','$state'];

    /* @ngInject */
    function tratamientosPagosTrabajosCtrl($scope, tratamientosFactory, $stateParams, formasDePago,$state) {
        $scope.formas = formasDePago;
        $scope.form = {};
        $scope.bandera1 = false;
        $scope.pago = {};

        $scope.registrarPagoTrabajo = function (modal) {
            $scope.pago.trabajo_realizado = $scope.trabajoSeleccionado._id;
            $scope.pago.monto = $scope.trabajoSeleccionado.id_trabajo.precio;
            $scope.pago.id_trabajo = $scope.trabajoSeleccionado.id_trabajo;
            console.log($scope.pago);
            tratamientosFactory.guardarPago($scope.idCliente, $scope.idTratamiento).save($scope.pago).$promise.then(function (data) {
                if (data.status == 1) {
                    swal("ÉXITO", "Pago registrado con éxito", "success");
                } else if (data.status == 2) {
                    swal("ATENCIÓN", "Ha ocurrido un error", "error");
                } else if (data.status == 6) {
                    swal("ATENCIÓN", "Este trabajo ya ha sido pagado", "error");
                } else {
                    swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                    console.log(data.salida);
                }
            }).catch(function (data) {
                    swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                    console.log(data.salida);
            });
            modal.$dismiss();
        };

        $scope.pagarBandera = function () {
            $scope.titulo = "Registrar pago de un trabajo - " + $scope.cliente.nombre + " " + $scope.cliente.apellido;
            $scope.bandera1 = true;
        };

        $scope.ignorarTrabajo = function () {
          tratamientosFactory.ignorarTrabajo($scope.idTratamiento,$scope.trabajoSeleccionado._id).get().$promise.then(function (data) {
              if(data.status == 1) {
                  swal("ÉXITO", "El cliente no asistio ese día", "success");
                  $state.reload();
              } else{
                  swal("ATENCIÓN", "No se establecio conexión con el servidor", "error");
                  console.log(data.salida);
              }

          }).catch(function (data) {
              console.log(data);
          });
        };

    }

})();

