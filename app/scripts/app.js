
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
//    controller: 'Album.controller',
    templateUrl: '/templates/album.html'
  });
  
  $stateProvider.state('collection', {
    url: '/collection',
//    controller: 'Collection.controller',
    templateUrl: '/templates/collection.html'
  });
  
  $stateProvider.state('landing', {
    url: '/landing',
//    controller: 'Landing.controller',
    templateUrl: '/templates/landing.html'
  });
  
});


//wrap in closure?
//angular.module('blocJams').controller()
angular.module('blocJams').controller('LandingController', function($scope){
  $scope.tagline = "Turn the music up!!";
});
 
  
angular.module('blocJams').controller('AlbumController', function($scope){
  $scope.??
});
  
  
  angular.module('blocJams').controller('Collection.controller', ['$scope', function ($scope) {
    var albumsArray = [];
    for (var i = 0; i < 8; i++) {
       what here? (albumPicasso);
    
}]);


