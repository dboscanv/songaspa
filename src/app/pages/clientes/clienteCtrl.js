(function () {
    'use strict';

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