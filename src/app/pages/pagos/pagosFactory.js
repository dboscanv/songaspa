(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.pagos')
        .factory('pagosFactory', pagosFactory);

    pagosFactory.$inject = ['$resource', 'servidor', '$localStorage'];

    /* @ngInject */
    function pagosFactory($resource,servidor,$localStorage) {
        return {
           obtener: function (idcliente) {
               return $resource(servidor + "pagos/" + idcliente,{},{});
           }
        }
    }

})();

