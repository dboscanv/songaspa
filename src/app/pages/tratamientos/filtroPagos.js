(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.tratamientos')
        .filter('filtroPago', filtroPago);

    /** @ngInject */
    function filtroPago() {
        return function (input) {
            if (input) {
                return "<i class='ion-checkmark-round' style='color:green'></i>";
            } else {
                return "<i class='ion-close-circled' style='color:red'></i>";
            }
        }
    }

})();

