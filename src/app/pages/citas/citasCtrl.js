(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.citas')
        .controller('citasCtrl', citasCtrl);

    citasCtrl.$inject = ['$scope', 'citasFactory', '$state'];

    /* @ngInject */
    function citasCtrl($scope, citasFactory, $state) {
        $scope.popup = {};
        $scope.newCita = {};
        $scope.fecha = {};
        var fechaHoy = moment();

        //Configuracion para elegir le tiempo
        $scope.timeOptions = {
            minuteStep: 30
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

        $scope.onSetTime = function () {
            $scope.fechainvalida = false;
            $scope.newCita.fecha = moment($scope.fecha.fecha_inicio).format();
            console.log($scope.newCita);
        };

        $scope.open = function () {
            $scope.popup.opened = true;
        };

        $scope.apartarCita = function () {

            var fecha = moment($scope.newCita.fecha);
            if (fecha.hour() <= 19 && fecha.hour() >= 6) {
                citasFactory.agendar().save($scope.newCita).$promise.then(function (data) {
                    if (data.status == 1) {
                        swal("ÉXITO", "Cita apartada con secretaria satisfactoriamente", "success");
                        $state.reload();
                    } else if (data.status == 2) {
                        swal("ATENCIÓN", "Ha ocurrido un error", "error");
                        $state.reload();
                    } else if (data.status == 6) {
                        swal("ATENCIÓN", "¡Ya hay una cita para esa fecha!", "error");
                        $state.reload();
                    }
                    else {
                        swal("ATENCIÓN", "No se establecio conexión con el servidor", "error");
                        console.log(data.salida);
                    }
                }).catch(function (data) {
                    swal("ATENCIÓN", "No se establecio conexión con el servidor", "error");
                    console.log(data.salida);
                });
            } else {
                swal("FUERA DE HORARIO", "No se puede apartar cita fuera del horario comprendido de 06:00AM a 08:00PM", "info");
            }
        };

    }

})();

