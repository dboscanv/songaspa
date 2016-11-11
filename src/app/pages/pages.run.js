(function () {
    'use strict';
    angular.module("BlurAdmin.pages")
        .run(runConectado);

    /** @ngInject */
    function runConectado ($rootScope,$state, loginFactory,$location) {
        $rootScope.$LOGUEADO = false;
        console.log("Lo primero que hará");

        if (loginFactory.isLogged()) {
            console.log("ya estaba logueado");
            $rootScope.$LOGUEADO = true;
            $location.path("/dashboard");
        }

        $rootScope.$on("$stateChangeStart", function (e, toState, toParams, fromState, fromParams) {
            console.log("Inicio cambio!");
            if (!loginFactory.isLogged()) {
                console.log("No esta logueado!");
                $rootScope.$LOGUEADO = false;
                $location.path("/dashboard");
            }
        });
    }
})();