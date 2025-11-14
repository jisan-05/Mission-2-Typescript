//* oop - abstraction

// idea 
// implementation pore korbo

/**
 * 1. interface 
 * 2. abstract class
 * 
 */


// idea 
// interface MediaPlayer {
//   play():void;
//   pause():void;
//   stop():void;
// }

// // implementation
// class MusicPlayer implements MediaPlayer{
//   play(){
//     console.log('Playing Music');
//   }
//   pause(){
//     console.log('Music Paused');
//   }
//   stop(){
//     console.log('Music Stop ...');
//   }
// }

// const MezbaPlayer = new MusicPlayer()  // instance
// MezbaPlayer.play();


abstract class MediaPlayer{
  abstract play():void;
  abstract pause():void;
  abstract stop():void;
}

// implementation 
class MezbaPlayer extends MediaPlayer{
  play(){
    console.log('Playing Music');
  }
  pause(){
    console.log('pause Music');
  }
  stop(){
    console.log('stop Music');
  }
}

const mezbaPlayer1 = new MezbaPlayer()

mezbaPlayer1.play()