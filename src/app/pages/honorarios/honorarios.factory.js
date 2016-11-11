(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.honorarios')
        .factory('honorariosFactory', honorariosFactory);

    honorariosFactory.$inject = ['$resource', 'servidor', '$localStorage'];

    /* @ngInject */
    function honorariosFactory($resource,servidor,$localStorage) {
        return {
            trabajosXEmpleado: function (idEmpleado) {
                return $resource(servidor + "honorarios/" + idEmpleado, {},{});
            },
            obtenerPorcentaje: function () {
                if (typeof $localStorage.porcentaje === "undefined" || $localStorage.porcentaje === null) {
                    return 1;
                }
                return $localStorage.porcentaje;
            },
            guardarPorcentaje: function (porc) {
                $localStorage.porcentaje = porc;
            },
            Pagar: function () {
                return $resource(servidor + "honorarios/pagar/",{},{});
            },
            historico: function () {
                return $resource(servidor + "honorarios",{},{});
            }
        }
    }

})();

