
angular.module('liudeng', ['shop.controllers'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      //钢琴
      .state('tab.gangqin', {
        url: '/gangqin',
        views: {
          'tab-chats': {
            templateUrl: 'templates/shop/shop-gangqin.html',
            controller: 'ChatsCtrl'
          }
        }
      })
      //提琴
      .state('tab.tiqin', {
        url: '/tiqin',
        views: {
          'tab-chats': {
            templateUrl: 'templates/shop/shop-tiqin.html',
            controller: 'ChatsCtrl'
          }
        }
      })
      //古琴
      .state('tab.guqin', {
        url: '/guqin',
        views: {
          'tab-chats': {
            templateUrl: 'templates/shop/tab-guqin.html',
            controller: 'ChatsCtrl'
          }
        }
      })

      //详情
      .state('tab.nextshop', {
        url: '/nextshop/:id/:name',
        views: {
          'tab-chats': {
            templateUrl: 'templates/shop/tab-nextshop.html',
            controller: 'guqin1Ctrl'
          }
        }
      })
  });
