/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.dashboard', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                // templateUrl: 'app/pages/dashboard/dashboard.html',
                title: 'Dashboard',
                sidebarMeta: {
                    icon: 'ion-android-home',
                    order: 0,
                    acceso: 5
                },
                views: {
                    "main": {
                        templateUrl: 'app/pages/login/login.html',
                        controller: "loginCtrl"
                    },
                    "": {
                        templateUrl: 'app/pages/dashboard/dashboard.html',
                        controller: "dashboardCtrl"
                    }
                }
            })
            .state("citasSecre", {
                url: '/citasSecre',
                title: 'Citas con secretaria',
                templateUrl: 'app/pages/dashboard/citasSecre.html',
                controller: "citasSecreCtrl"
            })
    }

})();
