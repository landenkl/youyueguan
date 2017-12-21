angular.module('shop.controllers', [])
  .controller('shopCtrl', function($scope) {})//精选
  .controller('guqin1Ctrl', function($scope, $stateParams,$rootScope,$location) {

    console.log($location.search());
    var a = $stateParams.id;
    if ($stateParams.name=='shopguqin'){
      $scope.data = $rootScope.shopguqin[a-1];
    } else if ($stateParams.name=='shopgq'){
      $scope.data = $rootScope.shopgq[a-1];
    } else if($stateParams.name=='shoptq'){
      $scope.data = $rootScope.shoptq[a-1];
    }
  })
  .controller('guqinCtrl', function($scope,$rootScope,$http) {

  })
  .controller('gangqinCtrl', function($scope, $stateParams, Chats) {

  })
  .controller('tiqinCtrl', function($scope, $stateParams, Chats) {

  });
