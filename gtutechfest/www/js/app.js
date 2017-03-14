// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova', 'ionic.cloud', 'ion-floating-menu','ngMessages'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
	localStorage.setItem("api",'YOUR_API');
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
	
	//branch
	
	Branch.initSession(function(data) {
      // read deep link data on click
	  alert(JSON.stringify(data));
	  
    }).then(function(res) {
  alert('Response: ' + JSON.stringify(res));
}).catch(function(err) {
  alert('Error: ' + JSON.stringify(err))
});
	
	//branch
	
  });
})

.service('breadCrumbsService', function ($location) {
            this.showBreadCrumbs = function () {
                document.getElementById("breadcrumb").innerHTML = "";;
  
	var state=$location.path().slice(5).split("/");
	var breadcrumbs=[];
	for(var i=0;i<state.length;i++)
	{
		if(i==0)
			breadcrumbs.push("#/app/"+state[0]);
		else
			breadcrumbs.push(breadcrumbs[i-1]+"/"+state[i]);
	}
	//breadcrumbs.push("#/app/"+state[0]);
	//breadcrumbs.push("#/app/"+state[0]+"/"+state[1]);
	//breadcrumbs.push("#/app/"+state[0]+"/"+state[1]+"/"+state[2]); 
	 
	 for(var i=0;i<state.length;i++)
	 {
		
		var a = document.createElement('a');
		var linkText = document.createTextNode(state[i]);
		a.appendChild(linkText);
		a.href = breadcrumbs[i];
		a.style="text-decoration:none;font-size:15px;color:#00d4bd;text-transform:capitalize;fontWeight:bold";
		var span = document.createElement("span");
		span.innerHTML = "&nbsp;"+"/"+"&nbsp;"; 
		span.style="font-size:15px;color:white";
		document.getElementById("breadcrumb").appendChild(a);
		document.getElementById("breadcrumb").appendChild(span);

	 }
     };
            
})

.service('disableBackService', function ($ionicHistory) {
            this.disableBack = function () {
                $ionicHistory.nextViewOptions({
			disableBack: true
		});
     };
            
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.register', {
    url: '/register',
	cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/register.html',
		controller: 'RegisterCtrl'
      }
    }
  })
  
  .state('app.technicalEvents', {
    url: '/technicalEvents',
	cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/technicalEvents.html',
		controller: 'TechnicalEventsCtrl'
      }
    }
  })
  
  .state('app.events', {
    url: '/technicalEvents/:sectionId',
	cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/events.html',
        controller: 'EventsCtrl'
      }
    }
  })
  
  .state('app.event', {
    url: '/technicalEvents/:sectionId/:eventId',
	cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/event.html',
        controller: 'EventCtrl'
      }
    }
  })
  
  .state('app.quizzes', {
      url: '/quizzes',
	  cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/quizzes.html',
		  controller: 'QuizzesCtrl'
        }
      }
    })
	
  .state('app.quiz', {
      url: '/quizzes/:quizId',
	  cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/quiz.html',
		  controller: 'QuizCtrl'
        }
      }
    })	
	
  .state('app.workshops', {
      url: '/workshops',
	  cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/workshops.html',
		  controller: 'WorkshopsCtrl'
        }
      }
    })
	
   .state('app.workshop', {
      url: '/workshops/:workshopId',
	  cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/workshop.html',
		  controller: 'WorkshopCtrl'
        }
      }
    })	
	
	.state('app.aboutUs', {
      url: '/aboutUs',
	  cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/aboutUs.html',
		  controller: 'AboutUsCtrl'
        }
      }
    })
	
	.state('app.contactUs', {
      url: '/contactUs',
	  cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/contactUs.html',
		  controller: 'ContactUsCtrl'
        }
      }
    })
	
    .state('app.playlists', {
      url: '/playlists',
	  cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
	cache: false,
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
