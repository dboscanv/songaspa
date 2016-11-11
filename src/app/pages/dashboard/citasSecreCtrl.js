(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.dashboard')
        .controller('citasSecreCtrl', citasSecreCtrl);

    citasSecreCtrl.$inject = ['$scope', 'calendarConfig', 'dashboardFactory', 'loginFactory', 'tratamientosFactory', '$state'];

    /* @ngInject */
    function citasSecreCtrl($scope, calendarConfig, dashboardFactory) {

        $scope.calendarView = "month"; //Variable que dice que va a mostrar el calendario
        $scope.viewDate = new Date(); //Variable que dira donde empezara a mostrar
        $scope.cellIsOpen = true;

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


