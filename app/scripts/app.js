//for refactoring later
//blocJams = myAppModule in angular project instructions
//blocJams = myApp

//empty array used to inject dependencies (external modules)
var myAppModule = angular.module('myApp', ['ui.router]);
                                           
myAppModule.config(function($stateProvider, $locationProvider){
//disable #! default in path
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  
  $stateProvider.state('album', {
    url: '/album',
    controller: 'Album.controller',
    templateUrl: '/templates/album.html'
  });
  
});