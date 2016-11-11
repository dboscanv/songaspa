(function () {
    'use strict';
    angular.module("BlurAdmin.pages")
        .filter("fechasFiltro", fechasFiltro);


    /** @ngInject */
    function fechasFiltro () {
        return function (input,fecha1,fecha2,nombreFecha) {
           var arr = [];
            if ((typeof fecha1 == "undefined" || fecha1 == null)  || (typeof fecha2 == "undefined" || fecha2 == null) ) {
                return input
            } else {
                var fecha1M = moment(fecha1).format("YYYY-MM-DD");
                var fecha2M = moment(fecha2).format("YYYY-MM-DD");

                angular.forEach(input, function (x) {
                    var fecha = moment(x[nombreFecha]);


                    if (moment(fecha).format("YYYY-MM-DD") == fecha1M && moment(fecha).format("YYYY-MM-DD") == fecha2M) {
                        arr.push(x);
                    } else if (fecha.isBetween(fecha1M,fecha2M)) {
                        arr.push(x);
                    }
                });

                return arr;
            }

        }
    }
})();