angular.module('account.controllers',['acc-state.controller'])



  .controller('AccountCtrl', function($scope) {
    $scope.settings = {
      enableFriends: true
    };
    $scope.mysc = '我的购物车';
    $scope.myhis = '我的购物记录';
    $scope.myset = '个人设置';
    $scope.aboutours = '关于我们';
    $scope.serv = '优乐客服';
    $scope.assets = '我的优币';
  })
  .controller('MyhistoryCtrl', function($scope) {
    $scope.title = '个人中心';
    $scope.products = [
      {
        poster:'https://img11.360buyimg.com/n7/jfs/t9343/346/994822045/50008/4f40e625/59b2698fN472ba768.jpg',
        name:'铁三角耳机',
        desc:'专业级监听耳机',
        price:'499'
      }
    ]
  })
  .controller('MysetCtrl', function($scope) {
    $scope.settings = {

    };
  })
  .controller('ServeCtrl', function($scope) {
    $scope.settings = {

    };
  })
  .controller('AboutoursCtrl', function($scope) {
    $scope.settings = {

    };
  })
  .controller('MyshoppingCarCtrl',function($scope) {
    $scope.title = '个人中心';
    $scope.products = [
      {
        poster:'https://img13.360buyimg.com/n4/s130x130_jfs/t12646/78/1210655517/185388/a389def2/5a1d1f88N5b7d4412.jpg',
        name:'铁三角耳机',
        desc:'专业级监听耳机',
        price:'1499'
      }
    ]
  });
