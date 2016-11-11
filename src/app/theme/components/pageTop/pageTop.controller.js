/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.theme.components')
        .controller('pageTopCtrl', pageTopCtrl);

    pageTopCtrl.$inject = ['$scope', '$rootScope','$location', 'loginFactory'];

    /** @ngInject */
    function pageTopCtrl($scope,$rootScope,$location, loginFactory) {
        console.log($rootScope.$LOGUEADO);

        $scope.cerrarSesion = function () {
            $rootScope.$LOGUEADO = false;
            loginFactory.eliminarToken();
            $location.path("/dashboard");
        }
    }

})();