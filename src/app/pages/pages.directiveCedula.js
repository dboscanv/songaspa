(function () {
    'use strict';
    angular.module("BlurAdmin.pages")
        .directive("cedulaForm", cedulaForm);

    cedulaForm.$inject = [];

    /** @ngInject */
    function cedulaForm() {
        return {
            restrict: "A",
            require: "ngModel",
            link: function (scope, element, attr, ctrl) {
                function customValidator(ngModelValue) {
                    var copia = parseInt(ngModelValue);
                    if (copia < 900000) {
                        ctrl.$setValidity("validadorCedula",false);
                        console.log("validador cedula esta false");
                    } else {
                        ctrl.$setValidity("validadorCedula",true);
                        console.log("validador cedula esta true");
                    }
                    return ngModelValue;
                }
                ctrl.$parsers.push(customValidator);
            }
        }
    }
})();