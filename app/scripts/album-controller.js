angular.module('blocJams').controller('AlbumController', function($scope, FixtureService, SongPlayer){
  
  SongPlayer.setCurrentAlbum(FixtureService.getAlbum());
  $scope.currentAlbum = SongPlayer.getCurrentAlbum();
  $scope.playSong = function(index) {
    SongPlayer.setSong(index);
    SongPlayer.playSong();
  }
});

//get current album