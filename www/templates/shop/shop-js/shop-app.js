
angular.module('liudeng', ['shop.controllers'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      //钢琴
      .state('tab.gangqin', {
        url: '/gangqin',
        views: {
          'tab-chats': {
            templateUrl: 'templates/shop/shop-gangqin.html',
            controller: 'gangqinCtrl'
          }
        }
      })
      // .state('tab.nextshop/:2', {
      //   url: '/nextshop/:2',
      //   views: {
      //     'tab-chats': {
      //       templateUrl: 'templates/shop/tab-nextshop.html',
      //       controller: 'gangqinCtrl'
      //     }
      //   }
      // })

      //提琴
      .state('tab.tiqin', {
        url: '/tiqin',
        views: {
          'tab-chats': {
            templateUrl: 'templates/shop/shop-tiqin.html',
            controller: 'tiqinCtrl'
          }
        }
      })
      // .state('tab.nextshop/:3', {
      //   url: '/nextshop/:3',
      //   views: {
      //     'tab-chats': {
      //       templateUrl: 'templates/shop/tab-nextshop.html',
      //       controller: 'tiqinCtrl'
      //     }
      //   }
      // })

      //古琴
      .state('tab.guqin', {
        url: '/guqin',
        views: {
          'tab-chats': {
            templateUrl: 'templates/shop/tab-guqin.html',
            controller: 'guqinCtrl'
          }
        }
      })

      //
      .state('tab.nextshop', {
        url: '/nextshop/:id/:name',
        views: {
          'tab-chats': {
            templateUrl: 'templates/shop/tab-nextshop.html',
            controller: 'guqin1Ctrl'
          }
        }
      })

      //精选
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
