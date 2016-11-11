(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.citas')
        .factory('citasFactory', citasFactory);

    citasFactory.$inject = ['$resource', 'servidor'];

    /* @ngInject */
    function citasFactory($resource,servidor) {
        return {
          agendar: function () {
              return $resource(servidor + 'citas/agendar',{},{});
          }
        }
    }

})();

