angular.module('blocJams').factory('SongPlayer', function ($window) {  
  var currentAlbum = null;
  var currentlyPlayingSongNumber = null;
  var currentSongFromAlbum = null;
  var currentSoundFile = {
    stop: function() {}
  };
  var currentVolume = 80;
  
  var isCurrentSongLoaded = function(target) {
    return (currentAlbum.songs[target] === currentSongFromAlbum);
  };
  
  return {
    setCurrentAlbum(album) {
      currentAlbum = album;
      console.log(currentAlbum);
    },
    getCurrentAlbum() {
      return currentAlbum;
    },
    setSong(target) {
      currentSoundFile.stop();

      //get current song
      //play current song using buzz
      currentlyPlayingSongNumber = parseInt(target + 1);
      currentSongFromAlbum = currentAlbum.songs[target];
      console.log(currentSongFromAlbum);
      currentSoundFile = new $window.buzz.sound(currentSongFromAlbum.audioUrl, {
        formats: ['mp3'],
        preload: true
      });
    }//,
//    playSong(target) {
//      isCurrentSongLoaded(target) ? currentSong.togglePlay() : function (target) {this.setSong(target); currentSoundFile.play()}();;
////      currentSoundFile.play();
//    }
  }
});




//var setSong = function (target) {
//
//   if (currentSoundFile) {
//     currentSoundFile.stop();
//   }
//
//   currentlyPlayingSongNumber = parseInt(target + 1);
//   currentSongFromAlbum = currentAlbum.songs[target];
//   currentSoundFile = new buzz.sound(currentSongFromAlbum.audioUrl, {
//
//     formats: ['mp3'],
//     preload: true
//   });
// }