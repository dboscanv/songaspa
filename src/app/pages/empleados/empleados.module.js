(function () {
    'use strict';
    angular.module('BlurAdmin.pages.empleados', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('empleados', {
                url: '/empleados',
                title: 'Empleados',
                templateUrl: 'app/pages/empleados/empleados.html',
                controller: "empleadosCtrl",
                sidebarMeta: {
                    order: 810,
                    icon: 'ion-person',
                    acceso: 1
                }
            })
            .state('verEmpleados', {
                url: '/empleados/:id',
                title: 'Perfil Empleado',
                templateUrl: 'app/pages/empleados/verEmpleados.html',
                controller: "verEmpleadosCtrl"
            })
            .state('crearEmpleados', {
                url: '/crear_empleado',
                title: 'CREAR UN EMPLEADO',
                templateUrl: 'app/pages/empleados/crear_empleado.html',
                controller: "crearEmpleadoCtrl"
            })
        
    }
})();