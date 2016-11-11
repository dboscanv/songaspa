(function () {
    'use strict';

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