angular.module('starter.controllers', ['account.controllers'])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats,$rootScope) {
  $rootScope.shopguqin = [
    {name:'古琴',id:'1',pho:'../img/qin.jpg',til:'精美古琴',yuan:'8888',carimg:'../img/shopcar.jpg',dianpu:'优乐馆',jianjie:'精美古琴，价格便宜，质量上乘，采用顶级大师技艺制作，音感极好，是爱琴人士的不二之选'},
    {name:'古琴',id:'2',pho:'../img/guqin2.jpg',til:'精美古琴',yuan:'8888',carimg:'../img/shopcar.jpg',dianpu:'优乐馆',jianjie:'精美古琴，价格便宜，质量上乘，采用顶级大师技艺制作，音感极好，是爱琴人士的不二之选'}
  ];
  $rootScope.shopguqin2 = [
    {name:'古琴',id:'1',pho:'../img/qin.jpg',til:'精美古琴',yuan:'8888',carimg:'../img/shopcar.jpg',dianpu:'优乐馆',jianjie:'精美古琴，价格便宜，质量上乘，采用顶级大师技艺制作，音感极好，是爱琴人士的不二之选'},
    {name:'古琴',id:'2',pho:'../img/guqin2.jpg',til:'精美古琴',yuan:'8888',carimg:'../img/shopcar.jpg',dianpu:'优乐馆',jianjie:'精美古琴，价格便宜，质量上乘，采用顶级大师技艺制作，音感极好，是爱琴人士的不二之选'},
    {name:'古琴',id:'3',pho:'../img/guqin3.jpg',til:'精美古琴',yuan:'9999',carimg:'../img/shopcar.jpg',dianpu:'优乐馆',jianjie:'精美古琴，价格便宜，质量上乘，采用顶级大师技艺制作，音感极好，是爱琴人士的不二之选'}
  ];

  $rootScope.shopgq=[
    {name:'钢琴',id:'1',pho:'../img/gangqin1.jpg',til:'优选钢琴',yuan:'6666',carimg:'../img/shopcar.jpg',dianpu:'优乐馆',jianjie:'精美钢琴，价格便宜，质量上乘，采用顶级大师技艺制作，音感极好，是爱琴人士的不二之选'},
    {name:'钢琴',id:'2',pho:'../img/gangqin2.jpg',til:'优选钢琴',yuan:'6666',carimg:'../img/shopcar.jpg',dianpu:'优乐馆',jianjie:'精美钢琴，价格便宜，质量上乘，采用顶级大师技艺制作，音感极好，是爱琴人士的不二之选'}
  ];
  $rootScope.shopgq2=[
    {name:'钢琴',id:'1',pho:'../img/gangqin1.jpg',til:'优选钢琴',yuan:'6666',carimg:'../img/shopcar.jpg',dianpu:'优乐馆',jianjie:'精美钢琴，价格便宜，质量上乘，采用顶级大师技艺制作，音感极好，是爱琴人士的不二之选'},
    {name:'钢琴',id:'2',pho:'../img/gangqin2.jpg',til:'优选钢琴',yuan:'6666',carimg:'../img/shopcar.jpg',dianpu:'优乐馆',jianjie:'精美钢琴，价格便宜，质量上乘，采用顶级大师技艺制作，音感极好，是爱琴人士的不二之选'},
    {name:'钢琴',id:'3',pho:'../img/gangqin3.jpg',til:'优选钢琴',yuan:'6688',carimg:'../img/shopcar.jpg',dianpu:'优乐馆',jianjie:'精美钢琴，价格便宜，质量上乘，采用顶级大师技艺制作，音感极好，是爱琴人士的不二之选'}
  ];

  $rootScope.shoptq=[
    {name:'提琴',id:'1',pho:'../img/tiqin1.jpg',til:'优质提琴',yuan:'666',carimg:'../img/shopcar.jpg',dianpu:'优乐馆',jianjie:'精美提琴，价格便宜，质量上乘，采用顶级大师技艺制作，音感极好，是爱琴人士的不二之选'},
    {name:'提琴',id:'2',pho:'../img/tiqin2.jpg',til:'优质提琴',yuan:'888',carimg:'../img/shopcar.jpg',dianpu:'优乐馆',jianjie:'精美提琴，价格便宜，质量上乘，采用顶级大师技艺制作，音感极好，是爱琴人士的不二之选'}
   ];
  $rootScope.shoptq2=[
    {name:'提琴',id:'1',pho:'../img/tiqin1.jpg',til:'优质提琴',yuan:'666',carimg:'../img/shopcar.jpg',dianpu:'优乐馆',jianjie:'精美提琴，价格便宜，质量上乘，采用顶级大师技艺制作，音感极好，是爱琴人士的不二之选'},
    {name:'提琴',id:'2',pho:'../img/tiqin2.jpg',til:'优质提琴',yuan:'888',carimg:'../img/shopcar.jpg',dianpu:'优乐馆',jianjie:'精美提琴，价格便宜，质量上乘，采用顶级大师技艺制作，音感极好，是爱琴人士的不二之选'},
    {name:'提琴',id:'3',pho:'../img/tiqin3.jpg',til:'优质提琴',yuan:'999',carimg:'../img/shopcar.jpg',dianpu:'优乐馆',jianjie:'精美提琴，价格便宜，质量上乘，采用顶级大师技艺制作，音感极好，是爱琴人士的不二之选'}
  ];

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

  .controller('AccountCtrl', function($scope) {
    $scope.settings = {
      enableFriends: true
    };
  })
.controller('FrientsCtrl', function($scope) {
  $scope.settings = {

  };
});

