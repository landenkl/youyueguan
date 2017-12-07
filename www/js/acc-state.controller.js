angular.module('acc-state.controller',[])


  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
  .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    })
      .state('tab.serve', {
        url: '/serve',
        views: {
          'tab-account': {
            templateUrl: 'templates/account/tab-serve.html',
            controller: 'ServeCtrl'
          }
        }
      })
      // .state('tab.func-int', {
      //   url: '/func-int/:int',
      //   views: {
      //     'tab-aboutours': {
      //       templateUrl: 'templates/tab-func-int.html',
      //       controller: 'FuncCtrl'
      //     }
      //   }
      // })
      .state('tab.aboutours', {
        url: '/aboutours',
        views: {
          'tab-account': {
            templateUrl: 'templates/account/tab-aboutours.html',
            controller: 'AboutoursCtrl'
          }
        }
      })
      .state('tab.myset', {
        url: '/myset',
        views: {
          'tab-account': {
            templateUrl: 'templates/account/tab-myset.html',
            controller: 'MysetCtrl'
          }
        }
      })
      .state('tab.myhistory', {
        url: '/myhistory',
        views: {
          'tab-account': {
            templateUrl: 'templates/account/tab-myhistory.html',
            controller: 'MyhistoryCtrl'
          }
        }
      })
      .state('tab.myshoppingcar', {
        url: '/myshoppingcar',
        views: {
          'tab-account': {
            templateUrl: 'templates/account/tab-myshoppingcar.html',
            controller: 'MyshoppingCarCtrl'
          }
        }
      });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
