(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.precios')
        .controller('preciosCtrl', preciosCtrl);

    preciosCtrl.$inject = ['$scope', 'preciosFactory', '$uibModal','$state', 'comunFactory'];

    /* @ngInject */
    function preciosCtrl($scope,preciosFactory,$uibModal,$state,comunFactory) {
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
            preciosFactory.editar(trabajo._id).save(trabajo).$promise.then(function(data) {
                if (data.status == 1) {
                    swal("ÉXITO", "Precio modificado satisfactoriamente", "success");
                } else if (data.status == 2) {
                    swal("ATENCIÓN", "Ha ocurrido un error", "error");
                    console.log(data.salida);
                } else {
                    swal("ATENCIÓN", "No se establecio conexión con el servidor", "error");
                    console.log(data.salida);
                }
            }).catch(function(data) {
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
            preciosFactory.crear().save($scope.newTrabajo).$promise.then(function (data){
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
                function(){
                    preciosFactory.eliminar(id).remove().$promise.then(function (data) {
                        if(data.status == 1){
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
                {title:"Nombre", "dataKey":"nombre_trabajo"},
                {title:"Precio", "dataKey":"precio"}
            ];
            comunFactory.generarPDF(columnas,$scope.trabajos,"LISTADO DE PRECIOS");
        };

    }

})();

