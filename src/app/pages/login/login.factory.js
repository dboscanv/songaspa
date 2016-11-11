(function () {
    'use strict';

    angular.module("BlurAdmin.pages.Login")
        .factory("loginFactory", loginFactory);

    function loginFactory($resource, servidor, $sessionStorage,jwtHelper) {
        return {
            loginCliente: function () {
                return $resource(servidor + "cliente", {}, {
                    update: {
                        METHOD: 'PUT'
                    }
                });
            },
            loginEmpleado: function () {
                return $resource(servidor + "login/empleado", {}, {
                    update: {
                        METHOD: 'PUT'
                    }
                });
            },
            guardarToken: function (token) {
                $sessionStorage.token = token;
                console.log("Token guardado");
            },
            decodificarToken: function () {
                var deco = jwtHelper.decodeToken($sessionStorage.token);
                return deco;
            },
            isLogged: function () {
                if (typeof $sessionStorage.token === "undefined" || $sessionStorage.token == null) {
                    return false;
                } else {
                    return true
                }
            },
            eliminarToken: function () {
                delete $sessionStorage.token;
            },
            cambiarClave: function () {
                return $resource(servidor + "empleados/cambiarClave",{},{});
            }
        }
    }
})();