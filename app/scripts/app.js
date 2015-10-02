//for refactoring later
//blocJams = myAppModule in angular project instructions
//blocJams = myApp

  
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
//    controller: 'Album.controller',
    templateUrl: '/templates/collection.html'
  });
  
  $stateProvider.state('landing', {
    url: '/landing',
//    controller: 'Album.controller',
    templateUrl: '/templates/landing.html'
  });
  
});

                            
//angular.module('blocJams').controller()