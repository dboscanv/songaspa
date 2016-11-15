/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    routeConfig.$inject = ["$urlRouterProvider", "baSidebarServiceProvider"];
    angular.module('BlurAdmin.pages', [
        'ui.router',
        'ngResource',
        'ngStorage',
        'angular-loading-bar',
        'BlurAdmin.pages.dashboard',
        'BlurAdmin.pages.profile',
        'BlurAdmin.pages.clientes',
        'BlurAdmin.pages.Login',
        'BlurAdmin.pages.empleados',
        'BlurAdmin.pages.precios',
        'BlurAdmin.pages.tratamientos',
        'BlurAdmin.pages.honorarios',
        'BlurAdmin.pages.citas',
        'BlurAdmin.pages.pagos'
    ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
        $urlRouterProvider.otherwise('/dashboard');

        // baSidebarServiceProvider.addStaticItem({
        //     title: 'Pages',
        //     icon: 'ion-document',
        //     subMenu: [{
        //         title: 'Sign In',
        //         fixedHref: 'auth.html',
        //         blank: true
        //     }, {
        //         title: 'Sign Up',
        //         fixedHref: 'reg.html',
        //         blank: true
        //     }, {
        //         title: 'User Profile',
        //         stateRef: 'profile'
        //     }, {
        //         title: '404 Page',
        //         fixedHref: '404.html',
        //         blank: true
        //     }]
        // });
        // baSidebarServiceProvider.addStaticItem({
        //     title: 'Menu Level 1',
        //     icon: 'ion-ios-more',
        //     subMenu: [{
        //         title: 'Menu Level 1.1',
        //         disabled: true
        //     }, {
        //         title: 'Menu Level 1.2',
        //         subMenu: [{
        //             title: 'Menu Level 1.2.1',
        //             disabled: true
        //         }]
        //     }]
        // });
    }

})();

/**
 * @author v.lugovsky
 * created on 15.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme', [
      'textAngular',
      'BlurAdmin.theme.components'
  ]);

})();

(function () {
    'use strict';

    routeConfig.$inject = ["$stateProvider"];
    angular
        .module('BlurAdmin.pages.citas', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state("citas", {
                url: '/citas',
                title: 'Citas',
                templateUrl: 'app/pages/citas/citas.html',
                controller: "citasCtrl",
                sidebarMeta: {
                    order: 900,
                    icon: 'ion-ios-list-outline',
                    acceso: "4"
                }
            })
    }

})();
(function () {
    'use strict';
    routeConfig.$inject = ["$stateProvider"];
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
/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    routeConfig.$inject = ["$stateProvider"];
    angular.module('BlurAdmin.pages.dashboard', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                // templateUrl: 'app/pages/dashboard/dashboard.html',
                title: 'Dashboard',
                sidebarMeta: {
                    icon: 'ion-android-home',
                    order: 0,
                    acceso: 5
                },
                views: {
                    "main": {
                        templateUrl: 'app/pages/login/login.html',
                        controller: "loginCtrl"
                    },
                    "": {
                        templateUrl: 'app/pages/dashboard/dashboard.html',
                        controller: "dashboardCtrl"
                    }
                }
            })
            .state("citasSecre", {
                url: '/citasSecre',
                title: 'Citas con secretaria',
                templateUrl: 'app/pages/dashboard/citasSecre.html',
                controller: "citasSecreCtrl"
            })
    }

})();

(function () {
    'use strict';
    routeConfig.$inject = ["$stateProvider"];
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
(function () {
    'use strict';

    routeConfig.$inject = ["$stateProvider"];
    angular
        .module('BlurAdmin.pages.honorarios', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state("honorarios", {
                url: '/honorarios',
                title: 'Honorarios',
                templateUrl: 'app/pages/honorarios/honorarios.html',
                controller: "honorariosCtrl",
                sidebarMeta: {
                    order: 500,
                    icon: 'ion-ios-list-outline',
                    acceso: "1"
                }
            })

            .state("historicoHonorarios", {
                url: '/historico',
                title: 'Histórico de Honorarios',
                templateUrl: 'app/pages/honorarios/historico.html',
                controller: "historicoCtrl"
            })
    }

})();
(function () {
    'use strict';
    routeConfig.$inject = ["$stateProvider"];
    angular.module('BlurAdmin.pages.Login', ['angular-jwt'])
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

(function () {
    'use strict';

    routeConfig.$inject = ["$stateProvider"];
    angular
        .module('BlurAdmin.pages.pagos', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state("pagos", {
                url: '/pagos',
                title: 'Pagos',
                templateUrl: 'app/pages/pagos/pagos.html',
                controller: "pagosCtrl",
                sidebarMeta: {
                    order: 1200,
                    icon: 'ion-ios-list-outline',
                    acceso: "1"
                }
            })

            // .state("historicoHonorarios", {
            //     url: '/historico',
            //     title: 'Historico de Honorarios',
            //     templateUrl: 'app/pages/honorarios/historico.html',
            //     controller: "historicoCtrl"
            // })
    }

})();
(function () {
    'use strict';

    preciosConfig.$inject = ["$stateProvider"];
    angular.module("BlurAdmin.pages.precios", [])
        .config(preciosConfig);

    /** @ngInject */
    function preciosConfig ($stateProvider) {
        $stateProvider
            .state("precios", {
                url: '/precios',
                title: 'Precios',
                templateUrl: 'app/pages/precios/precios.html',
                controller: "preciosCtrl",
                sidebarMeta: {
                    order: 800,
                    icon: 'ion-pricetags',
                    acceso: 1
                }
            });
    }
})();
/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  routeConfig.$inject = ["$stateProvider"];
  angular.module('BlurAdmin.pages.profile', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
      
    $stateProvider
        .state('profile', {
          url: '/profile',
          title: 'Profile',
          templateUrl: 'app/pages/profile/profile.html',
          controller: 'ProfilePageCtrl',
        });
  }

})();

(function () {
    'use strict';

    routeConfig.$inject = ["$stateProvider"];
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
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components', []);

})();

'use strict';

angular.module('BlurAdmin', [
    'ngAnimate',
    'ui.bootstrap',
    'ui.sortable',
    'ui.router',
    'ngTouch',
    'toastr',
    'smart-table',
    "xeditable",
    'ui.slimscroll',
    'ngJsTree',
    'angular-progress-button-styles',
    'ngResource',
    'angular-loading-bar',
    'ngMessages',
    'blockUI',
    'ui.bootstrap.datetimepicker',
    'angular-jwt',
    'mwl.calendar',
    
    'BlurAdmin.theme',
    'BlurAdmin.pages'
]);
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
(function () {
    'use strict';
    angular.module("BlurAdmin.pages")
        .constant("servidor", "http://104.196.154.203") //https://songa-backend2.herokuapp.com/
        .constant("cargos", [
            "Presidenta", "Secretaria", "Masajista", "Terapeuta"
        ])
        .constant("generos", [
            {nombre: "Masculino", value: "M"}, {nombre: "Femenino", value: "F"}
        ])
        .constant("estado_civil", [
            {
                nombre: "Soltera(o)",
                value: "Soltera"
            },
            {
                nombre: "Casada(o)",
                value: "Casada"
            },
            {
                nombre: "Viuda(o)",
                value: "Viuda"
            }
        ])
        .constant("formasDePago", [
            "Efectivo", "Débito", "Crédito", "Transferencia", "Depósito", "Cheque"
        ])
        .constant("logoB64", "data:image/jpeg;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//Z");
    //Produccion https://songa-backend.herokuapp.com/
    //Desarrollo http://localhost:3000/

    /** @ngInject */
})();

(function () {
    'use strict';
    angular.module("BlurAdmin.pages")
        .factory("comunFactory", comunFactory);

    comunFactory.$inject = ["logoB64","loginFactory"];

    /** @ngInject */
    function comunFactory (logoB64,loginFactory) {
      return {
            generarPDF: function (columnas,datos,tituloReporte) {
                var user = loginFactory.decodificarToken();
                if (datos.length <= 0) {
                    swal("ATENCIÓN", "No hay información parar imprimir, verifique y vuelva a intentarlo", "info");
                    return null;
                }
                var doc = new jsPDF('p', 'pt');
                var fecha = moment().format("DD/MM/YYYY hh:mm:ss A");

                var totalPagesExp = "{total_pages_count_string}";
                doc.autoTable(columnas, datos, {
                    theme: 'striped',
                    tableWidth: 'auto',
                    styles: {
                        fontSize: 7,
                        font: 'Arial',
                        lineWidth: 0.5,
                        rowHeight: 20,
                        overflow: 'linebreak',
                        valign: 'middle',
                        halign: 'center'
                    },
                    columnStyles: {
                        id: {fillColor: 99},
                        lineWidth: 2,
                        rowHeight: 20,
                        fontSize: 12,
                        font: 'Arial',
                        valign: 'middle',
                        halign: 'center',
                        overflow: 'linebreak'
                    },
                    headerStyles: {
                        fillColor: [0, 74, 136]
                    },
                    margin: {top: 150},
                    beforePageContent: function (data) {
                        doc.setTextColor(0, 0, 0);
                        doc.setFontSize(16);
                        doc.text(40, 60, 'Songa Spa');
                        doc.setFontSize(12);
                        doc.text(40, 75, "INVERSORA MARIELIX, C.A");
                        doc.text(40, 90, 'J-29465402-9');
                        doc.setTextColor(0, 20, 137);
                        doc.text(40, 105, tituloReporte);
                        doc.setTextColor(0, 0, 0);
                        // doc.text(40, 120, );
                        doc.addImage(logoB64, 'JPG', 330, 1, 230, 145);
                        // doc.setFontSize(12);
                        // doc.text('Nombre vendedor: ' + security.ObtenerNombre(), data.settings.margin.left, data.settings.margin.top - 10);
                    },
                    afterPageContent: function (data) {
                        var str = "Página " + data.pageCount;
                        // Total page number plugin only available in jspdf v1.0+
                        if (typeof doc.putTotalPages === 'function') {
                            str = str + " de " + totalPagesExp + " | Emisión: " + fecha;
                        }
                        
                        doc.setFontSize(7);
                        doc.text(str, data.settings.margin.left, doc.internal.pageSize.height - 30);
                        doc.text("Usuario: " + user.nombre + " " + user.apellido + " | Cargo: " + user.cargo, data.settings.margin.right + 350, doc.internal.pageSize.height - 30);

                    }
                });

                if (typeof doc.putTotalPages === 'function') {
                    doc.putTotalPages(totalPagesExp);
                }

                //Descarga
                doc.save('reporte.pdf'); //Exportar el pdf con una URL

            }
      }
    }
})();
(function () {
    'use strict';
    runConectado.$inject = ["$rootScope", "$state", "loginFactory", "$location"];
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
(function () {
    'use strict';
    pagesCtrl.$inject = ["$rootScope"];
    angular.module("BlurAdmin.pages")
        .controller("pagesCtrl", pagesCtrl);

    /** @ngInject */
    function pagesCtrl($rootScope) {

      

        

    }
})();
/**
 * Created by k.danovsky on 13.05.2016.
 */

(function () {
  'use strict';

  config.$inject = ["baConfigProvider", "colorHelper"];
  angular.module('BlurAdmin.theme')
    .config(config);

  /** @ngInject */
  function config(baConfigProvider, colorHelper) {
    //baConfigProvider.changeTheme({blur: true});
    //
    //baConfigProvider.changeColors({
    //  default: 'rgba(#000000, 0.2)',
    //  defaultText: '#ffffff',
    //  dashboard: {
    //    white: '#ffffff',
    //  },
    //});
  }
})();

/**
 * Created by k.danovsky on 13.05.2016.
 */

(function () {
  'use strict';

  configProvider.$inject = ["colorHelper"];
  var basic = {
    default: '#ffffff',
    defaultText: '#666666',
    border: '#dddddd',
    borderDark: '#aaaaaa',
  };

  // main functional color scheme
  var colorScheme = {
    primary: '#209e91',
    info: '#2dacd1',
    success: '#90b900',
    warning: '#dfb81c',
    danger: '#e85656',
  };

  // dashboard colors for charts
  var dashboardColors = {
    blueStone: '#005562',
    surfieGreen: '#0e8174',
    silverTree: '#6eba8c',
    gossip: '#b9f2a1',
    white: '#10c4b5',
  };

  angular.module('BlurAdmin.theme')
    .provider('baConfig', configProvider);

  /** @ngInject */
  function configProvider(colorHelper) {
    var conf = {
      theme: {
        blur: false,
      },
      colors: {
        default: basic.default,
        defaultText: basic.defaultText,
        border: basic.border,
        borderDark: basic.borderDark,

        primary: colorScheme.primary,
        info: colorScheme.info,
        success: colorScheme.success,
        warning: colorScheme.warning,
        danger: colorScheme.danger,

        primaryLight: colorHelper.tint(colorScheme.primary, 30),
        infoLight: colorHelper.tint(colorScheme.info, 30),
        successLight: colorHelper.tint(colorScheme.success, 30),
        warningLight: colorHelper.tint(colorScheme.warning, 30),
        dangerLight: colorHelper.tint(colorScheme.danger, 30),

        primaryDark: colorHelper.shade(colorScheme.primary, 15),
        infoDark: colorHelper.shade(colorScheme.info, 15),
        successDark: colorHelper.shade(colorScheme.success, 15),
        warningDark: colorHelper.shade(colorScheme.warning, 15),
        dangerDark: colorHelper.shade(colorScheme.danger, 15),

        dashboard: {
          blueStone: dashboardColors.blueStone,
          surfieGreen: dashboardColors.surfieGreen,
          silverTree: dashboardColors.silverTree,
          gossip: dashboardColors.gossip,
          white: dashboardColors.white,
        },
      }
    };

    conf.changeTheme = function(theme) {
      angular.merge(conf.theme, theme)
    };

    conf.changeColors = function(colors) {
      angular.merge(conf.colors, colors)
    };

    conf.$get = function () {
      delete conf.$get;
      return conf;
    };
    return conf;
  }
})();

/**
 * @author v.lugovsky
 * created on 15.12.2015
 */
(function () {
  'use strict';

  var IMAGES_ROOT = 'assets/img/';

  angular.module('BlurAdmin.theme')
    .constant('layoutSizes', {
      resWidthCollapseSidebar: 1200,
      resWidthHideSidebar: 500
    })
    .constant('layoutPaths', {
      images: {
        root: IMAGES_ROOT,
        profile: IMAGES_ROOT + 'app/profile/',
        amMap: 'assets/img/theme/vendor/ammap//dist/ammap/images/',
        amChart: 'assets/img/theme/vendor/amcharts/dist/amcharts/images/'
      }
    })
    .constant('colorHelper', {
      tint: function(color, weight) {
        return mix('#ffffff', color, weight);
      },
      shade: function(color, weight) {
        return mix('#000000', color, weight);
      },
    });

  function shade(color, weight) {
    return mix('#000000', color, weight);
  }

  function tint(color, weight) {
    return mix('#ffffff', color, weight);
  }

  //SASS mix function
  function mix(color1, color2, weight) {
    // convert a decimal value to hex
    function d2h(d) {
      return d.toString(16);
    }
    // convert a hex value to decimal
    function h2d(h) {
      return parseInt(h, 16);
    }

    var result = "#";
    for(var i = 1; i < 7; i += 2) {
      var color1Part = h2d(color1.substr(i, 2));
      var color2Part = h2d(color2.substr(i, 2));
      var resultPart = d2h(Math.floor(color2Part + (color1Part - color2Part) * (weight / 100.0)));
      result += ('0' + resultPart).slice(-2);
    }
    return result;
  }
})();

/**
 * @author v.lugovksy
 * created on 15.12.2015
 */
(function () {
  'use strict';

  themeRun.$inject = ["$timeout", "$rootScope", "layoutPaths", "preloader", "$q", "baSidebarService", "themeLayoutSettings"];
  angular.module('BlurAdmin.theme')
    .run(themeRun);

  /** @ngInject */
  function themeRun($timeout, $rootScope, layoutPaths, preloader, $q, baSidebarService, themeLayoutSettings) {
    var whatToWait = [
      // preloader.loadAmCharts(),
      $timeout(3000)
    ];

    var theme = themeLayoutSettings;
    if (theme.blur) {
      if (theme.mobile) {
        whatToWait.unshift(preloader.loadImg(layoutPaths.images.root + 'blur-bg-mobile.jpg'));
      } else {
        whatToWait.unshift(preloader.loadImg(layoutPaths.images.root + 'blur-bg.jpg'));
        whatToWait.unshift(preloader.loadImg(layoutPaths.images.root + 'blur-bg-blurred.jpg'));
      }
    }

    $q.all(whatToWait).then(function () {
      $rootScope.$pageFinishedLoading = true;
    });

    $timeout(function () {
      if (!$rootScope.$pageFinishedLoading) {
        $rootScope.$pageFinishedLoading = true;
      }
    }, 7000);

    $rootScope.$baSidebarService = baSidebarService;
  }

})();
/**
 * Created by k.danovsky on 12.05.2016.
 */

(function () {
  'use strict';

  themeLayoutSettings.$inject = ["baConfig"];
  angular.module('BlurAdmin.theme')
    .service('themeLayoutSettings', themeLayoutSettings);

  /** @ngInject */
  function themeLayoutSettings(baConfig) {
    var isMobile = (/android|webos|iphone|ipad|ipod|blackberry|windows phone/).test(navigator.userAgent.toLowerCase());
    var mobileClass = isMobile ? 'mobile' : '';
    var blurClass = baConfig.theme.blur ? 'blur-theme' : '';
    angular.element(document.body).addClass(mobileClass).addClass(blurClass);

    return {
      blur: baConfig.theme.blur,
      mobile: isMobile,
    }
  }

})();
(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.citas')
        .factory('citasFactory', citasFactory);

    citasFactory.$inject = ['$resource', 'servidor'];

    /* @ngInject */
    function citasFactory($resource,servidor) {
        return {
          agendar: function () {
              return $resource(servidor + 'citas/agendar',{},{});
          }
        }
    }

})();


(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.citas')
        .controller('citasCtrl', citasCtrl);

    citasCtrl.$inject = ['$scope','citasFactory','$state'];

    /* @ngInject */
    function citasCtrl($scope,citasFactory,$state) {
        $scope.popup = {};
        $scope.newCita = {};
        $scope.fecha = {};
        var fechaHoy = moment();
        
        //Configuracion para elegir le tiempo
        $scope.timeOptions = {
            minuteStep: 30
        };

        //Configuracion de las fechas
        $scope.dateOptions = {
            formatYear: 'YYYY',
            maxDate: fechaHoy.add(2,'M'),
            minDate: new Date(),
            startingDay: 1,
            showWeeks: false,
            clearText: "Reiniciar"
        };

        $scope.onSetTime = function () {
            $scope.fechainvalida = false;
            $scope.newCita.fecha = moment($scope.fecha.fecha_inicio).format();
            console.log($scope.newCita);
        };

        $scope.open = function () {
            $scope.popup.opened = true;
        };
        
        $scope.apartarCita = function () {
            citasFactory.agendar().save($scope.newCita).$promise.then(function (data) {
                if (data.status == 1) {
                    swal("ÉXITO", "Cita apartada con secretaria satisfactoriamente", "success");
                    $state.reload();
                } else if (data.status == 2) {
                    swal("ATENCIÓN", "Ha ocurrido un error", "error");
                    $state.reload();
                } else if (data.status == 6) {
                    swal("ATENCIÓN", "¡Ya hay una cita para esa fecha!", "error");
                    $state.reload();
                }
                else {
                    swal("ATENCIÓN", "No se establecio conexión con el servidor", "error");
                    console.log(data.salida);
                }
            }).catch(function (data) {
                swal("ATENCIÓN", "No se establecio conexión con el servidor", "error");
                console.log(data.salida);
            });
        };
        
    }

})();


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
(function () {
    'use strict';

    clienteCtrl.$inject = ["$scope", "clientesFactory", "comunFactory", "loginFactory"];
    angular.module("BlurAdmin.pages.clientes")
        .controller("clienteCtrl", clienteCtrl);

    /** @ngInject */
    function clienteCtrl($scope, clientesFactory, comunFactory,loginFactory) {
        //Cargar token
        var token = loginFactory.decodificarToken();


        //Cargar el listado
        clientesFactory.listado().get().$promise.then(function (data) {
            if (data.status == 1) {
                $scope.clientes = data.salida;
            } else if (data.status == 2) {
                swal("ATENCIÓN", "Ha ocurrido un error", "error");
                console.log(data.salida);
            } else {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data.salida);
            }
        }).catch(function (data) {
            swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
            console.log(data);
        });

        $scope.generarReporte = function () {
            var columnas = [
                {title: "Cédula", "dataKey": "_id"},
                {title: "Nombre", "dataKey": "nombre"},
                {title: "Apellido", "dataKey": "apellido"},
                {title: "Fecha nacimiento", "dataKey": "fechamodif"},
                {title: "Edad", "dataKey": "edad"},
                {title: "Sexo", "dataKey": "sexo"},
                {title: "Email", "dataKey": "email"}
            ];

            for (var x = 0; x < $scope.clientes.length; x++) {
                $scope.clientes[x].fechamodif = moment($scope.clientes[x].fechanac).format("DD/MM/YYYY");
            }

            comunFactory.generarPDF(columnas, $scope.clientes, "LISTADO DE CLIENTES");
        };

        $scope.eliminarCliente = function (id) {
            if (token.cargoCodigo !== 1) {
                swal("SIN PERMISO", "No estás autorizado para realizar esta acción", "info");
            } else {
                swal({
                        title: "¿Esta seguro que desea eliminar este cliente?",
                        text: "¡La información borrada no podrá ser recuperada!",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonClass: "btn-danger",
                        cancelButtonText: "Cancelar",
                        confirmButtonText: "Si, eliminar",
                        closeOnConfirm: false
                    },
                    function () {
                        clientesFactory.eliminar(id).remove().$promise.then(function (data) {
                            if (data.status == 1) {
                                swal("ÉXITO", "Cliente borrado satisfactoriamente", "success");
                                $state.reload();
                            } else if (data.status == 2) {
                                swal("ATENCIÓN", "Ha ocurrido un error", "error");
                                console.log(data.salida);
                            } else {
                                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                                console.log(data.salida);
                            }
                        }).catch(function (data) {
                            swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                            console.log(data.salida);
                        });
                    });
            }

        }
    }
})();
(function () {
    'use strict';

    clientesFactory.$inject = ["$resource", "servidor"];
    angular.module("BlurAdmin.pages.clientes")
        .factory("clientesFactory",clientesFactory);

    function clientesFactory ($resource,servidor) {
        return {
            listado: function () {
                return $resource(servidor + "clientes/listado",{}, {
                    update: {
                        METHOD: "PUT"
                    }
                });
            },
            crear: function () {
                return $resource(servidor + "clientes/crear", {},{});
            },
            obtener: function (id) {
                return $resource(servidor + "clientes/" + id, {}, {});
            },
            editar: function () {
                return $resource(servidor + "clientes/editar", {}, {});
            },
            eliminar: function (id) {
                return $resource(servidor + "clientes/borrar/" + id, {}, {});
            }
        }
    }
})();
(function () {
    'use strict';
    crear_clienteCtrl.$inject = ["$scope", "clientesFactory", "$state"];
    angular.module("BlurAdmin.pages.clientes")
        .controller("crear_clienteCtrl",crear_clienteCtrl);
    
    function crear_clienteCtrl ($scope, clientesFactory, $state) {

        var vm = this;

        $scope.cliente = {
            evaluacion_clinica: {
                hipertersion_arterial: false,
                hipotension: false,
                diabetes: false,
                renal: false,
                cardiopatio: false,
                circulacion: false,
                anticon_oral: false,
                tras_mens: false, //Buscar explicacion de mama
                f_u_r: false, //Buscar explicacion de mama
                d_i_u: false, //Buscar explicacion de mama
                tiroides: false,
                epilepsia: false,
                lupus: false,
                problemas_digestivos: false,
                estrenimiento: false,
                hepatitis: false,
                cancer: false,
                prob_urinarios: false,
                rete_liquidos: false,
                prob_respiratorios: false,
                asma: false,
                marcapasos: false,
                alergias: false,
                antecedentes_dermat: false,
                herpes: false,
                hongos: false,
                cesareas: false,
                recibido_anestesia: false,
                implantes: {
                    recibido_implantes: false,
                },
                lentes_contacto: false,
                fuma: false,
                toma: false,
                peeling: {
                    realizado_antes: false
                }
            },
            motivo_consulta: {

            },
        };

         $scope.guardarCliente = function () {

             clientesFactory.crear().save($scope.cliente).$promise.then(function (data) {
                 if(data.status == 1) {
                     swal("ÉXITO", "Cliente creado satisfactoriamente", "success");
                     $state.go("clientes");
                 } else if (data.status == 2) {
                     swal("ATENCIÓN", "Ha ocurrido un error", "error");
                     console.log(data.salida);
                 } else {
                     swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                     console.log(data.salida);
                 }
             }).catch(function (data) {
                 console.log(data);
             });
         }
    }
})();
(function () {
    'use strict';
    ver_clienteCtrl.$inject = ["clientesFactory", "$stateParams", "$scope", "$state", "generos", "estado_civil"];
    runForm.$inject = ["editableOptions"];
    angular.module('BlurAdmin.pages.clientes')
        .controller("ver_clienteCtrl", ver_clienteCtrl)
        .run(runForm);

    /** @ngInject */
    function ver_clienteCtrl(clientesFactory, $stateParams, $scope, $state, generos, estado_civil) {

        $scope.generos = generos;
        $scope.estado_civil = estado_civil;

        //Cargar el cliente
        clientesFactory.obtener($stateParams.id).get().$promise.then(function (data) {
            if (data.status == 1) {
                $scope.cliente = data.salida;
                $scope.cliente.fechanac = new Date($scope.cliente.fechanac);
            } else if (data.status == 2) {
                swal("ATENCIÓN", "Ha ocurrido un error", "error");
                console.log(data.salida);
            } else {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data.salida);
            }
        }).catch(function (data) {
            swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
            console.log(data);
        });

        $scope.abrirForm = function () {
            $scope.formHistoriaMedica.$show();
        };

        $scope.submitForm = function () {
            $scope.formHistoriaMedica.$submit();
        };

        $scope.editarCliente = function () {
            console.log("Aqui guardamos cliente");
            console.log($scope.cliente);
            clientesFactory.editar().save($scope.cliente).$promise.then(function (data) {
                if (data.status == 1) {
                    swal("ÉXITO", "Cliente modificado satisfactoriamente", "success");
                    $state.go("clientes");
                } else if (data.status == 2) {
                    swal("ATENCIÓN", "Ha ocurrido un error", "error");
                    console.log(data.salida);
                } else {
                    swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                    console.log(data.salida);
                }
            }).catch(function (data) {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data.salida);
            });
        };

        /*************VALIDACIONES EDITANDO***********/

        $scope.checkNumber = function (data, min, max) {
            console.log("Entro a check numero");
            var patron = /^[0-9]+$/;

            if (typeof data == "undefined") {
                return "Requerido";
            }

            if (!patron.test(data)) {
                return "Solo se permiten números";
            } else {
                if (data.length > max) {
                    return "El numero es muy largo";
                } else if (data.length < min) {
                    return "El numero es muy corto";
                }
            }
        };


        //Chequeando el texto
        $scope.checkTexto = function (data, min, max, req) {
            console.log(data);
            var patron = /^([A-Za-zÑñáéíóúÁÉÍÓÚ ]+)$/;
            console.log("Entro a check texto");
            if (typeof data == "undefined" && req) {
                return "Requerido";
            } else if (typeof data == "undefined" && !req) {
                console.log("NO HARA NADAAA");
            } else {
                if (!patron.test(data)) {
                    return "Solo se permiten letras";
                } else {
                    if (data.length > max) {
                        return "La cadena es muy larga";
                    } else if (data.length < min) {
                        return "La cadena es muy corta";
                    }
                }
            }


        };

        //Chequear email
        $scope.checkEmail = function (data) {
            var patron = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

            if (typeof data == "undefined") {
                return "Requerido";
            }

            if (!patron.test(data)) {
                return "No es un e-mail válido";
            }
        };

        //Chequear date
        $scope.checkDate = function (data, min, max) {
            if (typeof data == "undefined") {
                return "Requerido";
            }

            if (moment(data).isBefore(min)) {
                return "La fecha es muy antigua";
            } else if (moment(data).isAfter(max)) {
                return "La fecha es muy reciente";
            }
        };

        //Chequear longitud
        $scope.checkAlfaNumerico = function (data, min, max, req) {


            if (typeof data == "undefined" && req) {
                return "Requerido";
            }

            if (data.length > max) {
                return "La dirección es muy larga";
            } else if (data.length < min) {
                return "La dirección es muy corta";
            }


        };

        //Chequear select
        $scope.checkSelect = function (data, arreglo) {
            if (!arreglo.indexOf(data) > -1) {
                return "No selecciono una opción";
            }
        };

        function EspaciosVacios(data) {
            if (typeof data !== "undefined") {
                if (data.trim().length > 0)return true;
                else return false;
            }

        }

    }

    /** @ngInject */
    function runForm(editableOptions) {
        editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
    }
})();
(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.dashboard')
        .controller('citasSecreCtrl', citasSecreCtrl);

    citasSecreCtrl.$inject = ['$scope', 'calendarConfig', 'dashboardFactory', 'loginFactory', 'tratamientosFactory', '$state'];

    /* @ngInject */
    function citasSecreCtrl($scope, calendarConfig, dashboardFactory) {

        $scope.calendarView = "month"; //Variable que dice que va a mostrar el calendario
        $scope.viewDate = new Date(); //Variable que dira donde empezara a mostrar
        $scope.cellIsOpen = true;

        //Traerme eventos secretaria
        dashboardFactory.obtenerCitasSecre().get().$promise.then(function (data) {
            if (data.status == 1) {
                $scope.eventsSecre = data.salida;
                for (var x = 0; x < $scope.eventsSecre.length; x++) {
                    $scope.eventsSecre[x].startsAt = new Date($scope.eventsSecre[x].startsAt);
                }
            } else if (data.status == 5) {
                // swal("ATENCIÓN", "No hay trabajos pautados para este empleado", "info");
            } else {
                swal("ATENCIÓN", "Ha ocurrido un error", "error");
            }
        }).catch(function (data) {
            swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
            console.log(data.salida);
        });

    }

})();



(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.dashboard')
        .factory('dashboardFactory', dashboardFactory);

    dashboardFactory.$inject = ['$resource', 'servidor'];

    /* @ngInject */
    function dashboardFactory($resource, servidor) {
        return {
            obtenerCalendario: function (idEmpleado) {
                return $resource(servidor + "citas/obtenerCalendario/" + idEmpleado, {}, {});
            },
            obtenerTodo: function (idEmpleado) {
                return $resource(servidor + "citas/obtenerCalendario", {}, {});
            },
            obtenerCitasSecre: function () {
                return $resource(servidor + "citas/obtenerCitas",{},{});
            }
        }
    }
})();


(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.dashboard')
        .controller('dashboardCtrl', dashboardCtrl);

    dashboardCtrl.$inject = ['$scope', 'calendarConfig', 'dashboardFactory', 'loginFactory', 'tratamientosFactory', '$state'];

    /* @ngInject */
    function dashboardCtrl($scope, calendarConfig, dashboardFactory, loginFactory, tratamientosFactory, $state) {

        $scope.calendarView = "month"; //Variable que dice que va a mostrar el calendario
        $scope.viewDate = new Date(); //Variable que dira donde empezara a mostrar
        $scope.cellIsOpen = true;
        var token = loginFactory.decodificarToken();
        $scope.cargoCodigo = token.cargoCodigo;
        $scope.empleadoSelec = {};
        //
        // //Va a cambiar la agenda por cada cambio de empleado
        // $scope.cambiarAgenda = function () {
        //     //Traerme los eventos
        //     dashboardFactory.obtenerCalendario($scope.empleadoSelec.CI).get().$promise.then(function (data) {
        //         if (data.status == 1) {
        //             $scope.events = data.salida;
        //             for (var x = 0; x < $scope.events.length; x++) {
        //                 $scope.events[x].startsAt = new Date($scope.events[x].startsAt);
        //             }
        //         } else if (data.status == 5) {
        //             swal("ATENCIÓN", "No hay trabajos pautados para este empleado", "info");
        //         } else {
        //             swal("ATENCIÓN", "Ha ocurrido un error", "error");
        //         }
        //     }).catch(function (data) {
        //         swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
        //         console.log(data.salida);
        //     });
        // };
        //
        // //Obtener empleados
        // tratamientosFactory.obtenerEmpleados().get().$promise.then(function (data) {
        //     if (data.status == 1) {
        //         $scope.empleados = data.salida;
        //     } else if (data.status == 2) {
        //         swal("ATENCIÓN", "Ha ocurrido un error", "error");
        //     } else {
        //         swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
        //         console.log(data.salida);
        //     }
        // }).catch(function (data) {
        //     swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
        //     console.log(data.salida);
        // });


        if (token.cargoCodigo == 1) {
            //Traerme los eventos
            dashboardFactory.obtenerTodo().get().$promise.then(function (data) {
                if (data.status == 1) {
                    $scope.events = data.salida;
                    for (var x = 0; x < $scope.events.length; x++) {
                        $scope.events[x].startsAt = new Date($scope.events[x].startsAt);
                    }
                } else if (data.status == 2) {
                    swal("ATENCIÓN", "Ha ocurrido un error", "error");
                } else if (data.status == 5) {
                    // swal("ATENCIÓN", "No hay trabajos pautados", "info");
                }
            }).catch(function (data) {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data.salida);
            });
        } else {
            //Traerme los eventos
            dashboardFactory.obtenerCalendario(token.sub).get().$promise.then(function (data) {
                if (data.status == 1) {
                    $scope.events = data.salida;
                    for (var x = 0; x < $scope.events.length; x++) {
                        $scope.events[x].startsAt = new Date($scope.events[x].startsAt);
                        console.log(new Date($scope.events[x].startsAt));
                    }
                } else if (data.status == 5) {
                    $scope.events = [];
                } else {
                    swal("ATENCIÓN", "Ha ocurrido un error", "error");
                }
            }).catch(function (data) {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data.salida);
            });
        }

        //Traerme eventos secretaria
        dashboardFactory.obtenerCitasSecre().get().$promise.then(function (data) {
            if (data.status == 1) {
                $scope.eventsSecre = data.salida;
                for (var x = 0; x < $scope.eventsSecre.length; x++) {
                    $scope.eventsSecre[x].startsAt = new Date($scope.eventsSecre[x].startsAt);
                }
            } else if (data.status == 5) {
                // swal("ATENCIÓN", "No hay trabajos pautados para este empleado", "info");
            } else {
                swal("ATENCIÓN", "Ha ocurrido un error", "error");
            }
        }).catch(function (data) {
            swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
            console.log(data.salida);
        });

    }

})();



(function () {
    'use strict';

    crearEmpleadoCtrl.$inject = ["$scope", "cargos", "empleadosFactory", "$state"];
    angular.module("BlurAdmin.pages.empleados")
        .controller("crearEmpleadoCtrl", crearEmpleadoCtrl);
    /** @ngInject */
    function crearEmpleadoCtrl($scope, cargos, empleadosFactory,$state) {
        $scope.cargos = cargos;
        $scope.empleado = {};
        console.log($scope.cargos);

        $scope.crearEmpleado = function () {
            empleadosFactory.crear().save($scope.empleado).$promise.then(function (data) {
                if(data.status == 1) {
                    swal("ÉXITO", "Empleado creado satisfactoriamente", "success");
                    $state.go("empleados");
                } else if (data.status == 2) {
                    swal("ATENCIÓN", "Ha ocurrido un error", "error");
                    console.log(data.salida);
                } else {
                    swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                    console.log(data.salida);
                }
            }).catch(function (data) {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data.salida);
            });
        };
    }
})();
(function () {
    'use strict';

    empleadosFactory.$inject = ["$resource", "servidor"];
    angular.module("BlurAdmin.pages.clientes")
        .factory("empleadosFactory",empleadosFactory);

    function empleadosFactory ($resource,servidor) {
        return {
            listado: function () {
                return $resource(servidor + "empleados",{}, {
                    update: {
                        METHOD: "PUT"
                    }
                });
            },
            obtener: function (id) {
                return $resource(servidor + "empleados/" + id, {}, {});
            },
            editar: function () {
                return $resource(servidor + "empleados/modificar", {}, {});
            },
            crear: function () {
                return $resource(servidor + "empleados/crear", {},{});
            },
            eliminar: function (id) {
                return $resource(servidor + "empleados/borrar/" + id, {},{});
            }
        }
    }
})();
(function () {
    'use strict';

    empleadosCtrl.$inject = ["$scope", "empleadosFactory", "$state", "comunFactory"];
    angular.module("BlurAdmin.pages.empleados")
        .controller("empleadosCtrl",empleadosCtrl);
    /** @ngInject */
    function empleadosCtrl ($scope,empleadosFactory,$state, comunFactory) {
        //Cargar el listado
        empleadosFactory.listado().get().$promise.then(function (data) {
            if(data.status == 1){
                $scope.empleados = data.salida;
            } else if (data.status == 2) {
                swal("ATENCIÓN", "Ha ocurrido un error", "error");
                console.log(data.salida);
            } else {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data.salida);
            }
        }).catch(function (data) {
            swal("ATENCIÓN", "No se establecio conexión con el servidor", "error");
            console.log(data);
        });

        $scope.generarReporte = function () {
            var columnas = [
                {title:"Cédula", "dataKey":"_id"},
                {title:"Nombre", "dataKey":"nombre"},
                {title:"Apellido", "dataKey":"apellido"},
                {title:"Fecha nacimiento", "dataKey":"fechamodif"},
                {title:"Edad", "dataKey":"edad"},
                {title:"Correo", "dataKey":"correo"},
                {title:"Cargo", "dataKey":"cargo"}
            ];

            for (var x = 0; x < $scope.empleados.length; x++) {
                $scope.empleados[x].fechamodif = moment($scope.empleados[x].fechanac).format("DD/MM/YYYY");
            }


            comunFactory.generarPDF(columnas,$scope.empleados,"LISTADO DE EMPLEADOS");
        };

        $scope.eliminarEmpleado = function (id) {
            swal({
                    title: "¿Esta seguro que desea eliminar este empleado?",
                    text: "¡La información borrada no podrá ser recuperada!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonClass: "btn-danger",
                    cancelButtonText: "Cancelar",
                    confirmButtonText: "Si, eliminar",
                    closeOnConfirm: false
                },
                function(){
                    empleadosFactory.eliminar(id).remove().$promise.then(function (data) {
                        if(data.status == 1){
                            swal("ÉXITO", "Empleado borrado satisfactoriamente", "success");
                            $state.reload();
                        } else if (data.status == 2) {
                            swal("ATENCIÓN", "Ha ocurrido un error", "error");
                            console.log(data.salida);
                        } else {
                            swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                            console.log(data.salida);
                        }
                    }).catch(function (data) {
                        swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                        console.log(data.salida);
                    });
                });
        };

    }
})();
(function () {
    'use strict';

    verEmpleadosCtrl.$inject = ["$scope", "empleadosFactory", "$stateParams", "$state", "cargos"];
    angular.module("BlurAdmin.pages.empleados")
        .controller("verEmpleadosCtrl",verEmpleadosCtrl);

    /** @ngInject */
    function verEmpleadosCtrl ($scope,empleadosFactory, $stateParams,$state,cargos) {
        $scope.cargos = cargos;

        empleadosFactory.obtener($stateParams.id).get().$promise.then(function (data) {
            if(data.status == 1) {
                $scope.empleado = data.salida;
                $scope.empleado.fechanac = new Date($scope.empleado.fechanac);
                console.log($scope.empleado);
            } else if (data.status == 2) {
                swal("ATENCIÓN", "Ha ocurrido un error", "error");
                console.log(data.salida);
            } else {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data.salida);
            }
        }).catch(function (data) {
            console.log(data);
            swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
            console.log(data.salida);
        });
        
        $scope.editarEmpleado = function () {
            console.log($scope.empleado);
            empleadosFactory.editar().save($scope.empleado).$promise.then(function (data) {
                if(data.status == 1) {
                    swal("ÉXITO", "Empleado modificado satisfactoriamente", "success");
                    $state.go("empleados");
                } else if (data.status == 2) {
                    swal("ATENCIÓN", "Ha ocurrido un error", "error");
                    console.log(data.salida);
                } else {
                    swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                    console.log(data.salida);
                }
            }).catch(function (data) {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data);
            });
        };
        
        $scope.abrirForm = function () {
            $scope.formEmpleado.$show();
        };
        
        $scope.submitForm = function () {
            $scope.formEmpleado.$submit();
        };

        /*************VALIDACIONES EDITANDO***********/

        $scope.checkNumber = function (data, min, max) {
            console.log("Entro a check numero");
            var patron = /^[0-9]+$/;

            if (typeof data == "undefined") {
                return "Requerido";
            }

            if (!patron.test(data)) {
                return "Solo se permiten números";
            } else {
                if (data.length > max) {
                    return "El numero es muy largo";
                } else if (data.length < min) {
                    return "El numero es muy corto";
                }
            }
        };


        //Chequeando el texto
        $scope.checkTexto = function (data, min, max, req) {
            console.log(data);
            var patron = /^([A-Za-zÑñáéíóúÁÉÍÓÚ ]+)$/;
            console.log("Entro a check texto");
            if (typeof data == "undefined" && req) {
                return "Requerido";
            } else if (typeof data == "undefined" && !req) {
                console.log("NO HARA NADAAA");
            } else {
                if (!patron.test(data)) {
                    return "Solo se permiten letras";
                } else {
                    if (data.length > max) {
                        return "La cadena es muy larga";
                    } else if (data.length < min) {
                        return "La cadena es muy corta";
                    }
                }
            }


        };

        //Chequear email
        $scope.checkEmail = function (data) {
            var patron = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

            if (typeof data == "undefined") {
                return "Requerido";
            }

            if (!patron.test(data)) {
                return "No es un e-mail válido";
            }
        };

        //Chequear date
        $scope.checkDate = function (data, min, max) {
            if (typeof data == "undefined") {
                return "Requerido";
            }

            if (moment(data).isBefore(min)) {
                return "La fecha es muy antigua";
            } else if (moment(data).isAfter(max)) {
                return "La fecha es muy reciente";
            }
        };

        //Chequear longitud
        $scope.checkAlfaNumerico = function (data, min, max, req) {


            if (typeof data == "undefined" && req) {
                return "Requerido";
            }

            if (data.length > max) {
                return "La dirección es muy larga";
            } else if (data.length < min) {
                return "La dirección es muy corta";
            }


        };

        //Chequear select
        $scope.checkSelect = function (data, arreglo) {
            if (!arreglo.indexOf(data) > -1) {
                return "No selecciono una opción";
            }
        };


    }
})();
(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.honorarios')
        .controller('historicoCtrl', historicoCtrl);

    historicoCtrl.$inject = ['$scope', 'honorariosFactory', 'tratamientosFactory', 'comunFactory'];

    /* @ngInject */
    function historicoCtrl($scope, honorariosFactory, tratamientosFactory, comunFactory) {
        $scope.empleadoSelec = {};
        $scope.hArray = {};
        $scope.fechas = {};

        //Metodo para validar las fechas
        $scope.validarFecha = function (numero) {
            if (numero == 2) {
                if (typeof $scope.fechas.uno == "undefined") {
                    return null;
                }

                if (moment($scope.fechas.dos).isBefore(moment($scope.fechas.uno))) {
                    swal("ATENCIÓN", "La fecha final no puede estar antes de la fecha inicial", "info");
                    delete $scope.fechas.dos;
                }
            } else if (numero == 1) {
                if (moment($scope.fechas.uno).isAfter(moment($scope.fechas.dos))) {
                    swal("ATENCIÓN", "La fecha inicial no puede estar después de la fecha final", "info");
                    delete $scope.fechas.uno;
                } else {
                    console.log("NO ESTA DESPUES");
                }
            }
        };

        //Obtener empleados
        tratamientosFactory.obtenerEmpleados().get().$promise.then(function (data) {
            if (data.status == 1) {
                $scope.empleados = data.salida;
            } else if (data.status == 2) {
                swal("ATENCIÓN", "Ha ocurrido un error", "error");
            } else {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data.salida);
            }
        }).catch(function (data) {
            swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
            console.log(data.salida);
        });

        //Obtener el historico de pagos
        honorariosFactory.historico().get().$promise.then(function (data) {
            if (data.status == 1) {
                $scope.historico = data.salida;
            } else if (data.status == 2) {
                swal("ATENCIÓN", "Ha ocurrido un error", "error");
            } else if (data.status == 5) {
                swal("ATENCIÓN", "Este empleado no tiene honorarios", "info");
            } else {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data);
            }
        }).catch(function (data) {
            swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
            console.log(data);
        });

        $scope.generarReporte = function () {
            console.log($scope.hArray.historicoFiltrado);
            //Este reporte es por empleados OK!
            for (var x = 0; x < $scope.hArray.historicoFiltrado.length; x++) {
                $scope.hArray.historicoFiltrado[x].nombre = $scope.hArray.historicoFiltrado[x].idempleado.nombre + " " + $scope.hArray.historicoFiltrado[x].idempleado.apellido;
            }
            console.log($scope.hArray.historicoFiltrado);
            var columnas = [
                {title: "Fecha", "dataKey": "fechamodif"},
                {title: "Empleado", "dataKey": "nombre"},
                {title: "Tratamientos", "dataKey": "total_tratamientos"},
                {title: "IVA", "dataKey": "iva"},
                {title: "Estética", "dataKey": "total_porcentaje"},
                {title: "Total pagado", "dataKey": "total_pagado"}
            ];

            for (var x = 0; x < $scope.hArray.historicoFiltrado.length; x++) {
                $scope.hArray.historicoFiltrado[x].fechamodif = moment($scope.hArray.historicoFiltrado[x].fecha_pago).format("DD/MM/YYYY hh:mm A");
            }

            comunFactory.generarPDF(columnas, $scope.hArray.historicoFiltrado, "HISTORICO DE HONORARIOS");
        };

    }

})();


(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.honorarios')
        .factory('honorariosFactory', honorariosFactory);

    honorariosFactory.$inject = ['$resource', 'servidor', '$localStorage'];

    /* @ngInject */
    function honorariosFactory($resource,servidor,$localStorage) {
        return {
            trabajosXEmpleado: function (idEmpleado) {
                return $resource(servidor + "honorarios/" + idEmpleado, {},{});
            },
            obtenerPorcentaje: function () {
                if (typeof $localStorage.porcentaje === "undefined" || $localStorage.porcentaje === null) {
                    return 1;
                }
                return $localStorage.porcentaje;
            },
            guardarPorcentaje: function (porc) {
                $localStorage.porcentaje = porc;
            },
            Pagar: function () {
                return $resource(servidor + "honorarios/pagar/",{},{});
            },
            historico: function () {
                return $resource(servidor + "honorarios",{},{});
            }
        }
    }

})();


(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.honorarios')
        .controller('honorariosCtrl', honorariosCtrl);

    honorariosCtrl.$inject = ['$scope', 'tratamientosFactory', 'honorariosFactory','$state'];

    /* @ngInject */
    function honorariosCtrl($scope, tratamientosFactory, honorariosFactory,$state) {
        $scope.empleadoSelec = {};
        $scope.porcentaje = honorariosFactory.obtenerPorcentaje();
        $scope.porcentajeOriginal = honorariosFactory.obtenerPorcentaje();

        //Obtener empleados
        tratamientosFactory.obtenerEmpleados().get().$promise.then(function (data) {
            if (data.status == 1) {
                $scope.empleados = data.salida;
            } else if (data.status == 2) {
                swal("ATENCIÓN", "Ha ocurrido un error", "error");
            } else {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data.salida);
            }
        }).catch(function (data) {
            swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
            console.log(data.salida);
        });

        $scope.pedirTrabajos = function () {
            console.log($scope.empleadoSelec);
            honorariosFactory.trabajosXEmpleado($scope.empleadoSelec.CI).get().$promise.then(function (data) {
                if (data.status == 1) {
                    $scope.detalles = data.salida;
                    Calculos();
                } else if (data.status == 2) {
                    swal("ATENCIÓN", "Ha ocurrido un error", "error");
                } else if (data.status == 5) {
                    swal("ATENCIÓN", data.mensaje, "info");
                    $scope.detalles = null;
                } else {
                    swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                    console.log(data);
                }
            }).catch(function (data) {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data);
            });
        };

        $scope.guardarPorcentaje = function () {

            if ($scope.porcentaje <= 0) {
                swal("ATENCIÓN", "El porcentaje de la estética no puede estar vacío ni ser cero", "info");
                $scope.porcentaje = honorariosFactory.obtenerPorcentaje();
            }
            honorariosFactory.guardarPorcentaje(parseInt($scope.porcentaje));
            $scope.porcentajeOriginal = $scope.porcentaje;
            Calculos();
            swal("ÉXITO", "Porcentaje cambiado exitosamente", "info");
        };

        $scope.Pagar = function () {
            var Pago = {
                idempleado: $scope.empleadoSelec.CI,
                total_tratamientos: $scope.totalTrabajos,
                iva: $scope.IVA,
                total_porcentaje: $scope.estetica,
                total_pagado: $scope.totalPago,
                fecha_pago: new Date(),
                Trabajos: $scope.detalles
            };

            console.log(Pago);

            honorariosFactory.Pagar().save(Pago).$promise.then(function (data) {
                if (data.status == 1) {
                    swal("ÉXITO", "El honorario ha sido registrado con éxito", "success");
                    $state.reload();
                } else if (data.status == 2) {
                    swal("ATENCIÓN", "Ha ocurrido un error", "error");
                } else {
                    swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                    console.log(data);
                }
            }).catch(function (data) {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data);
            });


        };

        function Calculos() {
            var acum = 0;
            for (var x = 0; x < $scope.detalles.length; x++) {
                acum += parseInt($scope.detalles[x].trabajo_popular.precio);
            }
            //Total de los trabajos
            $scope.totalTrabajos = acum;
            $scope.IVA = acum * 0.12;
            $scope.estetica = (acum - $scope.IVA) * ($scope.porcentajeOriginal / 100);
            $scope.totalPago = acum - $scope.IVA - $scope.estetica;
        }
    }

})();


(function () {
    'use strict';

    loginFactory.$inject = ["$resource", "servidor", "$sessionStorage", "jwtHelper"];
    angular.module("BlurAdmin.pages.Login")
        .factory("loginFactory", loginFactory);

    function loginFactory($resource, servidor, $sessionStorage,jwtHelper) {
        return {
            loginCliente: function () {
                return $resource(servidor + "cliente", {}, {
                    update: {
                        METHOD: 'PUT'
                    }
                });
            },
            loginEmpleado: function () {
                return $resource(servidor + "login/empleado", {}, {
                    update: {
                        METHOD: 'PUT'
                    }
                });
            },
            guardarToken: function (token) {
                $sessionStorage.token = token;
                console.log("Token guardado");
            },
            decodificarToken: function () {
                var deco = jwtHelper.decodeToken($sessionStorage.token);
                return deco;
            },
            isLogged: function () {
                if (typeof $sessionStorage.token === "undefined" || $sessionStorage.token == null) {
                    return false;
                } else {
                    return true
                }
            },
            eliminarToken: function () {
                delete $sessionStorage.token;
            },
            cambiarClave: function () {
                return $resource(servidor + "empleados/cambiarClave",{},{});
            }
        }
    }
})();
(function () {
    'use strict';

    loginCtrl.$inject = ["$scope", "$rootScope", "loginFactory", "$sessionStorage", "$state", "$location", "jwtHelper"];
    angular.module('BlurAdmin.pages.Login')
        .controller('loginCtrl', loginCtrl);

    /** @ngInject */
    function loginCtrl($scope, $rootScope, loginFactory, $sessionStorage, $state, $location, jwtHelper) {

        $scope.persona = {};
        console.log("Entro :)");


        $scope.iniciarEmpleado = function () {
            console.log("Entre a iniciarEmpleado");
            loginFactory.loginEmpleado().save(JSON.stringify($scope.persona)).$promise.then(function (data) {
                if (data.status == 1) {
                    loginFactory.guardarToken(data.salida);
                    $rootScope.$LOGUEADO = true;
                    var agarra = loginFactory.decodificarToken();
                    console.log(agarra);
                    $location.path("/dashboard");
                } else if (data.status == 2) {
                    swal("ATENCIÓN", "Ha ocurrido un error", "error");
                    console.log(data.salida);
                } else if (data.status == 4) {
                    swal("ATENCIÓN", "Falto el usuario o clave", "info");
                    console.log(data.salida);
                } else if (data.status == 5) {
                    swal("ATENCIÓN", "Usuario o clave inválida", "info");
                    console.log(data.salida);
                } else {
                    swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                    console.log(data.salida);
                }
            }).catch(function (data) {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data.salida);
            });
        }
    }

})();
(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.pagos')
        .controller('pagosCtrl', pagosCtrl);

    pagosCtrl.$inject = ['$scope', 'pagosFactory', 'comunFactory'];

    /* @ngInject */
    function pagosCtrl($scope, pagosFactory, comunFactory) {
        $scope.CI = {};
        $scope.nombreEmpleado = "";
        $scope.fechas = {};
        $scope.filtradoArr = {};

        $scope.verPagos = function () {
            console.log("Aja?");
            pagosFactory.obtener($scope.CI.CI).get().$promise.then(function (data) {
                if (data.status == 1) {
                    $scope.detalles = data.salida[0].pagos;
                    $scope.nombreEmpleado = data.salida[0].nombre + " " + data.salida[0].apellido;
                    console.log($scope.detalles);
                    if ($scope.detalles.length <= 0) {
                        swal("ATENCIÓN", "El cliente no ha realizado pagos", "info");
                    }
                } else if (data.status == 2) {
                    swal("ATENCIÓN", "Ha ocurrido un error", "error");
                } else if (data.status == 5) {
                    swal("ATENCIÓN", "El cliente ingresado no tiene trabajos por pagar o la cédula es incorrecta", "info");
                } else {
                    swal("ATENCIÓN", "No se establecio conexión con el servidor", "error");
                    console.log(data);
                }
            }).catch(function (data) {
                swal("ATENCIÓN", "No se establecio conexión con el servidor", "error");
                console.log(data);
            });
        };

        $scope.generarReporte = function () {
            var columnas = [
                {title: "Fecha", "dataKey": "fechamodif"},
                {title: "Concepto", "dataKey": "concepto"},
                {title: "Forma de pago", "dataKey": "forma_pago"},
                {title: "Monto", "dataKey": "monto"}
            ];

            for (var x = 0; x < $scope.detalles.length; x++) {
                $scope.detalles[x].concepto = $scope.detalles[x].id_trabajo.nombre_trabajo;
                $scope.detalles[x].fechamodif = moment($scope.detalles[x].fecha_pago).format("DD/MM/YYYY hh:mm A");
            }

            comunFactory.generarPDF(columnas, $scope.filtradoArr.Arr, "Pagos del cliente: " + $scope.nombreEmpleado);

        };

        $scope.validarFecha = function (numero) {

            // if (typeof $scope.fechas.uno == "undefined" || typeof $scope.fechas.dos == "undefined") {
            //     return null;
            // }

            if (numero == 2) {
                if (typeof $scope.fechas.uno == "undefined") {
                    return null;
                }

                if (moment($scope.fechas.dos).isBefore(moment($scope.fechas.uno))) {
                    swal("ATENCIÓN", "La fecha final no puede estar antes de la fecha inicial", "info");
                    delete $scope.fechas.dos;
                }
            } else if (numero == 1) {
                if (moment($scope.fechas.uno).isAfter(moment($scope.fechas.dos))) {
                    swal("ATENCIÓN", "La fecha inicial no puede estar después de la fecha final", "info");
                    delete $scope.fechas.uno;
                } else {
                    console.log("NO ESTA DESPUES");
                }
            }
        };

    }

})();


(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.pagos')
        .factory('pagosFactory', pagosFactory);

    pagosFactory.$inject = ['$resource', 'servidor', '$localStorage'];

    /* @ngInject */
    function pagosFactory($resource,servidor,$localStorage) {
        return {
           obtener: function (idcliente) {
               return $resource(servidor + "pagos/" + idcliente,{},{});
           }
        }
    }

})();


(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.precios')
        .factory('preciosFactory', preciosFactory);

    preciosFactory.$inject = ['$resource', 'servidor'];

    /* @ngInject */
    function preciosFactory($resource, servidor) {
       return {
           obtener: function () {
               return $resource(servidor + "trabajos", {},{});
           },
           editar: function (id) {
               return $resource(servidor + "trabajos/modificar/" + id, {},{});
           },
           crear: function () {
               return $resource(servidor + "trabajos/agregar", {},{});
           },
           eliminar: function (id) {
               return $resource(servidor + "trabajos/borrar/" + id, {}, {});
           }
       }
    }

})();


(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.precios')
        .controller('preciosCtrl', preciosCtrl);

    preciosCtrl.$inject = ['$scope', 'preciosFactory', '$uibModal', '$state', 'comunFactory'];

    /* @ngInject */
    function preciosCtrl($scope, preciosFactory, $uibModal, $state, comunFactory) {
        $scope.newTrabajo = {};
        $scope.trabajos = [];
        //Traerme los trabajos

        preciosFactory.obtener().get().$promise.then(function (data) {
            if (data.status == 1) {
                $scope.trabajos = data.salida;
            } else if (data.status == 2) {
                swal("ATENCIÓN", "Ha ocurrido un error", "error");
                console.log(data.salida);
            } else {
                swal("ATENCIÓN", "No se establecio conexión con el servidor", "error");
                console.log(data.salida);
            }
        }).catch(function (data) {
            swal("ATENCIÓN", "No se establecio conexión con el servidor", "error");
            console.log(data.salida);
        });

        //Funcion para editar un precio o trabajo
        $scope.editarTrabajo = function (trabajo) {
            console.log(trabajo);
            preciosFactory.editar(trabajo._id).save(trabajo).$promise.then(function (data) {
                if (data.status == 1) {
                    swal("ÉXITO", "Precio modificado satisfactoriamente", "success");
                } else if (data.status == 2) {
                    swal("ATENCIÓN", "Ha ocurrido un error", "error");
                    console.log(data.salida);
                } else {
                    swal("ATENCIÓN", "No se establecio conexión con el servidor", "error");
                    console.log(data.salida);
                }
            }).catch(function (data) {
                swal("ATENCIÓN", "No se establecio conexión con el servidor", "error");
                console.log(data.salida);
            });
        };

        //Funcion para abrir un modal
        $scope.abrirModal = function () {
            $uibModal.open({
                animation: true,
                templateUrl: "app/pages/precios/crear_precio.html",
                size: 'md',
                controller: "preciosCtrl",
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });
        };

        $scope.crearTrabajo = function (aca) {

            console.log($scope.newTrabajo);
            preciosFactory.crear().save($scope.newTrabajo).$promise.then(function (data) {
                if (data.status == 1) {
                    swal("ÉXITO", "Trabajo agregado satisfactoriamente", "success");
                    aca.$close();
                    $state.reload();
                } else if (data.status == 2) {
                    swal("ATENCIÓN", "Ha ocurrido un error", "error");
                    console.log(data.salida);
                } else {
                    swal("ATENCIÓN", "No se establecio conexión con el servidor", "error");
                    console.log(data.salida);
                }
            }).catch(function (data) {
                swal("ATENCIÓN", "No se establecio conexión con el servidor", "error");
                console.log(data.salida);
            });
        };

        $scope.eliminarTrabajo = function (id) {
            swal({
                    title: "¿Esta seguro que desea eliminar este trabajo?",
                    text: "¡La información borrada no podrá ser recuperada!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonClass: "btn-danger",
                    cancelButtonText: "Cancelar",
                    confirmButtonText: "Si, eliminar",
                    closeOnConfirm: false
                },
                function () {
                    preciosFactory.eliminar(id).remove().$promise.then(function (data) {
                        if (data.status == 1) {
                            swal("ÉXITO", "Trabajo eliminado satisfactoriamente", "success");
                            $state.reload();
                        } else if (data.status == 2) {
                            swal("ATENCIÓN", "Ha ocurrido un error", "error");
                            console.log(data.salida);
                        } else {
                            swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                            console.log(data.salida);
                        }
                    }).catch(function (data) {
                        swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                        console.log(data.salida);
                    });
                });
        };

        $scope.generarReporte = function () {
            var columnas = [
                {title: "Nombre", "dataKey": "nombre_trabajo"},
                {title: "Precio", "dataKey": "precio"}
            ];
            comunFactory.generarPDF(columnas, $scope.trabajos, "LISTADO DE PRECIOS");
        };

        /*************VALIDACIONES EDITANDO***********/

        $scope.checkNumber = function (data, min, max) {
            console.log("Entro a check numero");
            var patron = /^[0-9]+$/;

            if (typeof data == "undefined") {
                return "Requerido";
            }

            if (!patron.test(data)) {
                return "Solo se permiten números";
            } else {
                if (data > parseInt(max)) {
                    return "El precio es muy elevado";
                } else if (data < parseInt(min)) {
                    return "El precio es muy bajo";
                }
            }
        };


        //Chequeando el texto
        $scope.checkTexto = function (data, min, max, req) {
            console.log(data);
            var patron = /^([A-Za-zÑñáéíóúÁÉÍÓÚ ]+)$/;
            console.log("Entro a check texto");
            if (typeof data == "undefined" && req) {
                return "Requerido";
            } else if (typeof data == "undefined" && !req) {
                console.log("NO HARA NADAAA");
            } else {
                if (!patron.test(data)) {
                    return "Solo se permiten letras";
                } else {
                    if (data.length > max) {
                        return "La cadena es muy larga";
                    } else if (data.length < min) {
                        return "La cadena es muy corta";
                    }
                }
            }


        };

    }

})();


/**
 * @author a.demeshko
 * created on 21.01.2016
 */
(function () {
  'use strict';

  ProfileModalCtrl.$inject = ["$scope", "$uibModalInstance"];
  angular.module('BlurAdmin.pages.profile')
    .controller('ProfileModalCtrl', ProfileModalCtrl);

  /** @ngInject */
  function ProfileModalCtrl($scope, $uibModalInstance) {
    $scope.link = '';
    $scope.ok = function () {
      $uibModalInstance.close($scope.link);
    };
  }

})();
/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    ProfilePageCtrl.$inject = ["$scope", "fileReader", "$filter", "$uibModal", "cargos", "loginFactory", "empleadosFactory", "$state"];
    angular.module('BlurAdmin.pages.profile')
        .controller('ProfilePageCtrl', ProfilePageCtrl);

    /** @ngInject */
    function ProfilePageCtrl($scope, fileReader, $filter, $uibModal, cargos, loginFactory, empleadosFactory,$state) {
        $scope.picture = $filter('profilePicture')('Nasta');
        $scope.cargos = cargos;
        $scope.claves = {};

        //Obtenemos el token
        $scope.user = loginFactory.decodificarToken();
        $scope.userPerfil = {
            _id: $scope.user.sub,
            nombre: $scope.user.nombre,
            apellido: $scope.user.apellido,
            fechanac: new Date($scope.user.fechanac),
            cargo: $scope.user.cargo,
            edad: $scope.user.edad
        };

        $scope.abrirForm = function () {
            $scope.perfilForm.$show();
        };

        $scope.submitForm = function () {
            $scope.perfilForm.$submit();
        };

        //Editar
        $scope.editarPerfil = function () {
            empleadosFactory.editar().save($scope.userPerfil).$promise.then(function (data) {
                if (data.status == 1) {
                    swal("ÉXITO", "Perfil modificado satisfactoriamente, para ver los cambios debe de iniciar sesión nuevamente", "success");
                    $state.reload();
                } else if (data.status == 2) {
                    swal("ATENCIÓN", "Ha ocurrido un error", "error");
                    console.log(data.salida);
                } else {
                    swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                    console.log(data.salida);
                }
            }).catch(function (data) {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data.salida);
            });
        };

        //Cambiar clave
        $scope.CambiarClave = function () {

            if ($scope.claves.uno !== $scope.claves.dos) {
                swal("ATENCIÓN", "Las claves no coinciden", "error");
            } else {
                var nuevo = {
                    cedula: $scope.user.sub,
                    clave_actual: $scope.claves.actual,
                    clave: $scope.claves.uno
                };
                loginFactory.cambiarClave().save(nuevo).$promise.then(function (data) {
                    if (data.status == 1) {
                        swal("ÉXITO", "Clave cambiada exitosamente", "info");
                    } else if (data.status == 3) {
                        swal("ATENCIÓN", "La clave no pudo ser cambiada, verifique la clave actual", "info");
                    } else {
                        swal("ATENCIÓN", "No estableció conexión con el servidor", "error");
                    }
                }).catch(function (data) {
                    console.log(data);
                    swal("ATENCIÓN", "No estableció conexión con el servidor", "error");

                });
            }


        };

        /*************VALIDACIONES EDITANDO***********/

        $scope.checkNumber = function (data, min, max) {
            console.log("Entro a check numero");
            var patron = /^[0-9]+$/;

            if (typeof data == "undefined") {
                return "Requerido";
            }

            if (!patron.test(data)) {
                return "Solo se permiten números";
            } else {
                if (data.length > max) {
                    return "El numero es muy largo";
                } else if (data.length < min) {
                    return "El numero es muy corto";
                }
            }
        };


        //Chequeando el texto
        $scope.checkTexto = function (data, min, max, req) {
            console.log(data);
            var patron = /^([A-Za-zÑñáéíóúÁÉÍÓÚ ]+)$/;
            console.log("Entro a check texto");
            if (typeof data == "undefined" && req) {
                return "Requerido";
            } else if (typeof data == "undefined" && !req) {
                console.log("NO HARA NADAAA");
            } else {
                if (!patron.test(data)) {
                    return "Solo se permiten letras";
                } else {
                    if (data.length > max) {
                        return "La cadena es muy larga";
                    } else if (data.length < min) {
                        return "La cadena es muy corta";
                    }
                }
            }


        };

        //Chequear email
        $scope.checkEmail = function (data) {
            var patron = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

            if (typeof data == "undefined") {
                return "Requerido";
            }

            if (!patron.test(data)) {
                return "No es un e-mail válido";
            }
        };

        //Chequear date
        $scope.checkDate = function (data, min, max) {
            if (typeof data == "undefined") {
                return "Requerido";
            }

            if (moment(data).isBefore(min)) {
                return "La fecha es muy antigua";
            } else if (moment(data).isAfter(max)) {
                return "La fecha es muy reciente";
            }
        };

        //Chequear longitud
        $scope.checkAlfaNumerico = function (data, min, max, req) {


            if (typeof data == "undefined" && req) {
                return "Requerido";
            }

            if (data.length > max) {
                return "La dirección es muy larga";
            } else if (data.length < min) {
                return "La dirección es muy corta";
            }


        };

        //Chequear select
        $scope.checkSelect = function (data, arreglo) {
            if (!arreglo.indexOf(data) > -1) {
                return "No selecciono una opción";
            }
        };

    }

})();

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


(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.tratamientos')
        .controller('iniciarTratamientoCtrl', iniciarTratamientoCtrl);

    iniciarTratamientoCtrl.$inject = ['$scope', "tratamientosFactory", "$state"];

    /* @ngInject */
    function iniciarTratamientoCtrl($scope, tratamientosFactory, $state) {
        $scope.finish = false;
        $scope.CI_CLIENTE = {};
        $scope.newTratamiento = {};
        $scope.fecha = {};
        $scope.fechainvalida = true; //Por defecto la fecha es invalida, ya que esta vacía
        $scope.popup = {};
        var fechaHoy = moment();

        $scope.HoyHora = new Date();



        //Configuracion de las fechas
        $scope.dateOptions = {
            formatYear: 'YYYY',
            maxDate: fechaHoy.add(2,'M'),
            minDate: new Date(),
            startingDay: 1,
            showWeeks: false,
            clearText: "Reiniciar"
        };

        //Configuracion para elegir le tiempo
        $scope.timeOptions = {
            minuteStep: 30
        };

        $scope.open = function () {
          $scope.popup.opened = true;
        };

        $scope.prueba = function () {
          console.log($scope.fecha.fechita);
        };

        $scope.onSetTime = function () {
            //Validar primero que la fecha es valida
            console.log(moment());
            console.log(moment($scope.fecha.fecha_inicio));
            console.log(moment($scope.fecha.fecha_inicio).isBefore(moment(), 'hour'));
            // if () {
            //     console.log("Entro");
            // } else {
            //     console.log("Entro también");
            // }

            $scope.fechainvalida = false;
            $scope.newTratamiento.fecha_inicio = moment($scope.fecha.fecha_inicio).format();
        };

        //Obtener trabajos
        tratamientosFactory.obtenerTrabajos().get().$promise.then(function (data) {
            if (data.status == 1) {
                $scope.trabajos = data.salida;
            } else if (data.status == 2) {
                swal("ATENCIÓN", "Ha ocurrido un error", "error");
                $state.reload();
            } else {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data.salida);
                $state.reload();
            }
        }).catch(function (data) {
            swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
            console.log(data.salida);
            $state.reload();
        });

        //Obtener empleados
        tratamientosFactory.obtenerEmpleados().get().$promise.then(function (data) {
            if (data.status == 1) {
                $scope.empleados = data.salida;
            } else if (data.status == 2) {
                swal("ATENCIÓN", "Ha ocurrido un error", "error");
                $state.reload();
            } else {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data.salida);
                $state.reload();
            }
        }).catch(function (data) {
            swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
            console.log(data.salida);
            $state.reload();
        });

        $scope.siguiente = function () {
            $scope.step3 = true;
        };

        $scope.finalizar = function () {
            console.log($scope.newTratamiento);
            tratamientosFactory.iniciarTratamiento($scope.CI_CLIENTE.CI).save($scope.newTratamiento).$promise.then(function (data) {
                if (data.status == 1) {
                    swal("ÉXITO", "Tratamiento creado satisfactoriamente", "success");
                    $state.go("tratamientos");
                } else if (data.status == 2) {
                    swal("ATENCIÓN", "Ha ocurrido un error", "error");
                    $state.reload();
                } else if (data.status == 6) {
                    swal("SIN DISPONIBLIIDAD", "El empleado o el cliente ya tienen asignado un trabajo para esa fecha", "error");
                } else {
                    swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                    console.log(data.salida);
                }
            }).catch(function (data) {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data.salida);
                $state.reload();
            });
        };

        $scope.buscarCliente = function () {
            tratamientosFactory.obtenerCliente($scope.CI_CLIENTE.CI).get().$promise.then(function (data) {
                if (data.status == 1) {
                    $scope.cliente = data.salida;
                    $scope.step2 = true;
                } else if (data.status == 2) {
                    swal("ATENCIÓN", "Ha ocurrido un error", "error");
                    console.log(data.salida);
                } else if (data.status == 5) {
                    swal("NO EXISTE", "La cédula ingresada no existe", "error");
                    console.log(data.salida);
                }  else {
                    swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                    console.log(data.salida);
                }
            }).catch(function (data) {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data.salida);
            });
        }
    }

})();


(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.tratamientos')
        .controller('tratamientoDetallesCtrl', tratamientoDetallesCtrl);

    tratamientoDetallesCtrl.$inject = ['$scope', 'tratamientosFactory', '$stateParams', '$uibModal', '$state', '$timeout', '$location'];

    /* @ngInject */
    function tratamientoDetallesCtrl($scope, tratamientosFactory, $stateParams, $uibModal, $state, $timeout,$location) {
        $scope.newCita = {};
        $scope.popup = {};
        $scope.fecha = {};
        var fechaHoy = moment();
        $scope.idTratamiento = $stateParams.id;
        $scope.idCliente = $stateParams.idcliente;
        $scope.cliente = {};

        tratamientosFactory.obtenerEmpleados().get().$promise.then(function (data) {
            if (data.status == 1) {
                $scope.empleados = data.salida;
            } else if (data.status == 2) {
                swal("ATENCIÓN", "Ha ocurrido un error", "error");
            } else {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data.salida);
            }
        }).catch(function (data) {
            swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
            console.log(data.salida);
        });

        tratamientosFactory.obtenerTrabajos().get().$promise.then(function (data) {
            if (data.status == 1) {
                $scope.trabajos = data.salida;
            } else if (data.status == 2) {
                swal("ATENCIÓN", "Ha ocurrido un error", "error");
            } else {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data.salida);
            }
        }).catch(function (data) {
            swal("ATENCIÓN", "No se establecio conexión con el servidor", "error");
            console.log(data.salida);
            $state.reload();
        });

        //Obtener los pagos
        tratamientosFactory.traerPagos($scope.idCliente).get().$promise.then(function (data) {
            if (data.status == 1) {
                $scope.pagos = data.salida[0].pagos;
            } else if (data.status == 2) {
                swal("ATENCIÓN", "Ha ocurrido un error, intentelo nuevamente", "error");
                console.log(data.salida);
            } else if (data.status == 5) {
                $scope.pagos = [];
            } else {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data.salida);
            }
        }).catch(function (data) {
            swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
            console.log(data.salida);
        });

        //Obteniendo los datos del tratamiento
        tratamientosFactory.obtenerTratamiento($stateParams.id).get().$promise.then(function (data) {
            if (data.status == 1) {
                $scope.tratamiento = data.salida.tratamientos[0];
                //Dar formato a la salida
                DarFormato($scope.tratamiento);
                $scope.cliente.nombre = data.salida.nombre;
                $scope.cliente.apellido = data.salida.apellido;
            } else if (data.status == 2) {
                swal("ATENCIÓN", "Ha ocurrido un error", "error");
            } else {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data.salida);
            }
        }).catch(function (data) {
            swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
            console.log(data.salida);
        });

        //Funcion para citar un nuevo trabajo
        $scope.citarTrabajo = function () {
            $uibModal.open({
                animation: true,
                templateUrl: "app/pages/tratamientos/modal_citar.html",
                size: 'md',
                controller: "tratamientoDetallesCtrl"
            });
        };

        $scope.onSetTime = function () {
            $scope.fechainvalida = false;
            $scope.newCita.fecha = moment($scope.fecha.fecha).format();
            console.log($scope.newCita);
        };

        //Configuracion de las fechas
        $scope.dateOptions = {
            formatYear: 'YYYY',
            maxDate: fechaHoy.add(2, 'M'),
            minDate: new Date(),
            startingDay: 1,
            showWeeks: false,
            clearText: "Reiniciar"
        };

        //Configuracion para elegir le tiempo
        $scope.timeOptions = {
            minuteStep: 30
        };

        $scope.open = function () {
            $scope.popup.opened = true;
        };

        //Finalmente, citar un nuevo trabajo
        $scope.citar = function (modal) {
            tratamientosFactory.guardarTrabajo($stateParams.id, $stateParams.idcliente).save($scope.newCita).$promise.then(function (data) {
                if (data.status == 1) {
                    swal("ÉXITO", "Cita guardada satisfactoriamente", "success");
                    $timeout(function () {
                        $state.reload();
                        modal.$dismiss();
                    }, 1000);
                } else if (data.status == 2) {
                    swal("ATENCIÓN", "Ha ocurrido un error", "error");
                } else if (data.status == 6) {
                    swal("SIN DISPONIBLIIDAD", "El empleado o el cliente ya tienen asignado un trabajo para esa fecha", "error");
                } else {
                    swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                    console.log(data.salida);
                }
            }).catch(function (data) {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data.salida);
            });
        };

        $scope.pagarTratamiento = function () {

            $uibModal.open({
                animation: true,
                templateUrl: "app/pages/tratamientos/modal_pagar.html",
                size: 'sm',
                controller: "tratamientosPagosCtrl",
                scope: $scope
            });
        };

        $scope.abrirModalPagoTrabajo = function (trabajo) {
            $scope.trabajoSeleccionado = trabajo;
            console.log($scope.trabajoSeleccionado);
            $uibModal.open({
                animation: true,
                templateUrl: "app/pages/tratamientos/modal_trabajo_pagar.html",
                size: 'sm',
                controller: "tratamientosPagosTrabajosCtrl",
                scope: $scope
            });
        };

        $scope.finalizarTratamiento = function () {
            tratamientosFactory.finalizarTratamiento($scope.idTratamiento).get().$promise.then(function (data) {
                if (data.status == 1) {
                    swal("ÉXITO", "Tratamiento finalizado con éxito", "success");
                    $state.go("ver_tratamientos");
                } else if (data.status == 2) {
                    swal("ATENCIÓN", "Ha ocurrido un error", "error");
                } else if (data.status == 4) {
                    swal("TRABAJOS SIN PAGAR", "Este tratamiento tiene trabajos sin pagar, no se puede finalizar", "error");
                } else {
                    swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                    console.log(data.salida);
                }
            }).catch(function (data) {
                swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                console.log(data.salida);
            });
        };

        $scope.verificarPago = function (trabajo) {
            // tratamientosFactory.verificarPago(trabajo._id).get().$promise.then(function (data) {
            //     if (data.status == 1) {
            //         return "SI";
            //     } else if (data.status == 2) {
            //         return "NO";
            //         console.log(data);
            //     } else if (data.status == 5) {
            //         return "NO";
            //     } else {
            //         console.log(data);
            //         return "NO";
            //     }
            // }).catch(function (data) {
            //     console.log(data);
            //     return "NO";
            // });
        };

        function DarFormato(tratamiento) {
            console.log(tratamiento);
            for (var x = 0; x < tratamiento.trabajos.length; x++) {
                for (var y = 0; y < $scope.pagos.length; y++) {
                    if(tratamiento.trabajos[x]._id == $scope.pagos[y].trabajo_realizado) {
                        console.log("¡¡¡Encontro un pago!!!");
                        tratamiento.trabajos[x].pagado = true;
                    }
                }
                if (!tratamiento.trabajos[x].pagado) {
                    tratamiento.trabajos[x].pagado = false;
                }
            }
        }

    }

})();


(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.tratamientos')
        .factory('tratamientosFactory', tratamientosFactory);

    tratamientosFactory.$inject = ['$resource', 'servidor'];

    /* @ngInject */
    function tratamientosFactory($resource, servidor) {
        return {
            obtenerCliente: function (id) {
                return $resource(servidor + "clientes/resumido/" + id, {}, {});
            },
            obtenerTrabajos: function () {
                return $resource(servidor + "trabajos", {}, {});
            },
            obtenerEmpleados: function () {
                return $resource(servidor + "empleados", {}, {});
            },
            iniciarTratamiento: function (id) {
                return $resource(servidor + "tratamientos/iniciar/" + id, {},{});
            },
            tratamientosPorCliente: function (id) {
                return $resource(servidor + "clientes/tratamientos/" + id, {},{});
            },
            obtenerTratamiento: function (id) {
                return $resource(servidor + "tratamientos/" + id, {},{});
            },
            guardarTrabajo: function (id, idcliente) {
                return $resource(servidor + "tratamientos/trabajos/" + id + "/" + idcliente, {},{});
            },
            obtenerMontoTratamiento: function (id) {
                return $resource(servidor + "tratamientos/pagoTotal/" + id, {},{});
            },
            guardarPago: function (id, idTratamiento) {
                return $resource(servidor + "tratamientos/pagos/" + id + "/" + idTratamiento, {},{});
            },
            ignorarTrabajo: function (id, idTrabajo) {
                return $resource(servidor + "tratamientos/ignorar/" + id + "/" + idTrabajo, {},{});
            },
            pagarTodo: function (id, idTratamiento) {
                return $resource(servidor + "tratamientos/pagosTodo/" + id + "/" + idTratamiento, {},{});
            },
            finalizarTratamiento: function (idTrat) {
                return $resource(servidor + "tratamientos/finalizar/" + idTrat, {},{});
            },
            verificarPago: function (idTrabajo) {
                return $resource(servidor + "tratamientos/verificarPago/" + idTrabajo, {},{});
            },
            traerPagos: function (idCliente) {
                return $resource(servidor + "tratamientos/verPagos/" + idCliente, {},{});
            }
        }
    }

})();


(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.tratamientos')
        .controller('tratamientosCtrl', tratamientosCtrl);

    tratamientosCtrl.$inject = ['$scope', '$uibModal'];

    /* @ngInject */
    function tratamientosCtrl($scope, $uibModal) {
      
    }

})();


(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.tratamientos')
        .controller('tratamientosPagosCtrl', tratamientosPagosCtrl);

    tratamientosPagosCtrl.$inject = ['$scope', 'tratamientosFactory', '$stateParams', 'formasDePago','$state'];

    /* @ngInject */
    function tratamientosPagosCtrl($scope, tratamientosFactory, $stateParams, formasDePago,$state) {
        $scope.pago = {};
        $scope.formas = formasDePago;
        $scope.form = {};
        $scope.pago.monto = 0;

        // //Obtener monto
        // tratamientosFactory.obtenerMontoTratamiento($scope.idTratamiento).get().$promise.then(function (data) {
        //     if (data.status == 1) {
        //         $scope.pago.monto = data.salida;
        //     } else if (data.status == 2) {
        //         swal("ATENCIÓN", "Ha ocurrido un error", "error");
        //     } else if (data.status == 5) {
        //         swal("NO EXISTE", "", "error");
        //     } else {
        //         swal("ATENCIÓN", "No se establecio conexión con el servidor", "error");
        //         console.log(data.salida);
        //     }
        // }).catch(function (data) {
        //     swal("ATENCIÓN", "No se establecio conexión con el servidor", "error");
        //     console.log(data.salida);
        // });

        //Obteniendo el monto
        for (var x = 0; x < $scope.tratamiento.trabajos.length; x++) {
            if (!$scope.tratamiento.trabajos[x].pagado) {
                $scope.pago.monto += parseInt($scope.tratamiento.trabajos[x].id_trabajo.precio);
            }
        }

        if ($scope.pago.monto == 0) {
            swal("TRABAJOS PAGOS", "Todos los trabajos de este tratamiento ya están pagos, no hay nada que pagar", "info");
            $state.reload();
        }

        $scope.registrarPagoCompleto = function (modal) {
            if (typeof $scope.pago.comprobante === "undefined") {
                console.log("Pago con efectivo, credito o debido");
                $scope.pago.comprobante = "";
            }
            console.log($scope.pago);
            swal({
                    title: "¿Esta seguro que desea registrar el pago de un tratamiento completo?",
                    text: "Si existen trabajos que ya han sido pagados, no serán pagados nuevamente",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonClass: "btn-success",
                    cancelButtonText: "Cancelar",
                    confirmButtonText: "Si, registrar pago completo",
                    closeOnConfirm: false
                },
                function () {
                    // $scope.pago.trabajo_realizado = $scope.trabajoSeleccionado._id;
                    // $scope.pago.monto = $scope.trabajoSeleccionado.id_trabajo.precio;
                    // $scope.pago.id_trabajo = $scope.trabajoSeleccionado.id_trabajo;
                    // var pago = {
                    //       trabajo_realizado:
                    // };
                    tratamientosFactory.pagarTodo($scope.idCliente, $scope.idTratamiento).save($scope.pago).$promise.then(function (data) {
                        if (data.status == 1) {
                            swal("ÉXITO", "¡Los trabajos han sido pagados!", "success");
                            modal.$dismiss();
                            $state.reload();
                        } else if (data.status == 2) {
                            swal("ATENCIÓN", "Ha ocurrido un error", "error");
                        } else if (data.status == 5) {
                            swal("ATENCIÓN", "No se encontraron trabajos para ese tratamiento", "error");
                        } else {
                            swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                            console.log(data.salida);
                        }
                    }).catch(function (data) {
                        swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                        console.log(data.salida);
                    });
                });
        }
    }

})();


(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.tratamientos')
        .controller('tratamientosPagosTrabajosCtrl', tratamientosPagosTrabajosCtrl);

    tratamientosPagosTrabajosCtrl.$inject = ['$scope', 'tratamientosFactory', '$stateParams','formasDePago','$state'];

    /* @ngInject */
    function tratamientosPagosTrabajosCtrl($scope, tratamientosFactory, $stateParams, formasDePago,$state) {
        $scope.formas = formasDePago;
        $scope.form = {};
        $scope.bandera1 = false;
        $scope.pago = {};

        $scope.registrarPagoTrabajo = function (modal) {
            $scope.pago.trabajo_realizado = $scope.trabajoSeleccionado._id;
            $scope.pago.monto = $scope.trabajoSeleccionado.id_trabajo.precio;
            $scope.pago.id_trabajo = $scope.trabajoSeleccionado.id_trabajo;
            console.log($scope.pago);
            tratamientosFactory.guardarPago($scope.idCliente, $scope.idTratamiento).save($scope.pago).$promise.then(function (data) {
                if (data.status == 1) {
                    swal("ÉXITO", "Pago registrado con éxito", "success");
                } else if (data.status == 2) {
                    swal("ATENCIÓN", "Ha ocurrido un error", "error");
                } else if (data.status == 6) {
                    swal("ATENCIÓN", "Este trabajo ya ha sido pagado", "error");
                } else {
                    swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                    console.log(data.salida);
                }
            }).catch(function (data) {
                    swal("ATENCIÓN", "No se estableció conexión con el servidor", "error");
                    console.log(data.salida);
            });
            modal.$dismiss();
        };

        $scope.pagarBandera = function () {
            $scope.titulo = "Registrar pago de un trabajo - " + $scope.cliente.nombre + " " + $scope.cliente.apellido;
            $scope.bandera1 = true;
        };

        $scope.ignorarTrabajo = function () {
          tratamientosFactory.ignorarTrabajo($scope.idTratamiento,$scope.trabajoSeleccionado._id).get().$promise.then(function (data) {
              if(data.status == 1) {
                  swal("ÉXITO", "El cliente no asistio ese día", "success");
                  $state.reload();
              } else{
                  swal("ATENCIÓN", "No se establecio conexión con el servidor", "error");
                  console.log(data.salida);
              }

          }).catch(function (data) {
              console.log(data);
          });
        };

    }

})();


(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.tratamientos')
        .controller('tratamientosPorClienteCtrl', tratamientosPorClienteCtrl);

    tratamientosPorClienteCtrl.$inject = ['$scope', 'tratamientosFactory', "$state"];

    /* @ngInject */
    function tratamientosPorClienteCtrl($scope, tratamientosFactory,$state) {
        $scope.CI = {};

        $scope.buscar = function () {
            //Obtener tratamientos por cliente
            tratamientosFactory.tratamientosPorCliente($scope.CI.CI).get().$promise.then(function (data) {
                if (data.status == 1) {
                    $scope.tratamientos = data.salida;
                } else if (data.status == 2) {
                    swal("ATENCIÓN", "Ha ocurrido un error", "error");
                    $state.reload();
                } else if (data.status == 5) {
                    swal("NO EXISTE", "El cliente no tiene tratamientos o la cédula ingresada no existe", "error");
                    console.log(data.salida);
                }  else {
                    swal("ATENCIÓN", "No se establecio conexión con el servidor", "error");
                    console.log(data.salida);
                    $state.reload();
                }
            }).catch(function (data) {
                console.log(data);
                swal("ATENCIÓN", "No se establecio conexión con el servidor", "error");
                console.log(data.salida);
                $state.reload();
            });
        };



    }

})();


/**
 * @author v.lugovksy
 * created on 15.12.2015
 */
(function () {
  'use strict';

  toastrLibConfig.$inject = ["toastrConfig"];
  angular.module('BlurAdmin.theme.components')
      .config(toastrLibConfig);

  /** @ngInject */
  function toastrLibConfig(toastrConfig) {
    angular.extend(toastrConfig, {
      closeButton: true,
      closeHtml: '<button>&times;</button>',
      timeOut: 5000,
      autoDismiss: false,
      containerId: 'toast-container',
      maxOpened: 0,
      newestOnTop: true,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
      preventOpenDuplicates: false,
      target: 'body'
    });
  }
})();
/**
 * Change top "Daily Downloads", "Active Users" values with animation effect
 */
(function () {
  'use strict';

  animatedChange.$inject = ["$timeout"];
  angular.module('BlurAdmin.theme')
      .directive('animatedChange', animatedChange);

  /** @ngInject */
  function animatedChange($timeout) {
    return {
      link: function (scope, element) {
        $timeout(function () {
          var newValue = element.attr('new-value');
          var oldvalue = parseInt(element.html());

          function changeValue(val) {
            $timeout(function () {
              element.html(val);
            }, 30);
          }

          if (newValue > oldvalue) {
            for (var i = oldvalue; i <= newValue; i++) {
              changeValue(i);
            }
          } else {
            for (var j = oldvalue; j >= newValue; j--) {
              changeValue(j);
            }
          }
          $timeout(function () {
            element.next().find('i').addClass('show-arr');
          }, 500);
        }, 3500);
      }
    };
  }

})();
/**
 * Auto expand textarea field
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
      .directive('autoExpand', autoExpand);

  /** @ngInject */
  function autoExpand() {
    return {
      restrict: 'A',
      link: function ($scope, elem) {
        elem.bind('keydown', function ($event) {
          var element = $event.target;
          $(element).height(0);
          var height = $(element)[0].scrollHeight;
          height = (height < 16) ? 16 : height;
          $(element).height(height);
        });

        // Expand the textarea as soon as it is added to the DOM
        setTimeout(function () {
          var element = elem;
          $(element).height(0);
          var height = $(element)[0].scrollHeight;
          height = (height < 16) ? 16 : height;
          $(element).height(height);
        }, 0)
      }
    };
  }

})();
(function () {
  'use strict';

  autoFocus.$inject = ["$timeout", "$parse"];
  angular.module('BlurAdmin.theme')
      .directive('autoFocus', autoFocus);

  /** @ngInject */
  function autoFocus($timeout, $parse) {
    return {
      link: function (scope, element, attrs) {
        var model = $parse(attrs.autoFocus);
        scope.$watch(model, function (value) {
          if (value === true) {
            $timeout(function () {
              element[0].focus();
              element[0].select();
            });
          }
        });
        element.bind('blur', function () {
          scope.$apply(model.assign(scope, false));
        });
      }
    };
  }

})();
/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
      .directive('includeWithScope', includeWithScope);

  /** @ngInject */
  function includeWithScope() {
    return {
      restrict: 'AE',
      templateUrl: function(ele, attrs) {
        return attrs.includeWithScope;
      }
    };
  }

})();

/**
 * @author a.demeshko
 * created on 22.12.2015
 */
(function () {
  'use strict';

  ionSlider.$inject = ["$timeout"];
  angular.module('BlurAdmin.theme')
    .directive('ionSlider', ionSlider);

  /** @ngInject */
  function ionSlider($timeout) {
    return {
      restrict: 'EA',
      template: '<div></div>',
      replace: true,
      scope: {
        min: '=',
        max: '=',
        type: '@',
        prefix: '@',
        maxPostfix: '@',
        prettify: '=',
        prettifySeparator: '@',
        grid: '=',
        gridMargin: '@',
        postfix: '@',
        step: '@',
        hideMinMax: '@',
        hideFromTo: '@',
        from: '=',
        to: '=',
        disable: '=',
        onChange: '=',
        onFinish: '=',
        values: '=',
        timeout: '@'
      },
      link: function ($scope, $element) {
            $element.ionRangeSlider({
              min: $scope.min,
              max: $scope.max,
              type: $scope.type,
              prefix: $scope.prefix,
              maxPostfix: $scope.maxPostfix,
              prettify_enabled: $scope.prettify,
              prettify_separator: $scope.prettifySeparator,
              grid: $scope.grid,
              gridMargin: $scope.gridMargin,
              postfix: $scope.postfix,
              step: $scope.step,
              hideMinMax: $scope.hideMinMax,
              hideFromTo: $scope.hideFromTo,
              from: $scope.from,
              to: $scope.to,
              disable: $scope.disable,
              onChange: $scope.onChange,
              onFinish: $scope.onFinish,
              values: $scope.values
            });

            $scope.$watch('min', function (value) {
              $timeout(function () {
                $element.data("ionRangeSlider").update({min: value});
              });
            }, true);
            $scope.$watch('max', function (value) {
              $timeout(function () {
                $element.data("ionRangeSlider").update({max: value});
              });
            });
            $scope.$watch('from', function (value) {
              $timeout(function () {
                $element.data("ionRangeSlider").update({from: value});
              });
            });
            $scope.$watch('to', function (value) {
              $timeout(function () {
                $element.data("ionRangeSlider").update({to: value});
              });
            });
            $scope.$watch('disable', function (value) {
              $timeout(function () {
                $element.data("ionRangeSlider").update({disable: value});
              });
            });
      }
    };
  }

})();
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
      .directive('ngFileSelect', ngFileSelect);

  /** @ngInject */
  function ngFileSelect() {
    return {
      link: function ($scope, el) {
        el.bind('change', function (e) {
          $scope.file = (e.srcElement || e.target).files[0];
          $scope.getFile();
        })
      }
    }
  }

})();
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
      .directive('scrollPosition', scrollPosition);

  /** @ngInject */
  function scrollPosition() {
    return {
      scope: {
        scrollPosition: '=',
        maxHeight: '='
      },
      link: function (scope) {
        $(window).on('scroll', function() {
          var scrollTop = $(window).scrollTop() > scope.maxHeight;
          if (scrollTop !== scope.prevScrollTop) {
            scope.$apply(function() {
              scope.scrollPosition = scrollTop;
            });
          }
          scope.prevScrollTop = scrollTop;
        });
      }
    };
  }

})();
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
      .directive('trackWidth', trackWidth);

  /** @ngInject */
  function trackWidth() {
    return {
      scope: {
        trackWidth: '=',
        minWidth: '=',
      },
      link: function (scope, element) {
        scope.trackWidth = $(element).width() < scope.minWidth;
        scope.prevTrackWidth = scope.trackWidth;

        $(window).resize(function() {
          var trackWidth = $(element).width() < scope.minWidth;
          if (trackWidth !== scope.prevTrackWidth) {
            scope.$apply(function() {
              scope.trackWidth = trackWidth;
            });
          }
          scope.prevTrackWidth = trackWidth;
        });
      }
    };
  }

})();
/**
 * Animated load block
 */
(function () {
  'use strict';

  zoomIn.$inject = ["$timeout", "$rootScope"];
  angular.module('BlurAdmin.theme')
      .directive('zoomIn', zoomIn);

  /** @ngInject */
  function zoomIn($timeout, $rootScope) {
    return {
      restrict: 'A',
      link: function ($scope, elem) {
        var delay = 1000;

        if ($rootScope.$pageFinishedLoading) {
          delay = 100;
        }

        $timeout(function () {
          elem.removeClass('full-invisible');
          elem.addClass('animated zoomIn');
        }, delay);
      }
    };
  }

})();
/**
 * @author v.lugovsky
 * created on 03.05.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
      .service('baUtil', baUtil);

  /** @ngInject */
  function baUtil() {

    this.isDescendant = function(parent, child) {
      var node = child.parentNode;
      while (node != null) {
        if (node == parent) {
          return true;
        }
        node = node.parentNode;
      }
      return false;
    };

    this.hexToRGB = function(hex, alpha) {
      var r = parseInt( hex.slice(1,3), 16 );
      var g = parseInt( hex.slice(3,5), 16 );
      var b = parseInt( hex.slice(5,7), 16 );
      return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
    }
  }
})();

/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  fileReader.$inject = ["$q"];
  angular.module('BlurAdmin.theme')
      .service('fileReader', fileReader);

  /** @ngInject */
  function fileReader($q) {
    var onLoad = function(reader, deferred, scope) {
      return function () {
        scope.$apply(function () {
          deferred.resolve(reader.result);
        });
      };
    };

    var onError = function (reader, deferred, scope) {
      return function () {
        scope.$apply(function () {
          deferred.reject(reader.result);
        });
      };
    };

    var onProgress = function(reader, scope) {
      return function (event) {
        scope.$broadcast('fileProgress',
            {
              total: event.total,
              loaded: event.loaded
            });
      };
    };

    var getReader = function(deferred, scope) {
      var reader = new FileReader();
      reader.onload = onLoad(reader, deferred, scope);
      reader.onerror = onError(reader, deferred, scope);
      reader.onprogress = onProgress(reader, scope);
      return reader;
    };

    var readAsDataURL = function (file, scope) {
      var deferred = $q.defer();

      var reader = getReader(deferred, scope);
      reader.readAsDataURL(file);

      return deferred.promise;
    };

    return {
      readAsDataUrl: readAsDataURL
    };
  }
})();
/**
 * @author a.demeshko
 * created on 3/1/16
 */
(function () {
  'use strict';

  preloader.$inject = ["$q"];
  angular.module('BlurAdmin.theme')
    .service('preloader', preloader);

  /** @ngInject */
  function preloader($q) {
    return {
      loadImg: function (src) {
        var d = $q.defer();
        var img = new Image();
        img.src = src;
        img.onload = function(){
          d.resolve();
        };
        return d.promise;
      }
      // loadAmCharts : function(){
      //   var d = $q.defer();
      //   AmCharts.ready(function(){
      //     d.resolve();
      //   });
      //   return d.promise;
      // }
    }
  }

})();
/**
 * @author a.demeshko
 * created on 12/21/15
 */
(function () {
  'use strict';

  stopableInterval.$inject = ["$window"];
  angular.module('BlurAdmin.theme')
    .service('stopableInterval', stopableInterval);

  /** @ngInject */
  function stopableInterval($window) {
    return {
      start: function (interval, calback, time) {
        function startInterval() {
          return interval(calback, time);
        }

        var i = startInterval();

        angular.element($window).bind('focus', function () {
          if (i) interval.cancel(i);
          i = startInterval();
        });

        angular.element($window).bind('blur', function () {
          if (i) interval.cancel(i);
        });
      }
    }
  }

})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  BlurFeedCtrl.$inject = ["$scope"];
  angular.module('BlurAdmin.pages.dashboard')
      .controller('BlurFeedCtrl', BlurFeedCtrl);

  /** @ngInject */
  function BlurFeedCtrl($scope) {
    $scope.feed = [
      {
        type: 'text-message',
        author: 'Kostya',
        surname: 'Danovsky',
        header: 'Posted new message',
        text: 'Guys, check this out: \nA police officer found a perfect hiding place for watching for speeding motorists. One day, the officer was amazed when everyone was under the speed limit, so he investigated and found the problem. A 10 years old boy was standing on the side of the road with a huge hand painted sign which said "Radar Trap Ahead." A little more investigative work led the officer to the boy\'s accomplice: another boy about 100 yards beyond the radar trap with a sign reading "TIPS" and a bucket at his feet full of change.',
        time: 'Today 11:55 pm',
        ago: '25 minutes ago',
        expanded: false,
      }, {
        type: 'video-message',
        author: 'Andrey',
        surname: 'Hrabouski',
        header: 'Added new video',
        text: '"Vader and Me"',
        preview: 'app/feed/vader-and-me-preview.png',
        link: 'https://www.youtube.com/watch?v=IfcpzBbbamk',
        time: 'Today 9:30 pm',
        ago: '3 hrs ago',
        expanded: false,
      }, {
        type: 'image-message',
        author: 'Vlad',
        surname: 'Lugovsky',
        header: 'Added new image',
        text: '"My little kitten"',
        preview: 'app/feed/my-little-kitten.png',
        link: 'http://api.ning.com/files/DtcI2O2Ry7A7VhVxeiWfGU9WkHcMy4WSTWZ79oxJq*h0iXvVGndfD7CIYy-Ax-UAFCBCdqXI4GCBw3FOLKTTjQc*2cmpdOXJ/1082127884.jpeg',
        time: 'Today 2:20 pm',
        ago: '10 hrs ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Nasta',
        surname: 'Linnie',
        header: 'Posted new message',
        text: 'Haha lol',
        time: '11.11.2015',
        ago: '2 days ago',
        expanded: false,
      }, {
        type: 'geo-message',
        author: 'Nick',
        surname: 'Cat',
        header: 'Posted location',
        text: '"New York, USA"',
        preview: 'app/feed/new-york-location.png',
        link: 'https://www.google.by/maps/place/New+York,+NY,+USA/@40.7201111,-73.9893872,14z',
        time: '11.11.2015',
        ago: '2 days ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Vlad',
        surname: 'Lugovsky',
        header: 'Posted new message',
        text: "First snake: I hope I'm not poisonous. Second snake: Why? First snake: Because I bit my lip!",
        time: '12.11.2015',
        ago: '3 days ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Andrey',
        surname: 'Hrabouski',
        header: 'Posted new message',
        text: 'How do you smuggle an elephant across the border? Put a slice of bread on each side, and call him "lunch".',
        time: '14.11.2015',
        ago: '5 days ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Nasta',
        surname: 'Linnie',
        header: 'Posted new message',
        text: 'When your hammer is C++, everything begins to look like a thumb.',
        time: '14.11.2015',
        ago: '5 days ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Alexander',
        surname: 'Demeshko',
        header: 'Posted new message',
        text: '“I mean, they say you die twice. One time when you stop breathing and a second time, a bit later on, when somebody says your name for the last time." ©',
        time: '15.11.2015',
        ago: '6 days ago',
        expanded: false,
      }, {
        type: 'image-message',
        author: 'Nick',
        surname: 'Cat',
        header: 'Posted photo',
        text: '"Protein Heroes"',
        preview: 'app/feed/genom.png',
        link: 'https://dribbble.com/shots/2504810-Protein-Heroes',
        time: '16.11.2015',
        ago: '7 days ago',
        expanded: false,
      },
      {
        type: 'text-message',
        author: 'Kostya',
        surname: 'Danovsky',
        header: 'Posted new message',
        text: 'Why did the CoffeeScript developer keep getting lost? Because he couldn\'t find his source without a map',
        time: '18.11.2015',
        ago: '9 days ago',
        expanded: false,
      }
    ];

    $scope.expandMessage = function(message){
      message.expanded = !message.expanded;
    }
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('blurFeed', blurFeed);

  /** @ngInject */
  function blurFeed() {
    return {
      restrict: 'E',
      controller: 'BlurFeedCtrl',
      templateUrl: 'app/pages/dashboard/blurFeed/blurFeed.html'
    };
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .service('dashboardCalendar', dashboardCalendar);

  /** @ngInject */
  function dashboardCalendar() {

  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  DashboardCalendarCtrl.$inject = ["baConfig"];
  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardCalendarCtrl', DashboardCalendarCtrl);

  /** @ngInject */
  function DashboardCalendarCtrl(baConfig) {
    var dashboardColors = baConfig.colors.dashboard;
    var $element = $('#calendar').fullCalendar({
      //height: 335,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: '2016-03-08',
      selectable: true,
      selectHelper: true,
      select: function (start, end) {
        var title = prompt('Event Title:');
        var eventData;
        if (title) {
          eventData = {
            title: title,
            start: start,
            end: end
          };
          $element.fullCalendar('renderEvent', eventData, true); // stick? = true
        }
        $element.fullCalendar('unselect');
      },
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'All Day Event',
          start: '2016-03-01',
          color: dashboardColors.silverTree
        },
        {
          title: 'Long Event',
          start: '2016-03-07',
          end: '2016-03-10',
          color: dashboardColors.blueStone
        },
        {
          title: 'Dinner',
          start: '2016-03-14T20:00:00',
          color: dashboardColors.surfieGreen
        },
        {
          title: 'Birthday Party',
          start: '2016-04-01T07:00:00',
          color: dashboardColors.gossipDark
        }
      ]
    });
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('dashboardCalendar', dashboardCalendar);

  /** @ngInject */
  function dashboardCalendar() {
    return {
      restrict: 'E',
      controller: 'DashboardCalendarCtrl',
      templateUrl: 'app/pages/dashboard/dashboardCalendar/dashboardCalendar.html'
    };
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  DashboardLineChartCtrl.$inject = ["baConfig", "layoutPaths", "baUtil"];
  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardLineChartCtrl', DashboardLineChartCtrl);

  /** @ngInject */
  function DashboardLineChartCtrl(baConfig, layoutPaths, baUtil) {
    var layoutColors = baConfig.colors;
    var graphColor = baConfig.theme.blur ? '#000000' : layoutColors.primary;
    var chartData = [
      { date: new Date(2012, 11), value: 0, value0: 0 },
      { date: new Date(2013, 0), value: 15000, value0: 19000},
      { date: new Date(2013, 1), value: 30000, value0: 20000},

      { date: new Date(2013, 2), value: 25000, value0: 22000},
      { date: new Date(2013, 3), value: 21000, value0: 25000},
      { date: new Date(2013, 4), value: 24000, value0: 29000},
      { date: new Date(2013, 5), value: 31000, value0: 26000},
      { date: new Date(2013, 6), value: 40000, value0: 25000},
      { date: new Date(2013, 7), value: 37000, value0: 20000},
      { date: new Date(2013, 8), value: 18000, value0: 22000},
      { date: new Date(2013, 9), value: 5000, value0: 26000},
      { date: new Date(2013, 10), value: 40000, value0: 30000},
      { date: new Date(2013, 11), value: 20000, value0: 25000},
      { date: new Date(2014, 0), value: 5000, value0: 13000},

      { date: new Date(2014, 1), value: 3000, value0: 13000},
      { date: new Date(2014, 2), value: 1800, value0: 13000},
      { date: new Date(2014, 3), value: 10400, value0: 13000},
      { date: new Date(2014, 4), value: 25500, value0: 13000},
      { date: new Date(2014, 5), value: 2100, value0: 13000},
      { date: new Date(2014, 6), value: 6500, value0: 13000},
      { date: new Date(2014, 7), value: 1100, value0: 13000},
      { date: new Date(2014, 8), value: 17200, value0: 13000},
      { date: new Date(2014, 9), value: 26900, value0: 13000},
      { date: new Date(2014, 10), value: 14100, value0: 13000},
      { date: new Date(2014, 11), value: 35300, value0: 13000},
      { date: new Date(2015, 0), value: 54800, value0: 13000},
      { date: new Date(2015, 1), value: 49800, value0: 13000}
    ];

    var chart = AmCharts.makeChart('amchart', {
      type: 'serial',
      theme: 'blur',
      marginTop: 15,
      marginRight: 15,
      dataProvider: chartData,
      categoryField: 'date',
      categoryAxis: {
        parseDates: true,
        gridAlpha: 0,
        color: layoutColors.defaultText,
        axisColor: layoutColors.defaultText
      },
      valueAxes: [
        {
          minVerticalGap: 50,
          gridAlpha: 0,
          color: layoutColors.defaultText,
          axisColor: layoutColors.defaultText
        }
      ],
      graphs: [
        {
          id: 'g0',
          bullet: 'none',
          useLineColorForBulletBorder: true,
          lineColor: baUtil.hexToRGB(graphColor, 0.3),
          lineThickness: 1,
          negativeLineColor: layoutColors.danger,
          type: 'smoothedLine',
          valueField: 'value0',
          fillAlphas: 1,
          fillColorsField: 'lineColor'
        },
        {
          id: 'g1',
          bullet: 'none',
          useLineColorForBulletBorder: true,
          lineColor: baUtil.hexToRGB(graphColor, 0.5),
          lineThickness: 1,
          negativeLineColor: layoutColors.danger,
          type: 'smoothedLine',
          valueField: 'value',
          fillAlphas: 1,
          fillColorsField: 'lineColor'
        }
      ],
      chartCursor: {
        categoryBalloonDateFormat: 'MM YYYY',
        categoryBalloonColor: '#4285F4',
        categoryBalloonAlpha: 0.7,
        cursorAlpha: 0,
        valueLineEnabled: true,
        valueLineBalloonEnabled: true,
        valueLineAlpha: 0.5
      },
      dataDateFormat: 'MM YYYY',
      export: {
        enabled: true
      },
      creditsPosition: 'bottom-right',
      zoomOutButton: {
        backgroundColor: '#fff',
        backgroundAlpha: 0
      },
      zoomOutText: '',
      pathToImages: layoutPaths.images.amChart
    });

    function zoomChart() {
      chart.zoomToDates(new Date(2013, 3), new Date(2014, 0));
    }

    chart.addListener('rendered', zoomChart);
    zoomChart();
    if (chart.zoomChart) {
      chart.zoomChart();
    }
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('dashboardLineChart', dashboardLineChart);

  /** @ngInject */
  function dashboardLineChart() {
    return {
      restrict: 'E',
      controller: 'DashboardLineChartCtrl',
      templateUrl: 'app/pages/dashboard/dashboardLineChart/dashboardLineChart.html'
    };
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  DashboardMapCtrl.$inject = ["baConfig", "layoutPaths"];
  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardMapCtrl', DashboardMapCtrl);

  /** @ngInject */
  function DashboardMapCtrl(baConfig, layoutPaths) {
    var layoutColors = baConfig.colors;
    var map = AmCharts.makeChart('amChartMap', {
      type: 'map',
      theme: 'blur',
      zoomControl: { zoomControlEnabled: false, panControlEnabled: false },

      dataProvider: {
        map: 'worldLow',
        zoomLevel: 3.5,
        zoomLongitude: 10,
        zoomLatitude: 52,
        areas: [
          { title: 'Austria', id: 'AT', color: layoutColors.primary, customData: '1 244', groupId: '1'},
          { title: 'Ireland', id: 'IE', color: layoutColors.primary, customData: '1 342', groupId: '1'},
          { title: 'Denmark', id: 'DK', color: layoutColors.primary, customData: '1 973', groupId: '1'},
          { title: 'Finland', id: 'FI', color: layoutColors.primary, customData: '1 573', groupId: '1'},
          { title: 'Sweden', id: 'SE', color: layoutColors.primary, customData: '1 084', groupId: '1'},
          { title: 'Great Britain', id: 'GB', color: layoutColors.primary, customData: '1 452', groupId: '1'},
          { title: 'Italy', id: 'IT', color: layoutColors.primary, customData: '1 321', groupId: '1'},
          { title: 'France', id: 'FR', color: layoutColors.primary, customData: '1 112', groupId: '1'},
          { title: 'Spain', id: 'ES', color: layoutColors.primary, customData: '1 865', groupId: '1'},
          { title: 'Greece', id: 'GR', color: layoutColors.primary, customData: '1 453', groupId: '1'},
          { title: 'Germany', id: 'DE', color: layoutColors.primary, customData: '1 957', groupId: '1'},
          { title: 'Belgium', id: 'BE', color: layoutColors.primary, customData: '1 011', groupId: '1'},
          { title: 'Luxembourg', id: 'LU', color: layoutColors.primary, customData: '1 011', groupId: '1'},
          { title: 'Netherlands', id: 'NL', color: layoutColors.primary, customData: '1 213', groupId: '1'},
          { title: 'Portugal', id: 'PT', color: layoutColors.primary, customData: '1 291', groupId: '1'},
          { title: 'Lithuania', id: 'LT', color: layoutColors.successLight, customData: '567', groupId: '2'},
          { title: 'Latvia', id: 'LV', color: layoutColors.successLight, customData: '589', groupId: '2'},
          { title: 'Czech Republic ', id: 'CZ', color: layoutColors.successLight, customData: '785', groupId: '2'},
          { title: 'Slovakia', id: 'SK', color: layoutColors.successLight, customData: '965', groupId: '2'},
          { title: 'Estonia', id: 'EE', color: layoutColors.successLight, customData: '685', groupId: '2'},
          { title: 'Hungary', id: 'HU', color: layoutColors.successLight, customData: '854', groupId: '2'},
          { title: 'Cyprus', id: 'CY', color: layoutColors.successLight, customData: '754', groupId: '2'},
          { title: 'Malta', id: 'MT', color: layoutColors.successLight, customData: '867', groupId: '2'},
          { title: 'Poland', id: 'PL', color: layoutColors.successLight, customData: '759', groupId: '2'},
          { title: 'Romania', id: 'RO', color: layoutColors.success, customData: '302', groupId: '3'},
          { title: 'Bulgaria', id: 'BG', color: layoutColors.success, customData: '102', groupId: '3'},
          { title: 'Slovenia', id: 'SI', color: layoutColors.danger, customData: '23', groupId: '4'},
          { title: 'Croatia', id: 'HR', color: layoutColors.danger, customData: '96', groupId: '4'}
        ]
      },

      areasSettings: {
        rollOverOutlineColor: layoutColors.border,
        rollOverColor: layoutColors.primaryDark,
        alpha: 0.8,
        unlistedAreasAlpha: 0.2,
        unlistedAreasColor: layoutColors.defaultText,
        balloonText: '[[title]]: [[customData]] users'
      },


      legend: {
        width: '100%',
        marginRight: 27,
        marginLeft: 27,
        equalWidths: false,
        backgroundAlpha: 0.3,
        backgroundColor: layoutColors.border,
        borderColor: layoutColors.border,
        borderAlpha: 1,
        top: 362,
        left: 0,
        horizontalGap: 10,
        data: [
          {
            title: 'over 1 000 users',
            color: layoutColors.primary
          },
          {
            title: '500 - 1 000 users',
            color: layoutColors.successLight
          },
          {
            title: '100 - 500 users',
            color: layoutColors.success
          },
          {
            title: '0 - 100 users',
            color: layoutColors.danger
          }
        ]
      },
      export: {
        enabled: true
      },
      creditsPosition: 'bottom-right',
      pathToImages: layoutPaths.images.amChart
    });
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('dashboardMap', dashboardMap);

  /** @ngInject */
  function dashboardMap() {
    return {
      restrict: 'E',
      controller: 'DashboardMapCtrl',
      templateUrl: 'app/pages/dashboard/dashboardMap/dashboardMap.html'
    };
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  DashboardPieChartCtrl.$inject = ["$scope", "$timeout", "baConfig", "baUtil"];
  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardPieChartCtrl', DashboardPieChartCtrl);

  /** @ngInject */
  function DashboardPieChartCtrl($scope, $timeout, baConfig, baUtil) {
    var pieColor = baUtil.hexToRGB(baConfig.colors.defaultText, 0.2);
    $scope.charts = [{
      color: pieColor,
      description: 'New Visits',
      stats: '57,820',
      icon: 'person',
    }, {
      color: pieColor,
      description: 'Purchases',
      stats: '$ 89,745',
      icon: 'money',
    }, {
      color: pieColor,
      description: 'Active Users',
      stats: '178,391',
      icon: 'face',
    }, {
      color: pieColor,
      description: 'Returned',
      stats: '32,592',
      icon: 'refresh',
    }
    ];

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    function loadPieCharts() {
      $('.chart').each(function () {
        var chart = $(this);
        chart.easyPieChart({
          easing: 'easeOutBounce',
          onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
          },
          barColor: chart.attr('rel'),
          trackColor: 'rgba(0,0,0,0)',
          size: 84,
          scaleLength: 0,
          animation: 2000,
          lineWidth: 9,
          lineCap: 'round',
        });
      });

      $('.refresh-data').on('click', function () {
        updatePieCharts();
      });
    }

    function updatePieCharts() {
      $('.pie-charts .chart').each(function(index, chart) {
        $(chart).data('easyPieChart').update(getRandomArbitrary(55, 90));
      });
    }

    $timeout(function () {
      loadPieCharts();
      updatePieCharts();
    }, 1000);
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('dashboardPieChart', dashboardPieChart);

  /** @ngInject */
  function dashboardPieChart() {
    return {
      restrict: 'E',
      controller: 'DashboardPieChartCtrl',
      templateUrl: 'app/pages/dashboard/dashboardPieChart/dashboardPieChart.html'
    };
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  DashboardTodoCtrl.$inject = ["$scope", "baConfig"];
  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardTodoCtrl', DashboardTodoCtrl);

  /** @ngInject */
  function DashboardTodoCtrl($scope, baConfig) {

    $scope.transparent = baConfig.theme.blur;
    var dashboardColors = baConfig.colors.dashboard;
    var colors = [];
    for (var key in dashboardColors) {
      colors.push(dashboardColors[key]);
    }

    function getRandomColor() {
      var i = Math.floor(Math.random() * (colors.length - 1));
      return colors[i];
    }

    $scope.todoList = [
      { text: 'Check me out' },
      { text: 'Lorem ipsum dolor sit amet, possit denique oportere at his, etiam corpora deseruisse te pro' },
      { text: 'Ex has semper alterum, expetenda dignissim' },
      { text: 'Vim an eius ocurreret abhorreant, id nam aeque persius ornatus.' },
      { text: 'Simul erroribus ad usu' },
      { text: 'Ei cum solet appareat, ex est graeci mediocritatem' },
      { text: 'Get in touch with akveo team' },
      { text: 'Write email to business cat' },
      { text: 'Have fun with blur admin' },
      { text: 'What do you think?' },
    ];

    $scope.todoList.forEach(function(item) {
      item.color = getRandomColor();
    });

    $scope.newTodoText = '';

    $scope.addToDoItem = function (event, clickPlus) {
      if (clickPlus || event.which === 13) {
        $scope.todoList.unshift({
          text: $scope.newTodoText,
          color: getRandomColor(),
        });
        $scope.newTodoText = '';
      }
    };
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('dashboardTodo', dashboardTodo);

  /** @ngInject */
  function dashboardTodo() {
    return {
      restrict: 'EA',
      controller: 'DashboardTodoCtrl',
      templateUrl: 'app/pages/dashboard/dashboardTodo/dashboardTodo.html'
    };
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .service('dashboardPieChart', dashboardPieChart);

  /** @ngInject */
  function dashboardPieChart() {

  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('popularApp', popularApp);

  /** @ngInject */
  function popularApp() {
    return {
      restrict: 'E',
      templateUrl: 'app/pages/dashboard/popularApp/popularApp.html'
    };
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  TrafficChartCtrl.$inject = ["$scope", "baConfig", "colorHelper"];
  angular.module('BlurAdmin.pages.dashboard')
      .controller('TrafficChartCtrl', TrafficChartCtrl);

  /** @ngInject */
  function TrafficChartCtrl($scope, baConfig, colorHelper) {

    $scope.transparent = baConfig.theme.blur;
    var dashboardColors = baConfig.colors.dashboard;
    $scope.doughnutData = [
      {
        value: 2000,
        color: dashboardColors.white,
        highlight: colorHelper.shade(dashboardColors.white, 15),
        label: 'Other',
        percentage: 87,
        order: 1,
      }, {
        value: 1500,
        color: dashboardColors.blueStone,
        highlight: colorHelper.shade(dashboardColors.blueStone, 15),
        label: 'Search engines',
        percentage: 22,
        order: 4,
      }, {
        value: 1000,
        color: dashboardColors.surfieGreen,
        highlight: colorHelper.shade(dashboardColors.surfieGreen, 15),
        label: 'Referral Traffic',
        percentage: 70,
        order: 3,
      }, {
        value: 1200,
        color: dashboardColors.silverTree,
        highlight: colorHelper.shade(dashboardColors.silverTree, 15),
        label: 'Direct Traffic',
        percentage: 38,
        order: 2,
      }, {
        value: 400,
        color: dashboardColors.gossip,
        highlight: colorHelper.shade(dashboardColors.gossip, 15),
        label: 'Ad Campaigns',
        percentage: 17,
        order: 0,
      },
    ];

    var ctx = document.getElementById('chart-area').getContext('2d');
    window.myDoughnut = new Chart(ctx).Doughnut($scope.doughnutData, {
      segmentShowStroke: false,
      percentageInnerCutout : 64,
      responsive: true
    });
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('trafficChart', trafficChart);

  /** @ngInject */
  function trafficChart() {
    return {
      restrict: 'E',
      controller: 'TrafficChartCtrl',
      templateUrl: 'app/pages/dashboard/trafficChart/trafficChart.html'
    };
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  WeatherCtrl.$inject = ["$scope", "$http", "$timeout", "$element"];
  angular.module('BlurAdmin.pages.dashboard')
      .controller('WeatherCtrl', WeatherCtrl);

  /** @ngInject */
  function WeatherCtrl($scope, $http, $timeout, $element) {
    var url = 'http://api.openweathermap.org/data/2.5/forecast';
    var method = 'GET';
    var key = '2de143494c0b295cca9337e1e96b00e0';
    var middleOfTheDay = 15;
    $scope.units = 'metric';
    $scope.weatherIcons = {
      '01d': 'ion-ios-sunny-outline',
      '02d': 'ion-ios-partlysunny-outline',
      '03d': 'ion-ios-cloud-outline',
      '04d': 'ion-ios-cloud',
      '09d': 'ion-ios-rainy',
      '10d': 'ion-ios-rainy-outline',
      '11d': 'ion-ios-thunderstorm-outline',
      '13d': 'ion-ios-snowy',
      '50d': 'ion-ios-cloudy-outline',
      '01n': 'ion-ios-cloudy-night-outline',
      '02n': 'ion-ios-cloudy-night',
      '03n': 'ion-ios-cloud-outline',
      '04n': 'ion-ios-cloud',
      '09n': 'ion-ios-rainy',
      '10n': 'ion-ios-rainy-outline',
      '11n': 'ion-ios-thunderstorm',
      '13n': 'ion-ios-snowy',
      '50n': 'ion-ios-cloudy-outline'
    };
    $scope.weather = {};

    $scope.switchUnits = function (name) {
      $scope.units = name;
      $scope.updateWeather();
    };

    $scope.switchDay = function (day) {
      $scope.weather.current = day;
      makeChart($scope.weather.days[$scope.weather.current].timeTemp)
    };

    $scope.updateWeather = function () {
      $http({
        method: method, url: url, params: {
          appid: key,
          lat: $scope.geoData.geoplugin_latitude,
          lon: $scope.geoData.geoplugin_longitude,
          units: $scope.units
        }
      }).then(function success(response) {
        saveWeatherData(response.data);
        makeChart($scope.weather.days[$scope.weather.current].timeTemp)
      }, function error() {
        console.log("WEATHER FAILED")
      });
    };

    function updateGeoData() {
      $http.jsonp('http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK').then(function success(response) {
        $scope.geoData = response.data;
        $scope.updateWeather();
      }, function error() {
        console.log("GEO FAILED")
      });
    }

    function makeChart(data) {
      AmCharts.makeChart('tempChart', {
        type: 'serial',
        theme: 'blur',
        handDrawn: true,
        categoryField: 'time',
        dataProvider: data,
        valueAxes: [
          {
            axisAlpha: 0.3,
            gridAlpha: 0
          }
        ],
        graphs: [
          {
            bullet: 'square',
            fillAlphas: 0.3,
            fillColorsField: 'lineColor',
            legendValueText: '[[value]]',
            lineColorField: 'lineColor',
            title: 'Temp',
            valueField: 'temp'
          }
        ],
        categoryAxis: {
          gridAlpha: 0,
          axisAlpha: 0.3
        }
      }).write('tempChart');
    }

    function saveWeatherData(data) {
      var firstItem = data.list[0];
      var weather = {
        days: [{
          date: new Date(),
          timeTemp: [],
          main: firstItem.weather[0].main,
          description: firstItem.weather[0].description,
          icon: firstItem.weather[0].icon,
          temp: firstItem.main.temp
        }], current: 0
      };
      data.list.forEach(function (item, i) {
        var itemDate = new Date(item.dt_txt);
        if (itemDate.getDate() !== weather.days[weather.days.length - 1].date.getDate()) {
          weather.days.push({date: itemDate, timeTemp: []});
        }
        var lastItem = weather.days[weather.days.length - 1];
        lastItem.timeTemp.push({
          time: itemDate.getHours(),
          temp: item.main.temp
        });
        if ((weather.days.length > 1 && itemDate.getHours() == middleOfTheDay) || i == data.list.length - 1) {
          lastItem.main = item.weather[0].main;
          lastItem.description = item.weather[0].description;
          lastItem.icon = item.weather[0].icon;
          lastItem.temp = item.main.temp;
          lastItem.date.setHours(i == data.list.length - 1 ? 0 : middleOfTheDay);
          lastItem.date.setMinutes(0);
        }
      });
      console.log(weather.days[weather.current].date);
      weather.days = weather.days.slice(0, $element.attr('forecast') || 5);
      $scope.weather = weather;
    }

    updateGeoData();
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('weather', weather);

  /** @ngInject */
  function weather() {
    return {
      restrict: 'EA',
      controller: 'WeatherCtrl',
      templateUrl: 'app/pages/dashboard/weather/weather.html'
    };
  }
})();
/**
 * @author v.lugovsky
 * created on 23.12.2015
 */
(function () {
  'use strict';

  /**
   * Includes basic panel layout inside of current element.
   */
  baPanel.$inject = ["baPanel", "baConfig"];
  angular.module('BlurAdmin.theme')
      .directive('baPanel', baPanel);

  /** @ngInject */
  function baPanel(baPanel, baConfig) {
    return angular.extend({}, baPanel, {
      template: function(el, attrs) {
        var res = '<div  class="panel ' + (baConfig.theme.blur ? 'panel-blur' : '') + ' full-invisible ' + (attrs.baPanelClass || '');
        res += '" zoom-in ' + (baConfig.theme.blur ? 'ba-panel-blur' : '') + '>';
        res += baPanel.template(el, attrs);
        res += '</div>';
        return res;
      }
    });
  }
})();

/**
 * @author v.lugovsky
 * created on 23.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
      .factory('baPanel', baPanel);

  /** @ngInject */
  function baPanel() {

    /** Base baPanel directive */
    return {
      restrict: 'A',
      transclude: true,
      template: function(elem, attrs) {
        var res = '<div class="panel-body" ng-transclude></div>';
        if (attrs.baPanelTitle) {
          var titleTpl = '<div class="panel-heading clearfix"><h3 class="panel-title">' + attrs.baPanelTitle + '</h3></div>';
          res = titleTpl + res; // title should be before
        }

        return res;
      }
    };
  }

})();

/**
 * @author v.lugovsky
 * created on 15.01.2016
 */
(function () {
  'use strict';

  baPanelBlur.$inject = ["baPanelBlurHelper", "$window", "$rootScope"];
  angular.module('BlurAdmin.theme')
      .directive('baPanelBlur', baPanelBlur);

  /** @ngInject */
  function baPanelBlur(baPanelBlurHelper, $window, $rootScope) {
    var bodyBgSize;

    baPanelBlurHelper.bodyBgLoad().then(function() {
      bodyBgSize = baPanelBlurHelper.getBodyBgImageSizes();
    });

    $window.addEventListener('resize', function() {
      bodyBgSize = baPanelBlurHelper.getBodyBgImageSizes();
    });

    return {
      restrict: 'A',
      link: function($scope, elem) {
        if(!$rootScope.$isMobile) {
          baPanelBlurHelper.bodyBgLoad().then(function () {
            setTimeout(recalculatePanelStyle);
          });
          $window.addEventListener('resize', recalculatePanelStyle);

          $scope.$on('$destroy', function () {
            $window.removeEventListener('resize', recalculatePanelStyle);
          });
        }

        function recalculatePanelStyle() {
          if (!bodyBgSize) {
            return;
          }
          elem.css({
            backgroundSize: Math.round(bodyBgSize.width) + 'px ' + Math.round(bodyBgSize.height) + 'px',
            backgroundPosition: Math.floor(bodyBgSize.positionX) + 'px ' + Math.floor(bodyBgSize.positionY) + 'px'
          });
        }

      }
    };
  }

})();

/**
 * @author v.lugovsky
 * created on 15.01.2016
 */
(function () {
  'use strict';

  baPanelBlurHelper.$inject = ["$q"];
  angular.module('BlurAdmin.theme')
      .service('baPanelBlurHelper', baPanelBlurHelper);

  /** @ngInject */
  function baPanelBlurHelper($q) {
    var res = $q.defer();
    var computedStyle = getComputedStyle(document.body, ':before');
    var image = new Image();
    image.src = computedStyle.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2');
    image.onerror = function() {
      res.reject();
    };
    image.onload = function() {
      res.resolve();
    };

    this.bodyBgLoad = function() {
      return res.promise;
    };

    this.getBodyBgImageSizes = function() {
      var elemW = document.documentElement.clientWidth;
      var elemH = document.documentElement.clientHeight;
      if(elemW <= 640) return;
      var imgRatio = (image.height / image.width);       // original img ratio
      var containerRatio = (elemH / elemW);     // container ratio

      var finalHeight, finalWidth;
      if (containerRatio > imgRatio) {
        finalHeight = elemH;
        finalWidth = (elemH / imgRatio);
      } else {
        finalWidth = elemW;
        finalHeight = (elemW * imgRatio);
      }
      return { width: finalWidth, height: finalHeight, positionX: (elemW - finalWidth)/2, positionY: (elemH - finalHeight)/2};
    };
  }

})();

/**
 * @author v.lugovsky
 * created on 23.12.2015
 */
(function () {
  'use strict';

  /**
   * Represents current element as panel, adding all necessary classes.
   */
  baPanelSelf.$inject = ["baPanel"];
  angular.module('BlurAdmin.theme')
      .directive('baPanelSelf', baPanelSelf);

  /** @ngInject */
  function baPanelSelf(baPanel) {
    return angular.extend({}, baPanel, {
      link: function(scope, el, attrs) {
        el.addClass('panel panel-white');
        if (attrs.baPanelClass) {
          el.addClass(attrs.baPanelClass);
        }
      }
    });
  }

})();

/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  BaSidebarCtrl.$inject = ["$scope", "baSidebarService", "loginFactory"];
  angular.module('BlurAdmin.theme.components')
    .controller('BaSidebarCtrl', BaSidebarCtrl);

  /** @ngInject */
  function BaSidebarCtrl($scope, baSidebarService, loginFactory) {

    $scope.menuItems = baSidebarService.getMenuItems();
    console.log($scope.menuItems);
    $scope.tokenMenu = loginFactory.decodificarToken();
    console.log($scope.tokenMenu);
    $scope.defaultSidebarState = $scope.menuItems[0].stateRef;

    $scope.hoverItem = function ($event) {
      $scope.showHoverElem = true;
      $scope.hoverElemHeight =  $event.currentTarget.clientHeight;
      var menuTopValue = 66;
      $scope.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - menuTopValue;
    };

    $scope.validar = function (item) {
      if (item.acceso == 1 && $scope.tokenMenu.cargoCodigo == 1 ){
        return true;
      } else if (item.acceso == 5) {
        return true;
      } else if (item.acceso == 4 && ($scope.tokenMenu.cargoCodigo == 1 || $scope.tokenMenu.cargoCodigo == 2)) {
        return true;
      } else {
        return false;
      }
    };

    $scope.$on('$stateChangeSuccess', function () {
      if (baSidebarService.canSidebarBeHidden()) {
        baSidebarService.setMenuCollapsed(true);
      }
    });
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  baSidebar.$inject = ["$timeout", "baSidebarService", "baUtil", "layoutSizes"];
  angular.module('BlurAdmin.theme.components')
      .directive('baSidebar', baSidebar);

  /** @ngInject */
  function baSidebar($timeout, baSidebarService, baUtil, layoutSizes) {
    var jqWindow = $(window);
    return {
      restrict: 'E',
      templateUrl: 'app/theme/components/baSidebar/ba-sidebar.html',
      controller: 'BaSidebarCtrl',
      link: function(scope, el) {

        scope.menuHeight = el[0].childNodes[0].clientHeight - 84;
        jqWindow.on('click', _onWindowClick);
        jqWindow.on('resize', _onWindowResize);

        scope.$on('$destroy', function() {
          jqWindow.off('click', _onWindowClick);
          jqWindow.off('resize', _onWindowResize);
        });

        function _onWindowClick($evt) {
          if (!baUtil.isDescendant(el[0], $evt.target) &&
              !$evt.originalEvent.$sidebarEventProcessed &&
              !baSidebarService.isMenuCollapsed() &&
              baSidebarService.canSidebarBeHidden()) {
            $evt.originalEvent.$sidebarEventProcessed = true;
            $timeout(function () {
              baSidebarService.setMenuCollapsed(true);
            }, 10);
          }
        }

        // watch window resize to change menu collapsed state if needed
        function _onWindowResize() {
          var newMenuCollapsed = baSidebarService.shouldMenuBeCollapsed();
          var newMenuHeight = _calculateMenuHeight();
          if (newMenuCollapsed != baSidebarService.isMenuCollapsed() || scope.menuHeight != newMenuHeight) {
            scope.$apply(function () {
              scope.menuHeight = newMenuHeight;
              baSidebarService.setMenuCollapsed(newMenuCollapsed)
            });
          }
        }

        function _calculateMenuHeight() {
          return el[0].childNodes[0].clientHeight - 84;
        }
      }
    };
  }

})();
(function() {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .provider('baSidebarService', baSidebarServiceProvider);

  /** @ngInject */
  function baSidebarServiceProvider() {
    var staticMenuItems = [];

    this.addStaticItem = function() {
      staticMenuItems.push.apply(staticMenuItems, arguments);
    };

    /** @ngInject */
    this.$get = ["$state", "layoutSizes", function($state, layoutSizes) {
      return new _factory();

      function _factory() {
        var isMenuCollapsed = shouldMenuBeCollapsed();

        this.getMenuItems = function() {
          var states = defineMenuItemStates();
          var menuItems = states.filter(function(item) {
            return item.level == 0;
          });

          menuItems.forEach(function(item) {
            var children = states.filter(function(child) {
              return child.level == 1 && child.name.indexOf(item.name) === 0;
            });
            item.subMenu = children.length ? children : null;
          });

          return menuItems.concat(staticMenuItems);
        };

        this.shouldMenuBeCollapsed = shouldMenuBeCollapsed;
        this.canSidebarBeHidden = canSidebarBeHidden;

        this.setMenuCollapsed = function(isCollapsed) {
          isMenuCollapsed = isCollapsed;
        };

        this.isMenuCollapsed = function() {
          return isMenuCollapsed;
        };

        this.toggleMenuCollapsed = function() {
          isMenuCollapsed = !isMenuCollapsed;
        };

        this.getAllStateRefsRecursive = function(item) {
          var result = [];
          _iterateSubItems(item);
          return result;

          function _iterateSubItems(currentItem) {
            currentItem.subMenu && currentItem.subMenu.forEach(function(subItem) {
              subItem.stateRef && result.push(subItem.stateRef);
              _iterateSubItems(subItem);
            });
          }
        };

        function defineMenuItemStates() {
          return $state.get()
              .filter(function(s) {
                return s.sidebarMeta;
              })
              .map(function(s) {
                var meta = s.sidebarMeta;
                return {
                  name: s.name,
                  title: s.title,
                  level: (s.name.match(/\./g) || []).length,
                  order: meta.order,
                  icon: meta.icon,
                  acceso: meta.acceso,
                  stateRef: s.name,
                };
              })
              .sort(function(a, b) {
                return (a.level - b.level) * 100 + a.order - b.order;
              });
        }

        function shouldMenuBeCollapsed() {
          return window.innerWidth <= layoutSizes.resWidthCollapseSidebar;
        }

        function canSidebarBeHidden() {
          return window.innerWidth <= layoutSizes.resWidthHideSidebar;
        }
      }

    }];
    this.$get.$inject = ["$state", "layoutSizes"];

  }
})();

/**
 * @author v.lugovsky
 * created on 03.05.2016
 */
(function () {
  'use strict';

  baSidebarToggleMenu.$inject = ["baSidebarService"];
  baSidebarCollapseMenu.$inject = ["baSidebarService"];
  BaSidebarTogglingItemCtrl.$inject = ["$scope", "$element", "$attrs", "$state", "baSidebarService"];
  baUiSrefTogglingSubmenu.$inject = ["$state"];
  baUiSrefToggler.$inject = ["baSidebarService"];
  angular.module('BlurAdmin.theme.components')
      .directive('baSidebarToggleMenu', baSidebarToggleMenu)
      .directive('baSidebarCollapseMenu', baSidebarCollapseMenu)
      .directive('baSidebarTogglingItem', baSidebarTogglingItem)
      .controller('BaSidebarTogglingItemCtrl', BaSidebarTogglingItemCtrl)
      .directive('baUiSrefTogglingSubmenu', baUiSrefTogglingSubmenu)
      .directive('baUiSrefToggler', baUiSrefToggler);

  /** @ngInject */
  function baSidebarToggleMenu(baSidebarService) {
    return {
      restrict: 'A',
      link: function(scope, elem) {
        elem.on('click', function($evt) {
          $evt.originalEvent.$sidebarEventProcessed = true;
          scope.$apply(function() {
            baSidebarService.toggleMenuCollapsed();
          });
        });
      }
    };
  }

  /** @ngInject */
  function baSidebarCollapseMenu(baSidebarService) {
    return {
      restrict: 'A',
      link: function(scope, elem) {
        elem.on('click', function($evt) {
          $evt.originalEvent.$sidebarEventProcessed = true;
          if (!baSidebarService.isMenuCollapsed()) {
            scope.$apply(function() {
              baSidebarService.setMenuCollapsed(true);
            });
          }
        });
      }
    };
  }

  /** @ngInject */
  function baSidebarTogglingItem() {
    return {
      restrict: 'A',
      controller: 'BaSidebarTogglingItemCtrl'
    };
  }

  /** @ngInject */
  function BaSidebarTogglingItemCtrl($scope, $element, $attrs, $state, baSidebarService) {
    var vm = this;
    var menuItem = vm.$$menuItem = $scope.$eval($attrs.baSidebarTogglingItem);
    if (menuItem && menuItem.subMenu && menuItem.subMenu.length) {
      vm.$$expandSubmenu = function() { console.warn('$$expandMenu should be overwritten by baUiSrefTogglingSubmenu') };
      vm.$$collapseSubmenu = function() { console.warn('$$collapseSubmenu should be overwritten by baUiSrefTogglingSubmenu') };

      var subItemsStateRefs = baSidebarService.getAllStateRefsRecursive(menuItem);

      vm.$expand = function() {
        vm.$$expandSubmenu();
        $element.addClass('ba-sidebar-item-expanded');
      };

      vm.$collapse = function() {
        vm.$$collapseSubmenu();
        $element.removeClass('ba-sidebar-item-expanded');
      };

      vm.$toggle = function() {
        $element.hasClass('ba-sidebar-item-expanded') ?
            vm.$collapse() :
            vm.$expand();
      };

      if (_isState($state.current)) {
        $element.addClass('ba-sidebar-item-expanded');
      }

      $scope.$on('$stateChangeStart', function (event, toState) {
        if (!_isState(toState) && $element.hasClass('ba-sidebar-item-expanded')) {
          vm.$collapse();
          $element.removeClass('ba-sidebar-item-expanded');
        }
      });

      $scope.$on('$stateChangeSuccess', function (event, toState) {
        if (_isState(toState) && !$element.hasClass('ba-sidebar-item-expanded')) {
          vm.$expand();
          $element.addClass('ba-sidebar-item-expanded');
        }
      });
    }

    function _isState(state) {
      return state && subItemsStateRefs.some(function(subItemState) {
            return state.name.indexOf(subItemState) == 0;
          });
    }
  }

  /** @ngInject */
  function baUiSrefTogglingSubmenu($state) {
    return {
      restrict: 'A',
      require: '^baSidebarTogglingItem',
      link: function(scope, el, attrs, baSidebarTogglingItem) {
        baSidebarTogglingItem.$$expandSubmenu = function() { el.slideDown(); };
        baSidebarTogglingItem.$$collapseSubmenu = function() { el.slideUp(); };
      }
    };
  }

  /** @ngInject */
  function baUiSrefToggler(baSidebarService) {
    return {
      restrict: 'A',
      require: '^baSidebarTogglingItem',
      link: function(scope, el, attrs, baSidebarTogglingItem) {
        el.on('click', function() {
          if (baSidebarService.isMenuCollapsed()) {
            // If the whole sidebar is collapsed and this item has submenu. We need to open sidebar.
            // This should not affect mobiles, because on mobiles sidebar should be hidden at all
            scope.$apply(function() {
              baSidebarService.setMenuCollapsed(false);
            });
            baSidebarTogglingItem.$expand();
          } else {
            baSidebarTogglingItem.$toggle();
          }
        });
      }
    };
  }

})();

(function() {
  'use strict';

  angular.module('BlurAdmin.theme.components')
    .directive('baWizard', baWizard);

  /** @ngInject */
  function baWizard() {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'app/theme/components/baWizard/baWizard.html',
      controllerAs: '$baWizardController',
      controller: 'baWizardCtrl'
    }
  }
})();

(function() {
  'use strict';

  baWizardCtrl.$inject = ["$scope"];
  angular.module('BlurAdmin.theme.components')
    .controller('baWizardCtrl', baWizardCtrl);

  /** @ngInject */
  function baWizardCtrl($scope) {
    var vm = this;
    vm.tabs = [];

    vm.tabNum = 0;
    vm.progress = 0;

    vm.addTab = function(tab) {
      tab.setPrev(vm.tabs[vm.tabs.length - 1]);
      vm.tabs.push(tab);
      vm.selectTab(0);
    };

    $scope.$watch(angular.bind(vm, function () {return vm.tabNum;}), calcProgress);

    vm.selectTab = function (tabNum) {
      vm.tabs[vm.tabNum].submit();
      if (vm.tabs[tabNum].isAvailiable()) {
        vm.tabNum = tabNum;
        vm.tabs.forEach(function (t, tIndex) {
          tIndex == vm.tabNum ? t.select(true) : t.select(false);
        });
      }
    };

    vm.isFirstTab = function () {
      return vm.tabNum == 0;
    };

    vm.isLastTab = function () {
      return vm.tabNum == vm.tabs.length - 1 ;
    };

    vm.nextTab = function () {
      vm.selectTab(vm.tabNum + 1)
    };

    vm.previousTab = function () {
      vm.selectTab(vm.tabNum - 1)
    };

    function calcProgress() {
      vm.progress = ((vm.tabNum + 1) / vm.tabs.length) * 100;
    }
  }
})();


(function() {
  'use strict';

  angular.module('BlurAdmin.theme.components')
    .directive('baWizardStep', baWizardStep);

  /** @ngInject */
  function baWizardStep() {
    return {
      restrict: 'E',
      transclude: true,
      require: '^baWizard',
      scope: {
        form: '='
      },
      templateUrl:  'app/theme/components/baWizard/baWizardStep.html',
      link: function($scope, $element, $attrs, wizard) {
        $scope.selected = true;

        var tab = {
          title: $attrs.title,
          select: select,
          submit: submit,
          isComplete: isComplete,
          isAvailiable: isAvailiable,
          prevTab: undefined,
          setPrev: setPrev
        };

        wizard.addTab(tab);

        function select(isSelected) {
          if (isSelected) {
            $scope.selected = true;
          } else {
            $scope.selected = false;
          }
        }

        function submit() {
          $scope.form && $scope.form.$setSubmitted(true);
        }

        function isComplete() {
          return $scope.form ? $scope.form.$valid : true;
        }

        function isAvailiable() {
          return tab.prevTab ? tab.prevTab.isComplete() : true;
        }

        function setPrev(pTab) {
          tab.prevTab = pTab;
        }
      }
    };
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .directive('backTop', backTop);

  /** @ngInject */
  function backTop() {
    return {
      restrict: 'E',
      templateUrl: 'app/theme/components/backTop/backTop.html',
      controller: function () {
        $('#backTop').backTop({
          'position': 200,
          'speed': 100
        });
      }
    };
  }

})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  contentTop.$inject = ["$location", "$state"];
  angular.module('BlurAdmin.theme.components')
      .directive('contentTop', contentTop);

  /** @ngInject */
  function contentTop($location, $state) {
    return {
      restrict: 'E',
      templateUrl: 'app/theme/components/contentTop/contentTop.html',
      link: function($scope) {
        $scope.$watch(function () {
          $scope.activePageTitle = $state.current.title;
        });
      }
    };
  }

})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  MsgCenterCtrl.$inject = ["$scope", "$sce"];
  angular.module('BlurAdmin.theme.components')
      .controller('MsgCenterCtrl', MsgCenterCtrl);

  /** @ngInject */
  function MsgCenterCtrl($scope, $sce) {
    $scope.users = {
      0: {
        name: 'Vlad',
      },
      1: {
        name: 'Kostya',
      },
      2: {
        name: 'Andrey',
      },
      3: {
        name: 'Nasta',
      }
    };

    $scope.notifications = [
      {
        userId: 0,
        template: '&name posted a new article.',
        time: '1 min ago'
      },
      {
        userId: 1,
        template: '&name changed his contact information.',
        time: '2 hrs ago'
      },
      {
        image: 'assets/img/shopping-cart.svg',
        template: 'New orders received.',
        time: '5 hrs ago'
      },
      {
        userId: 2,
        template: '&name replied to your comment.',
        time: '1 day ago'
      },
      {
        userId: 3,
        template: 'Today is &name\'s birthday.',
        time: '2 days ago'
      },
      {
        image: 'assets/img/comments.svg',
        template: 'New comments on your post.',
        time: '3 days ago'
      },
      {
        userId: 1,
        template: '&name invited you to join the event.',
        time: '1 week ago'
      }
    ];

    $scope.messages = [
      {
        userId: 3,
        text: 'After you get up and running, you can place Font Awesome icons just about...',
        time: '1 min ago'
      },
      {
        userId: 0,
        text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
        time: '2 hrs ago'
      },
      {
        userId: 1,
        text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
        time: '10 hrs ago'
      },
      {
        userId: 2,
        text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
        time: '1 day ago'
      },
      {
        userId: 3,
        text: 'Get to know who we are - from the inside out. From our history and culture, to the...',
        time: '1 day ago'
      },
      {
        userId: 1,
        text: 'Need some support to reach your goals? Apply for scholarships across a variety of...',
        time: '2 days ago'
      },
      {
        userId: 0,
        text: 'Wrap the dropdown\'s trigger and the dropdown menu within .dropdown, or...',
        time: '1 week ago'
      }
    ];

    $scope.getMessage = function(msg) {
      var text = msg.template;
      if (msg.userId || msg.userId === 0) {
        text = text.replace('&name', '<strong>' + $scope.users[msg.userId].name + '</strong>');
      }
      return $sce.trustAsHtml(text);
    };
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .directive('msgCenter', msgCenter);

  /** @ngInject */
  function msgCenter() {
    return {
      restrict: 'E',
      templateUrl: 'app/theme/components/msgCenter/msgCenter.html',
      controller: 'MsgCenterCtrl'
    };
  }

})();
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
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .directive('pageTop', pageTop);

  /** @ngInject */
  function pageTop() {
    return {
      restrict: 'E',
      templateUrl: 'app/theme/components/pageTop/pageTop.html',
      controller: "pageTopCtrl"
    };
  }

})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .directive('widgets', widgets);

  /** @ngInject */
  function widgets() {
    return {
      restrict: 'EA',
      scope: {
        ngModel: '='
      },
      templateUrl: 'app/theme/components/widgets/widgets.html',
      replace: true
    };
  }

})();
/**
 * @author v.lugovsky
 * created on 17.12.2015
 */
(function () {
  'use strict';

  appImage.$inject = ["layoutPaths"];
  angular.module('BlurAdmin.theme')
      .filter('appImage', appImage);

  /** @ngInject */
  function appImage(layoutPaths) {
    return function(input) {
      return layoutPaths.images.root + input;
    };
  }

})();

/**
 * @author v.lugovsky
 * created on 17.12.2015
 */
(function () {
  'use strict';

  kameleonImg.$inject = ["layoutPaths"];
  angular.module('BlurAdmin.theme')
      .filter('kameleonImg', kameleonImg);

  /** @ngInject */
  function kameleonImg(layoutPaths) {
    return function(input) {
      return layoutPaths.images.root + 'theme/icon/kameleon/' + input + '.svg';
    };
  }

})();

/**
 * @author v.lugovsky
 * created on 17.12.2015
 */
(function () {
  'use strict';

  profilePicture.$inject = ["layoutPaths"];
  angular.module('BlurAdmin.theme')
      .filter('profilePicture', profilePicture);

  /** @ngInject */
  function profilePicture(layoutPaths) {
    return function(input, ext) {
      ext = ext || 'png';
      return layoutPaths.images.profile + input + '.' + ext;
    };
  }

})();

/**
 * @author a.demeshko
 * created on 23.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
    .filter('plainText', plainText);

  /** @ngInject */
  function plainText() {
    return function(text) {
      return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
  }

})();

/* Minified js for jQuery BackTop */
!function(o){o.fn.backTop=function(e){var n=this,i=o.extend({position:400,speed:500,color:"white"},e),t=i.position,c=i.speed,d=i.color;n.addClass("white"==d?"white":"red"==d?"red":"green"==d?"green":"black"),n.css({right:40,bottom:40,position:"fixed"}),o(document).scroll(function(){var e=o(window).scrollTop();e>=t?n.fadeIn(c):n.fadeOut(c)}),n.click(function(){o("html, body").animate({scrollTop:0},{duration:1200})})}}(jQuery);
angular.module("BlurAdmin").run(["$templateCache", function($templateCache) {$templateCache.put("app/pages/citas/citas.html","<div class=\"row\"><div class=\"col-md-12 col-lg-12 col-xs-12 col-sm-12\"><div ba-panel=\"\"><form name=\"citasForm\" novalidate=\"\"><div class=\"form-group\"><label for=\"nombre\">Nombre del cliente</label> <input type=\"text\" class=\"form-control\" name=\"nombre\" id=\"nombre\" ng-model=\"newCita.nombre\" ng-maxlength=\"20\" ng-minlength=\"5\" ng-pattern=\"/^([A-Za-zÑñáéíóúÁÉÍÓÚ ]+)$/\" required=\"\"><div ng-messages=\"citasForm.nombre.$error\" ng-show=\"citasForm.nombre.$touched\"><div ng-message=\"required\">Este campo es requerido</div><div ng-message=\"pattern\">Sólo se permiten letras</div><div ng-message=\"minlength\">El nombre es muy corto</div><div ng-message=\"maxlength\">El nombre es muy largo</div></div></div><div class=\"form-group\"><label for=\"\">Fecha de la cita (con secretaria)</label><p class=\"input-group\"><input type=\"text\" class=\"form-control\" datetime-picker=\"\" timepicker-options=\"timeOptions\" when-closed=\"onSetTime()\" ng-model=\"fecha.fecha_inicio\" is-open=\"popup.opened\" datepicker-options=\"dateOptions\" ng-required=\"true\" close-text=\"Cerrar\" current-text=\"Hoy\" clear-text=\"Reiniciar\" disabled=\"\"> <span class=\"input-group-btn\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"open()\"><i class=\"glyphicon glyphicon-calendar\"></i></button></span></p></div><button class=\"btn btn-primary\" ng-click=\"apartarCita()\" ng-disabled=\"citasForm.$invalid\">Guardar cita</button></form></div></div></div>");
$templateCache.put("app/pages/clientes/clientes.html","<div class=\"row\" style=\"margin-bottom: 0.2%\"><div class=\"col-sm-4 col-xs-6 pull-right\"><a class=\"btn btn-primary pull-right btn-with-icon boton-margen\" href=\"#/crear_cliente\"><i class=\"ion-person-add\"></i>Nuevo cliente</a></div><div class=\"col-sm-4 col-xs-6 pull-left\"><a class=\"btn btn-info pull-left btn-with-icon boton-margen\" ng-click=\"generarReporte()\"><i class=\"ion-printer\"></i>Imprimir reporte</a></div></div><div class=\"row\"><div class=\"col-md-12 col-lg-12 col-xs-12 col-sm-12\"><div ba-panel=\"\"><div class=\"table-responsive\"><table class=\"table table-bordered table-hover table-condensed\"><thead><tr class=\"black-muted-bg\"><td>Cédula</td><td>Nombre</td><td>Apellido</td><td>Fecha nacimiento</td><td>Edad</td><td>Sexo</td><td>Email</td><td></td></tr></thead><tbody><tr ng-repeat=\"cliente in clientes\"><td>{{cliente._id | number}}</td><td>{{cliente.nombre}}</td><td>{{cliente.apellido}}</td><td>{{cliente.fechanac | date:\"dd/MM/yyyy\"}}</td><td>{{cliente.edad}}</td><td>{{cliente.sexo}}</td><td>{{cliente.email}}</td><td><a type=\"button\" href=\"#/ver_cliente/{{cliente._id}}\" class=\"btn btn-info btn-with-icon\"><i class=\"ion-information\"></i>Ver historia</a> <button type=\"button\" class=\"btn btn-danger btn-with-icon\" ng-click=\"eliminarCliente(cliente._id)\"><i class=\"ion-alert-circled\"></i>Eliminar</button></td></tr></tbody></table></div></div></div></div>");
$templateCache.put("app/pages/clientes/crear_cliente.html","<div class=\"widgets\"><div class=\"row\"><div class=\"col-md-12\"><div ba-panel=\"\" ba-panel-class=\"with-scroll\"><ba-wizard><ba-wizard-step title=\"INFORMACIÓN PERSONAL\" form=\"vm.InfoForm\"><form name=\"vm.InfoForm\" novalidate=\"\"><div class=\"row\"><div class=\"col-md-4\"><div class=\"form-group has-feedback\" ng-class=\"{\'has-error\': vm.InfoForm.cedula.$invalid && (vm.InfoForm.cedula.$dirty || vm.InfoForm.$submitted)}\"><label for=\"cedula\">Cédula de identidad</label> <input type=\"text\" class=\"form-control\" id=\"cedula\" name=\"cedula\" placeholder=\"Cédula\" ng-model=\"cliente._id\" ng-pattern=\"/^[0-9]+$/\" ng-minlength=\"6\" ng-maxlength=\"8\" required=\"\"><div ng-messages=\"vm.InfoForm.cedula.$error\" class=\"help-block error-block basic-block\" ng-show=\"vm.InfoForm.cedula.$touched\"><div ng-message=\"required\">Este campo es requerido</div><div ng-message=\"pattern\">Sólo se permiten números</div><div ng-message=\"minlength\">La cédula es muy corta</div><div ng-message=\"maxlength\">La cédula es muy larga</div></div></div></div><div class=\"col-md-4\"><div class=\"form-group has-feedback\" ng-class=\"{\'has-error\': vm.InfoForm.Nombre.$invalid && (vm.InfoForm.Nombre.$dirty || vm.InfoForm.$submitted)}\"><label for=\"nombre\">Nombre</label> <input type=\"text\" class=\"form-control\" id=\"Nombre\" name=\"Nombre\" placeholder=\"Nombre\" ng-model=\"cliente.nombre\" ng-maxlength=\"40\" ng-minlength=\"4\" ng-pattern=\"/^([A-Za-zÑñáéíóúÁÉÍÓÚ ]+)$/\" required=\"\"><div ng-messages=\"vm.InfoForm.Nombre.$error\" class=\"help-block error-block basic-block\" ng-show=\"vm.InfoForm.Nombre.$touched\"><div ng-message=\"required\">Este campo es requerido</div><div ng-message=\"pattern\">Sólo se permiten letras</div><div ng-message=\"minlength\">El nombre es muy corto</div><div ng-message=\"maxlength\">El nombre es muy largo</div></div></div></div><div class=\"col-md-4\"><div class=\"form-group has-feedback\" ng-class=\"{\'has-error\': vm.InfoForm.apellido.$invalid && (vm.InfoForm.apellido.$dirty || vm.InfoForm.$submitted)}\"><label for=\"apellido\">Apellido</label> <input type=\"text\" class=\"form-control\" id=\"apellido\" name=\"apellido\" placeholder=\"Apellido\" ng-model=\"cliente.apellido\" ng-maxlength=\"40\" ng-minlength=\"4\" ng-pattern=\"/^([A-Za-zÑñáéíóúÁÉÍÓÚ ]+)$/\" required=\"\"><div ng-messages=\"vm.InfoForm.apellido.$error\" class=\"help-block error-block basic-block\" ng-show=\"vm.InfoForm.apellido.$touched\"><div ng-message=\"required\">Este campo es requerido</div><div ng-message=\"pattern\">Sólo se permiten letras</div><div ng-message=\"minlength\">El apellido es muy corto</div><div ng-message=\"maxlength\">El apellido es muy largo</div></div></div></div></div><div class=\"row\"><div class=\"col-md-6\"><div class=\"form-group has-feedback\" ng-class=\"{\'has-error\': vm.InfoForm.fechanac.$invalid && (vm.InfoForm.fechanac.$dirty || vm.InfoForm.$submitted)}\"><label for=\"fechanac\">Fecha de nacimiento</label> <input type=\"date\" class=\"form-control\" id=\"fechanac\" name=\"fechanac\" placeholder=\"Fecha de nacimiento\" ng-model=\"cliente.fechanac\" min=\"1940-01-01\" max=\"2006-12-31\" required=\"\"><div ng-messages=\"vm.InfoForm.fechanac.$error\" class=\"help-block error-block basic-block\" ng-show=\"vm.InfoForm.fechanac.$touched\"><div ng-message=\"required\">Este campo es requerido</div><div ng-message=\"max\">La fecha es muy reciente</div><div ng-message=\"min\">La fecha es muy antigua</div></div></div></div><div class=\"col-md-4\"><div class=\"form-group has-feedback\" ng-class=\"{\'has-error\': vm.InfoForm.estado_civil.$invalid && (vm.InfoForm.estado_civil.$dirty || vm.InfoForm.$submitted)}\"><label for=\"estado_civil\">Estado Civil</label><select class=\"form-control\" name=\"estado_civil\" id=\"estado_civil\" ng-model=\"cliente.estado_civil\" required=\"\"><option value=\"Soltera\" ng-selected=\"true\">Soltera(o)</option><option value=\"Casada\">Casada(o)</option><option value=\"Viuda\">Viuda(o)</option></select><span class=\"help-block error-block basic-block\">Este campo es requerido</span></div></div><div class=\"col-md-2\"><div class=\"form-group has-feedback\" ng-class=\"{\'has-error\': vm.InfoForm.sexo.$invalid && (vm.InfoForm.sexo.$dirty || vm.InfoForm.$submitted)}\"><label for=\"sexo\">Genero</label><select class=\"form-control\" name=\"sexo\" id=\"sexo\" ng-model=\"cliente.sexo\" required=\"\"><option value=\"M\">Masculino</option><option value=\"F\" ng-selected=\"true\">Femenino</option></select><span class=\"help-block error-block basic-block\">Este campo es requerido</span></div></div></div><div class=\"row\"><div class=\"col-md-6\"><div class=\"form-group has-feedback\" ng-class=\"{\'has-error\': vm.InfoForm.ocupacion.$invalid && (vm.InfoForm.ocupacion.$dirty || vm.InfoForm.$submitted)}\"><label for=\"ocupacion\">Ocupación</label> <input type=\"text\" class=\"form-control\" id=\"ocupacion\" name=\"ocupacion\" placeholder=\"Ocupación\" ng-model=\"cliente.ocupacion\" required=\"\"> <span class=\"help-block error-block basic-block\">Requerido</span></div></div><div class=\"col-md-6\"><div class=\"form-group has-feedback\" ng-class=\"{\'has-error\': vm.InfoForm.telefono.$invalid && (vm.InfoForm.telefono.$dirty || vm.InfoForm.$submitted)}\"><label for=\"Telefono\">Telefono (Hab)</label> <input type=\"text\" class=\"form-control\" id=\"Telefono\" name=\"telefono\" placeholder=\"Telefono\" ng-model=\"cliente.telefono\" ng-pattern=\"/^[0-9]+$/\" ng-maxlength=\"30\" ng-minlength=\"11\" required=\"\"><div ng-messages=\"vm.InfoForm.telefono.$error\" class=\"help-block error-block basic-block\" ng-show=\"vm.InfoForm.telefono.$touched\"><div ng-message=\"required\">Este campo es requerido</div><div ng-message=\"pattern\">Sólo se permiten números</div><div ng-message=\"minlength\">El número es muy corto</div><div ng-message=\"maxlength\">El número es muy largo</div></div></div></div></div><div class=\"row\"><div class=\"col-md-4\"><div class=\"form-group has-feedback\" ng-class=\"{\'has-error\': vm.InfoForm.oficina.$invalid && (vm.InfoForm.oficina.$dirty || vm.InfoForm.$submitted)}\"><label for=\"Oficina\">Oficina</label> <input type=\"text\" class=\"form-control\" id=\"Oficina\" name=\"oficina\" placeholder=\"Oficina\" ng-model=\"cliente.oficina\" ng-pattern=\"/^[0-9]+$/\" ng-maxlength=\"30\" ng-minlength=\"11\" required=\"\"><div ng-messages=\"vm.InfoForm.oficina.$error\" class=\"help-block error-block basic-block\" ng-show=\"vm.InfoForm.oficina.$touched\"><div ng-message=\"required\">Este campo es requerido</div><div ng-message=\"pattern\">Sólo se permiten números</div><div ng-message=\"minlength\">El número es muy corto</div><div ng-message=\"maxlength\">El número es muy largo</div></div></div></div><div class=\"col-md-4\"><div class=\"form-group has-feedback\" ng-class=\"{\'has-error\': vm.InfoForm.celular.$invalid && (vm.InfoForm.celular.$dirty || vm.InfoForm.$submitted)}\"><label for=\"Celular\">Celular</label> <input type=\"text\" class=\"form-control\" id=\"Celular\" name=\"celular\" placeholder=\"Celular\" ng-model=\"cliente.celular\" ng-pattern=\"/^[0-9]+$/\" ng-maxlength=\"30\" ng-minlength=\"11\" required=\"\"><div ng-messages=\"vm.InfoForm.celular.$error\" class=\"help-block error-block basic-block\" ng-show=\"vm.InfoForm.celular.$touched\"><div ng-message=\"required\">Este campo es requerido</div><div ng-message=\"pattern\">Sólo se permiten números</div><div ng-message=\"minlength\">El número es muy corto</div><div ng-message=\"maxlength\">El número es muy largo</div></div></div></div><div class=\"col-md-4\"><div class=\"form-group has-feedback\" ng-class=\"{\'has-error\': vm.InfoForm.email.$invalid && (vm.InfoForm.email.$dirty || vm.InfoForm.$submitted)}\"><label for=\"email\">E-mail</label> <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"E-mail\" ng-model=\"cliente.email\" ng-pattern=\"/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,4})+$/\" required=\"\"><div ng-messages=\"vm.InfoForm.email.$error\" class=\"help-block error-block basic-block\" ng-show=\"vm.InfoForm.email.$touched\"><div ng-message=\"required\">Este campo es requerido</div><div ng-message=\"pattern\">El e-mail es invalido</div></div></div></div></div><div class=\"row\"><div class=\"col-md-12\"><div class=\"form-group has-feedback\" ng-class=\"{\'has-error\': vm.InfoForm.direccion.$invalid && (vm.InfoForm.direccion.$dirty || vm.InfoForm.$submitted)}\"><label for=\"direccion\">Dirección</label> <textarea class=\"form-control\" rows=\"5\" id=\"direccion\" name=\"direccion\" ng-model=\"cliente.direccion\" ng-maxlength=\"150\" ng-minlength=\"5\" required=\"\"></textarea><div ng-messages=\"vm.InfoForm.direccion.$error\" class=\"help-block error-block basic-block\" ng-show=\"vm.InfoForm.direccion.$touched\"><div ng-message=\"required\">Este campo es requerido</div><div ng-message=\"maxlength\">La dirección es muy larga</div><div ng-message=\"minlength\">La dirección es muy corta</div></div></div></div></div></form></ba-wizard-step><ba-wizard-step title=\"EVALUACIÓN ESTÉTICA\" form=\"vm.evaluacionForm\"><form name=\"vm.evaluacionForm\" novalidate=\"\"><div class=\"row\"><div class=\"col-md-3\"><label class=\"checkbox-inline custom-checkbox nowrap\"><input type=\"checkbox\" id=\"\" value=\"option2\" name=\"hipertersion_arterial\" ng-model=\"cliente.evaluacion_clinica.hipertersion_arterial\"> <span>Hipertensión Arterial</span></label></div><div class=\"col-md-3\"><label class=\"checkbox-inline custom-checkbox nowrap\"><input type=\"checkbox\" id=\"\" value=\"option2\" name=\"hipotension\" ng-model=\"cliente.evaluacion_clinica.hipotension\"> <span>Hipotensión</span></label></div><div class=\"col-md-3\"><label class=\"checkbox-inline custom-checkbox nowrap\"><input type=\"checkbox\" id=\"\" value=\"option2\" name=\"diabetes\" ng-model=\"cliente.evaluacion_clinica.diabetes\"> <span>Diabetes</span></label></div><div class=\"col-md-3\"><label class=\"checkbox-inline custom-checkbox nowrap\"><input type=\"checkbox\" id=\"\" value=\"option2\" name=\"renal\" ng-model=\"cliente.evaluacion_clinica.renal\"> <span>Renal</span></label></div></div><div class=\"row\"><div class=\"col-md-3\"><label class=\"checkbox-inline custom-checkbox nowrap\"><input type=\"checkbox\" id=\"\" value=\"option2\" name=\"cardiopatio\" ng-model=\"cliente.evaluacion_clinica.cardiopatio\"> <span>Cardiopatio</span></label></div><div class=\"col-md-3\"><label class=\"checkbox-inline custom-checkbox nowrap\"><input type=\"checkbox\" id=\"\" value=\"option2\" name=\"circulacion\" ng-model=\"cliente.evaluacion_clinica.circulacion\"> <span>Circulación</span></label></div><div class=\"col-md-3\"><label class=\"checkbox-inline custom-checkbox nowrap\"><input type=\"checkbox\" id=\"\" value=\"option2\" name=\"anticon_oral\" ng-model=\"cliente.evaluacion_clinica.anticon_oral\"> <span>Anticonceptivo Oral</span></label></div><div class=\"col-md-3\"><label class=\"checkbox-inline custom-checkbox nowrap\"><input type=\"checkbox\" id=\"\" value=\"option2\" name=\"tras_mens\" ng-model=\"cliente.evaluacion_clinica.tras_mens\"> <span>Trastorno Menstrual</span></label></div></div><div class=\"row\"><div class=\"col-md-3\"><label class=\"checkbox-inline custom-checkbox nowrap\"><input type=\"checkbox\" id=\"\" value=\"option2\" name=\"f_u_r\" ng-model=\"cliente.evaluacion_clinica.f_u_r\"> <span>F_U_R</span></label></div><div class=\"col-md-3\"><label class=\"checkbox-inline custom-checkbox nowrap\"><input type=\"checkbox\" id=\"\" value=\"option2\" name=\"d_i_u\" ng-model=\"cliente.evaluacion_clinica.d_i_u\"> <span>D_I_U</span></label></div><div class=\"col-md-3\"><label class=\"checkbox-inline custom-checkbox nowrap\"><input type=\"checkbox\" id=\"\" value=\"option2\" name=\"tiroides\" ng-model=\"cliente.evaluacion_clinica.tiroides\"> <span>Tiroides</span></label></div><div class=\"col-md-3\"><label class=\"checkbox-inline custom-checkbox nowrap\"><input type=\"checkbox\" id=\"\" value=\"option2\" name=\"epilepsia\" ng-model=\"cliente.evaluacion_clinica.epilepsia\"> <span>Epilepsia</span></label></div></div><div class=\"row\"><div class=\"col-md-3\"><label class=\"checkbox-inline custom-checkbox nowrap\"><input type=\"checkbox\" id=\"\" value=\"option2\" name=\"lupus\" ng-model=\"cliente.evaluacion_clinica.lupus\"> <span>Lupus</span></label></div><div class=\"col-md-3\"><label class=\"checkbox-inline custom-checkbox nowrap\"><input type=\"checkbox\" id=\"\" value=\"option2\" name=\"problemas_digestivos\" ng-model=\"cliente.evaluacion_clinica.problemas_digestivos\"> <span>Problemas Digestivos</span></label></div><div class=\"col-md-3\"><label class=\"checkbox-inline custom-checkbox nowrap\"><input type=\"checkbox\" id=\"\" value=\"option2\" name=\"estrenimiento\" ng-model=\"cliente.evaluacion_clinica.estrenimiento\"> <span>Estreñimiento</span></label></div><div class=\"col-md-3\"><label class=\"checkbox-inline custom-checkbox nowrap\"><input type=\"checkbox\" id=\"\" value=\"option2\" name=\"hepatitis\" ng-model=\"cliente.evaluacion_clinica.hepatitis\"> <span>Hepatitis</span></label></div></div><div class=\"row\"><div class=\"col-md-3\"><label class=\"checkbox-inline custom-checkbox nowrap\"><input type=\"checkbox\" id=\"\" value=\"option2\" name=\"cancer\" ng-model=\"cliente.evaluacion_clinica.cancer\"> <span>Cancer</span></label></div><div class=\"col-md-3\"><label class=\"checkbox-inline custom-checkbox nowrap\"><input type=\"checkbox\" id=\"\" value=\"option2\" name=\"prob_urinarios\" ng-model=\"cliente.evaluacion_clinica.prob_urinarios\"> <span>Problemas Urinarios</span></label></div><div class=\"col-md-3\"><label class=\"checkbox-inline custom-checkbox nowrap\"><input type=\"checkbox\" id=\"\" value=\"option2\" name=\"rete_liquidos\" ng-model=\"cliente.evaluacion_clinica.rete_liquidos\"> <span>Retencion de Líquido</span></label></div><div class=\"col-md-3\"><label class=\"checkbox-inline custom-checkbox nowrap\"><input type=\"checkbox\" id=\"\" value=\"option2\" name=\"prob_respiratorios\" ng-model=\"cliente.evaluacion_clinica.prob_respiratorios\"> <span>Problemas Respiratorios</span></label></div></div><div class=\"row\"><div class=\"col-md-3\"><label class=\"checkbox-inline custom-checkbox nowrap\"><input type=\"checkbox\" id=\"\" value=\"option2\" name=\"asma\" ng-model=\"cliente.evaluacion_clinica.asma\"> <span>Asma</span></label></div><div class=\"col-md-3\"><label class=\"checkbox-inline custom-checkbox nowrap\"><input type=\"checkbox\" id=\"\" value=\"option2\" name=\"alergias\" ng-model=\"cliente.evaluacion_clinica.alergias\"> <span>Alergias</span></label></div><div class=\"col-md-3\"><label class=\"checkbox-inline custom-checkbox nowrap\"><input type=\"checkbox\" id=\"\" value=\"option2\" name=\"antecedentes_dermat\" ng-model=\"cliente.evaluacion_clinica.antecedentes_dermat\"> <span>Antecedentes Dermatologicos</span></label></div><div class=\"col-md-3\"><label class=\"checkbox-inline custom-checkbox nowrap\"><input type=\"checkbox\" id=\"\" value=\"option2\" name=\"herpes\" ng-model=\"cliente.evaluacion_clinica.herpes\"> <span>Herpes</span></label></div></div><div class=\"row margin-filas\"><div class=\"col-md-12\"><div class=\"col-md-12\"><div class=\"form-group has-feedback\"><label for=\"medicamentos\">Medicamentos</label> <textarea class=\"form-control\" rows=\"3\" id=\"medicamentos\" name=\"medicamentos\" ng-model=\"cliente.evaluacion_estetica.medicamentos\" required=\"\"></textarea></div></div></div></div><div class=\"row\"><div class=\"col-md-12\"><div class=\"text-center tituloHistoria\"><h3>OPERACIONES</h3></div></div></div><div class=\"row\"><div class=\"col-md-6\"><div class=\"form-group has-feedback\"><label for=\"cirugias\">¿Que cirugias se ha realizado?</label> <input type=\"text\" class=\"form-control\" id=\"cirugias\" name=\"cirugias\" placeholder=\"cirugias\" ng-model=\"cliente.evaluacion_clinica.cirugias\" required=\"\"></div></div><div class=\"col-md-6\"><div class=\"form-group has-feedback\"><label for=\"complicaciones\">Complicaciones de la cirugía</label> <input type=\"text\" class=\"form-control\" id=\"complicaciones\" name=\"complicaciones\" placeholder=\"cirugias\" ng-model=\"cliente.evaluacion_clinica.complicaciones\" required=\"\"></div></div></div><div class=\"row margin-filas\"><div class=\"col-md-12 text-center\"><label class=\"checkbox-inline custom-checkbox nowrap\"><input type=\"checkbox\" id=\"recibido_anestesia\" value=\"option2\" name=\"recibido_anestesia\" ng-model=\"cliente.evaluacion_clinica.recibido_anestesia\"> <span>¿Has recibido anestesia?</span></label></div></div><div class=\"row\"><div class=\"col-md-12\"><div class=\"text-center tituloHistoria\"><h3>IMPLANTES</h3></div></div></div><div class=\"row\"><div class=\"col-md-4\"><label class=\"checkbox-inline custom-checkbox nowrap\"><input type=\"checkbox\" id=\"recibido_implantes\" value=\"option2\" name=\"recibido_implantes\" ng-model=\"cliente.evaluacion_clinica.implantes.recibido_implantes\"> <span>¿Se ha realizado implantes?</span></label></div><div ng-if=\"cliente.evaluacion_clinica.implantes.recibido_implantes\" class=\"margin-filas\"><div class=\"col-md-6\"><div class=\"form-group has-feedback\"><label for=\"tiempo\">Tiempo</label> <input type=\"text\" class=\"form-control\" id=\"tiempo\" name=\"tiempo\" placeholder=\"Tiempo\" ng-model=\"cliente.evaluacion_clinica.implantes.tiempo\" required=\"\"></div></div><div class=\"row\"><div class=\"col-md-6\"><div class=\"form-group has-feedback\"><label for=\"tiempo\">Área</label> <input type=\"text\" class=\"form-control\" id=\"area\" name=\"area\" placeholder=\"Area\" ng-model=\"cliente.evaluacion_clinica.implantes.area\" required=\"\"></div></div><div class=\"col-md-6\"><div class=\"form-group has-feedback\"><label for=\"tipo\">Tipo de implante</label> <input type=\"text\" class=\"form-control\" id=\"tipo\" name=\"tipo\" placeholder=\"Tiempo\" ng-model=\"cliente.evaluacion_clinica.implantes.tipo\" required=\"\"></div></div></div></div></div><div class=\"row\"><div class=\"col-md-12\"><div class=\"text-center tituloHistoria\"><h3>PEELING</h3></div></div></div><div class=\"row\"><div class=\"col-md-12\"><label class=\"checkbox-inline custom-checkbox nowrap\"><input type=\"checkbox\" value=\"option2\" name=\"realizado_antes\" ng-model=\"cliente.evaluacion_clinica.peeling.realizado_antes\"> <span>¿Se ha realizado peeling?</span></label></div></div><div class=\"row margin-filas\" ng-if=\"cliente.evaluacion_clinica.peeling.realizado_antes\"><div class=\"col-md-12\"><div class=\"form-group has-feedback\"><label for=\"cuando\">Cuando</label> <input type=\"text\" class=\"form-control\" id=\"cuando\" name=\"cuando\" placeholder=\"Tiempo\" ng-model=\"cliente.evaluacion_clinica.peeling.cuando\" required=\"\"></div></div></div><div class=\"row\"><div class=\"col-md-12\"><div class=\"text-center tituloHistoria\"><h3>OTROS</h3></div></div></div><div class=\"row\"><div class=\"col-md-4\"><label class=\"checkbox-inline custom-checkbox nowrap\"><input type=\"checkbox\" value=\"option2\" name=\"lentes_contacto\" ng-model=\"cliente.evaluacion_clinica.lentes_contacto\"> <span>Lentes de Contacto</span></label></div><div class=\"col-md-4\"><label class=\"checkbox-inline custom-checkbox nowrap\"><input type=\"checkbox\" value=\"option2\" name=\"fuma\" ng-model=\"cliente.evaluacion_clinica.fuma\"> <span>¿Fuma?</span></label></div><div class=\"col-md-4\"><label class=\"checkbox-inline custom-checkbox nowrap\"><input type=\"checkbox\" value=\"option2\" name=\"toma\" ng-model=\"cliente.evaluacion_clinica.toma\"> <span>¿Toma?</span></label></div></div><div class=\"row margin-filas\"><div class=\"col-md-4\"><div class=\"form-group has-feedback\"><label for=\"otros_aparatos\">¿Que otros aparatos utiliza?</label> <input type=\"text\" class=\"form-control\" id=\"otros_aparatos\" name=\"otros_aparatos\" placeholder=\"otros aparatos\" ng-model=\"cliente.evaluacion_clinica.otros_aparatos\" required=\"\"></div></div><div class=\"col-md-4\"><div class=\"form-group has-feedback\"><label for=\"productos_utilizados\">Productos utilizados actualmente</label> <input type=\"text\" class=\"form-control\" id=\"productos_utilizados\" name=\"productos_utilizados\" placeholder=\"Productos\" ng-model=\"cliente.evaluacion_clinica.productos_utilizados\" required=\"\"></div></div><div class=\"col-md-4\"><div class=\"form-group has-feedback\"><label for=\"medicamentos_actual\">Medicamento(s) Actualies</label> <input type=\"text\" class=\"form-control\" id=\"medicamentos_actual\" name=\"medicamentos_actual\" placeholder=\"Medicamentos actuales\" ng-model=\"cliente.evaluacion_clinica.medicamentos_actual\" required=\"\"></div></div></div></form></ba-wizard-step><ba-wizard-step title=\"MOTIVO DE CONSULTA\" form=\"vm.motivoconsultaForm\"><form name=\"vm.motivoconsultaForm\" novalidate=\"\"><div class=\"row\"><div class=\"col-md-3\"><div class=\"form-group has-feedback\"><label for=\"tipo_piel\">Tipo de piel</label> <input type=\"text\" class=\"form-control\" id=\"tipo_piel\" name=\"tipo_piel\" placeholder=\"Tipo de piel\" ng-model=\"cliente.motivo_consulta.tipo_piel\" required=\"\"></div></div><div class=\"col-md-3\"><div class=\"form-group has-feedback\"><label for=\"fototipo_piel\">Fototipo de piel</label> <input type=\"text\" class=\"form-control\" id=\"fototipo_piel\" name=\"fototipo_piel\" placeholder=\"FotoTipo de piel\" ng-model=\"cliente.motivo_consulta.fototipo_piel\" required=\"\"></div></div><div class=\"col-md-3\"><div class=\"form-group has-feedback\"><label for=\"talqangestasia\">Talangestasia</label> <input type=\"text\" class=\"form-control\" id=\"talqangestasia\" name=\"talqangestasia\" placeholder=\"Talangestasia\" ng-model=\"cliente.motivo_consulta.talqangestasia\" required=\"\"></div></div></div><div class=\"row\"><div class=\"col-md-3\"><div class=\"form-group has-feedback\"><label for=\"manchas\">Manchas</label> <input type=\"text\" class=\"form-control\" id=\"manchas\" name=\"manchas\" placeholder=\"manchas\" ng-model=\"cliente.motivo_consulta.manchas\" required=\"\"></div></div><div class=\"col-md-3\"><div class=\"form-group has-feedback\"><label for=\"arrugas\">Arrugas</label> <input type=\"text\" class=\"form-control\" id=\"arrugas\" name=\"arrugas\" placeholder=\"Arrugas\" ng-model=\"cliente.motivo_consulta.arrugas\" required=\"\"></div></div><div class=\"col-md-3\"><div class=\"form-group has-feedback\"><label for=\"arrugas_profundas\">Arrugas Profundas</label> <input type=\"text\" class=\"form-control\" id=\"arrugas_profundas\" name=\"arrugas_profundas\" placeholder=\"arrugas_profundas\" ng-model=\"cliente.motivo_consulta.arrugas_profundas\" required=\"\"></div></div><div class=\"col-md-3\"><div class=\"form-group has-feedback\"><label for=\"dx\">Dx</label> <input type=\"text\" class=\"form-control\" id=\"dx\" name=\"dx\" placeholder=\"dx\" ng-model=\"cliente.motivo_consulta.dx\" required=\"\"></div></div></div></form></ba-wizard-step><ba-wizard-step title=\"GUARDAR\"><div class=\"text-center\"><h4>¿Esta seguro que desea guardar este cliente?</h4><small>Verifique los datos antes de hacer click en el boton guardar</small> <button class=\"btn btn-success\" ng-click=\"guardarCliente()\">Guardar Cliente</button></div></ba-wizard-step></ba-wizard></div></div></div></div>");
$templateCache.put("app/pages/clientes/verCliente.html","<div class=\"row\" style=\"margin-bottom: 0.2%\"><div class=\"col-sm-4 col-xs-6 pull-right\"><button class=\"btn btn-primary pull-right btn-with-icon\" ng-if=\"!formHistoriaMedica.$visible\" ng-click=\"abrirForm()\"><i class=\"ion-edit\"></i>Editar</button><div ng-if=\"formHistoriaMedica.$visible\"><button class=\"btn btn-success pull-right btn-with-icon\" ng-click=\"submitForm()\"><i class=\"ion-android-done\"></i>Guardar</button> <button class=\"btn btn-warning pull-right btn-with-icon\" ng-click=\"formHistoriaMedica.$cancel()\"><i class=\"ion-android-cancel\"></i>Cancelar</button></div></div></div><div class=\"row\"><div class=\"col-md-12 col-lg-12 col-xs-12 col-sm-12\"><div ba-panel=\"\"><div class=\"row\"><div class=\"col-md-12 text-center\"><img src=\"../../../assets/img/app/profile/Nasta.png\" height=\"200\"></div></div><form editable-form=\"\" name=\"$parent.formHistoriaMedica\" onaftersave=\"editarCliente()\" style=\"margin-top:5%\"><div class=\"row\"><div class=\"col-md-4\"><div class=\"form-group has-feedback\"><label class=\"historia\">C.I:</label> <span class=\"historiaFiled\" editable-text=\"cliente._id\" e-name=\"_id\" onbeforesave=\"checkNumber($data,6,8,true)\" e-required=\"\">{{cliente._id | number}}</span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Nombre:</label> <span class=\"historiaFiled\" editable-text=\"cliente.nombre\" e-name=\"nombre\" onbeforesave=\"checkTexto($data,4,40,true)\" e-required=\"\">{{cliente.nombre}}</span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Apellido:</label> <span class=\"historiaFiled\" editable-text=\"cliente.apellido\" e-name=\"nombre\" onbeforesave=\"checkTexto($data,4,40,true)\" e-required=\"\">{{cliente.apellido}}</span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Edad:</label> <span class=\"historiaFiled\">{{cliente.edad}}</span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Sexo:</label> <span class=\"historiaFiled\" editable-select=\"cliente.sexo\" e-name=\"sexo\" e-ng-options=\"s.value as s.nombre for s in generos\" e-required=\"\">{{cliente.sexo}}</span></div></div><div class=\"col-md-4\"><div class=\"form-group has-feedback\"><label class=\"historia\">Fecha de nacimiento:</label> <span class=\"historiaFiled\" editable-date=\"cliente.fechanac\" e-name=\"fechanac\" e-required=\"\" onbeforesave=\"checkDate($data, \'1940-01-01\',\'2006-12-31\')\">{{cliente.fechanac | date:\"dd/MM/yyyy\"}}</span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Estado Civil:</label> <span class=\"historiaFiled\" editable-select=\"cliente.estado_civil\" e-name=\"estado_civil\" e-ng-options=\"x.value as x.nombre for x in estado_civil\" e-required=\"\">{{cliente.estado_civil}}</span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Ocupación:</label> <span class=\"historiaFiled\" editable-text=\"cliente.ocupacion\" e-name=\"ocupacion\" onbeforesave=\"checkTexto($data,5,40,true)\" e-required=\"\">{{cliente.ocupacion}}</span></div><div class=\"form-group has-feedback\"><label class=\"historia\">E-mail:</label> <span class=\"historiaFiled\" editable-email=\"cliente.email\" e-name=\"email\" onbeforesave=\"checkEmail($data)\" e-required=\"\">{{cliente.email}}</span></div></div><div class=\"col-md-4\"><div class=\"form-group has-feedback\"><label class=\"historia\">Teléfono:</label> <span class=\"historiaFiled\" editable-text=\"cliente.telefono_hab\" e-name=\"telefono_hab\" onbeforesave=\"checkNumber($data,11,30)\" e-required=\"\">{{cliente.telefono_hab}}</span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Teléfono oficina:</label> <span class=\"historiaFiled\" editable-text=\"cliente.telefono_ofic\" e-name=\"telefono_ofic\" onbeforesave=\"checkNumber($data,11,30)\" e-required=\"\">{{cliente.telefono_ofic}}</span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Celular:</label> <span class=\"historiaFiled\" editable-text=\"cliente.celular\" e-name=\"celular\" onbeforesave=\"checkNumber($data,11,30)\" e-required=\"\">{{cliente.celular}}</span></div></div></div><div class=\"row\"><div class=\"col-md-12\"><div class=\"form-group has-feedback\"><label class=\"historia\">Direccion:</label> <span class=\"historiaFiled\" editable-text=\"cliente.direccion\" e-name=\"direccion\" onbeforesave=\"checkAlfaNumerico($data,5,150,true)\" e-required=\"\">{{cliente.direccion}}</span></div></div></div><div class=\"row\"><div class=\"col-md-12\"><div class=\"text-center tituloHistoria\"><h3>EVALUACIÓN CLINICA ESTÉTICA</h3></div></div></div><div class=\"row\"><div class=\"col-md-3\"><div class=\"form-group has-feedback\"><label class=\"historia\">Hipertensión Arterial:</label> <span class=\"historiaFiled\" e-title=\"Si/No\" editable-checkbox=\"cliente.evaluacion_clinica.hipertersion_arterial\" ng-bind-html=\"cliente.evaluacion_clinica.hipertersion_arterial | checkboxFilter\"></span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Hipotensión:</label> <span class=\"historiaFiled\" e-title=\"Si/No\" editable-checkbox=\"cliente.evaluacion_clinica.hipotension\" ng-bind-html=\"cliente.evaluacion_clinica.hipotension | checkboxFilter\"></span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Diábetes:</label> <span class=\"historiaFiled\" e-title=\"Si/No\" editable-checkbox=\"cliente.evaluacion_clinica.diabetes\" ng-bind-html=\"cliente.evaluacion_clinica.diabetes | checkboxFilter\"></span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Recibido anestesia:</label> <span class=\"historiaFiled\" e-title=\"Si/No\" editable-checkbox=\"cliente.evaluacion_clinica.recibido_anestesia\" ng-bind-html=\"cliente.evaluacion_clinica.recibido_anestesia | checkboxFilter\"></span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Hepatitis:</label> <span class=\"historiaFiled\" e-title=\"Si/No\" editable-checkbox=\"cliente.evaluacion_clinica.hepatitis\" ng-bind-html=\"cliente.evaluacion_clinica.hepatitis | checkboxFilter\"></span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Cáncer:</label> <span class=\"historiaFiled\" e-title=\"Si/No\" editable-checkbox=\"cliente.evaluacion_clinica.cancer\" ng-bind-html=\"cliente.evaluacion_clinica.cancer | checkboxFilter\"></span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Antecedentes Dermatologicos:</label> <span class=\"historiaFiled\" e-title=\"Si/No\" editable-checkbox=\"cliente.evaluacion_clinica.antecedentes_dermat\" ng-bind-html=\"cliente.evaluacion_clinica.antecedentes_dermat | checkboxFilter\"></span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Herpes:</label> <span class=\"historiaFiled\" e-title=\"Si/No\" editable-checkbox=\"cliente.evaluacion_clinica.herpes\" ng-bind-html=\"cliente.evaluacion_clinica.herpes | checkboxFilter\"></span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Fuma:</label> <span class=\"historiaFiled\" e-title=\"Si/No\" editable-checkbox=\"cliente.evaluacion_clinica.fuma\" ng-bind-html=\"cliente.evaluacion_clinica.fuma | checkboxFilter\"></span></div></div><div class=\"col-md-3\"><div class=\"form-group has-feedback\"><label class=\"historia\">Insuficiencia Renal:</label> <span class=\"historiaFiled\" e-title=\"Si/No\" editable-checkbox=\"cliente.evaluacion_clinica.renal\" ng-bind-html=\"cliente.evaluacion_clinica.renal | checkboxFilter\"></span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Cardiopatio:</label> <span class=\"historiaFiled\" e-title=\"Si/No\" editable-checkbox=\"cliente.evaluacion_clinica.cardiopatio\" ng-bind-html=\"cliente.evaluacion_clinica.cardiopatio | checkboxFilter\"></span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Circulación:</label> <span class=\"historiaFiled\" e-title=\"Si/No\" editable-checkbox=\"cliente.evaluacion_clinica.circulacion\" ng-bind-html=\"cliente.evaluacion_clinica.circulacion | checkboxFilter\"></span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Anticonceptivos oral:</label> <span class=\"historiaFiled\" e-title=\"Si/No\" editable-checkbox=\"cliente.evaluacion_clinica.anticon_oral\" ng-bind-html=\"cliente.evaluacion_clinica.anticon_oral | checkboxFilter\"></span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Problemas Urinarios:</label> <span class=\"historiaFiled\" e-title=\"Si/No\" editable-checkbox=\"cliente.evaluacion_clinica.prob_urinarios\" ng-bind-html=\"cliente.evaluacion_clinica.prob_urinarios | checkboxFilter\"></span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Retención de Liquidos:</label> <span class=\"historiaFiled\" e-title=\"Si/No\" editable-checkbox=\"cliente.evaluacion_clinica.rete_liquidos\" ng-bind-html=\"cliente.evaluacion_clinica.rete_liquidos | checkboxFilter\"></span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Hongos:</label> <span class=\"historiaFiled\" e-title=\"Si/No\" editable-checkbox=\"cliente.evaluacion_clinica.hongos\" ng-bind-html=\"cliente.evaluacion_clinica.hongos | checkboxFilter\"></span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Cesareas:</label> <span class=\"historiaFiled\" e-title=\"Si/No\" editable-checkbox=\"cliente.evaluacion_clinica.cesareas\" ng-bind-html=\"cliente.evaluacion_clinica.cesareas | checkboxFilter\"></span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Toma:</label> <span class=\"historiaFiled\" e-title=\"Si/No\" editable-checkbox=\"cliente.evaluacion_clinica.toma\" ng-bind-html=\"cliente.evaluacion_clinica.toma | checkboxFilter\"></span></div></div><div class=\"col-md-3\"><div class=\"form-group has-feedback\"><label class=\"historia\">Trastorno Menstrual:</label> <span class=\"historiaFiled\" e-title=\"Si/No\" editable-checkbox=\"cliente.evaluacion_clinica.tras_mens\" ng-bind-html=\"cliente.evaluacion_clinica.tras_mens | checkboxFilter\"></span></div><div class=\"form-group has-feedback\"><label class=\"historia\">F_U_R:</label> <span class=\"historiaFiled\" e-title=\"Si/No\" editable-checkbox=\"cliente.evaluacion_clinica.f_u_r\" ng-bind-html=\"cliente.evaluacion_clinica.f_u_r | checkboxFilter\"></span></div><div class=\"form-group has-feedback\"><label class=\"historia\">D_I_U:</label> <span class=\"historiaFiled\" e-title=\"Si/No\" editable-checkbox=\"cliente.evaluacion_clinica.d_i_u\" ng-bind-html=\"cliente.evaluacion_clinica.d_i_u | checkboxFilter\"></span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Tiroides:</label> <span class=\"historiaFiled\" e-title=\"Si/No\" editable-checkbox=\"cliente.evaluacion_clinica.tiroides\" ng-bind-html=\"cliente.evaluacion_clinica.tiroides | checkboxFilter\"></span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Problemas Respiratorios:</label> <span class=\"historiaFiled\" e-title=\"Si/No\" editable-checkbox=\"cliente.evaluacion_clinica.prob_respiratorios\" ng-bind-html=\"cliente.evaluacion_clinica.prob_respiratorios | checkboxFilter\"></span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Asma:</label> <span class=\"historiaFiled\" e-title=\"Si/No\" editable-checkbox=\"cliente.evaluacion_clinica.asma\" ng-bind-html=\"cliente.evaluacion_clinica.asma | checkboxFilter\"></span></div><div class=\"form-group has-feedback\"><label class=\"historia\">¿Ha recibido anestesia?:</label> <span class=\"historiaFiled\" e-title=\"Si/No\" editable-checkbox=\"cliente.evaluacion_clinica.recibido_anestesia\" ng-bind-html=\"cliente.evaluacion_clinica.recibido_anestesia | checkboxFilter\"></span></div><div class=\"form-group has-feedback\"><label class=\"historia\">¿Lentes de contacto?:</label> <span class=\"historiaFiled\" e-title=\"Si/No\" editable-checkbox=\"cliente.evaluacion_clinica.lentes_contacto\" ng-bind-html=\"cliente.evaluacion_clinica.lentes_contacto | checkboxFilter\"></span></div></div><div class=\"col-md-3\"><div class=\"form-group has-feedback\"><label class=\"historia\">Epilepsia:</label> <span class=\"historiaFiled\" e-title=\"Si/No\" editable-checkbox=\"cliente.evaluacion_clinica.epilepsia\" ng-bind-html=\"cliente.evaluacion_clinica.epilepsia | checkboxFilter\"></span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Lupus:</label> <span class=\"historiaFiled\" e-title=\"Si/No\" editable-checkbox=\"cliente.evaluacion_clinica.lupus\" ng-bind-html=\"cliente.evaluacion_clinica.lupus | checkboxFilter\"></span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Problemas Digestivos:</label> <span class=\"historiaFiled\" e-title=\"Si/No\" editable-checkbox=\"cliente.evaluacion_clinica.problemas_digestivos\" ng-bind-html=\"cliente.evaluacion_clinica.problemas_digestivos | checkboxFilter\"></span></div><div class=\"form-group\"><label class=\"historia\">Estrenimiento:</label> <span class=\"historiaFiled\" e-title=\"Si/No\" editable-checkbox=\"cliente.evaluacion_clinica.estrenimiento\" ng-bind-html=\"cliente.evaluacion_clinica.estrenimiento | checkboxFilter\"></span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Marcapasos:</label> <span class=\"historiaFiled\" e-title=\"Si/No\" editable-checkbox=\"cliente.evaluacion_clinica.marcapasos\" ng-bind-html=\"cliente.evaluacion_clinica.marcapasos | checkboxFilter\"></span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Alergias:</label> <span class=\"historiaFiled\" e-title=\"Si/No\" editable-checkbox=\"cliente.evaluacion_clinica.alergias\" ng-bind-html=\"cliente.evaluacion_clinica.alergias | checkboxFilter\"></span></div></div></div><div class=\"row\"><div class=\"col-md-12\"><div class=\"text-center tituloHistoria\"><h3>OTROS</h3></div></div></div><div class=\"row\"><div class=\"col-md-12\"><div class=\"form-group has-feedback\"><label class=\"historia\">Medicamentos:</label> <span class=\"historiaFiled\" editable-text=\"cliente.evaluacion_clinica.medicamentos\" e-name=\"evaluacion_clinica.medicamentos\" onbeforesave=\"checkTexto($data,6,150,true)\" ng-bind-html=\"cliente.evaluacion_clinica.medicamentos\"></span></div></div></div><div class=\"row\"><div class=\"col-md-4\"><div class=\"form-group has-feedback\"><label class=\"historia\">¿Qué cirugías se ha realizado?:</label> <span class=\"historiaFiled\" ng-bind-html=\"cliente.medicamentos\"></span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Complicaciones de la cirugía:</label> <span class=\"historiaFiled\" ng-bind-html=\"cliente.evaluacion_clinica.complicaciones\"></span></div></div><div class=\"col-md-4\"><div class=\"form-group has-feedback\"><label class=\"historia\">¿Recibido implantes?:</label> <span class=\"historiaFiled\" ng-bind-html=\"cliente.evaluacion_clinica.recibido_implantes | checkboxFilter\"></span></div><div ng-if=\"cliente.evaluacion_clinica.recibido_implantes\"><div class=\"form-group has-feedback\"><label class=\"historia\">Tiempo:</label> <span class=\"historiaFiled\" ng-bind-html=\"cliente.evaluacion_clinica.implantes.tiempo\"></span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Área:</label> <span class=\"historiaFiled\" ng-bind-html=\"cliente.evaluacion_clinica.implantes.area\"></span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Tipo de implante:</label> <span class=\"historiaFiled\" ng-bind-html=\"cliente.evaluacion_clinica.implantes.tipo\"></span></div></div></div><div class=\"col-md-4\"><div class=\"form-group has-feedback\"><label class=\"historia\">¿Se ha realizado peeling?:</label> <span class=\"historiaFiled\" ng-bind-html=\"cliente.evaluacion_clinica.peeling.realizado_antes | checkboxFilter\"></span></div><div ng-if=\"cliente.evaluacion_clinica.peeling.realizado_antes\"><div class=\"form-group has-feedback\"><label class=\"historia\">Cuando:</label> <span class=\"historiaFiled\" ng-bind-html=\"cliente.evaluacion_clinica.peeling.cuando\"></span></div></div></div></div><div class=\"row\"><div class=\"col-md-12\"><div class=\"form-group has-feedback\"><label class=\"historia\">Otros aparatos que utiliza:</label> <span class=\"historiaFiled\" editable-text=\"cliente.evaluacion_clinica.otros_aparatos\" e-name=\"evaluacion_clinica.otros_aparatos\" onbeforesave=\"checkTexto($data,5,150,false,1413414)\" ng-bind-html=\"cliente.evaluacion_clinica.otros_aparatos\"></span></div></div></div><div class=\"row\"><div class=\"col-md-12\"><div class=\"form-group has-feedback\"><label class=\"historia\">Productos utilizados actualmente:</label> <span class=\"historiaFiled\" editable-text=\"cliente.evaluacion_clinica.productos_utilizados\" e-name=\"evaluacion_clinica.productos_utilizados\" onbeforesave=\"checkTexto($data,5,150,false)\" ng-bind-html=\"cliente.evaluacion_clinica.productos_utilizados\"></span></div></div></div><div class=\"row\"><div class=\"col-md-12\"><div class=\"form-group has-feedback\"><label class=\"historia\">Medicamento(s) actual(es):</label> <span class=\"historiaFiled\" editable-text=\"cliente.evaluacion_clinica.medicamentos_actual\" e-name=\"evaluacion_clinica.medicamentos_actual\" onbeforesave=\"checkTexto($data,5,150,false)\" ng-bind-html=\"cliente.evaluacion_clinica.medicamentos_actual\" e-required=\"\"></span></div></div></div><div class=\"row\"><div class=\"col-md-12\"><div class=\"text-center tituloHistoria\"><h3>MOTIVO DE CONSULTA</h3></div></div></div><div class=\"row\"><div class=\"col-md-6\"><div class=\"form-group has-feedback\"><label class=\"historia\">Tipo de piel:</label> <span class=\"historiaFiled\" editable-text=\"cliente.motivo_consulta.tipo_piel\" e-name=\"motivo_consulta.tipo_piel\" onbeforesave=\"checkTexto($data,5,150,true)\" ng-bind-html=\"cliente.motivo_consulta.tipo_piel\" e-required=\"\"></span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Fototipo de piel:</label> <span class=\"historiaFiled\" editable-text=\"cliente.motivo_consulta.fototipo_piel\" e-name=\"motivo_consulta.fototipo_piel\" onbeforesave=\"checkTexto($data,5,150,true)\" ng-bind-html=\"cliente.motivo_consulta.fototipo_piel\" e-required=\"\"></span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Talangestasia:</label> <span class=\"historiaFiled\" editable-text=\"cliente.motivo_consulta.talqangestasia\" e-name=\"motivo_consulta.talqangestasia\" onbeforesave=\"checkTexto($data,5,150,true)\" ng-bind-html=\"cliente.motivo_consulta.talqangestasia\" e-required=\"\"></span></div></div><div class=\"col-md-6\"><div class=\"form-group has-feedback\"><label class=\"historia\">Manchas:</label> <span class=\"historiaFiled\" editable-text=\"cliente.motivo_consulta.manchas\" e-name=\"motivo_consulta.manchas\" onbeforesave=\"checkTexto($data,5,150,true)\" ng-bind-html=\"cliente.motivo_consulta.manchas\" e-required=\"\"></span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Arrugas:</label> <span class=\"historiaFiled\" editable-text=\"cliente.motivo_consulta.arrugas\" e-name=\"motivo_consulta.arrugas\" onbeforesave=\"checkTexto($data,5,150,true)\" ng-bind-html=\"cliente.motivo_consulta.arrugas\" e-required=\"\"></span></div><div class=\"form-group has-feedback\"><label class=\"historia\">Arrugas Profundas:</label> <span class=\"historiaFiled\" editable-text=\"cliente.motivo_consulta.arrugas_profundas\" e-name=\"motivo_consulta.arrugas_profundas\" onbeforesave=\"checkTexto($data,5,150,true)\" ng-bind-html=\"cliente.motivo_consulta.arrugas_profundas\" e-required=\"\"></span></div></div></div><div class=\"row\"><div class=\"col-md-12\"><div class=\"text-center tituloHistoria\"><h3>OBSERVACIONES</h3></div></div></div><div class=\"row text-center\"><div class=\"col-md-12\"><div class=\"form-group has-feedback text-center\"><label class=\"historia\">¿Algo más qué agregar?:</label> <textarea class=\"historiaFiled textAreaHistoria\" e-rows=\"7\" e-cols=\"40\" editable-textarea=\"cliente.observaciones\" e-name=\"observaciones\" onbeforesave=\"checkTexto($data,4,300,false)\">{{cliente.observaciones || \"Sin observaciones\"}}</textarea></div></div></div></form></div></div></div>");
$templateCache.put("app/pages/dashboard/citasSecre.html","<div><div class=\"row\" ng-if=\"eventsSecre\"><div class=\"col-lg-12 col-md-12\" ba-panel=\"\" ba-panel-title=\"Citas con secretaria\"><h2 class=\"text-center\">{{ calendarTitle }}</h2><div class=\"row\"><div class=\"col-md-6 text-center\"><div class=\"btn-group\"><button class=\"btn btn-primary\" mwl-date-modifier=\"\" date=\"viewDate\" decrement=\"calendarView\" ng-click=\"cellIsOpen = false\">Anterior</button> <button class=\"btn btn-default\" mwl-date-modifier=\"\" date=\"viewDate\" set-to-today=\"\" ng-click=\"cellIsOpen = false\">Hoy</button> <button class=\"btn btn-primary\" mwl-date-modifier=\"\" date=\"viewDate\" increment=\"calendarView\" ng-click=\"cellIsOpen = false\">Siguiente</button></div></div><br class=\"visible-xs visible-sm\"><div class=\"col-md-6 text-center\"><div class=\"btn-group\"><label class=\"btn btn-primary\" ng-model=\"calendarView\" uib-btn-radio=\"\'year\'\" ng-click=\"cellIsOpen = false\">Año</label> <label class=\"btn btn-primary\" ng-model=\"calendarView\" uib-btn-radio=\"\'month\'\" ng-click=\"cellIsOpen = false\">Mes</label> <label class=\"btn btn-primary\" ng-model=\"calendarView\" uib-btn-radio=\"\'week\'\" ng-click=\"cellIsOpen = false\">Semana</label> <label class=\"btn btn-primary\" ng-model=\"calendarView\" uib-btn-radio=\"\'day\'\" ng-click=\"cellIsOpen = false\">Día</label></div></div></div><mwl-calendar view=\"calendarView\" view-date=\"viewDate\" events=\"eventsSecre\" view-title=\"calendarTitle\" cell-is-open=\"true\"></mwl-calendar></div></div></div>");
$templateCache.put("app/pages/dashboard/dashboard.html","<div class=\"row pull-rigth\"><a class=\"btn btn-primary\" style=\"margin-left: 2%\" href=\"#/citasSecre\">Ver citas con secretaria</a></div><div class=\"row\" ng-if=\"events\"><div class=\"col-lg-12 col-md-12\" ba-panel=\"\" ba-panel-title=\"Agenda\"><h2 class=\"text-center\">{{ calendarTitle }}</h2><div class=\"row\"><div class=\"col-md-6 text-center\"><div class=\"btn-group\"><button class=\"btn btn-primary\" mwl-date-modifier=\"\" date=\"viewDate\" decrement=\"calendarView\" ng-click=\"cellIsOpen = false\">Anterior</button> <button class=\"btn btn-default\" mwl-date-modifier=\"\" date=\"viewDate\" set-to-today=\"\" ng-click=\"cellIsOpen = false\">Hoy</button> <button class=\"btn btn-primary\" mwl-date-modifier=\"\" date=\"viewDate\" increment=\"calendarView\" ng-click=\"cellIsOpen = false\">Siguiente</button></div></div><br class=\"visible-xs visible-sm\"><div class=\"col-md-6 text-center\"><div class=\"btn-group\"><label class=\"btn btn-primary\" ng-model=\"calendarView\" uib-btn-radio=\"\'year\'\" ng-click=\"cellIsOpen = false\">Año</label> <label class=\"btn btn-primary\" ng-model=\"calendarView\" uib-btn-radio=\"\'month\'\" ng-click=\"cellIsOpen = false\">Mes</label> <label class=\"btn btn-primary\" ng-model=\"calendarView\" uib-btn-radio=\"\'week\'\" ng-click=\"cellIsOpen = false\">Semana</label> <label class=\"btn btn-primary\" ng-model=\"calendarView\" uib-btn-radio=\"\'day\'\" ng-click=\"cellIsOpen = false\">Día</label></div></div></div><mwl-calendar view=\"calendarView\" view-date=\"viewDate\" events=\"events\" view-title=\"calendarTitle\" cell-is-open=\"true\"></mwl-calendar></div></div>");
$templateCache.put("app/pages/empleados/crear_empleado.html","<div class=\"row\"><div class=\"col-md-12 col-lg-12 col-xs-12 col-sm-12\"><div ba-panel=\"\"><form name=\"formEmpleado\" style=\"margin-top:5%\" novalidate=\"\"><div class=\"form-group\" ng-class=\"{\'has-error\': formEmpleado.cedula.$invalid && (formEmpleado.cedula.$dirty || formEmpleado.$submitted)}\"><label for=\"cedulaID\" class=\"title\">Cédula:</label> <input type=\"text\" ng-model=\"empleado.cedula\" name=\"cedula\" class=\"form-control\" id=\"cedulaID\" placeholder=\"Cédula del empleado\" ng-pattern=\"/^[0-9]+$/\" ng-minlength=\"6\" ng-maxlength=\"8\" required=\"\"><div ng-messages=\"formEmpleado.cedula.$error\" ng-show=\"formEmpleado.cedula.$touched\"><div ng-message=\"required\">Este campo es requerido</div><div ng-message=\"pattern\">Sólo se permiten números</div><div ng-message=\"minlength\">La cédula es muy corta</div><div ng-message=\"maxlength\">La cédula es muy larga</div></div></div><div class=\"form-group\" ng-class=\"{\'has-error\': formEmpleado.nombre.$invalid && (formEmpleado.nombre.$dirty || formEmpleado.$submitted)}\"><label for=\"nombre\" class=\"title\">Nombre:</label> <input type=\"text\" ng-model=\"empleado.nombre\" class=\"form-control\" id=\"nombre\" name=\"nombre\" placeholder=\"Nombre del empleado\" ng-maxlength=\"40\" ng-minlength=\"4\" ng-pattern=\"/^([A-Za-zÑñáéíóúÁÉÍÓÚ ]+)$/\" required=\"\"><div ng-messages=\"formEmpleado.nombre.$error\" ng-show=\"formEmpleado.nombre.$touched\"><div ng-message=\"required\">Este campo es requerido</div><div ng-message=\"pattern\">Sólo se permiten letras</div><div ng-message=\"minlength\">El nombre es muy corto</div><div ng-message=\"maxlength\">El nombre es muy largo</div></div></div><div class=\"form-group\" ng-class=\"{\'has-error\': formEmpleado.apellido.$invalid && (formEmpleado.apellido.$dirty || formEmpleado.$submitted)}\"><label for=\"apellido\" class=\"title\">Apellido:</label> <input type=\"text\" ng-model=\"empleado.apellido\" class=\"form-control\" name=\"apellido\" id=\"apellido\" placeholder=\"Apellido\" ng-maxlength=\"40\" ng-minlength=\"4\" ng-pattern=\"/^([A-Za-zÑñáéíóúÁÉÍÓÚ ]+)$/\" required=\"\"><div ng-messages=\"formEmpleado.apellido.$error\" ng-show=\"formEmpleado.apellido.$touched\"><div ng-message=\"required\">Este campo es requerido</div><div ng-message=\"pattern\">Sólo se permiten letras</div><div ng-message=\"minlength\">El apellido es muy corto</div><div ng-message=\"maxlength\">El apellido es muy largo</div></div></div><div class=\"form-group\" ng-class=\"{\'has-error\': formEmpleado.cargo.$invalid && (formEmpleado.cargo.$dirty || formEmpleado.$submitted)}\"><label for=\"cargo\" class=\"title\">Cargo:</label><select name=\"cargo\" class=\"form-control\" id=\"cargo\" ng-model=\"empleado.cargo\" ng-options=\"s as s for s in cargos\" required=\"\"></select><div ng-messages=\"formEmpleado.cargo.$error\" ng-show=\"formEmpleado.cargo.$touched\"><div ng-message=\"required\">Este campo es requerido</div></div></div><div class=\"form-group\" ng-class=\"{\'has-error\': formEmpleado.email.$invalid && (formEmpleado.email.$dirty || formEmpleado.$submitted)}\"><label for=\"correo\" class=\"title\">E-mail:</label> <input type=\"email\" ng-model=\"empleado.correo\" class=\"form-control\" id=\"correo\" placeholder=\"E-mail\" name=\"email\" ng-pattern=\"/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,4})+$/\" required=\"\"><div ng-messages=\"formEmpleado.email.$error\" ng-show=\"formEmpleado.email.$touched\"><div ng-message=\"required\">Este campo es requerido</div><div ng-message=\"pattern\">No es un e-mail válido</div></div></div><div class=\"form-group\" ng-class=\"{\'has-error\': formEmpleado.fechanac.$invalid && (formEmpleado.fechanac.$dirty || formEmpleado.$submitted)}\"><label for=\"fechanac\" class=\"title\">Fecha de nacimiento</label> <input type=\"date\" ng-model=\"empleado.fechanac\" class=\"form-control\" name=\"fechanac\" id=\"fechanac\" placeholder=\"Fecha de nacimiento\" min=\"1940-01-01\" max=\"1998-12-31\" required=\"\"><div ng-messages=\"formEmpleado.fechanac.$error\" ng-show=\"formEmpleado.fechanac.$touched\"><div ng-message=\"required\">Este campo es requerido</div><div ng-message=\"max\">La fecha es muy reciente</div><div ng-message=\"min\">La fecha es muy antigua</div></div></div><div class=\"row\"><div class=\"col-md-6\"><button class=\"btn btn-primary pull-right\" ng-disabled=\"formEmpleado.$invalid\" ng-click=\"crearEmpleado()\">Guardar</button></div></div></form></div></div></div>");
$templateCache.put("app/pages/empleados/empleados.html","<div class=\"row\" style=\"margin-bottom: 0.2%\"><div class=\"col-sm-4 col-xs-6 pull-right\"><a class=\"btn btn-primary pull-right btn-with-icon\" href=\"#/crear_empleado\"><i class=\"ion-person-add\"></i>Nuevo empleado</a></div><div class=\"col-sm-4 col-xs-6 pull-left\"><a class=\"btn btn-info pull-left btn-with-icon boton-margen\" ng-click=\"generarReporte()\"><i class=\"ion-printer\"></i>Imprimir reporte</a></div></div><div class=\"row\"><div class=\"col-md-12 col-lg-12 col-xs-12 col-sm-12\"><div ba-panel=\"\"><div class=\"table-responsive\"><table class=\"table table-hover\"><thead><tr class=\"black-muted-bg\"><td>Cédula</td><td>Nombre</td><td>Apellido</td><td>Fecha nacimiento</td><td>Edad</td><td>Correo</td><td>Cargo</td><td></td></tr></thead><tbody><tr ng-repeat=\"empleado in empleados\"><td>{{empleado._id | number}}</td><td>{{empleado.nombre}}</td><td>{{empleado.apellido}}</td><td>{{empleado.fechanac | date:\"dd/MM/yyyy\"}}</td><td>{{empleado.edad}}</td><td>{{empleado.correo}}</td><td>{{empleado.cargo}}</td><td><a type=\"button\" class=\"btn btn-info btn-with-icon\" href=\"#/empleados/{{empleado._id}}\"><i class=\"ion-information\"></i>Ver perfil</a> <button type=\"button\" class=\"btn btn-danger btn-with-icon\" ng-click=\"eliminarEmpleado(empleado._id)\"><i class=\"ion-alert-circled\"></i>Eliminar</button></td></tr></tbody></table></div></div></div></div>");
$templateCache.put("app/pages/empleados/verEmpleados.html","<div class=\"row\" style=\"margin-bottom: 0.2%\"><div class=\"col-sm-4 col-xs-6 pull-right\"><a class=\"btn btn-primary pull-right btn-with-icon\" ng-click=\"abrirForm()\" ng-if=\"!formEmpleado.$visible\"><i class=\"ion-edit\"></i>Editar</a><div ng-if=\"formEmpleado.$visible\"><button class=\"btn btn-success pull-right btn-with-icon\" ng-click=\"submitForm()\"><i class=\"ion-android-done\"></i>Guardar</button> <button class=\"btn btn-warning pull-right btn-with-icon\" ng-click=\"formEmpleado.$cancel()\"><i class=\"ion-android-cancel\"></i>Cancelar</button></div></div></div><div class=\"row\"><div class=\"col-md-12 col-lg-12 col-xs-12 col-sm-12\"><div ba-panel=\"\"><form editable-form=\"\" name=\"$parent.formEmpleado\" onaftersave=\"editarEmpleado()\" style=\"margin-top:5%\" novalidate=\"\"><div class=\"form-group\"><label for=\"nombre\" class=\"title\">Nombre:</label> <span editable-text=\"empleado.nombre\" e-name=\"nombre\" e-style=\"width: 100%\" e-required=\"\" class=\"form-control editarCampo\" id=\"nombre\" placeholder=\"Nombre\" ng-bind-html=\"empleado.nombre\" onbeforesave=\"checkTexto($data,4,40,true)\"></span></div><div class=\"form-group\"><label for=\"apellido\" class=\"title\">Apellido:</label> <span editable-text=\"empleado.apellido\" e-name=\"apellido\" e-required=\"\" class=\"form-control\" id=\"apellido\" placeholder=\"Apellido\" ng-bind-html=\"empleado.apellido\" onbeforesave=\"checkTexto($data,4,40,true)\"></span></div><div class=\"form-group\"><label for=\"cargo\" class=\"title\">Cargo:</label> <span editable-select=\"empleado.cargo\" e-name=\"cargo\" e-required=\"\" class=\"form-control form-control-rounded\" e-ng-options=\"s as s for s in cargos\" id=\"cargo\" placeholder=\"Cargo\">{{empleado.cargo}}</span></div><div class=\"form-group\"><label for=\"edad\" class=\"title\">Edad:</label> <span class=\"form-control\" id=\"edad\" placeholder=\"edad\" ng-bind-html=\"empleado.edad\"></span></div><div class=\"form-group\"><label for=\"correo\" class=\"title\">Correo electronico:</label> <span editable-email=\"empleado.correo\" e-name=\"correo\" e-required=\"\" class=\"form-control\" id=\"correo\" placeholder=\"correo\" ng-bind-html=\"empleado.correo\" onbeforesave=\"checkEmail($data)\"></span></div><div class=\"form-group\"><label for=\"fechanac\" class=\"title\">Fecha de nacimiento</label> <span editable-date=\"empleado.fechanac\" e-name=\"correo\" e-required=\"\" class=\"form-control\" id=\"fechanac\" placeholder=\"fechanac\" ng-bind-html=\"empleado.fechanac | date:\'dd/MM/yyyy\'\" onbeforesave=\"checkDate($data, \'1940-01-01\',\'1998-12-31\')\"></span></div></form></div></div></div>");
$templateCache.put("app/pages/honorarios/historico.html","<div class=\"row\"><div class=\"col-sm-4 col-xs-6 pull-left\"><a class=\"btn btn-info pull-left btn-with-icon boton-margen\" ng-if=\"empleadoSelec.CI\" ng-click=\"generarReporte()\"><i class=\"ion-printer\"></i>Imprimir reporte</a></div><div class=\"col-sm-4 col-xs-6 pull-left\"><div class=\"form-group\"><label for=\"empleado\">Seleccione un empleado</label><select class=\"form-control\" id=\"empleado\" name=\"empleado\" ng-model=\"empleadoSelec.CI\" ng-options=\"empleado._id as empleado.nombre + \' \' + empleado.apellido for empleado in empleados\" required=\"\"></select></div></div></div><div class=\"row row-center\" ng-if=\"historico\"><div class=\"col-md-12 text-center\"><form class=\"form-inline\"><div class=\"form-group\"><label for=\"fecha1\">Desde</label> <input type=\"date\" ng-model=\"fechas.uno\" class=\"form-control\" id=\"fecha1\" ng-change=\"validarFecha(1)\"></div><div class=\"form-group\"><label for=\"Hasta\">Hasta</label> <input type=\"date\" ng-model=\"fechas.dos\" class=\"form-control\" id=\"Hasta\" ng-change=\"validarFecha(2)\"></div></form></div></div><div class=\"row\"><div class=\"col-md-12 col-lg-12 col-xs-12 col-sm-12\"><div ba-panel=\"\"><div ng-if=\"historico\" class=\"table-responsive\"><table class=\"table table-hover\"><thead><tr class=\"black-muted-bg\"><td>Fecha</td><td>Empleado</td><td>Tratamientos</td><td>IVA</td><td>Estética</td><td>Total pagado</td></tr></thead><tbody><tr ng-repeat=\"hist in hArray.historicoFiltrado = (historico | filter:empleadoSelec.CI | fechasFiltro:fechas.uno:fechas.dos:\'fecha_pago\')\"><td>{{hist.fecha_pago | date:\"dd/MM/yyyy hh:mm a\"}}</td><td>{{hist.idempleado.nombre + \" \" + hist.idempleado.apellido}}</td><td>{{hist.total_tratamientos | currency: \"Bs. \"}}</td><td>{{hist.iva | currency: \"Bs. \"}}</td><td>{{hist.total_porcentaje | currency: \"Bs. \"}}</td><td>{{hist.total_pagado | currency: \"Bs. \"}}</td></tr></tbody></table></div></div></div></div>");
$templateCache.put("app/pages/honorarios/honorarios.html","<div class=\"row pull-rigth\"><a class=\"btn btn-primary\" style=\"margin-left: 2%\" href=\"#/historico\">Ver histórico de pagos</a></div><div class=\"pull-right\" style=\"margin-bottom: 0.2%\"><form name=\"porcentajeForm\" class=\"row form-inline\" novalidate=\"\"><div class=\"form-group col-sm-3 col-md-4\"><input type=\"text\" class=\"form-control\" ng-model=\"porcentaje\" name=\"porce\" placeholder=\"Introduzca el porcentaje de la estética\" ng-pattern=\"/^[0-9]+$/\" ng-minlength=\"1\" ng-maxlength=\"2\" required=\"\"><div ng-messages=\"porcentajeForm.porce.$error\" ng-show=\"porcentajeForm.porce.$touched\"><div ng-message=\"required\">Este campo es requerido</div><div ng-message=\"pattern\">Sólo se permiten números mayores que cero</div><div ng-message=\"minlength\">Debe de haber al menos una unidad</div><div ng-message=\"maxlength\">El porcentaje es demasiado elevado</div></div></div><button class=\"btn btn-primary boton-margen\" ng-disabled=\"porcentajeForm.$invalid\" ng-click=\"guardarPorcentaje()\">Cambiar %</button></form></div><div class=\"row\"><div class=\"col-md-12 col-lg-12 col-xs-12 col-sm-12\"><div ba-panel=\"\"><div class=\"form-group\"><label for=\"empleado\">Seleccione un empleado</label><select class=\"form-control\" id=\"empleado\" name=\"empleado\" ng-model=\"empleadoSelec.CI\" ng-options=\"empleado._id as empleado.nombre + \' \' + empleado.apellido for empleado in empleados\" ng-change=\"pedirTrabajos()\" required=\"\"></select></div><div ng-if=\"detalles\" class=\"table-responsive\"><table class=\"table table-hover\"><thead><tr clas=\"black-muted-bg\"><td colspan=\"4\" style=\"text-align: center\">CONCEPTOS</td></tr><tr class=\"black-muted-bg\"><td>Fecha</td><td>Concepto</td><td>Cliente</td><td>Precio trabajo</td></tr></thead><tbody><tr ng-repeat=\"deta in detalles\"><td>{{deta.fecha | date:\"dd/MM/yyyy hh:mm a\"}}</td><td>{{deta.trabajo_popular.nombre_trabajo}}</td><td>{{deta.nombre + \" \" + deta.apellido}}</td><td>{{deta.trabajo_popular.precio | currency: \"Bs. \"}}</td></tr></tbody><tfoot><tr><td colspan=\"4\"><strong>TOTAL:</strong> {{totalTrabajos | currency: \"Bs. \"}}</td></tr><tr><td colspan=\"4\"><strong>IVA (12%):</strong> {{IVA | currency: \"Bs. \"}}</td></tr><tr><td colspan=\"4\"><strong>ESTETICA ({{porcentajeOriginal + \" %\"}}):</strong> {{estetica | currency: \"Bs. \"}}</td></tr><tr><td colspan=\"4\"><strong>TOTAL A PAGAR:</strong> {{totalPago | currency: \"Bs. \"}}</td></tr></tfoot></table><button class=\"btn btn-success pull-right\" ng-click=\"Pagar()\">PAGAR</button></div></div></div></div>");
$templateCache.put("app/pages/login/login.html","<div class=\"container\"><div class=\"top-content\"><div class=\"inner-bg\"><div class=\"container\"><div class=\"row\"><div class=\"col-sm-6 col-sm-offset-3\"><img src=\"../../../assets/img/app/logo/songa3.png\" style=\"width: 50%;\" class=\"img-responsive center-block\" alt=\"Songa Spa\"></div></div><div class=\"row\"><div class=\"col-sm-6 col-sm-offset-3 form-box\"><div class=\"form-bottom\"><form name=\"loginForm\" class=\"login-form\"><div class=\"form-group\"><label class=\"sr-only\" for=\"form-username\">Cédula de identidad</label> <input type=\"text\" name=\"cedula\" placeholder=\"Cédula de identidad\" ng-model=\"persona.cedula\" class=\"form-username form-control\" id=\"form-username\" ng-keypress=\"validarNumero(this)\" ng-pattern=\"/^[0-9]+$/\" ng-minlength=\"6\" ng-maxlength=\"8\" required=\"\"><div ng-messages=\"loginForm.cedula.$error\" ng-show=\"loginForm.cedula.$touched\"><div ng-message=\"required\">Este campo es requerido</div><div ng-message=\"pattern\">Sólo se permiten números</div><div ng-message=\"minlength\">La cédula es muy corta</div><div ng-message=\"maxlength\">La cédula es muy larga</div></div></div><div class=\"form-group\"><label class=\"sr-only\" for=\"form-password\">Password</label> <input type=\"password\" name=\"clave\" placeholder=\"Clave\" ng-model=\"persona.clave\" class=\"form-password form-control\" id=\"form-password\" ng-minlength=\"4\" ng-maxlength=\"20\" required=\"\"><div ng-messages=\"loginForm.clave.$error\" ng-show=\"loginForm.clave.$touched\"><div ng-message=\"required\">Este campo es requerido</div><div ng-message=\"minlength\">La clave es invalida</div><div ng-message=\"maxlength\">La clave es muy larga</div></div></div><button class=\"btn btn-primary\" ng-click=\"iniciarEmpleado()\" ng-disabled=\"loginForm.$invalid\">INICIAR SESIÓN</button></form></div></div></div></div></div></div></div>");
$templateCache.put("app/pages/pagos/pagos.html","<div class=\"row\"><div class=\"col-md-12 col-lg-12 col-xs-12 col-sm-12\"><div ba-panel=\"\"><div class=\"form-group\"><form name=\"cedulaPagosForm\" novalidate=\"\"><label for=\"cedula\">Introduzca la cédula del cliente</label> <input type=\"text\" class=\"form-control\" id=\"cedula\" ng-model=\"CI.CI\" placeholder=\"Introduzca la cédula del cliente\" name=\"CI\" ng-pattern=\"/^[0-9]+$/\" ng-minlength=\"6\" ng-maxlength=\"8\" required=\"\"><div ng-messages=\"cedulaPagosForm.CI.$error\" ng-show=\"cedulaPagosForm.CI.$touched\"><div ng-message=\"required\">Este campo es requerido</div><div ng-message=\"pattern\">Sólo se permiten números</div><div ng-message=\"minlength\">La cédula es muy corta</div><div ng-message=\"maxlength\">La cédula es muy larga</div></div><button class=\"btn btn-primary\" ng-disabled=\"cedulaPagosForm.$invalid\" ng-click=\"verPagos()\">Ver trabajos pagados</button></form></div><div class=\"row\"><div ng-if=\"detalles.length > 0\"><div class=\"row\"><div class=\"col-md-6\"><form class=\"form-inline\"><div class=\"form-group\"><label for=\"fecha1\">Desde</label> <input type=\"date\" ng-model=\"fechas.uno\" class=\"form-control\" id=\"fecha1\" ng-change=\"validarFecha(1)\"></div><div class=\"form-group\"><label for=\"Hasta\">Hasta</label> <input type=\"date\" ng-model=\"fechas.dos\" class=\"form-control\" id=\"Hasta\" ng-change=\"validarFecha(2)\"></div></form></div><div class=\"col-md-6\"><div class=\"col-sm-4 col-xs-6 pull-right\"><a class=\"btn btn-info pull-left btn-with-icon boton-margen\" ng-if=\"detalles\" ng-click=\"generarReporte()\"><i class=\"ion-printer\"></i>Imprimir reporte</a></div></div></div><div class=\"table-responsive\"><table class=\"table table-hover\"><thead><tr clas=\"black-muted-bg\"><td colspan=\"4\" style=\"text-align: center\">CONCEPTOS</td></tr><tr class=\"black-muted-bg\"><td>Fecha</td><td>Concepto</td><td>Forma de pago</td><td>Monto</td><td>¿Pagado al empleado?</td></tr></thead><tbody><tr ng-repeat=\"deta in filtradoArr.Arr = (detalles | fechasFiltro:fechas.uno:fechas.dos:\'fecha_pago\')\"><td>{{deta.fecha_pago | date:\"dd/MM/yyyy hh:mm a\"}}</td><td>{{deta.id_trabajo.nombre_trabajo}}</td><td>{{deta.forma_pago}}</td><td>{{ (deta.monto == 0) ? deta.id_trabajo.precio : deta.monto | currency: \"Bs. \"}}</td><td><span ng-bind-html=\"deta.cancelado_empleado | filtroPago\"></span></td></tr></tbody></table></div></div></div></div></div></div>");
$templateCache.put("app/pages/precios/crear_precio.html","<div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" ng-click=\"$dismiss()\" aria-label=\"Close\"><em class=\"ion-ios-close-empty sn-link-close\"></em></button><h4 class=\"modal-title\" id=\"myModalLabel\">Crear nuevo trabajo</h4></div><div class=\"modal-body\"><form name=\"precioForm\" class=\"row form-inline\" novalidate=\"\"><div class=\"form-group col-md-6\"><input type=\"text\" class=\"form-control has-error\" name=\"nombre_trabajo\" id=\"exampleInputName2\" placeholder=\"Nombre del trabajo\" ng-model=\"newTrabajo.nombre_trabajo\" ng-minlength=\"4\" ng-maxlength=\"50\" ng-pattern=\"/^([A-Za-zÑñáéíóúÁÉÍÓÚ ]+)$/\" required=\"\"><div ng-messages=\"precioForm.nombre_trabajo.$error\" class=\"mensajes\" ng-show=\"precioForm.nombre_trabajo.$touched\"><div ng-message=\"required\">Este campo es requerido</div><div ng-message=\"minlength\">El nombre del trabajo es muy corto</div><div ng-message=\"maxlength\">El nombre del trabajo es muy largo</div><div ng-message=\"pattern\">Sólo se permiten letras</div></div></div><div class=\"form-group col-md-6\"><input type=\"text\" class=\"form-control\" name=\"precio\" id=\"exampleInputEmail2\" placeholder=\"Precio\" ng-model=\"newTrabajo.precio\" ng-pattern=\"/^[0-9]+$/\" ng-maxlength=\"8\" ng-minlength=\"4\" required=\"\"><div ng-messages=\"precioForm.precio.$error\" ng-show=\"precioForm.precio.$touched\"><div ng-message=\"required\">Este campo es requerido</div><div ng-message=\"pattern\">Sólo se permiten números</div><div ng-message=\"minlength\">El precio es muy bajo</div><div ng-message=\"maxlength\">El precio es muy elevado</div></div></div></form></div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"precioForm.$invalid\" ng-click=\"crearTrabajo(this)\">Crear</button></div></div>");
$templateCache.put("app/pages/precios/precios.html","<div class=\"row\"><div class=\"col-sm-4 col-xs-6 pull-right\"><a class=\"btn btn-primary pull-right btn-with-icon boton-margen\" ng-click=\"abrirModal()\"><i class=\"ion-person-add\"></i>Crear trabajo</a></div><div class=\"col-sm-4 col-xs-6 pull-left\"><a class=\"btn btn-info pull-left btn-with-icon boton-margen\" ng-click=\"generarReporte()\"><i class=\"ion-printer\"></i>Imprimir reporte</a></div></div><div class=\"row\"><div class=\"col-md-12 col-lg-12 col-xs-12 col-sm-12\"><div ba-panel=\"\"><div class=\"table-responsive\"><table class=\"table table-bordered table-hover table-condensed\"><tr><td>#</td><td>Nombre</td><td>Precio</td><td>Acciones</td></tr><tr ng-repeat=\"trabajo in trabajos\" class=\"editable-row\"><td>{{$index + 1}}</td><td><span editable-text=\"trabajo.nombre_trabajo\" e-name=\"nombre_trabajo\" e-form=\"rowform\" onbeforesave=\"checkTexto($data,4,50,true)\" e-required=\"\">{{ trabajo.nombre_trabajo }}</span></td><td><span editable-number=\"trabajo.precio\" e-name=\"precio\" e-form=\"rowform\" onbeforesave=\"checkNumber($data,1000,1000000,true)\" e-required=\"\">{{ trabajo.precio | currency: \"Bs. \"}}</span></td><td><form editable-form=\"\" name=\"rowform\" ng-show=\"rowform.$visible\" class=\"form-buttons form-inline\" shown=\"inserted == trabajo\" onbeforesave=\"editarTrabajo(trabajo)\"><button type=\"submit\" ng-disabled=\"rowform.$waiting\" ng-click=\"\" class=\"btn btn-primary editable-table-button btn-xs\">Guardar</button> <button type=\"button\" ng-disabled=\"rowform.$waiting\" ng-click=\"rowform.$cancel()\" class=\"btn btn-default editable-table-button btn-xs\">Cancelar</button></form><div class=\"buttons\" ng-show=\"!rowform.$visible\"><button class=\"btn btn-primary editable-table-button btn-xs\" ng-click=\"rowform.$show()\">Editar</button> <button class=\"btn btn-danger editable-table-button btn-xs\" ng-click=\"eliminarTrabajo(trabajo._id)\">Eliminar</button></div></td></tr></table></div></div></div></div>");
$templateCache.put("app/pages/profile/profile.html","<div class=\"row\" style=\"margin-bottom: 0.2%\"><div class=\"col-sm-4 col-xs-6 pull-right\"><a class=\"btn btn-primary pull-right btn-with-icon\" ng-click=\"abrirForm()\" ng-if=\"!perfilForm.$visible\"><i class=\"ion-edit\"></i>Editar</a><div ng-if=\"perfilForm.$visible\"><button class=\"btn btn-success pull-right btn-with-icon\" ng-click=\"submitForm()\"><i class=\"ion-android-done\"></i>Guardar</button> <button class=\"btn btn-warning pull-right btn-with-icon\" ng-click=\"perfilForm.$cancel()\"><i class=\"ion-android-cancel\"></i>Cancelar</button></div></div></div><div ba-panel=\"\" ba-panel-class=\"profile-page\"><div class=\"panel-content\"><h3 class=\"with-line\">Información General</h3><div class=\"row\"><form editable-form=\"\" name=\"$parent.perfilForm\" onaftersave=\"editarPerfil()\" novalidate=\"\"><div class=\"col-md-6\"><div class=\"form-group row clearfix\"><label for=\"inputFirstName\" class=\"col-sm-3 control-label\">Nombre</label><div class=\"col-sm-9\"><span editable-text=\"userPerfil.nombre\" e-name=\"nombre\" onbeforesave=\"checkTexto($data,4,40,true)\" e-required=\"\" ng-bind-html=\"user.nombre\"></span></div></div><div class=\"form-group row clearfix\"><label for=\"inputLastName\" class=\"col-sm-3 control-label\">Apellido</label><div class=\"col-sm-9\"><span editable-text=\"userPerfil.apellido\" e-name=\"apellido\" onbeforesave=\"checkTexto($data,4,40,true)\" e-required=\"\">{{user.apellido}}</span></div></div><div class=\"form-group row clearfix\"><label for=\"inputOccupation\" class=\"col-sm-3 control-label\">Fecha de nacimiento</label><div class=\"col-sm-9\"><span editable-date=\"userPerfil.fechanac\" e-name=\"fechanac\" onbeforesave=\"checkDate($data, \'1940-01-01\',\'1998-12-31\')\" e-required=\"\">{{user.fechanac | date:\'dd/MM/yyyy\' }}</span></div></div></div><div class=\"col-md-6\"><div class=\"form-group row clearfix\"><label class=\"col-sm-3\">Cargo</label> <span>{{user.cargo}}</span></div><div class=\"form-group row clearfix\"><label for=\"inputOccupation\" class=\"col-sm-3 control-label\">Edad</label><div class=\"col-sm-9\"><input type=\"text\" class=\"form-control\" id=\"inputOccupation\" placeholder=\"\" ng-model=\"userPerfil.edad\" readonly=\"\"></div></div></div></form></div><h3 class=\"with-line\">Cambiar contraseña</h3><div class=\"row\"><div class=\"col-md-12\"><div class=\"form-group row clearfix\"><label for=\"inputPassword3\" class=\"col-sm-3 control-label\">Contraseña actual</label><div class=\"col-sm-9\"><input type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Introduzca la clave actual\" ng-model=\"claves.actual\"></div></div></div></div><form name=\"cambioclaveform\" novalidate=\"\"><div class=\"row\"><div class=\"col-md-6\"><div class=\"form-group row clearfix\"><label for=\"inputPassword1\" class=\"col-sm-3 control-label\">Nueva contraseña</label><div class=\"col-sm-9\"><input type=\"password\" class=\"form-control\" id=\"inputPassword1\" placeholder=\"Introduzca la nueva clave\" name=\"clave1\" ng-model=\"claves.uno\" ng-minlength=\"6\" ng-maxlength=\"15\" required=\"\"><div ng-messages=\"cambioclaveform.clave1.$error\" ng-show=\"cambioclaveform.clave1.$touched\"><div ng-message=\"required\">Este campo es requerido</div><div ng-message=\"minlength\">La clave debe de de minimo 6 caracteres</div><div ng-message=\"maxlength\">La clave es muy larga</div></div></div></div></div><div class=\"col-md-6\"><div class=\"form-group row clearfix\"><label for=\"inputPassword2\" class=\"col-sm-3 control-label\">Repita la nueva contraseña</label><div class=\"col-sm-9\"><input type=\"password\" class=\"form-control\" id=\"inputPassword2\" placeholder=\"Repita la nueva clave\" ng-model=\"claves.dos\" name=\"clave2\" ng-minlength=\"6\" ng-maxlength=\"15\" required=\"\"><div ng-messages=\"cambioclaveform.clave2.$error\" ng-show=\"cambioclaveform.clave2.$touched\"><div ng-message=\"required\">Este campo es requerido</div><div ng-message=\"minlength\">La clave debe de de minimo 6 caracteres</div><div ng-message=\"maxlength\">La clave es muy larga</div></div></div></div></div><button class=\"btn btn-primary pull-right\" ng-click=\"CambiarClave()\" ng-disabled=\"cambioclaveform.$invalid\">Cambiar clave</button></div></form></div></div>");
$templateCache.put("app/pages/profile/profileModal.html","<div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" ng-click=\"$dismiss()\" aria-label=\"Close\"><em class=\"ion-ios-close-empty sn-link-close\"></em></button><h4 class=\"modal-title\" id=\"myModalLabel\">Add Account</h4></div><form name=\"linkForm\"><div class=\"modal-body\"><p>Paste a link to your profile into the box below</p><div class=\"form-group\"><input type=\"text\" class=\"form-control\" placeholder=\"Link to Profile\" ng-model=\"link\"></div></div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-primary\" ng-click=\"ok(link)\">Save changes</button></div></form></div>");
$templateCache.put("app/pages/tratamientos/detalles_trat.html","<div class=\"row\" style=\"margin-bottom: 0.2%\"><div class=\"col-sm-4 col-xs-6 pull-right\"><a class=\"btn btn-danger pull-right btn-with-icon\" ng-click=\"finalizarTratamiento()\"><i class=\"ion-close\"></i>Finalizar tratamiento</a></div></div><div class=\"row\"><div class=\"col-md-12\"><div ba-panel=\"\"><h2><i class=\"ion-information-circled\" style=\"font-size:24px; color: #90CAF9; display:inline; padding-right: 1.5%\"></i>{{ tratamiento.nombre_tratamiento | uppercase}}</h2><p><strong>Fecha de inicio:</strong> {{tratamiento.fecha_inicio | date:\"yyyy/MM/dd hh:mm a\"}}</p></div></div></div><div class=\"row\" style=\"margin-bottom: 0.2%\"><div class=\"col-md-12 pull-right\"><a class=\"btn btn-danger pull-right btn-with-icon\" ng-click=\"pagarTratamiento()\"><i class=\"ion-cash\"></i>Pagar tratamiento</a> <a class=\"btn btn-primary pull-right btn-with-icon\" style=\"margin-right: 2%\" ng-click=\"citarTrabajo()\"><i class=\"ion-ios-plus-outline\"></i>Citar nuevo trabajo</a></div></div><div class=\"row\"><div class=\"col-md-12\"><div class=\"panel-group\"><div class=\"panel panel-default bootstrap-panel\"><div class=\"panel-heading\"><h2>TRABAJOS</h2></div><div class=\"panel-body\"><div class=\"col-md-3\" ng-repeat=\"trabajos in tratamiento.trabajos\"><div ba-panel=\"\" ng-click=\"abrirModalPagoTrabajo(trabajos)\" ng-class=\"{\'desactivado\':trabajos.pagado, \'puntero\':!trabajos.pagado}\"><p><strong>Trabajo:</strong> {{trabajos.id_trabajo.nombre_trabajo}}</p><p><strong>Empleado:</strong> {{trabajos.id_empleado.nombre}} {{trabajos.id_empleado.apellido}}</p><p><strong>Fecha:</strong> {{trabajos.fecha | date: \"yyyy/MM/dd hh:mm a\"}}</p><p><strong>Pagado:</strong> <span ng-bind-html=\"trabajos.pagado | filtroPago\"></span></p></div></div></div></div></div></div></div>");
$templateCache.put("app/pages/tratamientos/iniciar_trat.html","<div class=\"row\"><div class=\"col-md-12\"><div ba-panel=\"\"><form name=\"tratamientoForm\" novalidate=\"\"><div class=\"row\"><div class=\"form-group col-md-6\"><label for=\"CI\">Cédula de identidad</label> <input type=\"number\" class=\"form-control has-error\" name=\"CI\" id=\"CI\" placeholder=\"Introduzca la cédula de identidad del cliente\" ng-model=\"CI_CLIENTE.CI\" ng-minlength=\"6\" ng-maxlength=\"50\" ng-disabled=\"cliente\" required=\"\"><div ng-messages=\"tratamientoForm.CI.$error\" class=\"mensajes\" ng-show=\"tratamientoForm.CI.$touched\"><div ng-message=\"required\">Este campo es requerido</div><div ng-message=\"minlength\">El número de cédula es invalido</div></div><p>{{cliente.nombre | uppercase}} {{cliente.apellido | uppercase}}</p></div></div><button type=\"button\" class=\"btn btn-success pull-right\" ng-disabled=\"tratamientoForm.CI.$invalid\" ng-show=\"!step2\" ng-click=\"buscarCliente()\">Siguiente</button><div class=\"row\" ng-if=\"step2\"><div class=\"col-md-12\"><div class=\"text-center tituloHistoria\"><h3>DATOS DEL TRATAMIENTO</h3></div></div></div><div class=\"row\" ng-if=\"step2\"><div class=\"form-group col-md-6\"><label for=\"nombre_tratamiento\">Nombre del tratamiento</label> <input type=\"text\" class=\"form-control has-error\" name=\"nombre_tratamiento\" id=\"nombre_tratamiento\" placeholder=\"Nombre del tratamiento\" ng-model=\"newTratamiento.nombre_tratamiento\" ng-minlength=\"4\" ng-maxlength=\"50\" ng-pattern=\"/^([A-Za-zÑñáéíóúÁÉÍÓÚ ]+)$/\" required=\"\"><div ng-messages=\"tratamientoForm.nombre_tratamiento.$error\" class=\"mensajes\" ng-show=\"tratamientoForm.nombre_tratamiento.$touched\"><div ng-message=\"required\">Este campo es requerido</div><div ng-message=\"minlength\">El nombre del tratamiento es muy corto</div><div ng-message=\"maxlength\">El nombre del tratamiento es muy largo</div><div ng-message=\"pattern\">Sólo se permiten letras</div></div></div><div class=\"form-group col-md-6\"><label for=\"\">Fecha de inicio</label><p class=\"input-group\"><input type=\"text\" class=\"form-control\" datetime-picker=\"\" timepicker-options=\"timeOptions\" when-closed=\"onSetTime()\" ng-model=\"fecha.fecha_inicio\" is-open=\"popup.opened\" datepicker-options=\"dateOptions\" ng-required=\"true\" close-text=\"Cerrar\" current-text=\"Hoy\" clear-text=\"Reiniciar\" disabled=\"\"> <span class=\"input-group-btn\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"open()\"><i class=\"glyphicon glyphicon-calendar\"></i></button></span></p></div><button type=\"button\" class=\"btn btn-success pull-right\" ng-disabled=\"tratamientoForm.nombre_tratamiento.$invalid || fechainvalida\" ng-click=\"siguiente()\" ng-show=\"!step3\">Siguiente</button></div><div class=\"row\" ng-if=\"step3\"><div class=\"col-md-12\"><div class=\"text-center tituloHistoria\"><h3>DETALLES</h3></div></div></div><div class=\"row\" ng-if=\"step3\"><div class=\"form-group col-md-6\"><label for=\"seleccionar_trabajo\">Seleccione un trabajo</label><select name=\"trabajo\" id=\"seleccionar_trabajo\" class=\"form-control\" ng-options=\"t._id as t.nombre_trabajo for t in trabajos\" ng-model=\"newTratamiento.trabajo\" required=\"\"></select><div ng-messages=\"tratamientoForm.trabajo.$error\" class=\"mensajes\" ng-show=\"tratamientoForm.trabajo.$touched\"><div ng-message=\"required\">Este campo es requerido</div></div></div><div class=\"form-group col-md-6\"><label for=\"seleccionar_empleado\">Empleado</label><select name=\"empleado\" id=\"seleccionar_empleado\" class=\"form-control\" ng-options=\"e._id as e.nombre + \' \' + e.apellido for e in empleados\" ng-model=\"newTratamiento.empleado\" required=\"\"></select><div ng-messages=\"tratamientoForm.empleado.$error\" class=\"mensajes\" ng-show=\"tratamientoForm.empleado.$touched\"><div ng-message=\"required\">Este campo es requerido</div></div></div></div><button type=\"button\" class=\"btn btn-success pull-right\" ng-disabled=\"tratamientoForm.empleado.$invalid || tratamientoForm.trabajo.$invalid\" ng-click=\"finalizar()\" ng-show=\"step3\">Iniciar tratamiento</button></form></div></div></div>");
$templateCache.put("app/pages/tratamientos/modal_citar.html","<div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" ng-click=\"$dismiss()\" aria-label=\"Close\"><em class=\"ion-ios-close-empty sn-link-close\"></em></button><h4 class=\"modal-title\" id=\"myModalLabel\">Citar un trabajo</h4></div><div class=\"modal-body\"><form name=\"citaForm\" class=\"form-inline\" novalidate=\"\"><div class=\"row\"><div class=\"form-group col-md-6\"><label for=\"empleado\">Seleccione el empleado a realizar el trabajo</label><select class=\"form-control\" id=\"empleado\" name=\"empleado\" ng-model=\"newCita.empleado\" ng-options=\"empleado._id as empleado.nombre + \' \' + empleado.apellido for empleado in empleados\" required=\"\"></select><div ng-messages=\"citaForm.empleado.$error\" class=\"mensajes\" ng-show=\"citaForm.empleado.$touched\"><div ng-message=\"required\">Este campo es requerido</div></div></div><div class=\"form-group col-md-6\"><label for=\"trabajo\">Seleccione el trabajo</label><select class=\"form-control\" id=\"trabajo\" name=\"trabajo\" ng-model=\"newCita.trabajo\" ng-options=\"trabajo._id as trabajo.nombre_trabajo for trabajo in trabajos\" required=\"\"></select><div ng-messages=\"citaForm.trabajo.$error\" class=\"mensajes\" ng-show=\"citaForm.trabajo.$touched\"><div ng-message=\"required\">Este campo es requerido</div></div></div></div><div class=\"row\"><div class=\"form-group col-md-12\"><label for=\"fecha\">Seleccione fecha a realizar</label><p class=\"input-group\"><input type=\"text\" class=\"form-control\" datetime-picker=\"\" timepicker-options=\"timeOptions\" when-closed=\"onSetTime()\" ng-model=\"fecha.fecha\" is-open=\"popup.opened\" datepicker-options=\"dateOptions\" ng-required=\"true\" disabled=\"\"> <span class=\"input-group-btn\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"open()\"><i class=\"glyphicon glyphicon-calendar\"></i></button></span></p></div></div></form></div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"citaForm.$invalid\" ng-click=\"citar(this)\">Crear</button></div></div>");
$templateCache.put("app/pages/tratamientos/modal_pagar.html","<div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" ng-click=\"$dismiss()\" aria-label=\"Close\"><em class=\"ion-ios-close-empty sn-link-close\"></em></button><h4 class=\"modal-title\" id=\"myModalLabel\">Registrar pago de tratamiento (completo) - {{cliente.nombre}} {{cliente.apellido}}</h4></div><div class=\"modal-body\"><form name=\"form.pagoForm\" novalidate=\"\"><div class=\"row\"><div class=\"form-group col-md-12\"><label for=\"monto\">Monto</label> <input type=\"text\" class=\"form-control\" name=\"monto\" id=\"monto\" placeholder=\"Precio\" ng-model=\"pago.monto\" disabled=\"\" ng-pattern=\"/^[0-9]+$/\" ng-minlength=\"2\" required=\"\"></div><div class=\"form-group col-md-12\"><label for=\"forma_pago\">Forma de pago</label><select class=\"form-control\" id=\"empleado\" name=\"forma_pago\" ng-model=\"pago.forma_pago\" ng-options=\"forma as forma for forma in formas\" required=\"\"></select><div ng-messages=\"form.pagoForm.forma_pago.$error\" ng-show=\"form.pagoForm.forma_pago.$touched\"><div ng-message=\"required\">Este campo es requerido</div></div></div><div ng-switch=\"\" on=\"pago.forma_pago\"><div class=\"col-md-12 form-group\" ng-switch-when=\"Depósito\"><label for=\"comprobante\">Número del comprobante</label> <input type=\"text\" class=\"form-control\" name=\"comprobante\" id=\"comprobante\" placeholder=\"Ej. 456789123\" ng-model=\"pago.numero_comprobante\" ng-minlength=\"2\" ng-maxlength=\"50\" required=\"\"><div ng-messages=\"form.pagoForm.comprobante.$error\" ng-show=\"form.pagoForm.comprobante.$touched\"><div ng-message=\"required\">Este campo es requerido</div><div ng-message=\"minlength\">El monto es muy inferior</div><div ng-message=\"maxlength\">El comprobante es muy largo</div></div></div><div class=\"col-md-12 form-group\" ng-switch-when=\"Transferencia\"><label for=\"comprobante\">Número del comprobante</label> <input type=\"text\" class=\"form-control\" name=\"comprobante\" id=\"comprobante\" placeholder=\"Ej. 456789123\" ng-model=\"pago.numero_comprobante\" ng-minlength=\"2\" ng-maxlength=\"50\" required=\"\"><div ng-messages=\"form.pagoForm.comprobante.$error\" ng-show=\"form.pagoForm.comprobante.$touched\"><div ng-message=\"required\">Este campo es requerido</div><div ng-message=\"minlength\">El monto es muy inferior</div><div ng-message=\"maxlength\">El comprobante es muy largo</div></div></div><div class=\"col-md-12 form-group\" ng-switch-when=\"Cheque\"><label for=\"comprobante\">Número del comprobante</label> <input type=\"text\" class=\"form-control\" name=\"comprobante\" id=\"comprobante\" placeholder=\"Ej. 456789123\" ng-model=\"pago.numero_comprobante\" ng-minlength=\"2\" ng-maxlength=\"50\" required=\"\"><div ng-messages=\"form.pagoForm.comprobante.$error\" ng-show=\"form.pagoForm.comprobante.$touched\"><div ng-message=\"required\">Este campo es requerido</div><div ng-message=\"minlength\">El comprobante es muy corto</div><div ng-message=\"maxlength\">El comprobante es muy largo</div></div></div></div></div></form></div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"form.pagoForm.$invalid\" ng-click=\"registrarPagoCompleto(this)\">Registrar pago</button></div></div>");
$templateCache.put("app/pages/tratamientos/modal_trabajo_pagar.html","<div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" ng-click=\"$dismiss()\" aria-label=\"Close\"><em class=\"ion-ios-close-empty sn-link-close\"></em></button><h4 class=\"modal-title\" id=\"myModalLabel\">{{titulo || \"¿Que desea realizar?\"}}</h4></div><div class=\"modal-body\"><div ng-show=\"!bandera1\"><button class=\"btn btn-primary btn-block\" ng-click=\"pagarBandera()\">Pagar trabajo</button> <button class=\"btn btn-danger btn-block\" ng-click=\"ignorarTrabajo()\">La persona no asistió</button></div><form name=\"form.pagoForm\" ng-if=\"bandera1\" novalidate=\"\"><div class=\"row\"><div class=\"form-group col-md-12\"><label for=\"monto\">Monto</label> <input type=\"text\" class=\"form-control\" name=\"monto\" id=\"monto\" placeholder=\"Precio\" ng-model=\"trabajoSeleccionado.id_trabajo.precio\" disabled=\"\" ng-pattern=\"/^[0-9]+$/\" ng-minlength=\"2\" required=\"\"></div><div class=\"form-group col-md-12\"><label for=\"forma_pago\">Forma de pago</label><select class=\"form-control\" id=\"empleado\" name=\"forma_pago\" ng-model=\"pago.forma_pago\" ng-options=\"forma as forma for forma in formas\" required=\"\"></select><div ng-messages=\"form.pagoForm.forma_pago.$error\" ng-show=\"form.pagoForm.forma_pago.$touched\"><div ng-message=\"required\">Este campo es requerido</div></div></div><div ng-switch=\"\" on=\"pago.forma_pago\"><div class=\"col-md-12 form-group\" ng-switch-when=\"Deposito\"><label for=\"comprobante\">Número del comprobante</label> <input type=\"text\" class=\"form-control\" name=\"comprobante\" id=\"comprobante\" placeholder=\"Comprobante\" ng-model=\"pago.numero_comprobante\" ng-minlength=\"2\" ng-maxlength=\"50\" required=\"\"><div ng-messages=\"form.pagoForm.comprobante.$error\" ng-show=\"form.pagoForm.comprobante.$touched\"><div ng-message=\"required\">Este campo es requerido</div><div ng-message=\"minlength\">El monto es muy inferior</div><div ng-message=\"maxlength\">El comprobante es muy largo</div></div></div><div class=\"col-md-12 form-group\" ng-switch-when=\"Transferencia\"><label for=\"comprobante\">Número del comprobante</label> <input type=\"text\" class=\"form-control\" name=\"comprobante\" id=\"comprobante\" placeholder=\"Comprobante\" ng-model=\"pago.numero_comprobante\" ng-minlength=\"2\" ng-maxlength=\"50\" required=\"\"><div ng-messages=\"form.pagoForm.comprobante.$error\" ng-show=\"form.pagoForm.comprobante.$touched\"><div ng-message=\"required\">Este campo es requerido</div><div ng-message=\"minlength\">El monto es muy inferior</div><div ng-message=\"maxlength\">El comprobante es muy largo</div></div></div><div class=\"col-md-12 form-group\" ng-switch-when=\"Cheque\"><label for=\"comprobante\">Número del comprobante</label> <input type=\"text\" class=\"form-control\" name=\"comprobante\" id=\"comprobante\" placeholder=\"Comprobante\" ng-model=\"pago.numero_comprobante\" ng-minlength=\"2\" ng-maxlength=\"50\" required=\"\"><div ng-messages=\"form.pagoForm.comprobante.$error\" ng-show=\"form.pagoForm.comprobante.$touched\"><div ng-message=\"required\">Este campo es requerido</div><div ng-message=\"minlength\">El comprobante es muy corto</div><div ng-message=\"maxlength\">El comprobante es muy largo</div></div></div></div></div></form></div><div class=\"modal-footer\" ng-show=\"bandera1\"><button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"form.pagoForm.$invalid\" ng-click=\"registrarPagoTrabajo(this)\">Registrar pago</button></div></div>");
$templateCache.put("app/pages/tratamientos/tratamientos.html","<div class=\"row text-center\"><div class=\"col-md-6\"><a href=\"#/iniciar_tratamiento\"><div ba-panel=\"\"><i class=\"ion-calendar\" style=\"font-size: 60px; margin-bottom: 5%;\"></i><h2>Iniciar tratamiento</h2></div></a></div><div class=\"col-md-6\"><a href=\"#/ver_tratamientos\"><div ba-panel=\"\"><i class=\"ion-ios-search-strong\" style=\"font-size: 60px; margin-bottom: 5%;\"></i><h2>Ver tratamientos por cliente</h2></div></a></div></div>");
$templateCache.put("app/pages/tratamientos/ver_trat.html","<div class=\"row\"><div class=\"col-md-12\"><div ba-panel=\"\"><div class=\"row\"><div class=\"col-md-6\"><form name=\"ciForm\" novalidate=\"\"><input type=\"text\" class=\"form-control\" placeholder=\"Introduzca número de cédula\" ng-model=\"CI.CI\" ng-minlength=\"6\" name=\"cedula\" ng-maxlength=\"8\" ng-pattern=\"/^[0-9]+$/\" required=\"\" id=\"cedula\"><div ng-messages=\"ciForm.cedula.$error\" ng-show=\"ciForm.cedula.$touched\"><div ng-message=\"required\">Este campo es requerido</div><div ng-message=\"pattern\">Sólo se permiten números</div><div ng-message=\"minlength\">La cédula es muy corta</div><div ng-message=\"maxlength\">La cédula es muy larga</div></div></form></div><div class=\"col-md-6\"><button class=\"btn btn-primary\" ng-click=\"buscar()\" ng-disabled=\"ciForm.$invalid\">Buscar</button></div></div></div></div><div class=\"row\" ng-if=\"tratamientos\"><div class=\"col-md-3\" ng-repeat=\"tratamiento in tratamientos\"><a href=\"#/tratamiento_detalles/{{tratamiento.tratamientos._id}}/{{CI.CI}}\"><div ba-panel=\"\"><h5>{{tratamiento.tratamientos.nombre_tratamiento}}</h5><p><i class=\"icon ion-clock\" style=\"color:red\"></i> <strong>Fecha de inicio:</strong> {{tratamiento.tratamientos.fecha_inicio | date: \"yyyy/MM/dd hh:mm a\"}}</p></div></a></div></div></div>");
$templateCache.put("app/pages/dashboard/blurFeed/blurFeed.html","<div class=\"feed-messages-container\" track-width=\"smallContainerWidth\" min-width=\"360\"><div class=\"feed-message\" ng-repeat=\"message in feed\" ng-click=\"expandMessage(message)\"><div class=\"message-icon\" ng-if=\"message.type == \'text-message\'\"><img class=\"photo-icon\" ng-src=\"{{::( message.author | profilePicture )}}\"></div><div class=\"message-icon\" ng-if=\"message.type != \'text-message\'\"><img class=\"photo-icon\" ng-src=\"{{::( message.author | profilePicture )}}\"> <span class=\"sub-photo-icon\" ng-class=\"::message.type\"></span></div><div class=\"text-block text-message\"><div class=\"message-header\"><span class=\"author\">{{ ::message.author }} {{ ::message.surname}}</span></div><div class=\"message-content line-clamp\" ng-class=\"{\'line-clamp-2\' : !message.expanded}\"><span ng-if=\"message.preview\">{{message.header}}</span>{{::message.text}}</div><div class=\"preview\" ng-show=\"message.expanded\" ng-if=\"message.preview\"><a href=\"{{::message.link}}\" target=\"_blank\"><img ng-src=\"{{ ::( message.preview | appImage )}}\"></a></div><div ng-show=\"message.expanded\" class=\"message-time\"><div class=\"post-time\">{{::message.time}}</div><div class=\"ago-time\">{{::message.ago}}</div></div></div></div></div>");
$templateCache.put("app/pages/dashboard/dashboardCalendar/dashboardCalendar.html","<div id=\"calendar\" class=\"blurCalendar\"></div>");
$templateCache.put("app/pages/dashboard/dashboardMap/dashboardMap.html","<div id=\"amChartMap\"></div>");
$templateCache.put("app/pages/dashboard/dashboardPieChart/dashboardPieChart.html","<div class=\"row pie-charts\"><div class=\"pie-chart-item-container\" ng-repeat=\"chart in charts\"><div ba-panel=\"\"><div class=\"pie-chart-item\"><div class=\"chart\" rel=\"{{ ::chart.color }}\" data-percent=\"60\"><span class=\"percent\"></span></div><div class=\"description\"><div>{{ ::chart.description }}</div><div class=\"description-stats\">{{ ::chart.stats }}</div></div><i class=\"chart-icon i-{{ ::chart.icon }}\"></i></div></div></div></div>");
$templateCache.put("app/pages/dashboard/dashboardLineChart/dashboardLineChart.html","<div id=\"amchart\"></div>");
$templateCache.put("app/pages/dashboard/dashboardTodo/dashboardTodo.html","<div class=\"task-todo-container\" ng-class=\"{\'transparent\': transparent}\"><input type=\"text\" value=\"\" class=\"form-control task-todo\" placeholder=\"Task to do..\" ng-keyup=\"addToDoItem($event)\" ng-model=\"newTodoText\"> <i ng-click=\"addToDoItem(\'\',true)\" class=\"add-item-icon ion-plus-round\"></i><div class=\"box-shadow-border\"></div><ul class=\"todo-list\" ui-sortable=\"\" ng-model=\"todoList\"><li ng-repeat=\"item in todoList\" ng-if=\"!item.deleted\" ng-init=\"activeItem=false\" ng-class=\"{checked: isChecked, active: activeItem}\" ng-mouseenter=\"activeItem=true\" ng-mouseleave=\"activeItem=false\"><div class=\"blur-container\"><div class=\"blur-box\"></div></div><i class=\"mark\" style=\"background-color: {{::item.color}}\"></i> <label class=\"todo-checkbox custom-checkbox custom-input-success\"><input type=\"checkbox\" ng-model=\"isChecked\"> <span class=\"cut-with-dots\">{{ item.text }}</span></label> <i class=\"remove-todo ion-ios-close-empty\" ng-click=\"item.deleted = true\"></i></li></ul></div>");
$templateCache.put("app/pages/dashboard/popularApp/popularApp.html","<div class=\"popular-app-img-container\"><div class=\"popular-app-img\"><img ng-src=\"{{::( \'app/my-app-logo.png\' | appImage )}}\"> <span class=\"logo-text\">Super&nbspApp</span></div></div><div class=\"popular-app-cost row\"><div class=\"col-xs-9\">Most Popular App</div><div class=\"col-xs-3 text-right\">175$</div></div><div class=\"popular-app-info row\"><div class=\"col-xs-4 text-left\"><div class=\"info-label\">Total Visits</div><div>47,512</div></div><div class=\"col-xs-4 text-center\"><div class=\"info-label\">New Visits</div><div>9,217</div></div><div class=\"col-xs-4 text-right\"><div class=\"info-label\">Sales</div><div>2,928</div></div></div>");
$templateCache.put("app/pages/dashboard/trafficChart/trafficChart.html","<div class=\"channels-block\" ng-class=\"{\'transparent\': transparent}\"><div class=\"chart-bg\"></div><div class=\"traffic-chart\" id=\"trafficChart\"><div class=\"canvas-holder\"><canvas id=\"chart-area\" width=\"300\" height=\"300\"></canvas><div class=\"traffic-text\">1,900,128 <span>Views Total</span></div></div><div class=\"traffic-legend\"></div></div><div class=\"channels-info\"><div><div class=\"channels-info-item\" ng-repeat=\"item in doughnutData | orderBy:\'order\'\"><div class=\"legend-color\" style=\"background-color: {{::item.color}}\"></div><p>{{::item.label}}<span class=\"channel-number\">+{{item.percentage}}%</span></p><div class=\"progress progress-sm channel-progress\"><div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"{{item.percentage}}\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: {{item.percentage}}%\"></div></div></div></div></div></div>");
$templateCache.put("app/pages/dashboard/weather/weather.html","<div class=\"weather-wrapper\"><div class=\"weather-main-info\"><h5 class=\"city-date font-x1dot5\"><div>{{geoData.geoplugin_city}} - {{geoData.geoplugin_countryName | uppercase}}</div><div>{{ weather.days[weather.current].date | date : \'EEEE h:mm\'}}</div></h5><div class=\"weather-description font-x1dot5\"><i class=\"font-x3 {{weatherIcons[weather.days[weather.current].icon]}}\"></i><div class=\"weather-info\">{{weather.days[weather.current].main}} - {{weather.days[weather.current].description}}</div></div><div class=\"weather-temp font-x1dot5\"><i class=\"font-x2 ion-thermometer\"></i><div class=\"weather-info\" ng-switch=\"\" on=\"units\"><span ng-switch-when=\"metric\">{{weather.days[weather.current].temp}} °C | <a ng-click=\"switchUnits(\'imperial\')\" href=\"\">°F</a></span> <span ng-switch-when=\"imperial\">{{weather.days[weather.current].temp}} °F | <a ng-click=\"switchUnits(\'metric\')\" href=\"\">°C</a></span></div></div></div><div id=\"tempChart\" class=\"temp-by-time\"></div><div class=\"select-day\"><div class=\"day\" ng-repeat=\"day in weather.days\" ng-click=\"switchDay($index)\"><div><span class=\"font-x1dot25\">{{day.temp}}</span></div><div><i class=\"weatherIcon font-x2 {{weatherIcons[day.icon]}}\"></i> <span class=\"select-day-info\">{{day.main}}</span></div><div><span>{{day.date | date : \'EEE\'}}</span></div></div></div></div>");
$templateCache.put("app/theme/components/baSidebar/ba-sidebar.html","<aside class=\"al-sidebar\" ng-swipe-right=\"$baSidebarService.setMenuCollapsed(false)\" ng-swipe-left=\"$baSidebarService.setMenuCollapsed(true)\" ng-mouseleave=\"hoverElemTop=selectElemTop\"><ul class=\"al-sidebar-list\" slimscroll=\"{height: \'{{menuHeight}}px\'}\" slimscroll-watch=\"menuHeight\"><li ng-repeat=\"item in ::menuItems\" class=\"al-sidebar-list-item\" ng-class=\"::{\'with-sub-menu\': item.subMenu}\" ui-sref-active=\"selected\" ba-sidebar-toggling-item=\"item\" ng-if=\"validar(item)\"><a ng-mouseenter=\"hoverItem($event, item)\" ui-state=\"item.stateRef || \'\'\" ng-href=\"{{::(item.fixedHref ? item.fixedHref: \'\')}}\" ng-if=\"::!item.subMenu\" class=\"al-sidebar-list-link\"><i class=\"{{ ::item.icon }}\"></i><span>{{ ::item.title }}</span></a> <a ng-mouseenter=\"hoverItem($event, item)\" ng-if=\"::item.subMenu\" class=\"al-sidebar-list-link\" ba-ui-sref-toggler=\"\"><i class=\"{{ ::item.icon }}\"></i><span>{{ ::item.title }}</span> <b class=\"fa fa-angle-down\" ui-sref-active=\"fa-angle-up\" ng-if=\"::item.subMenu\"></b></a><ul ng-if=\"::item.subMenu\" class=\"al-sidebar-sublist\" ng-class=\"{\'slide-right\': item.slideRight}\" ba-ui-sref-toggling-submenu=\"\"><li ng-repeat=\"subitem in ::item.subMenu\" ng-class=\"::{\'with-sub-menu\': subitem.subMenu}\" ui-sref-active=\"selected\" ba-sidebar-toggling-item=\"subitem\" class=\"ba-sidebar-sublist-item\"><a ng-mouseenter=\"hoverItem($event, item)\" ng-if=\"::subitem.subMenu\" ba-ui-sref-toggler=\"\" class=\"al-sidebar-list-link subitem-submenu-link\"><span>{{ ::subitem.title }}</span> <b class=\"fa\" ng-class=\"{\'fa-angle-up\': subitem.expanded, \'fa-angle-down\': !subitem.expanded}\" ng-if=\"::subitem.subMenu\"></b></a><ul ng-if=\"::subitem.subMenu\" class=\"al-sidebar-sublist subitem-submenu-list\" ng-class=\"{expanded: subitem.expanded, \'slide-right\': subitem.slideRight}\" ba-ui-sref-toggling-submenu=\"\"><li ng-mouseenter=\"hoverItem($event, item)\" ng-repeat=\"subSubitem in ::subitem.subMenu\" ui-sref-active=\"selected\"><a ng-mouseenter=\"hoverItem($event, item)\" href=\"\" ng-if=\"::subSubitem.disabled\" class=\"al-sidebar-list-link\">{{ ::subSubitem.title }}</a> <a ng-mouseenter=\"hoverItem($event, item)\" ui-state=\"subSubitem.stateRef || \'\'\" ng-if=\"::!subSubitem.disabled\" ng-href=\"{{::(subSubitem.fixedHref ? subSubitem.fixedHref: \'\')}}\">{{::subSubitem.title }}</a></li></ul><a ng-mouseenter=\"hoverItem($event, item)\" href=\"\" ng-if=\"::(!subitem.subMenu && subitem.disabled)\" class=\"al-sidebar-list-link\">{{ ::subitem.title }}</a> <a ng-mouseenter=\"hoverItem($event, item)\" target=\"{{::(subitem.blank ? \'_blank\' : \'_self\')}}\" ng-if=\"::(!subitem.subMenu && !subitem.disabled)\" ui-state=\"subitem.stateRef || \'\'\" ng-href=\"{{::(subitem.fixedHref ? subitem.fixedHref: \'\')}}\">{{ ::subitem.title}}</a></li></ul></li></ul><div class=\"sidebar-hover-elem\" ng-style=\"{top: hoverElemTop + \'px\', height: hoverElemHeight + \'px\'}\" ng-class=\"{\'show-hover-elem\': showHoverElem }\"></div></aside>");
$templateCache.put("app/theme/components/baWizard/baWizard.html","<div class=\"ba-wizard\"><div class=\"ba-wizard-navigation-container\"><div ng-repeat=\"t in $baWizardController.tabs\" class=\"ba-wizard-navigation {{$baWizardController.tabNum == $index ? \'active\' : \'\'}}\" ng-click=\"$baWizardController.selectTab($index)\">{{t.title}}</div></div><div class=\"progress ba-wizard-progress\"><div class=\"progress-bar progress-bar-danger active\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" ng-style=\"{width: $baWizardController.progress + \'%\'}\"></div></div><div class=\"steps\" ng-transclude=\"\"></div><nav><ul class=\"pager ba-wizard-pager\"><li class=\"previous\"><button ng-disabled=\"$baWizardController.isFirstTab()\" ng-click=\"$baWizardController.previousTab()\" type=\"button\" class=\"btn btn-primary\"><span aria-hidden=\"true\">&larr;</span> Anterior</button></li><li class=\"next\"><button ng-disabled=\"$baWizardController.isLastTab()\" ng-click=\"$baWizardController.nextTab()\" type=\"button\" class=\"btn btn-primary\">Siguiente <span aria-hidden=\"true\">&rarr;</span></button></li></ul></nav></div>");
$templateCache.put("app/theme/components/baWizard/baWizardStep.html","<section ng-show=\"selected\" class=\"step\" ng-transclude=\"\"></section>");
$templateCache.put("app/theme/components/backTop/backTop.html","<i class=\"fa fa-angle-up back-top\" id=\"backTop\" title=\"Back to Top\"></i>");
$templateCache.put("app/theme/components/contentTop/contentTop.html","<div class=\"content-top clearfix\"><h1 class=\"al-title\">{{ activePageTitle }}</h1><ul class=\"breadcrumb al-breadcrumb\"><li><a href=\"#/dashboard\">Home</a></li><li>{{ activePageTitle }}</li></ul></div>");
$templateCache.put("app/theme/components/msgCenter/msgCenter.html","<ul class=\"al-msg-center clearfix\"><li uib-dropdown=\"\"><a href=\"\" uib-dropdown-toggle=\"\"><i class=\"fa fa-bell-o\"></i><span>5</span><div class=\"notification-ring\"></div></a><div uib-dropdown-menu=\"\" class=\"top-dropdown-menu\"><i class=\"dropdown-arr\"></i><div class=\"header clearfix\"><strong>Notifications</strong> <a href=\"\">Mark All as Read</a> <a href=\"\">Settings</a></div><div class=\"msg-list\"><a href=\"\" class=\"clearfix\" ng-repeat=\"msg in notifications\"><div class=\"img-area\"><img ng-class=\"{\'photo-msg-item\' : !msg.image}\" ng-src=\"{{::( msg.image || (users[msg.userId].name | profilePicture) )}}\"></div><div class=\"msg-area\"><div ng-bind-html=\"getMessage(msg)\"></div><span>{{ msg.time }}</span></div></a></div><a href=\"\">See all notifications</a></div></li><li uib-dropdown=\"\"><a href=\"\" class=\"msg\" uib-dropdown-toggle=\"\"><i class=\"fa fa-envelope-o\"></i><span>5</span><div class=\"notification-ring\"></div></a><div uib-dropdown-menu=\"\" class=\"top-dropdown-menu\"><i class=\"dropdown-arr\"></i><div class=\"header clearfix\"><strong>Messages</strong> <a href=\"\">Mark All as Read</a> <a href=\"\">Settings</a></div><div class=\"msg-list\"><a href=\"\" class=\"clearfix\" ng-repeat=\"msg in messages\"><div class=\"img-area\"><img class=\"photo-msg-item\" ng-src=\"{{::( users[msg.userId].name | profilePicture )}}\"></div><div class=\"msg-area\"><div>{{ msg.text }}</div><span>{{ msg.time }}</span></div></a></div><a href=\"\">See all messages</a></div></li></ul>");
$templateCache.put("app/theme/components/pageTop/pageTop.html","<div class=\"page-top clearfix\" scroll-position=\"scrolled\" max-height=\"50\" ng-class=\"{\'scrolled\': scrolled}\"><a href=\"#/dashboard\" class=\"al-logo clearfix\"><span>Songa</span>Spa</a> <a href=\"\" class=\"collapse-menu-link ion-navicon\" ba-sidebar-toggle-menu=\"\"></a><div class=\"user-profile clearfix\"><div class=\"al-user-profile\" uib-dropdown=\"\"><a uib-dropdown-toggle=\"\" class=\"profile-toggle-link\"><img ng-src=\"{{::( \'Nasta\' | profilePicture )}}\"></a><ul class=\"top-dropdown-menu profile-dropdown\" uib-dropdown-menu=\"\"><li><i class=\"dropdown-arr\"></i></li><li><a href=\"#/profile\"><i class=\"fa fa-user\"></i>Ver Perfil</a></li><li><a href=\"\" class=\"signout\" ng-click=\"cerrarSesion()\"><i class=\"fa fa-power-off\"></i>Cerrar sesión</a></li></ul></div></div></div>");
$templateCache.put("app/theme/components/widgets/widgets.html","<div class=\"widgets\"><div ng-repeat=\"widgetBlock in ngModel\" ng-class=\"{\'row\': widgetBlock.widgets.length > 1}\"><div ng-repeat=\"widgetCol in widgetBlock.widgets\" ng-class=\"{\'col-md-6\': widgetBlock.widgets.length === 2}\" ng-model=\"widgetCol\" class=\"widgets-block\"><div ba-panel=\"\" ba-panel-title=\"{{::widget.title}}\" ng-repeat=\"widget in widgetCol\" ba-panel-class=\"with-scroll {{widget.panelClass}}\"><div ng-include=\"widget.url\"></div></div></div></div></div>");}]);
//# sourceMappingURL=../maps/scripts/app-a1b2b2ed37.js.map
