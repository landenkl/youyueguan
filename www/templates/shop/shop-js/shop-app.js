
angular.module('liudeng', ['shop.controllers'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tab.chats.jingxun', {
        url: '/jingxun',
        views: {
          'tab-shop-jingxuan': {
            templateUrl: 'templates/shop/gangqin.html',
            controller: 'ChatsCtrl'
          }
        }
      })
  });
