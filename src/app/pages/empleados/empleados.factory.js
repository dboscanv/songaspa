(function () {
    'use strict';

    angular.module("BlurAdmin.pages.clientes")
        .factory("empleadosFactory",empleadosFactory);

    function empleadosFactory ($resource,servidor) {
        return {
            listado: function () {
                return $resource(servidor + "empleados",{}, {
                    update: {
                        METHOD: "PUT"
                    }
                });
            },
            obtener: function (id) {
                return $resource(servidor + "empleados/" + id, {}, {});
            },
            editar: function () {
                return $resource(servidor + "empleados/modificar", {}, {});
            },
            crear: function () {
                return $resource(servidor + "empleados/crear", {},{});
            },
            eliminar: function (id) {
                return $resource(servidor + "empleados/borrar/" + id, {},{});
            }
        }
    }
})();