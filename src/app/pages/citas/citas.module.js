(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.citas', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state("citas", {
                url: '/citas',
                title: 'Citas',
                templateUrl: 'app/pages/citas/citas.html',
                controller: "citasCtrl",
                sidebarMeta: {
                    order: 900,
                    icon: 'ion-ios-list-outline',
                    acceso: "4"
                }
            })
    }

})();