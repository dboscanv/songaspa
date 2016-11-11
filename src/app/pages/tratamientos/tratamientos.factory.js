(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.tratamientos')
        .factory('tratamientosFactory', tratamientosFactory);

    tratamientosFactory.$inject = ['$resource', 'servidor'];

    /* @ngInject */
    function tratamientosFactory($resource, servidor) {
        return {
            obtenerCliente: function (id) {
                return $resource(servidor + "clientes/resumido/" + id, {}, {});
            },
            obtenerTrabajos: function () {
                return $resource(servidor + "trabajos", {}, {});
            },
            obtenerEmpleados: function () {
                return $resource(servidor + "empleados", {}, {});
            },
            iniciarTratamiento: function (id) {
                return $resource(servidor + "tratamientos/iniciar/" + id, {},{});
            },
            tratamientosPorCliente: function (id) {
                return $resource(servidor + "clientes/tratamientos/" + id, {},{});
            },
            obtenerTratamiento: function (id) {
                return $resource(servidor + "tratamientos/" + id, {},{});
            },
            guardarTrabajo: function (id, idcliente) {
                return $resource(servidor + "tratamientos/trabajos/" + id + "/" + idcliente, {},{});
            },
            obtenerMontoTratamiento: function (id) {
                return $resource(servidor + "tratamientos/pagoTotal/" + id, {},{});
            },
            guardarPago: function (id, idTratamiento) {
                return $resource(servidor + "tratamientos/pagos/" + id + "/" + idTratamiento, {},{});
            },
            ignorarTrabajo: function (id, idTrabajo) {
                return $resource(servidor + "tratamientos/ignorar/" + id + "/" + idTrabajo, {},{});
            },
            pagarTodo: function (id, idTratamiento) {
                return $resource(servidor + "tratamientos/pagosTodo/" + id + "/" + idTratamiento, {},{});
            },
            finalizarTratamiento: function (idTrat) {
                return $resource(servidor + "tratamientos/finalizar/" + idTrat, {},{});
            },
            verificarPago: function (idTrabajo) {
                return $resource(servidor + "tratamientos/verificarPago/" + idTrabajo, {},{});
            },
            traerPagos: function (idCliente) {
                return $resource(servidor + "tratamientos/verPagos/" + idCliente, {},{});
            }
        }
    }

})();

