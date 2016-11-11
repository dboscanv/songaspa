/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

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