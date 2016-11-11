(function () {
    'use strict';

    angular.module('BlurAdmin.pages.Login')
        .controller('loginCtrl', loginCtrl);

    /** @ngInject */
    function loginCtrl($scope, $rootScope, loginFactory, $sessionStorage, $state, $location, jwtHelper) {

        $scope.persona = {};
        console.log("Entro :)");


        $scope.iniciarEmpleado = function () {
            console.log("Entre a iniciarEmpleado");
            loginFactory.loginEmpleado().save(JSON.stringify($scope.persona)).$promise.then(function (data) {
                if (data.status == 1) {
                    loginFactory.guardarToken(data.salida);
                    $rootScope.$LOGUEADO = true;
                    var agarra = loginFactory.decodificarToken();
                    console.log(agarra);
                    $location.path("/dashboard");
                } else if (data.status == 2) {
                    swal("ATENCIÓN", "Ha ocurrido un error", "error");
                    console.log(data.salida);
                } else if (data.status == 4) {
                    swal("ATENCIÓN", "Falto el usuario o clave", "info");
                    console.log(data.salida);
                } else if (data.status == 5) {
                    swal("ATENCIÓN", "Usuario o clave inválida", "info");
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