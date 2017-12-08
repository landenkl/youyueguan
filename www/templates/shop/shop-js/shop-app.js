
angular.module('liudeng', ['shop.controllers'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('tab.gangqin', {
        url: '/gangqin',
        views: {
          'tab-chats': {
            templateUrl: 'templates/shop/shop-gangqin.html',
            controller: 'ChatsCtrl'
          }
        }
      })

      .state('tab.tiqin', {
        url: '/tiqin',
        views: {
          'tab-chats': {
            templateUrl: 'templates/shop/shop-tiqin.html',
            controller: 'ChatsCtrl'
          }
        }
      })

      .state('tab.guqin', {
        url: '/guqin',
        views: {
          'tab-chats': {
            templateUrl: 'templates/shop/tab-guqin.html',
            controller: 'ChatsCtrl'
          }
        }
      })

      .state('tab.nextshop', {
        url: '/nextshop',
        views: {
          'tab-chats': {
            templateUrl: 'templates/shop/tab-nextshop.html',
            controller: 'ChatsCtrl'
          }
        }
      })

      .state('tab.chats.jingxun', {
        url: '/jingxun',
        views: {
          'tab-shop-jingxuan': {
            templateUrl: 'templates/shop/gangqin.html',
            controller: 'shopCtrl'
          }
        }
      })


  });
