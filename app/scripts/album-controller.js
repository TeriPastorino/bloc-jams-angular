angular.module('blocJams').controller('AlbumController', function($scope, FixtureService){
  $scope.currentAlbum = FixtureService.getAlbum();
});