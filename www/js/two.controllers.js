angular.module('two.controllers',[])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab.frients', {// /tab/frients
      url: '/frients',
      views: {
        'tab-frients': {
          templateUrl: 'templates/tab-frients.html',
          controller: 'FrientsCtrl'
        }
      }
    })
    .state('tab.frients.hot', {
      url: '/hot',
      views: {
        'tab-frients-child': {
          templateUrl: 'templates/frients/hot.html',
          controller: 'HotCtrl'
        }
      }
    })
    .state('tab.frients.gu', {
      url: '/gu/:id',
      views: {
        'tab-frients-child': {
          templateUrl: 'templates/frients/hot-gu.html',
          controller: 'GuCtrl'
        }
      }
    })
    .state('tab.frients.gang', {
      url: '/gang/:id',
      views: {
        'tab-frients-child': {
          templateUrl: 'templates/frients/hot-gang.html',
          controller: 'GangCtrl'
        }
      }
    })
    .state('tab.frients.xiao', {
      url: '/xiao/:id',
      views: {
        'tab-frients-child': {
          templateUrl: 'templates/frients/hot-xiao.html',
          controller: 'XiaoCtrl'
        }
      }
    })
    .state('tab.frients.vidos', {
      url: '/vidos',
      views: {
        'tab-frients-child': {
          templateUrl: 'templates/frients/vidos.html',
          controller: 'VidosCtrl'
        }
      }
    })
    .state('tab.frients.story', {
      url: '/story',
      views: {
        'tab-frients-child': {
          templateUrl: 'templates/frients/story.html',
          controller: 'StoryCtrl'
        }
      }
    })
    .state('tab.frients.gus', {
      url: '/gus/:id',
      views: {
        'tab-frients-child': {
          templateUrl: 'templates/frients/story-gu.html',
          controller: 'StoryguCtrl'
        }
      }
    })

    .state('tab.search', {
      url: '/search',
      views: {
        'tab-frients': {
          templateUrl: 'templates/frients/search.html',
          controller: 'FoundCtrl'
        }
      }
    })
    .state('tab.first', {
      url: '/first',
      views: {
        'tab-frients': {
          templateUrl: 'templates/frients/search-first.html',
          controller: 'SeafirstCtrl'
        }
      }
    })
    .state('tab.zhao', {
      url: '/zhao',
      views: {
        'tab-frients': {
          templateUrl: 'templates/frients/zhao.html',
          controller: 'ZhaoCtrl'
        }
      }
    })
    .state('tab.zhaos', {
      url: '/zhaos/:id',
      views: {
        'tab-frients': {
          templateUrl: 'templates/frients/zhaos.html',
          controller: 'ZhaosCtrl'
        }
      }
    })
    .state('tab.end', {
      url: '/end',
      views: {
        'tab-frients': {
          templateUrl: 'templates/frients/end.html',
          controller: 'EndCtrl'
        }
      }
    })
})
