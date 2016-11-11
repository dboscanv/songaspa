(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.pagos', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state("pagos", {
                url: '/pagos',
                title: 'Pagos',
                templateUrl: 'app/pages/pagos/pagos.html',
                controller: "pagosCtrl",
                sidebarMeta: {
                    order: 1200,
                    icon: 'ion-ios-list-outline',
                    acceso: "1"
                }
            })

            // .state("historicoHonorarios", {
            //     url: '/historico',
            //     title: 'Historico de Honorarios',
            //     templateUrl: 'app/pages/honorarios/historico.html',
            //     controller: "historicoCtrl"
            // })
    }

})();