// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.technicalEvents', {
    url: '/technicalEvents',
    views: {
      'menuContent': {
        templateUrl: 'templates/technicalEvents.html'
      }
    }
  })
  
  .state('app.events', {
    url: '/events/:sectionId',
    views: {
      'menuContent': {
        templateUrl: 'templates/events.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
  
  .state('app.event', {
    url: '/events/:sectionId/:eventId',
    views: {
      'menuContent': {
        templateUrl: 'templates/event.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
  
  .state('app.quizzes', {
      url: '/quizzes',
      views: {
        'menuContent': {
          templateUrl: 'templates/quizzes.html'
        }
      }
    })
	
  .state('app.quiz', {
      url: '/quizzes/:quizId',
      views: {
        'menuContent': {
          templateUrl: 'templates/quiz.html'
        }
      }
    })	
	
  .state('app.workshops', {
      url: '/workshops',
      views: {
        'menuContent': {
          templateUrl: 'templates/workshops.html'
        }
      }
    })
	
   .state('app.workshop', {
      url: '/workshops/:workshopId',
      views: {
        'menuContent': {
          templateUrl: 'templates/workshop.html'
        }
      }
    })	
	
	.state('app.aboutUs', {
      url: '/aboutUs',
      views: {
        'menuContent': {
          templateUrl: 'templates/aboutUs.html'
        }
      }
    })
	
	.state('app.contactUs', {
      url: '/contactUs',
      views: {
        'menuContent': {
          templateUrl: 'templates/contactUs.html'
        }
      }
    })
	
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});
