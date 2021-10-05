//Global variables
const media = document.querySelector('video') // this just gets the video element
// let playbackSpeed = 1 // Global variable to hold the playbackSpeed
//
// function getModifier() {
//   let valueElement = O("valueText")
//   // get value of input element
//   let valueText = valueElement.value
//   // casting to a number - even though we set our input element to be a number, it still comes out as a string in JavaScript
//   let value = Number(valueText)
//   return value
// }
//
//     /* This function reads the value from the valueText element
//        and adds it to the global playback speed value */
// function addToModifier() {
//   let value = getModifier()
//   playbackSpeed = playbackSpeed + value // update the global playback speed value
//   //or we can shorthand this to an assignment operator
//   //playbackSpeed += value
//   // Set the playback speed
//   media.playbackRate = playbackSpeed
//   // Display the updated playback speed
//   let resultElement = O("playbackSpeed")
//   let resultString = "Playback speed is " + playbackSpeed
//   resultElement.innerText = resultString
// }
// function subtractModifier() {
//   let value = getModifier()
//   playbackSpeed = playbackSpeed - value // update the global playback speed value
//   //or we can shorthand this
//   //playbackSpeed -= value
//   // Set the playback speed
//   media.playbackRate = playbackSpeed
//   // Display the updated playback Speed
//   let resultElement = O("playbackSpeed")
//   let resultString = "Playback speed is " + playbackSpeed
//   resultElement.innerText = resultString
// }
//
//   /* This function clears the modifier value and updates the display
//   */
// function zeroModifier() {
//   playbackSpeed = 1; // set the global modifier to 0
//   // Set the playback speed
//   media.playbackRate = playbackSpeed
//
//   // update the display
//   let resultElement = O("playbackSpeed")
//   resultElement.innerText = "Playback speed is 1"
// }
// I got the stop function fromhttps://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs
const stop = document.querySelector('.stop');
stop.addEventListener('click', stopMedia);
media.addEventListener('ended', stopMedia);


function stopMedia() {
  media.pause();
  media.currentTime = 0;
  play.setAttribute('data-icon','P');
}

function playPauseMedia() {
  if(media.paused) {
    media.play();
  } else {
    media.pause();
  }
}

// function goWackyMode() {
//   let input = O('wackyMode')
//   let answer = input.value
//   if (answer.toLowerCase() == 'yes') {
//     media.playbackRate = 1.5
//   } else if (answer.toLowerCase() == 'no') {
//     media.playbackRate = 1
//   } else {
//     let wrongAnswer = O('wronganswer')
//     wrongAnswer.innerText = "I'm gonna need a yes or no answer, pal"
//   }
//   input.value = ''
// }

function selectVideo() {
  let selectVideo = O('video-select')
  let preference = selectVideo.value

  switch(preference) {
    case ("funny"):
      media.src = "videos/snl.mp4"
      break;
    case ("pets"):
      media.src = "videos/doggycrime.mp4"
      break;
    case ("jake"):
        media.src = "videos/adv.mp4"
        break;
    case ("mystery"):
          media.src = "videos/mega_dolphin.mp4"
          break;
    default:
      break;
  }
}
// fuction selectVideo2(){
// let selectVideo2 = O('value-text')
//
// switch(preference) {
//   case ("1"):
//     media.src = "videos/snl.mp4"
//     break;
//   case ("2"):
//     media.src = "videos/doggycrime.mp4"
//     break;
//   case ("3"):
//       media.src = "videos/adv.mp4"
//       break;
//   case ("4"):
//         media.src = "videos/mega_dolphin.mp4"
//         break;
//   default:
//     break;
// }
//
// }
