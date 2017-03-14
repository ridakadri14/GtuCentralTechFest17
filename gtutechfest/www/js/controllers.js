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
  
})

.controller('RegisterCtrl', function($scope,breadCrumbsService,disableBackService) {
	
	 	 
	$scope.sections=[{sectionId:1, sectionName:"computer"},{sectiond:2,sectionName:"IT"}];
	$scope.Events = [{EventId: 1,sectionId:1,EventName: "compevent1"},
					 {EventId: 2,sectionId:1,EventName: "compevent12"},
					 {EventId: 1,sectionId:2,EventName: "ITevent3"},
					 {EventId: 2,sectionId:2,EventName: "ITevent3"}];
	$scope.members=[{memberNo:1},{memberNo:2},{memberNo:3},{memberNo:4}];
		
	$scope.loadEvents=function(id)
	{
		console.log(id);
		$scope.EventList=[];
		angular.forEach($scope.Events,function(Event)
		{
			if(Event.sectionId==id)
			{
				$scope.EventList.push(Event);
				console.log(Event);
			}
		})
			
	};
	 
	
	var i=0;
	$scope.teamLeader= {name: "",college:"name",branch: "",enrollmentNO: "",mobileNo:"",email: ""};
		
	$scope.others=[]

	$scope.addMember = function(id) {
		$scope.memberNo=(id.memberNo)-1;
		console.log($scope.memberNo);
		for(var i=0;i<$scope.memberNo;i++)
		{
			$scope.others.push($scope.teamLeader);
			console.log($scope.others[i]);
		}
	}
	
	  

		breadCrumbsService.showBreadCrumbs();
		disableBackService.disableBack();
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
	
	//json
	
	$http.get('js/gtu_central_techfest_event.json')
        .then(function(response){
			//var id=$rootScope.id;
           $scope.event=response.data[0];
		   
		   $scope.names=['Rules','Specification','Judging Criteria','Attachments'];
		   $scope.groups = [];
		   for (var i=0; i<4; i++) {
			$scope.groups[i] = {
				name: $scope.names[i],
				items: $scope.event['rules']
			};
   
		   }

        },function(error){
          alert(JSON.stringify(error));
      });
	
	//json
	
	//accordian
	
	$scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
	
	//accordian
	
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
  
  //json
	
	$http.get('js/gtu_central_techfest_event.json')
        .then(function(response){
			//var id=$rootScope.id;
           $scope.event=response.data[0];
		   
		   $scope.names=['Rules','Specification','Judging Criteria','Attachments'];
		   $scope.groups = [];
		   for (var i=0; i<4; i++) {
			$scope.groups[i] = {
				name: $scope.names[i],
				items: $scope.event['rules']
			};
   
		   }

        },function(error){
          alert(JSON.stringify(error));
      });
	
	//json
	
	//accordian
	
	$scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
	
	//accordian
  
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
  
  //json
	
	$http.get('js/gtu_central_techfest_event.json')
        .then(function(response){
			//var id=$rootScope.id;
           $scope.event=response.data[0];
		   
		   $scope.names=['Rules','Specification','Judging Criteria','Attachments'];
		   $scope.groups = [];
		   for (var i=0; i<4; i++) {
			$scope.groups[i] = {
				name: $scope.names[i],
				items: $scope.event['rules']
			};
   
		   }

        },function(error){
          alert(JSON.stringify(error));
      });
	
	//json
	
	//accordian
	
	$scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
	
	//accordian
  
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
  
})

.controller('ContactUsCtrl', function($scope, $stateParams, $location, $ionicHistory, $rootScope, $cordovaGeolocation, breadCrumbsService, disableBackService) {
	
	//services
	
	breadCrumbsService.showBreadCrumbs();
	disableBackService.disableBack();
	
	//services
	
	var options = {timeout: 10000, enableHighAccuracy: true};
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
   
    var latLng = new google.maps.LatLng(23.0338, 72.5466);
	
	
    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
	
	 google.maps.event.addListenerOnce($scope.map, 'idle', function(){
 
		  var marker = new google.maps.Marker({
			  map: $scope.map,
			  animation: google.maps.Animation.DROP,
			  position: latLng,
			  title: 'LDCE'
		  });   

		   var content = '<div style="float:left">' +
                    '<div><h6>Ld College Of Engineering</h6>'+
                      '<p style="font-family:courier">University Road,<br/> Ahmedabad-380015</p></div>'+
                      '<div><h6>Contacts</h6></div>' +
                      '<p style="font-family:courier">Mobile No. 9425565525<br>Mobile No. 9425565525<br>e-mail: gtucentraltechfest@gmail.com</p>'+
                    '</div>' +
                  '</div>';

		 
		  var infoWindow = new google.maps.InfoWindow({
			  content: content
		  });
		  
		   infoWindow.open($scope.map, marker);
		 
		  google.maps.event.addListener(marker, 'click', function () {
			  infoWindow.open($scope.map, marker);
			 
		  });
		 
		});
 
	
 
  }, function(error){
    alert("To continue, let your device turn on location and wifi");
	
	
	
  });
  
  
})

.controller('AboutUsCtrl', function($scope, $rootScope, $http) {
	
	
	//json
	
	$http.get('js/gtu_central_techfest_event.json')
        .then(function(response){
			//var id=$rootScope.id;
           $scope.event=response.data[0];
		   
		   $scope.names=['Rules','Specification','Judging Criteria','Attachments'];
		   $scope.groups = [];
		   for (var i=0; i<4; i++) {
			$scope.groups[i] = {
				name: $scope.names[i],
				items: $scope.event['rules']
			};
   
		   }

        },function(error){
          alert(JSON.stringify(error));
      });
	
	//json
	
	 
	 //$scope.json=['rules','specification','judging_criteria','attachment'];
	 
  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  
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
