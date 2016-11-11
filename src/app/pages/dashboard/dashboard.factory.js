(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.dashboard')
        .factory('dashboardFactory', dashboardFactory);

    dashboardFactory.$inject = ['$resource', 'servidor'];

    /* @ngInject */
    function dashboardFactory($resource, servidor) {
        return {
            obtenerCalendario: function (idEmpleado) {
                return $resource(servidor + "citas/obtenerCalendario/" + idEmpleado, {}, {});
            },
            obtenerTodo: function (idEmpleado) {
                return $resource(servidor + "citas/obtenerCalendario", {}, {});
            },
            obtenerCitasSecre: function () {
                return $resource(servidor + "citas/obtenerCitas",{},{});
            }
        }
    }
})();

