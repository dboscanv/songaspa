(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.honorarios', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state("honorarios", {
                url: '/honorarios',
                title: 'Honorarios',
                templateUrl: 'app/pages/honorarios/honorarios.html',
                controller: "honorariosCtrl",
                sidebarMeta: {
                    order: 500,
                    icon: 'ion-ios-list-outline',
                    acceso: "1"
                }
            })

            .state("historicoHonorarios", {
                url: '/historico',
                title: 'Histórico de Honorarios',
                templateUrl: 'app/pages/honorarios/historico.html',
                controller: "historicoCtrl"
            })
    }

})();