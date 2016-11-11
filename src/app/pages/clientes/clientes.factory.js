(function () {
    'use strict';

    angular.module("BlurAdmin.pages.clientes")
        .factory("clientesFactory",clientesFactory);

    function clientesFactory ($resource,servidor) {
        return {
            listado: function () {
                return $resource(servidor + "clientes/listado",{}, {
                    update: {
                        METHOD: "PUT"
                    }
                });
            },
            crear: function () {
                return $resource(servidor + "clientes/crear", {},{});
            },
            obtener: function (id) {
                return $resource(servidor + "clientes/" + id, {}, {});
            },
            editar: function () {
                return $resource(servidor + "clientes/editar", {}, {});
            },
            eliminar: function (id) {
                return $resource(servidor + "clientes/borrar/" + id, {}, {});
            }
        }
    }
})();