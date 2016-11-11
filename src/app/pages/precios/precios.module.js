(function () {
    'use strict';

    angular.module("BlurAdmin.pages.precios", [])
        .config(preciosConfig);

    /** @ngInject */
    function preciosConfig ($stateProvider) {
        $stateProvider
            .state("precios", {
                url: '/precios',
                title: 'Precios',
                templateUrl: 'app/pages/precios/precios.html',
                controller: "preciosCtrl",
                sidebarMeta: {
                    order: 800,
                    icon: 'ion-pricetags',
                    acceso: 1
                }
            });
    }
})();