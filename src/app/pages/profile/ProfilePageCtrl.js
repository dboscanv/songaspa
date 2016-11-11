/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.profile')
        .controller('ProfilePageCtrl', ProfilePageCtrl);

    /** @ngInject */
    function ProfilePageCtrl($scope, fileReader, $filter, $uibModal, cargos, loginFactory, empleadosFactory,$state) {
        $scope.picture = $filter('profilePicture')('Nasta');
        $scope.cargos = cargos;
        $scope.claves = {};

        //Obtenemos el token
        $scope.user = loginFactory.decodificarToken();
        $scope.userPerfil = {
            _id: $scope.user.sub,
            nombre: $scope.user.nombre,
            apellido: $scope.user.apellido,
            fechanac: new Date($scope.user.fechanac),
            cargo: $scope.user.cargo,
            edad: $scope.user.edad
        };

        $scope.abrirForm = function () {
            $scope.perfilForm.$show();
        };

        $scope.submitForm = function () {
            $scope.perfilForm.$submit();
        };

        //Editar
        $scope.editarPerfil = function () {
            empleadosFactory.editar().save($scope.userPerfil).$promise.then(function (data) {
                if (data.status == 1) {
                    swal("ÉXITO", "Perfil modificado satisfactoriamente, para ver los cambios debe de iniciar sesión nuevamente", "success");
                    $state.reload();
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

        //Cambiar clave
        $scope.CambiarClave = function () {

            if ($scope.claves.uno !== $scope.claves.dos) {
                swal("ATENCIÓN", "Las claves no coinciden", "error");
            } else {
                var nuevo = {
                    cedula: $scope.user.sub,
                    clave_actual: $scope.claves.actual,
                    clave: $scope.claves.uno
                };
                loginFactory.cambiarClave().save(nuevo).$promise.then(function (data) {
                    if (data.status == 1) {
                        swal("ÉXITO", "Clave cambiada exitosamente", "info");
                    } else if (data.status == 3) {
                        swal("ATENCIÓN", "La clave no pudo ser cambiada, verifique la clave actual", "info");
                    } else {
                        swal("ATENCIÓN", "No estableció conexión con el servidor", "error");
                    }
                }).catch(function (data) {
                    console.log(data);
                    swal("ATENCIÓN", "No estableció conexión con el servidor", "error");

                });
            }


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

    }

})();
