(function () {
    'use strict';
    angular.module('BlurAdmin.pages.Login', ['angular-jwt','ngPatternRestrict'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                // templateUrl: 'app/pages/login/login.html',
                controller: "loginCtrl",
                title: 'Login',
                views: {
                    "main": {
                        templateUrl: 'app/pages/login/login.html'
                    }

                }
            });


    }
})();
