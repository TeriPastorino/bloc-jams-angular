
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




