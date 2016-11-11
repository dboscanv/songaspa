(function () {
    'use strict';
    angular.module("BlurAdmin.pages.clientes")
        .controller("crear_clienteCtrl",crear_clienteCtrl);
    
    function crear_clienteCtrl ($scope, clientesFactory, $state) {

        var vm = this;

        $scope.cliente = {
            evaluacion_clinica: {
                hipertersion_arterial: false,
                hipotension: false,
                diabetes: false,
                renal: false,
                cardiopatio: false,
                circulacion: false,
                anticon_oral: false,
                tras_mens: false, //Buscar explicacion de mama
                f_u_r: false, //Buscar explicacion de mama
                d_i_u: false, //Buscar explicacion de mama
                tiroides: false,
                epilepsia: false,
                lupus: false,
                problemas_digestivos: false,
                estrenimiento: false,
                hepatitis: false,
                cancer: false,
                prob_urinarios: false,
                rete_liquidos: false,
                prob_respiratorios: false,
                asma: false,
                marcapasos: false,
                alergias: false,
                antecedentes_dermat: false,
                herpes: false,
                hongos: false,
                cesareas: false,
                recibido_anestesia: false,
                implantes: {
                    recibido_implantes: false,
                },
                lentes_contacto: false,
                fuma: false,
                toma: false,
                peeling: {
                    realizado_antes: false
                }
            },
            motivo_consulta: {

            },
        };

         $scope.guardarCliente = function () {

             clientesFactory.crear().save($scope.cliente).$promise.then(function (data) {
                 if(data.status == 1) {
                     swal("ÉXITO", "Cliente creado satisfactoriamente", "success");
                     $state.go("clientes");
                 } else if (data.status == 2) {
                     swal("ATENCIÓN", "Ha ocurrido un error", "error");
                     console.log(data.salida);
                 } else {
                     swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                     console.log(data.salida);
                 }
             }).catch(function (data) {
                 console.log(data);
             });
         }
    }
})();