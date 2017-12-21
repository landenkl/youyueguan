angular.module('starter.controllers', ['account.controllers'])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats,$rootScope,$http) {
  $http.get('http://localhost/music/mymusic/www/templates/data/guqin.php').success(function (res) {
    console.log(res[0]);
    $rootScope.shopguqin2 = res[0];
    $rootScope.shopguqin = [res[0][0],res[0][1]];
    $rootScope.shopgq2 = res[1];
    $rootScope.shopgq = [res[1][0],res[1][1]];
    $rootScope.shoptq2 = res[2];
    $rootScope.shoptq = [res[2][0],res[2][1]];
  })
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

