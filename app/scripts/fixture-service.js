//Example Albums

angular.module('blocJams').factory('FixtureService', function() {
  var albumPicasso = {
  name: 'The Colors',
  artist: 'Pablo Picasso',
  label: 'Cubism',
  year: '1881',
  albumArtUrl: 'assets/images/album_covers/01.png',
  songs: [
    { name: 'Blue', length: '161.71', audioUrl: '/assets/music/blue' },
        { name: 'Green', length: '103.96', audioUrl: '/assets/music/green' },
        { name: 'Red', length: '268.45', audioUrl: '/assets/music/red' },
        { name: 'Pink', length: '153.14', audioUrl: '/assets/music/pink' },
        { name: 'Magenta', length: '374.22', audioUrl: '/assets/music/magenta' }  
  ]
};

var albumMarconi = {
   name: 'The Telephone',
   artist: 'Guglielmo Marconi',
   label: 'EM',
   year: '1909',
   albumArtUrl: 'assets/images/album_covers/20.png',
   songs: [
     { name: 'Hello, Operator?', length: '1:01' },
     { name: 'Ring, ring, ring', length: '5:01' },
     { name: 'Fits in your pocket', length: '3:21'},
     { name: 'Can you hear me now?', length: '3:14' },
     { name: 'Wrong phone number', length: '2:15'}
 ]
};

var albumTolkien = {
  name: 'The Hobbit',
  author: 'J.R.R. Tolkien',
  label: 'Mariner',
  year: '1937',
  albumArtUrl: 'assets/images/album_covers/09.png',
  songs: [
    { name: 'A short rest', length: '2:01' },
    { name: 'Over Hill and Under Hill', length: '3:01' },
    { name: 'Flies and Spiders', length: '3:44'},
    { name: 'The Return Journey', length: '5:14' },
    { name: 'Not at Home', length: '2:45'} 
  ]
};
  return {
    getAlbum: function () {
      return albumPicasso;
    },
    getCollection: function (numberOfAlbums) {
      var albums = [];
      for (var i = 0; i < numberOfAlbums; i++) {
        albums.push(angular.copy(albumPicasso));
      }
      return albums;
    }
  };
});

