// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ngCordova', 'ionic.cloud', 'ion-floating-menu','ngSanitize'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function($rootScope,$cordovaNetwork) {
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
	//network check
	
	 
		// listen for Online event
		/*$rootScope.$on('$cordovaNetwork:online', function(event, networkState){
		  alert("online");
		});
		 
		// listen for Offline event
		$rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
		  alert("offline");
		});*/
	
	//network check
	
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


.directive('autoComplete',function($http) {
	var names=[];
	$http.get('http://portal.gtu.ac.in/api/college/getAllCollege').then(function(response){
			
			//alert(JSON.stringify(response.data[0]));
			
			for (var i = 0; i < response.data.length; i++){
					names[i] = response.data[i]['name'];
					
			}
			//alert(names);
			//return names;
			
		},
		function(err){
			
		});
	return {
    restrict: 'A',
    link: function(scope, elem, attr, ctrl) {
                // elem is a jquery lite object if jquery is not present,
                // but with jquery and jquery ui, it will be a full jquery object.
       // debugger
        $(".input").autocomplete({
            source: names, //from your service
            minLength: 2
        });
		
    }
};
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
		a.style="text-decoration:none;font-size:10px;color:#00d4bd;text-transform:capitalize;fontWeight:bold;";
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

  
  .state('app.technicalEvents', {
    url: '/techEvents',
	cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/technicalEvents.html',
		controller: 'TechEventsCtrl'
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
	
	.state('app.startupSummits', {
      url: '/startupSummits',
	  cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/startupSummits.html',
		  controller: 'StartupSummitsCtrl'
        }
      }
    })
	.state('app.startupSummit', {
      url: '/startupSummit',
	  cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/startupSummit.html',
		  controller: 'StartupSummitCtrl'
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
    });
	
     // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/techEvents');
});
