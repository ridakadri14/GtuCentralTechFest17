angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $rootScope) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the register modal
  $scope.registerData = {};

  // Create the register modal that we will use later
  $ionicModal.fromTemplateUrl('templates/register.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the register modal to close it
  $scope.closeRegister = function() {
    $scope.modal.hide();
  };

  // Open the register modal
  $scope.register = function() {
    $scope.modal.show();
  };

  // Perform the register action when the user submits the register form
  $scope.doRegister = function() {
    console.log('Doing register', $scope.registerData);

    // Simulate a register delay. Remove this and replace with your register
    // code if using a register system
    $timeout(function() {
      $scope.closeRegister();
    }, 1000);
  };
  
  //breadcrumb
  
  
  
  
  //breadcrumb
  
})

.controller('TechnicalEventsCtrl', function($scope, $stateParams, $rootScope, $location, $ionicHistory, breadCrumbsService,disableBackService) {
	$scope.sections = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
  $scope.getSectionTitle=function(title)
  {
	$rootScope.sectionTitle=title;	
  };
  
  breadCrumbsService.showBreadCrumbs();
  disableBackService.disableBack();
  
})

.controller('EventsCtrl', function($scope, $stateParams, $location, $ionicHistory, $rootScope, breadCrumbsService,disableBackService) {
	
	$scope.events = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
  
  $scope.getId=function(eventId)
  {
	  $rootScope.id=eventId-1;
  }
  
  breadCrumbsService.showBreadCrumbs();
  disableBackService.disableBack();
  
})

.controller('EventCtrl', function($scope, $http, $stateParams, $location, $ionicHistory, $rootScope, breadCrumbsService,disableBackService) {
	
	/*document.getElementById("breadcrumb").innerHTML = "";;
  
	var state=$location.path().slice(5).split("/");
	var breadcrumbs=[];
	breadcrumbs.push("#/app/"+state[0]);
	breadcrumbs.push("#/app/"+state[0]+"/"+state[1]);
	breadcrumbs.push("#/app/"+state[0]+"/"+state[1]+"/"+state[2]); 
	 
	 for(var i=0;i<state.length;i++)
	 {
		
		var a = document.createElement('a');
		var linkText = document.createTextNode(state[i]);
		a.appendChild(linkText);
		a.href = breadcrumbs[i];
		var span = document.createElement("span");
		span.innerHTML = "&nbsp;"+">"; 
		document.getElementById("breadcrumb").appendChild(a);
		document.getElementById("breadcrumb").appendChild(span);

	 }*/
	 
	breadCrumbsService.showBreadCrumbs();
	 
	disableBackService.disableBack();
	
	$http.get('js/gtu_central_techfest_event.json')
        .then(function(response){
			var id=$rootScope.id;
           $scope.event=response.data[id];
		   //alert(id+JSON.stringify($scope.event));

        },function(error){
          alert(JSON.stringify(error));
      });
	
	//share
	
	/*var event=$location.path().slice(28);
	
	var branchUniversalObj = null;
	
		//branch stuff
	
		var properties = {
			canonicalIdentifier: 'search',
			canonicalUrl: 'https://gtutechfest.app.link',
			title: event,
			contentDescription: 'Check out this event!!!',
			contentImageUrl: 'http://lorempixel.com/400/400/',
			contentMetadata: {
				'alias':'playlists',
				'eventName':event
			}
		};

		Branch.createBranchUniversalObject(properties).then(function(res) {
			branchUniversalObj = res;
			alert('Response: ' + JSON.stringify(res));
			
		}).catch(function(err) {
			alert('Error: ' + JSON.stringify(err));
		});

		//branch
					
	
	$scope.share=function(){
	   branchUniversalObj.generateShortUrl({
		// put your link properties here
	   }, {
		// put your control parameters here
		"$android_url":"https://google.com",
		"$ios_url":"https://google.com",
		"$android_deeplink_path" : "/playlists"
	   }).then(function (res) {
		
		window.plugins.socialsharing.share('Gtu Techfest', null, null, res.url);
	   });
    }*/
	
	//share
	
	//accordian
	
	$scope.rules=function(){
		document.getElementById("rules").style.backgroundColor = "white";
		document.getElementById("specification").style.backgroundColor = "#00d4bd";
		document.getElementById("judgingCriteria").style.backgroundColor = "#00d4bd";
		document.getElementById("attachment").style.backgroundColor = "#00d4bd";
		document.getElementById("info").innerHTML="<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>";
	};
	$scope.specification=function(){
		document.getElementById("specification").style.backgroundColor = "white";
		document.getElementById("rules").style.backgroundColor = "#00d4bd";
		document.getElementById("judgingCriteria").style.backgroundColor = "#00d4bd";
		document.getElementById("attachment").style.backgroundColor = "#00d4bd";
		document.getElementById("info").innerHTML="<p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>";
	};
	$scope.judgingCriteria=function(){
		document.getElementById("judgingCriteria").style.backgroundColor = "white";
		document.getElementById("specification").style.backgroundColor = "#00d4bd";
		document.getElementById("rules").style.backgroundColor = "#00d4bd";
		document.getElementById("attachment").style.backgroundColor = "#00d4bd";
		document.getElementById("info").innerHTML="<p>dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>";
	};
	$scope.attachment=function(){
		document.getElementById("attachment").style.backgroundColor = "white";
		document.getElementById("specification").style.backgroundColor = "#00d4bd";
		document.getElementById("judgingCriteria").style.backgroundColor = "#00d4bd";
		document.getElementById("rules").style.backgroundColor = "#00d4bd";
		document.getElementById("info").innerHTML="<p>of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>";
	};
	
	//accordian
	
})

.controller('QuizzesCtrl', function($scope, $stateParams, $location, $ionicHistory, $rootScope, breadCrumbsService,disableBackService) {
	
	$scope.quizzes = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
  
  $scope.getId=function(eventId)
  {
	  $rootScope.id=eventId-1;
  }
  
  breadCrumbsService.showBreadCrumbs();
  disableBackService.disableBack();
  
})

.controller('QuizCtrl', function($scope, $http, $stateParams, $location, $ionicHistory, $rootScope, breadCrumbsService,disableBackService) {
	
	
  breadCrumbsService.showBreadCrumbs();
  disableBackService.disableBack();
  
  $http.get('js/gtu_central_techfest_event.json')
        .then(function(response){
			var id=$rootScope.id;
           $scope.event=response.data[id];
		   //alert(id+JSON.stringify($scope.event));

        },function(error){
          alert(JSON.stringify(error));
      });
  
  //share
	
	/*var event=$location.path().slice(13);
	alert(event);
	var branchUniversalObj = null;
	
		//branch stuff
	
		var properties = {
			canonicalIdentifier: 'search',
			canonicalUrl: 'https://gtutechfest.app.link',
			title: event,
			contentDescription: 'Check out this event!!!',
			contentImageUrl: 'http://lorempixel.com/400/400/',
			contentMetadata: {
				'alias':'playlists',
				'eventName':event
			}
		};

		Branch.createBranchUniversalObject(properties).then(function(res) {
			branchUniversalObj = res;
			alert('Response: ' + JSON.stringify(res));
			
		}).catch(function(err) {
			alert('Error: ' + JSON.stringify(err));
		});

		//branch
					
	
	$scope.share=function(){
	   branchUniversalObj.generateShortUrl({
		// put your link properties here
	   }, {
		// put your control parameters here
		"$android_url":"https://google.com",
		"$ios_url":"https://google.com",
		"$android_deeplink_path" : "/playlists"
	   }).then(function (res) {
		
		window.plugins.socialsharing.share('Gtu Techfest', null, null, res.url);
	   });
    }*/
	
	//share
	
	//accordian
	
	$scope.rules=function(){
		document.getElementById("rules").style.backgroundColor = "white";
		document.getElementById("specification").style.backgroundColor = "#00d4bd";
		document.getElementById("judgingCriteria").style.backgroundColor = "#00d4bd";
		document.getElementById("attachment").style.backgroundColor = "#00d4bd";
		document.getElementById("info").innerHTML="<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>";
	};
	$scope.specification=function(){
		document.getElementById("specification").style.backgroundColor = "white";
		document.getElementById("rules").style.backgroundColor = "#00d4bd";
		document.getElementById("judgingCriteria").style.backgroundColor = "#00d4bd";
		document.getElementById("attachment").style.backgroundColor = "#00d4bd";
		document.getElementById("info").innerHTML="<p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>";
	};
	$scope.judgingCriteria=function(){
		document.getElementById("judgingCriteria").style.backgroundColor = "white";
		document.getElementById("specification").style.backgroundColor = "#00d4bd";
		document.getElementById("rules").style.backgroundColor = "#00d4bd";
		document.getElementById("attachment").style.backgroundColor = "#00d4bd";
		document.getElementById("info").innerHTML="<p>dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>";
	};
	$scope.attachment=function(){
		document.getElementById("attachment").style.backgroundColor = "white";
		document.getElementById("specification").style.backgroundColor = "#00d4bd";
		document.getElementById("judgingCriteria").style.backgroundColor = "#00d4bd";
		document.getElementById("rules").style.backgroundColor = "#00d4bd";
		document.getElementById("info").innerHTML="<p>of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>";
	};
	
	//accordian
  
})

.controller('WorkshopsCtrl', function($scope, $stateParams, $location, $ionicHistory, $rootScope, breadCrumbsService,disableBackService) {
	
	$scope.workshops = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
  
  $scope.getId=function(eventId)
  {
	  $rootScope.id=eventId-1;
  }
  
  breadCrumbsService.showBreadCrumbs();
  disableBackService.disableBack();
  
})

.controller('WorkshopCtrl', function($scope, $http, $stateParams, $location, $ionicHistory, $rootScope, breadCrumbsService,disableBackService) {
	
  breadCrumbsService.showBreadCrumbs();
  disableBackService.disableBack();
  
  $http.get('js/gtu_central_techfest_event.json')
        .then(function(response){
			var id=$rootScope.id;
           $scope.event=response.data[id];
		   //alert(id+JSON.stringify($scope.event));

        },function(error){
          alert(JSON.stringify(error));
      });
  
  //share
	
	/*var event=$location.path().slice(15);
	alert(event);
	var branchUniversalObj = null;
	
		//branch stuff
	
		var properties = {
			canonicalIdentifier: 'search',
			canonicalUrl: 'https://gtutechfest.app.link',
			title: event,
			contentDescription: 'Check out this event!!!',
			contentImageUrl: 'http://lorempixel.com/400/400/',
			contentMetadata: {
				'alias':'playlists',
				'eventName':event
			}
		};

		Branch.createBranchUniversalObject(properties).then(function(res) {
			branchUniversalObj = res;
			alert('Response: ' + JSON.stringify(res));
			
		}).catch(function(err) {
			alert('Error: ' + JSON.stringify(err));
		});

		//branch
					
	
	$scope.share=function(){
	   branchUniversalObj.generateShortUrl({
		// put your link properties here
	   }, {
		// put your control parameters here
		"$android_url":"https://google.com",
		"$ios_url":"https://google.com",
		"$android_deeplink_path" : "/playlists"
	   }).then(function (res) {
		
		window.plugins.socialsharing.share('Gtu Techfest', null, null, res.url);
	   });
    }*/
	
	//share
	
	//accordian
	
	$scope.rules=function(){
		document.getElementById("rules").style.backgroundColor = "white";
		document.getElementById("specification").style.backgroundColor = "#00d4bd";
		document.getElementById("judgingCriteria").style.backgroundColor = "#00d4bd";
		document.getElementById("attachment").style.backgroundColor = "#00d4bd";
		document.getElementById("info").innerHTML="<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>";
	};
	$scope.specification=function(){
		document.getElementById("specification").style.backgroundColor = "white";
		document.getElementById("rules").style.backgroundColor = "#00d4bd";
		document.getElementById("judgingCriteria").style.backgroundColor = "#00d4bd";
		document.getElementById("attachment").style.backgroundColor = "#00d4bd";
		document.getElementById("info").innerHTML="<p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>";
	};
	$scope.judgingCriteria=function(){
		document.getElementById("judgingCriteria").style.backgroundColor = "white";
		document.getElementById("specification").style.backgroundColor = "#00d4bd";
		document.getElementById("rules").style.backgroundColor = "#00d4bd";
		document.getElementById("attachment").style.backgroundColor = "#00d4bd";
		document.getElementById("info").innerHTML="<p>dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>";
	};
	$scope.attachment=function(){
		document.getElementById("attachment").style.backgroundColor = "white";
		document.getElementById("specification").style.backgroundColor = "#00d4bd";
		document.getElementById("judgingCriteria").style.backgroundColor = "#00d4bd";
		document.getElementById("rules").style.backgroundColor = "#00d4bd";
		document.getElementById("info").innerHTML="<p>of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>";
	};
	
	//accordian
  
})

.controller('AboutUsCtrl', function($scope, $stateParams, $location, $ionicHistory, $rootScope, $cordovaGeolocation) {
	
	var options = {timeout: 10000, enableHighAccuracy: true};
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	
    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
	var marker = new google.maps.Marker({
          position: latLng,
          map: $scope.map,
          title: 'LDCE'
        });
 
  }, function(error){
    alert("To continue, let your device turn on location and wifi");
  });
  
})

.controller('PlaylistsCtrl', function($scope,$rootScope,$location,$ionicHistory) {
  
  document.getElementById("breadcrumb").innerHTML = "";;
  
  var str=$location.path().slice(5);
	 var state=str.split("/");
	 
	 console.log(state);
	 var breadcrumbs=[];
	 breadcrumbs.push("#/app/"+state[0]);
	 //breadcrumbs.push("#/app/"+state[0]+"/"+state[1]);
	 console.log(breadcrumbs);
	 //var.breadcrumbs.push(state[0]);
	 //str='';
	 for(var i=0;i<state.length;i++)
	 {
		//var.breadcrumbs+=state[i];
		//var.breadcrumbs+=">";
		var a = document.createElement('a');
		var linkText = document.createTextNode(state[i]+">");
		var span = document.createElement("span");
		span.innerHTML = "&nbsp;"; 
		document.getElementById("breadcrumb").appendChild(span);
		a.appendChild(linkText);
//a.title = "my title text";
a.href = breadcrumbs[i];
//var p = document.createElement('p');
//p.innerHTML=">";
document.getElementById("breadcrumb").appendChild(a);
//document.getElementById("breadcrumb").append(p);
	 }
		
	 //console.log($rootScope.breadcrumbs);
	 
	 //document.getElementById("breadcrumb").innerHTML=$rootScope.breadcrumbs;
	 
	 /*var brea='0';
	 //brea.length=0;
  for(var i=0;i<$rootScope.breadcrumbs.length;i++)
  {
	  brea.concat($rootScope.breadcrumbs[i].toString());
	  brea.concat(">");
  }
	  
  console.log(brea);
  */
	 
  $ionicHistory.nextViewOptions({
			disableBack: true
		});
  
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams,$location, $rootScope, $ionicHistory) {
	
	document.getElementById("breadcrumb").innerHTML = "";;
	$ionicHistory.nextViewOptions({
			disableBack: true
		});
	
	 var str=$location.path().slice(5);
	 var state=str.split("/");
	 
	 console.log(state);
	 var breadcrumbs=[];
	 breadcrumbs.push("#/app/"+state[0]);
	 breadcrumbs.push("#/app/"+state[0]+"/"+state[1]);
	 console.log(breadcrumbs);
	 //var.breadcrumbs.push(state[0]);
	 //str='';
	 for(var i=0;i<state.length;i++)
	 {
		//var.breadcrumbs+=state[i];
		//var.breadcrumbs+=">";
		var a = document.createElement('a');
		var linkText = document.createTextNode(state[i]+">");
		var span = document.createElement("span");
		span.innerHTML = "&nbsp;"; 
		document.getElementById("breadcrumb").appendChild(span);
		a.appendChild(linkText);
//a.title = "my title text";
a.href = breadcrumbs[i];
//var p = document.createElement('p');
//p.innerHTML=">";
document.getElementById("breadcrumb").appendChild(a);
//document.getElementById("breadcrumb").append(p);
	 }
		
	 //console.log($rootScope.breadcrumbs);
	 
	 //document.getElementById("breadcrumb").innerHTML=$rootScope.breadcrumbs;
	 
	 /*var brea='0';
	 //brea.length=0;
  for(var i=0;i<$rootScope.breadcrumbs.length;i++)
  {
	  brea.concat($rootScope.breadcrumbs[i].toString());
	  brea.concat(">");
  }
	  
  console.log(brea);
  */
	 
	 
});
