(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.tratamientos', [])
        .config(routeConfig)

    .constant("uiDatetimePickerConfig",{
        dateFormat: 'yyyy-MM-dd HH:mm',
        defaultTime: new Date().getHours() + ":" + (new Date().getMinutes() + 1),
        html5Types: {
            date: 'yyyy-MM-dd',
            'datetime-local': 'yyyy-MM-ddTHH:mm:ss.sss',
            'month': 'yyyy-MM'
        },
        initialPicker: 'date',
        reOpenDefault: false,
        enableDate: true,
        enableTime: true,
        buttonBar: {
            show: true,
            now: {
                show: true,
                text: 'Ahora'
            },
            today: {
                show: true,
                text: 'Hoy'
            },
            clear: {
                show: true,
                text: 'Limpiar'
            },
            date: {
                show: true,
                text: 'Fecha'
            },
            time: {
                show: true,
                text: 'Tiempo'
            },
            close: {
                show: true,
                text: 'Cerrar'
            }
        },
        closeOnDateSelection: true,
        closeOnTimeNow: true,
        appendToBody: false,
        altInputFormats: [],
        ngModelOptions: { },
        saveAs: false,
        readAs: false,
    });
    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state("tratamientos", {
                url: '/tratamientos',
                title: 'Tratamientos',
                templateUrl: 'app/pages/tratamientos/tratamientos.html',
                controller: "tratamientosCtrl",
                sidebarMeta: {
                    order: 700,
                    icon: 'ion-briefcase',
                    acceso: 5
                }
            })
            .state("iniciar_tratamiento", {
                url: '/iniciar_tratamiento',
                title: 'Iniciar Tratamiento',
                templateUrl: 'app/pages/tratamientos/iniciar_trat.html',
                controller: "iniciarTratamientoCtrl"
            })
            .state("ver_tratamientos", {
                url: '/ver_tratamientos',
                title: 'Tratamientos por cliente',
                templateUrl: 'app/pages/tratamientos/ver_trat.html',
                controller: "tratamientosPorClienteCtrl"
            })
            .state("tratamiento_detalles", {
                url: '/tratamiento_detalles/:id/:idcliente',
                title: 'Detalle Tratamiento',
                templateUrl: 'app/pages/tratamientos/detalles_trat.html',
                controller: "tratamientoDetallesCtrl"
            })
    }

})();