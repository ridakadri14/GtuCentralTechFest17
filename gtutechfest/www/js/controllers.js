angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $rootScope) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the register modal
  $scope.register=function(){
	  window.open('http://techfest.gtu.ac.in/register/','_blank');
  }
  
})

.controller('TechEventsCtrl', function($scope, $http, $stateParams, $rootScope, $location, $ionicHistory, breadCrumbsService,disableBackService) {

	
	$scope.sections = [
    { title: 'Robotics', id: 1 },
    { title: 'Techno-Electra', id: 2 },
    { title: 'Mekkato', id: 3 },
    { title: 'C-Villa', id: 4 },
    { title: 'Chemetrix', id: 5 },
	{ title: 'Envirotech', id: 6 },
	{ title: 'Softmania', id: 7 },
	{ title: 'Textile', id: 8 },
	{ title: 'Management', id: 9 },
	{ title: 'Bioplast', id: 10 },
	{ title: 'Pharmachrome', id: 11 }
  ];
  $scope.getSectionTitle=function(title)
  {
	$rootScope.sectionTitle=title;	
	$http.get("http://portal.gtu.ac.in/api/mobile/eventSection/"+title).then(function(response){
		$rootScope.events=response.data;
	},function(err){
		alert(JSON.stringify(err));
	});
  };
  
  breadCrumbsService.showBreadCrumbs();
  disableBackService.disableBack();
  
})

.controller('EventsCtrl', function($scope, $stateParams, $http, $location, $ionicHistory, $rootScope, breadCrumbsService,disableBackService) {
	
	/*$scope.events = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];*/
  
  $scope.getId=function(eventId)
  {
	  $rootScope.id=eventId;
	  $http.get("http://portal.gtu.ac.in/api/mobile/getSingleEvent/"+eventId).then(function(response){
		//$rootScope.event=JSON.stringify(response.data);
		$rootScope.$broadcast("SendEventData",response.data);
		//console.log(JSON.stringify($rootScope.event.rules));
	  },function(err){
		alert(JSON.stringify(err));
	  });
  }
  
  breadCrumbsService.showBreadCrumbs();
  disableBackService.disableBack();
  
})

.controller('EventCtrl', function($scope, $http, $stateParams, $location, $ionicLoading,$ionicHistory, $rootScope, breadCrumbsService,disableBackService) {
	
	$ionicLoading.show({
			  template: 'Loading...'
	});
	
	$scope.register=function(){
		window.open('http://techfest.gtu.ac.in/register/','_blank');
	} 
	 
	breadCrumbsService.showBreadCrumbs();
	 
	disableBackService.disableBack();
		
	$rootScope.$on('SendEventData',function(event,data){
		//console.log("DATA IN BROADCAST",data);
		$ionicLoading.hide();
		$scope.event =data;
		$scope.items=[$scope.event.rules, $scope.event.specification, $scope.event.judging_criteria, $scope.event.attachments];
		$scope.names=['Rules','Specification','Judging Criteria','Attachments'];
		
		$scope.groups = [];
    for (var i=0; i<4; i++) {
	 $scope.groups[i] = {
		name: $scope.names[i],
		items:$scope.items[i]
	 };
	}

	});
	//console.log($rootScope.event);
	
	
    
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
    { title: 'Armageddon', id: 1 },
    { title: 'Indiqa', id: 2 },
    { title: 'Open General Quiz', id: 3 },
    { title: 'Bazinga (M.E.L.A Quiz)', id: 4 }
    
  ];
  
  $scope.getId=function(eventId)
  {
	  $rootScope.id=eventId-1;
  }
  
  breadCrumbsService.showBreadCrumbs();
  disableBackService.disableBack();
  
})

.controller('QuizCtrl', function($scope, $http, $stateParams, $ionicLoading, $location, $ionicHistory, $rootScope, breadCrumbsService,disableBackService) {
	
	$ionicLoading.show({
			  template: 'Loading...'
	});
  breadCrumbsService.showBreadCrumbs();
  disableBackService.disableBack();
  
  //json
	
	$http.get('http://portal.gtu.ac.in/api/mobile/getSingleEvent/58c26ab16448746f433c1b10')
        .then(function(response){
			$ionicLoading.hide();
			//var id=$rootScope.id;
           $scope.event=response.data;

			$scope.items=[$scope.event['rules'], $scope.event['specification'], $scope.event['judging_criteria'], $scope.event['attachments']];
		   
		   $scope.names=['Rules','Specification','Judging Criteria','Attachments'];
		   $scope.groups = [];
		   for (var i=0; i<4; i++) {
			$scope.groups[i] = {
				name: $scope.names[i],
				items:$scope.items[i]
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
    { title: 'Machine Learning and AI', id: 1 },
    { title: 'Persistence of Vision', id: 2 },
    { title: 'Virtual Reality Game Development', id: 3 },
    { title: 'Bluetooth Robotics and IOT', id: 4 },
    { title: 'Digital Marketing', id: 5 },
    { title: 'REVIT', id: 6 }
  ];
  
  $scope.getId=function(eventId)
  {
	  $rootScope.id=eventId-1;
  }
  
  breadCrumbsService.showBreadCrumbs();
  disableBackService.disableBack();
  
})

.controller('WorkshopCtrl', function($scope, $http, $stateParams, $ionicLoading, $location, $ionicHistory, $rootScope, breadCrumbsService,disableBackService) {
	
	$ionicLoading.show({
			  template: 'Loading...'
	})
	
  breadCrumbsService.showBreadCrumbs();
  disableBackService.disableBack();
  
  //json
	
	$http.get('http://portal.gtu.ac.in/api/mobile/getSingleEvent/58c26ab16448746f433c1b10')
        .then(function(response){
			$ionicLoading.hide();
			//var id=$rootScope.id;
           $scope.event=response.data;

			$scope.items=[$scope.event['rules'], $scope.event['specification'], $scope.event['judging_criteria'], $scope.event['attachments']];
		   
		   $scope.names=['Rules','Specification','Judging Criteria','Attachments'];
		   $scope.groups = [];
		   for (var i=0; i<4; i++) {
			$scope.groups[i] = {
				name: $scope.names[i],
				items:$scope.items[i]
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

.controller('StartupSummitsCtrl', function($scope, $stateParams, $location, $ionicHistory, $rootScope, breadCrumbsService,disableBackService) {
	
	$scope.events = [
    { title: 'Pichbate', id: 1 },
    { title: 'HackIt', id: 2 },
    { title: 'Entraepod', id: 3 }
  ];
  
  $scope.getId=function(eventId)
  {
	  $rootScope.id=eventId-1;
  }
  
  breadCrumbsService.showBreadCrumbs();
  disableBackService.disableBack();
  
})

.controller('StartupSummitCtrl', function($scope, $stateParams, $ionicLoading, $http, $location, $ionicHistory, $rootScope, breadCrumbsService,disableBackService) {
	
	$ionicLoading.show({
			  template: 'Loading...'
	})
	
  breadCrumbsService.showBreadCrumbs();
  disableBackService.disableBack();
  
  //json
	
	$http.get('http://portal.gtu.ac.in/api/mobile/getSingleEvent/58c26ab16448746f433c1b10')
        .then(function(response){
			$ionicLoading.hide();
			//var id=$rootScope.id;
           $scope.event=response.data;

			$scope.items=[$scope.event['rules'], $scope.event['specification'], $scope.event['judging_criteria'], $scope.event['attachments']];
		   
		   $scope.names=['Rules','Judging Criteria'];
		   $scope.groups = [];
		   for (var i=0; i<2; i++) {
			$scope.groups[i] = {
				name: $scope.names[i],
				items:$scope.items[i]
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

.controller('ContactUsCtrl', function($scope, $stateParams, $location, $ionicHistory,$ionicLoading, $rootScope, $cordovaGeolocation, breadCrumbsService, disableBackService) {
	
	//services
	
	breadCrumbsService.showBreadCrumbs();
	disableBackService.disableBack();
	
	//services			 
			$ionicLoading.show({
			  template: 'Loading...'
			  
			})
	
	var options = {timeout: 10000, enableHighAccuracy: true};
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
	  
	  
	  $ionicLoading.hide()
 
   
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
                      '<p style="font-family:courier">Mobile No. +91-7016086289<br>Mobile No. 9425565525<br>Email:gtutechfest@gtu.edu.in</p>'+
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

.controller('AboutUsCtrl', function(breadCrumbsService,disableBackService) {
	
	breadCrumbsService.showBreadCrumbs();
  disableBackService.disableBack();
	
	
	
  
});

