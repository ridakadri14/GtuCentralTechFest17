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
	  $rootScope.eventId=eventId;
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
	
	var event=$location.path().slice(28);
	
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
    }
	
	//share
	
	
	
})

.controller('QuizzesCtrl', function($scope, $stateParams, $location, $ionicHistory, $rootScope, breadCrumbsService,disableBackService) {
	
	$scope.quizzes = [
    { title: 'Armageddon', id: 1, master:'J.Ramanand',des: 'J.Ramanand from thinq2win is the youngest winner of BBC Mastermind India. He has conducted over 100 quizzes all over India at colleges like IIT-B, IIT-M, Nihilanth at IIMs A, B, C, L and such. He appeared as an expert panelist on KBC and also runs the daily blog Infinite Zounds.' },
    { title: 'Indiqa', id: 2,master:'VIKRAM JOSHI',des: 'Vikram Joshi is the leading stalwart in the Indian quizzing circuit. He is the 2014 world quizzing champion (WQC), first "Indian" to do so. He has conducted multiple quizzes all over India at colleges ranging from IITs, NITs to IIMs(Nihilanth). He also appeared on KBC as an expert panelist. He is the official QM for Indiqa, The India Quiz. You cannot afford want to miss this!' },
    { title: 'Open General Quiz', id: 3 ,master:'MJ. CHANDRAKANT NAIR',des: 'Captain as he is fondly referred to by people all over the country who have had the fortune of attending his quizzes or meeting him, Chandrakand Nair is an MBBS Graduate from the Armed Forces Medical College, Pune, and, has served in the Indian Army for 7 years (2006-2013) as a doctor in various counterinsurgency, high altitude and peace locations. He has been a multiple times city winner at major quizzes such as Landmark, MahaQuizzer, Asiasweep, Askqance, Megawhats and such. But what makes him a universally loved and venerated '},
    { title: 'Bazinga (M.E.L.A Quiz)', id: 4,master:'Kushan Patel',des: 'MELA Quiz basically deals with anything and everything related to Music, Entertainment, Literature and Arts. The quiz covers topics ranging from national to international front..Kushan Patel is a household name in the Gujarat Quizzing Circuit and also the founder of Ahmedabad Quiz Club. He is the national runners up of TATA Crucible Corporate Quiz-2016 and multiple times national finalist at the same quiz. Apart from being a fabulous quizzer, he is a prolific Quizmaster and ' }
    
  ];
  
  $scope.getQuiz=function(quizTitle,master,des)
  {
	  $rootScope.quizTitle=quizTitle;
	  $rootScope.quizMaster=master;
	  $rootScope.quizDescription=des;
	  
  }
  
  breadCrumbsService.showBreadCrumbs();
  disableBackService.disableBack();
  
})

.controller('QuizCtrl', function($scope, $http, $stateParams, $ionicLoading, $location, $ionicHistory, $rootScope, breadCrumbsService,disableBackService) {
	
	
  breadCrumbsService.showBreadCrumbs();
  disableBackService.disableBack();
  
 
  
  
  //json
	
	/*$http.get('http://portal.gtu.ac.in/api/mobile/getSingleEvent/58c26ab16448746f433c1b10')
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
  };*/
	
	//accordian
  
  //share
	
	var event=$location.path().slice(13);
	//alert(event);
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
    }
	
	//share
	
	
	
	
  
})

.controller('WorkshopsCtrl', function($scope, $stateParams, $location, $ionicHistory, $rootScope, breadCrumbsService,disableBackService) {
	
	$scope.workshops = [
    { title: 'Machine Learning and AI', des:'This introductory course gives an overview of many concepts, techniques, and algorithms in machine learning, beginning with topics such as classification and linear regression and ending up with more recent topics such as working with neural network, network training and adaptive training etc. The course will give the student the basic ideas and intuition behind modern machine learning & AI methods as well as a bit more formal understanding of how, why, and when they work. The underlying theme in the course is statistical inference as it provides the foundation for most of the methods covered.' },
    { title: 'Persistence of Vision', des:'When we see images in quick succession, it creates an optical illusion in our brain allowing us to detect motion. This effect known as Persistence of Vision (POV) can be used for some interesting real world applications. In this course, you will develop a POV based LED display project using Arduino. The display when rotated at a certain high speed, will magically show letters that are pre-programmed. To achieve this, the flashing of LEDs is synchronized with the rotation of the display using Arduino programming techniques. By building this project, you will practically learn about Arduino programming, working of dynamic LED displays at different locations like Railway Stations, Bus Stands, etc. and DC motors.'},
    { title: 'Virtual Reality Game Development',des:"The Complete Virtual Reality Game Development Course is the world's most comprehensive course on virtual reality game development with Unity 3D. Virtual Reality is a computer generated real life sensory experience that a person can interact with using input devices such as headsets or goggles. In recent times, games that make use of virtual reality are becoming increasingly popular among people who love high-quality graphics and animations. Virtual Reality developers are knowledgeable of the various visualization techniques and thrill on the challenge of applying the latest game development technologies to create appealing virtual reality games." },
    { title: 'Bluetooth Robotics and IOT',des:'This is a Workshop which is best suited to beginners who are taking their first step towards Automation and Robotics. They will be learning the emerging technologies in the world of microcontroller coding and specifications Arduino Controller. This two day workshop will cover various practical activities along with theoretical concepts covered throughout the sessions. Practical activities will be performed on specially designed kits, teaching them how the kits are assembled and to use them too. Attending this workshop will drive your instincts to deliver in the domain of robotics.' },
    { title: 'Digital Marketing', des:'Digital marketing is an umbrella term for the marketing of products or services using digital technologies, mainly on the Internet, but also including mobile phones, display advertising, and any other digital medium. Digital marketing techniques such as search engine optimization (SEO), search engine marketing (SEM), content marketing, influencer marketing, content automation, campaign marketing, data-driven marketing and e-commerce marketing, social media marketing, social media optimization, e-mail direct marketing, display advertising, e–books, optical disks and games, are becoming more and more common in our advancing technology.' },
    { title: 'REVIT', des:"Autodesk Revit is building information modeling software for architects, structural engineers, MEP engineers, designers and contractors developed by Autodesk. It allows users to design a building and structure and its components in 3D, annotate the model with 2D drafting elements, and access building information from the building model's database. Revit is 4D BIM capable with tools to plan and track various stages in the building's lifecycle, from concept to construction and later demolition. Revit can be used as a very powerful collaboration tool between different disciplines in the building design sphere. The different disciplines that use Revit approach the program from unique perspectives. Each of these perspectives is focused on completing that discipline's task." }
  ];
  
  $scope.getWorkshop=function(title,des)
	{
	  $rootScope.workshopTitle=title;
	  $rootScope.workshopDescription=des; 
	  
	}
  
  breadCrumbsService.showBreadCrumbs();
  disableBackService.disableBack();
  
})

.controller('WorkshopCtrl', function($scope, $http, $stateParams, $ionicLoading, $location, $ionicHistory, $rootScope, breadCrumbsService,disableBackService) {
	
	/*$ionicLoading.show({
			  template: 'Loading...'
	})*/
	
  breadCrumbsService.showBreadCrumbs();
  disableBackService.disableBack();
  
  //json
	
	/*$http.get('http://portal.gtu.ac.in/api/mobile/getSingleEvent/58c26ab16448746f433c1b10')
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
  };*/
	
	//accordian
  
  
  
  
  
  //share
	
	var event=$location.path().slice(15);
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
    }
	
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
	
	var event=$location.path().slice(15);
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
    }
	
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
	  
	  
	  $ionicLoading.hide();
 
   
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

		   var content = '<div style="float:left;margin-left:2px;">' +
                    '<div><h6>Ld College Of Engineering</h6>'+
                      '<p style="font-family:courier">University Road,<br/> Ahmedabad-380015</p></div>'+
                      '<div><h6>Contacts</h6></div>' +
                      '<p style="font-family:courier">Mobile No. +91-7016086289<br>Mobile No. +91-7567495959<br>Email:gtutechfest@gtu.edu.in</p>'+
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
		 $ionicLoading.hide();
    alert("To continue, let your device turn on location and wifi");
	
	}
  );
  
  
  
  
})

.controller('AboutUsCtrl', function(breadCrumbsService,disableBackService) {
	
	breadCrumbsService.showBreadCrumbs();
  disableBackService.disableBack();
	
	
	
  
});

