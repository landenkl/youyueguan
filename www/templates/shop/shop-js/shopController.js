angular.module('shop.controllers', [])
  .controller('shopCtrl', function($scope) {})//精选
  .controller('guqin1Ctrl', function($scope, $stateParams,$rootScope) {


    if ($stateParams.name=='shopguqin'){
      $scope.data = $rootScope.shopguqin[$stateParams.id-1];
    } else if ($stateParams.name=='shopgq'){
      $scope.data = $rootScope.shopgq[$stateParams.id-1];
    } else if($stateParams.name=='shoptq'){
      $scope.data = $rootScope.shoptq[$stateParams.id-1];
    }




  })
  .controller('guqinCtrl', function($scope, $stateParams, Chats) {

  })
  .controller('gangqinCtrl', function($scope, $stateParams, Chats) {

  })
  .controller('tiqinCtrl', function($scope, $stateParams, Chats) {

  });
