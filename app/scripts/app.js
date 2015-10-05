
//empty array used to inject dependencies (external modules)
angular.module('blocJams', ['ui.router']);
                                           
angular.module('blocJams').config(function($stateProvider, $locationProvider){
//disable #! default in path
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  
  $stateProvider.state('album', {
    url: '/album',
    controller: 'AlbumController',
    templateUrl: '/templates/album.html'
  });
  
  $stateProvider.state('collection', {
    url: '/collection',
    controller: 'CollectionController',
    templateUrl: '/templates/collection.html'
  });
  
  $stateProvider.state('landing', {
    url: '/',
    controller: 'LandingController',
    templateUrl: '/templates/landing.html'
  });
  
});


//wrap in closure?
//angular.module('blocJams').controller()
angular.module('blocJams').controller('LandingController', function($scope){
  $scope.tagline = "Turn the music up!!";
});
 
 //add fixtures as a service 
angular.module('blocJams').controller('AlbumController', function($scope, FixtureService){
  $scope.currentAlbum = FixtureService.getAlbum();
});
  
 //albums are array...setup? 
  //use angular.
  //ng-repeat (view) alubms in collection
  angular.module('blocJams').controller('CollectionController', function ($scope, FixtureService) {
    $scope.albumArray = FixtureService.getCollection(30);
});




