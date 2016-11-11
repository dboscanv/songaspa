(function () {
    'use strict';
    angular.module('BlurAdmin.pages.clientes', ['xeditable'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('clientes', {
                url: '/clientes',
                title: 'Clientes',
                templateUrl: 'app/pages/clientes/clientes.html',
                controller: "clienteCtrl",
                sidebarMeta: {
                    order: 800,
                    icon: 'ion-earth',
                    acceso: 4
                }
            })
            .state('crear_cliente', {
                url: "/crear_cliente",
                title: "Crear cliente",
                templateUrl: "app/pages/clientes/crear_cliente.html",
                controllerAs: 'vm',
                controller: 'crear_clienteCtrl'
            })
            .state('ver_cliente', {
                url: "/ver_cliente/:id",
                title: "Historia Médica",
                templateUrl: "app/pages/clientes/verCliente.html",
                controller: 'ver_clienteCtrl'
            })
    }
})();