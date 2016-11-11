(function () {
    'use strict';

    angular.module("BlurAdmin.pages.clientes")
        .filter("checkboxFilter",checkboxFilter);

    /** @ngInject */
    function checkboxFilter () {
       return function (input) {
           if (input) {
               return "<i class='ion ion-checkmark' style='color:red'></i>";
           } else {
               return "<i class='ion ion-close' style='color:red'></i>";
           }
       }
    }
})();