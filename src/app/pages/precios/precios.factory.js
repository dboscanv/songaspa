(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.precios')
        .factory('preciosFactory', preciosFactory);

    preciosFactory.$inject = ['$resource', 'servidor'];

    /* @ngInject */
    function preciosFactory($resource, servidor) {
       return {
           obtener: function () {
               return $resource(servidor + "trabajos", {},{});
           },
           editar: function (id) {
               return $resource(servidor + "trabajos/modificar/" + id, {},{});
           },
           crear: function () {
               return $resource(servidor + "trabajos/agregar", {},{});
           },
           eliminar: function (id) {
               return $resource(servidor + "trabajos/borrar/" + id, {}, {});
           }
       }
    }

})();

