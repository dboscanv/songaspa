(function () {
    'use strict';
    angular.module('BlurAdmin.pages.clientes')
        .controller("ver_clienteCtrl", ver_clienteCtrl)
        .run(runForm);

    /** @ngInject */
    function ver_clienteCtrl(clientesFactory, $stateParams, $scope, $state, generos, estado_civil) {

        $scope.generos = generos;
        $scope.estado_civil = estado_civil;

        //Cargar el cliente
        clientesFactory.obtener($stateParams.id).get().$promise.then(function (data) {
            if (data.status == 1) {
                $scope.cliente = data.salida;
                $scope.cliente.fechanac = new Date($scope.cliente.fechanac);
            } else if (data.status == 2) {
                swal("ATENCIÓN", "Ha ocurrido un error", "error");
                console.log(data.salida);
            } else {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data.salida);
            }
        }).catch(function (data) {
            swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
            console.log(data);
        });

        $scope.abrirForm = function () {
            $scope.formHistoriaMedica.$show();
        };

        $scope.submitForm = function () {
            $scope.formHistoriaMedica.$submit();
        };

        $scope.editarCliente = function () {
            console.log("Aqui guardamos cliente");
            console.log($scope.cliente);
            clientesFactory.editar().save($scope.cliente).$promise.then(function (data) {
                if (data.status == 1) {
                    swal("ÉXITO", "Cliente modificado satisfactoriamente", "success");
                    $state.go("clientes");
                } else if (data.status == 2) {
                    swal("ATENCIÓN", "Ha ocurrido un error", "error");
                    console.log(data.salida);
                } else {
                    swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                    console.log(data.salida);
                }
            }).catch(function (data) {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data.salida);
            });
        };

        /*************VALIDACIONES EDITANDO***********/

        $scope.checkNumber = function (data, min, max) {
            console.log("Entro a check numero");
            var patron = /^[0-9]+$/;

            if (typeof data == "undefined") {
                return "Requerido";
            }

            if (!patron.test(data)) {
                return "Solo se permiten números";
            } else {
                if (data.length > max) {
                    return "El numero es muy largo";
                } else if (data.length < min) {
                    return "El numero es muy corto";
                }
            }
        };


        //Chequeando el texto
        $scope.checkTexto = function (data, min, max, req) {
            console.log(data);
            var patron = /^([A-Za-zÑñáéíóúÁÉÍÓÚ ]+)$/;
            console.log("Entro a check texto");
            if (typeof data == "undefined" && req) {
                return "Requerido";
            } else if (typeof data == "undefined" && !req) {
                console.log("NO HARA NADAAA");
            } else {
                if (!patron.test(data)) {
                    return "Solo se permiten letras";
                } else {
                    if (data.length > max) {
                        return "La cadena es muy larga";
                    } else if (data.length < min) {
                        return "La cadena es muy corta";
                    }
                }
            }


        };

        //Chequear email
        $scope.checkEmail = function (data) {
            var patron = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

            if (typeof data == "undefined") {
                return "Requerido";
            }

            if (!patron.test(data)) {
                return "No es un e-mail válido";
            }
        };

        //Chequear date
        $scope.checkDate = function (data, min, max) {
            if (typeof data == "undefined") {
                return "Requerido";
            }

            if (moment(data).isBefore(min)) {
                return "La fecha es muy antigua";
            } else if (moment(data).isAfter(max)) {
                return "La fecha es muy reciente";
            }
        };

        //Chequear longitud
        $scope.checkAlfaNumerico = function (data, min, max, req) {


            if (typeof data == "undefined" && req) {
                return "Requerido";
            }

            if (data.length > max) {
                return "La dirección es muy larga";
            } else if (data.length < min) {
                return "La dirección es muy corta";
            }


        };

        //Chequear select
        $scope.checkSelect = function (data, arreglo) {
            if (!arreglo.indexOf(data) > -1) {
                return "No selecciono una opción";
            }
        };

        function EspaciosVacios(data) {
            if (typeof data !== "undefined") {
                if (data.trim().length > 0)return true;
                else return false;
            }

        }

    }

    /** @ngInject */
    function runForm(editableOptions) {
        editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
    }
})();